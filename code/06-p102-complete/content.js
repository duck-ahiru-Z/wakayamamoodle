async function autoLogin() {
  // ① 設定を読み込む
  const data = await chrome.storage.local.get({ enabled: true });

  // OFFなら何もしない
  if (!data.enabled) {
    console.log("自動ログインはOFFです");
    return;
  }

  console.log("Moodle Auto Login 起動！");
  const path = window.location.pathname;
  const firstKey = "moodle-first-clicked";
  const secondKey = "moodle-second-clicked";

  // ② Moodleトップページ
  if (path === "/2026/") {
    const loginButton = document.querySelector(
      'a[href$="/login/index.php"]'
    );

    // ボタンがなければ記録を初期化
    if (!loginButton) {
      sessionStorage.removeItem(firstKey);
      sessionStorage.removeItem(secondKey);
      return;
    }

    // 同じタブでクリック済みなら停止
    if (sessionStorage.getItem(firstKey) === "yes") {
      console.log("最初のログイン操作は実行済み");
      return;
    }

    sessionStorage.setItem(firstKey, "yes");
    loginButton.click();

  // ③ 大学IDログイン画面
  } else if (
    path === "/2026/login/index.php" ||
    path === "/2026/login/index_form.html"
  ) {
    const universityButton = document.querySelector(
      'a[href$="/auth/oidc/"]'
    );
    if (!universityButton) {
      console.log("大学IDログインボタンがありません");
      return;
    }
    if (sessionStorage.getItem(secondKey) === "yes") {
      console.log("大学IDログイン操作は実行済み");
      return;
    }
    sessionStorage.setItem(secondKey, "yes");
    universityButton.click();
  }
}

// 自動ログインを開始
autoLogin();
