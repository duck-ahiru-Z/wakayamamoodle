console.log("Moodle Auto Login 起動！");

const loginButton = document.querySelector(
  'a[href$="/login/index.php"]'
);

if (loginButton) {
  console.log("ログインボタンを発見！");
  loginButton.click();
} else {
  console.log("ログインボタンが見つかりません");
}
