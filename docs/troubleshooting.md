# 困ったときの対処法

スライド番号とエラー内容を確認し、次の順番で調べます。**わからなければ無理に先へ進まず、近くの人・講師に声をかけてください。**

## A. 拡張機能を読み込めない（p18–20）

- `manifest.json` が作業フォルダーの直下にあるか。二重フォルダー（`project/project/manifest.json`）になっていないか。
- 拡張子が `manifest.json.txt` になっていないか。
- JSONのカンマ・引用符・波括弧に誤りがないか。
- `chrome://extensions/` の拡張機能カードの「エラー」を開く。

## B. Consoleに出ない（p20）

- 拡張機能が有効か、更新ボタンを押したか。
- Moodleを再読み込みしたか。**Chromeの拡張機能管理画面のConsoleではなく、MoodleページのConsole**を見ているか。
- 指定URLは `https://moodle2026.wakayama-u.ac.jp/2026/` か。

## C. `querySelector()` が `null`（p27・50）

- 今いるのは**未ログインの画面**か。
- 実際のHTMLでリンクの `href` が一致するか、Elementsタブで確認。
- 大学IDログイン画面が `iframe` 内なら、Console左上のフレーム選択で対象フレームを選ぶ必要がある場合があります。

## D. 2画面目だけ動かない（p55・58・73）

スライドp55の判定対象は `/2026/login/index_form.html` です。しかし最初のリンク先は `/2026/login/index.php` なので、サイト構成によっては動かない可能性があります。実際の `location.pathname` と、リンクが表示されているフレームのURLを確認してください。

**学習用の切り分け**：p50のConsoleスニペットが動くか試し、次にp73のように2種類のパスを判定するコードと比較します。

## E. 何度再読み込みしても動かない（p73以降）

クリック記録が残っている可能性があります。MoodleのConsoleで次を実行します。

```js
sessionStorage.removeItem("moodle-first-clicked");
sessionStorage.removeItem("moodle-second-clicked");
```

**注意**：`sessionStorage` はオリジンとタブ・フレーム構成の影響を受けます。想定と違う場合はConsoleの実行対象フレームも確認します。

## F. ON/OFFが効かない（p90〜105）

- `manifest.json` に `"permissions": ["storage"]`、`action.default_popup` があるか。
- `popup.html` と `popup.js` は `manifest.json` と同じフォルダーにあるか。
- p90で拡張機能を更新したか。ON/OFF変更後はMoodleも再読み込みする。
- 途中状態の別のMoodle拡張機能が同時に有効になっていないか。

## G. デモや勉強会で注意すること

- 大学IDのパスワード、認証コード、セッションクッキーやトークンはGitHubに上げない。
- Microsoftの本人確認・多要素認証は自動化しない。
- これは教材なので、Moodle側のHTMLや認証仕様の変更により動かなくなることがあります。
- 大学・組織の情報システムに関する規程も守りましょう。
