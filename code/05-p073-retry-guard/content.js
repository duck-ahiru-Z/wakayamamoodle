console.log("Moodle Auto Login 起動！");
const path = window.location.pathname;

// クリック済みかどうかを保存する名前
const firstKey = "moodle-first-clicked";
const secondKey = "moodle-second-clicked";

// ① Moodleトップページ
if (path === "/2026/") {
  const loginButton = document.querySelector(
    'a[href$="/login/index.php"]'
  );
  if (!loginButton) {
    console.log("ログインボタンなし");
    // ログイン済みなどでボタンがない場合は記録を初期化
    sessionStorage.removeItem(firstKey);
    sessionStorage.removeItem(secondKey);
  } else if (sessionStorage.getItem(firstKey) !== "yes") {
    sessionStorage.setItem(firstKey, "yes");
    console.log("最初のログインボタンをクリック");
    loginButton.click();
  } else {
    console.log("最初のログイン操作は実行済み");
  }
// ② 大学IDログイン画面
} else if (
  path === "/2026/login/index.php" ||
  path === "/2026/login/index_form.html"
) {
  const universityButton = document.querySelector(
    'a[href$="/auth/oidc/"]'
  );
  if (!universityButton) {
    console.log("大学IDログインボタンが見つかりません");
  } else if (sessionStorage.getItem(secondKey) !== "yes") {
    sessionStorage.setItem(secondKey, "yes");
    console.log("大学IDログインボタンをクリック");
    universityButton.click();
  } else {
    console.log("大学IDログイン操作は実行済み");
  }
} else {
  console.log("自動ログインの対象外ページです");
}
