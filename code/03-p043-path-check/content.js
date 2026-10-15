console.log("Moodle Auto Login 起動！");

// Moodleのトップページか確認
if (window.location.pathname === "/2026/") {
  // ログインボタンを探す
  const loginButton = document.querySelector(
    'a[href$="/login/index.php"]'
  );

  // ログインボタンがある場合だけクリック
  if (loginButton) {
    console.log("ログイン画面へ移動します");
    loginButton.click();
  } else {
    console.log("ログインボタンがありません");
  }
}
