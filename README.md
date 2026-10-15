# Moodleの拡張機能を作ってみよう！

AppLii 勉強会用：Chrome拡張機能ハンズオンの**スライド対応コード集**です。

**スライドは最新版 `moodle(1).pdf`（107ページ）を基準**にしています。2日間で開催する想定ですが、進み具合に合わせて自由に区切れます。

> この教材は和歌山大学Moodleのログイン画面のボタン操作を学ぶための例です。大学IDのパスワードや多要素認証を取得・保存・自動突破しません。実サイトでの通し動作は未検証です。

## まず見るもの

- [参加者向け：手順書](docs/participant-guide.md) — 最初の準備から、各スライドでの作業・確認まで
- [スライド番号 → ソースコード早見表](docs/slide-index.md) — 迷ったらここ
- [困ったときの解決方法](docs/troubleshooting.md) — 読み込み・Console・ログイン・再試行
- [講師向け：2日間の進行メモ](docs/facilitator.md) — 進み具合に応じた区切り方

## スライド別の完成コード

| スライド | フォルダー | 何ができる？ |
|---|---|---|
| 12〜20 | [01-p020-first-extension](code/01-p020-first-extension/) | 最初の拡張機能を動かす |
| 27・29・31 | [snippets](snippets/) | ConsoleからHTMLを操作する（拡張機能の変更なし） |
| 36 | [03-p036-auto-click](code/03-p036-auto-click/) | 自動クリック |
| 43 | [03-p043-path-check](code/03-p043-path-check/) | URLによる処理の限定 |
| 55 | [04-p055-two-buttons](code/04-p055-two-buttons/) | 2つのボタンを自動クリック |
| 73 | [05-p073-retry-guard](code/05-p073-retry-guard/) | 再実行を制限 |
| 85・90・93 | [06-p093-popup-ready](code/06-p093-popup-ready/) | 設定画面を表示し保存 |
| 101〜102 | [06-p102-complete](code/06-p102-complete/) | 設定画面と自動ログインを連携 |

## 途中から復帰するには

1. [スライド索引](docs/slide-index.md)で、今映っているスライド番号を調べる。
2. その番号に対応する `code/` フォルダーを開く。
3. **自分が作ったフォルダーのファイルと見比べる**。つまずいたら、そのフォルダー内のファイルを自分の演習用フォルダーへコピーする。
4. `Ctrl + S` → `chrome://extensions/` で「更新」→ Moodleのページを再読み込みする。

**複数のステップの拡張機能を同時にONにしないこと。** ボタンが二重にクリックされる可能性があります。

## 初回セットアップ（Windows）

1. ChromeとVS Codeを準備する。
2. コマンドプロンプトで `mkdir wakayama-moodle-auto-login` → `cd wakayama-moodle-auto-login` → `code .` を実行。
3. スライド12・16を見ながら `manifest.json` と `content.js` を作る。
4. `chrome://extensions/` → デベロッパーモードON →「パッケージ化されていない拡張機能を読み込む」→ 作業用フォルダーを選択。
5. Moodleを開いて `F12` → Consoleで実行結果を確認する。

### GitHubで公開するとき

このZIPを展開して、**中身を新規GitHubリポジトリにアップロード**すれば、リンクを参加者に共有できます。個人アカウント情報・セッショントークン・ログイン済みHTMLは含めないでください。GitHub Pages等で公開する必要はありません。
