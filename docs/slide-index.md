# スライド番号対応表（全107ページ）

以下は最新版 **`moodle(1).pdf`** のPDFページ番号です。古い106ページ版とは1ページずれる箇所があります。

| 第 | スライド | 主な演習・見るページ | 対応コード・ゴール |
|---|---|---|---|
| 導入 | **1〜5** | 目的・完成デモ・事前準備 | 操作の流れを知る |
| 第1部 | **6〜21** | p9–10 フォルダー、p12 manifest、p16 content、p18–20 Chrome/Console | [`code/01-p020-first-extension`](../code/01-p020-first-extension/) |
| 第2部 | **22〜33** | p23 HTML、p26 検証、p27 取得、p29 click、p31 if、p33 復習 | [`snippets/`](../snippets/)（Consoleのみ） |
| 第3部 | **34〜46** | p36 自動クリック、p39 更新、p42 URL、p43 条件分岐、p45 デバッグ | [`p036`](../code/03-p036-auto-click/)、[`p043`](../code/03-p043-path-check/) |
| 第4部 | **47〜60** | p50–51 2画面目、p53 else if、p55 完成コード、p58 テスト | [`p055`](../code/04-p055-two-buttons/) |
| 第5部 | **61〜79** | p65–69 sessionStorage、p73 完成コード、p78 確認、p79 クイズ | [`p073`](../code/05-p073-retry-guard/) |
| 第6部 | **80〜107** | p85 popup.html、p90 manifest、p93 popup.js、p101–102 content.js、p106 復習 | [`p093`](../code/06-p093-popup-ready/)、[`p102`](../code/06-p102-complete/) |

## ファイルを変更するタイミング

| スライド | 参加者が操作するファイル | アクション |
|---|---|---|
| p12 | `manifest.json` | 新規作成 |
| p16 | `content.js` | 新規作成 |
| p27・29・31 | ChromeのConsole | コードを実行（ファイル変更なし） |
| p36 | `content.js` | 自動クリックに書き換え |
| p43 | `content.js` | URL条件を追加 |
| p50・51 | ChromeのConsole | 大学IDログインボタンを調査・クリック |
| p55 | `content.js` | 2画面分の処理を追加 |
| p65〜69 | ChromeのConsole | sessionStorageの演習 |
| p73 | `content.js` | 再実行防止を追加 |
| p85 | `popup.html` | 新規作成 |
| p90 | `manifest.json` | storage権限・popup設定を追加 |
| p93 | `popup.js` | 新規作成 |
| p101〜102 | `content.js` | 設定のオン・オフ対応 |

## スライドの最新版との整合性について

- **p55** はログイン画面のパスを `/2026/login/index_form.html` としている一方、最初のログインリンクは `/2026/login/index.php` です。第5部のp73では両方を判定します。p55の教材はスライドの説明内容に合わせています。実サイトではURL・フレーム構造を確認してください。
- **p90** の `all_frames: true` は対象URLに一致するフレームを実行対象にします。異なるドメイン上の認証画面でコードを動かすものではありません。
- **p101〜102** のサンプルはスライド掲載の実装例であり、認証成功判定や自動復旧を保証するものではありません。
