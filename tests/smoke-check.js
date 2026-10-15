// 講師向けの簡易テスト。外部パッケージ不要: node tests/smoke-check.js
// 実際のMoodleやMicrosoft認証へのアクセス・操作は行いません。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

async function simulate(folder, { page = '/2026/', selectors = [], enabled = true, saved = new Map() } = {}) {
  const dir = path.join(__dirname, '..', 'code', folder);
  const source = fs.readFileSync(path.join(dir, 'content.js'), 'utf8');
  const logs = [], clicks = [];
  const ctx = {
    window: { location: { pathname: page, href: `https://moodle2026.wakayama-u.ac.jp${page}` } },
    document: {
      querySelector: (selector) => selectors.includes(selector)
        ? { click: () => clicks.push(selector) }
        : null,
    },
    console: { log: (...args) => logs.push(args.join(' ')) },
    sessionStorage: {
      getItem: key => saved.has(key) ? saved.get(key) : null,
      setItem: (key, value) => saved.set(key, String(value)),
      removeItem: key => saved.delete(key),
    },
    chrome: { storage: { local: { get: async defaults => ({ ...defaults, enabled }) } } },
  };
  vm.runInNewContext(source, ctx, { filename: `${folder}/content.js` });
  await new Promise(resolve => setImmediate(resolve));
  return { clicks, logs, saved };
}

(async () => {
  const first = 'a[href$="/login/index.php"]';
  const second = 'a[href$="/auth/oidc/"]';
  let r;
  r = await simulate('01-p020-first-extension');
  assert.match(r.logs[0], /Moodle拡張機能が動作/);
  r = await simulate('03-p036-auto-click', { selectors: [first] });
  assert.equal(r.clicks.length, 1);
  r = await simulate('03-p043-path-check', { page: '/2026/my/', selectors: [first] });
  assert.equal(r.clicks.length, 0);
  r = await simulate('04-p055-two-buttons', { page: '/2026/login/index_form.html', selectors: [second] });
  assert.equal(r.clicks.length, 1);
  const saved = new Map();
  r = await simulate('05-p073-retry-guard', { selectors: [first], saved });
  assert.equal(r.clicks.length, 1);
  r = await simulate('05-p073-retry-guard', { selectors: [first], saved });
  assert.equal(r.clicks.length, 0);
  r = await simulate('06-p102-complete', { selectors: [first], enabled: false });
  assert.equal(r.clicks.length, 0);
  r = await simulate('06-p102-complete', { selectors: [first], enabled: true });
  assert.equal(r.clicks.length, 1);
  r = await simulate('06-p102-complete', { page: '/2026/login/index.php', selectors: [second], enabled: true });
  assert.equal(r.clicks.length, 1);
  console.log('OK: 8 simulated content.js checks passed');
  console.log('Note: No real university login, iframe, or MFA behavior was tested.');
})().catch(error => { console.error(error); process.exitCode = 1; });
