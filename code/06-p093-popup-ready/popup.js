// HTMLの要素を取得
const checkbox = document.querySelector("#enabled");
const statusText = document.querySelector("#status");

// 設定状態を画面に表示する
function showStatus(enabled) {
  if (enabled) {
    statusText.textContent = "自動ログイン：ON";
  } else {
    statusText.textContent = "自動ログイン：OFF";
  }
}

// 保存されている設定を読み込む
async function loadSettings() {
  const data = await chrome.storage.local.get({ enabled: true });
  checkbox.checked = data.enabled;
  checkbox.disabled = false;
  showStatus(data.enabled);
}

// チェックボックスが変更されたとき
checkbox.addEventListener("change", async () => {
  const enabled = checkbox.checked;
  await chrome.storage.local.set({ enabled: enabled });
  showStatus(enabled);
});

// 最初に設定を読み込む
loadSettings();
