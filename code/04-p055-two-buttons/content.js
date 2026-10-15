console.log("Moodle Auto Login 起動！");

// 今開いているページのパスを取得
const path = window.location.pathname;

// ① Moodleのトップページ
if (path === "/2026/") {
  const loginButton = document.querySelector(
    'a[href$="/login/index.php"]'
  );
  if (loginButton) {
    console.log("ログイン画面へ移動します");
    loginButton.click();
  }
// ② 大学IDログイン画面
} else if (path === "/2026/login/index_form.html") {
  const universityButton = document.querySelector(
    'a[href$="/auth/oidc/"]'
  );
  if (universityButton) {
    console.log("大学ID認証へ移動します");
    universityButton.click();
  }
// ③ それ以外のページ
} else {
  console.log("自動クリックの対象外です");
}
