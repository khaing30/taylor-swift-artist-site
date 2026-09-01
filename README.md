# Taylor Swift — Artist Archive

Taylor Swiftの音楽、経歴、The Eras Tourの魅力を紹介する、学習課題用の非公式アーティストサイトです。

## 閲覧方法

Visual Studio Codeでプロジェクトフォルダを開き、`index.html`を右クリックして「Open with Live Server」を選択してください。

## ファイル構成

```text
Taylor-Swift-Project/
├── index.html       トップページ
├── tour.html        ツアー紹介
├── album.html       アルバム紹介
├── bio.html         経歴紹介
├── css/             スタイルシート
├── js/              ページの操作に必要なJavaScript
├── icons/           SNS・音楽サービスのアイコン
└── images/
    ├── home/
    ├── tour/
    ├── album/
    └── bio/
```

## デザインについて

- 見出しにはCormorant Garamond、本文とナビゲーションにはMontserratとNoto Sans JPを使用しています。
- 全ページでナビゲーション、文字組み、ボタンの形を統一しました。
- HOMEとBIOは落ち着いたプラム系、TOURとALBUMSはグリーン系を基調にしています。
- アルバム詳細ページでは、作品ごとのイメージに合わせて背景色やアクセントカラーが変わります。
- PC、タブレット、スマートフォンで読みやすくなるようにレスポンシブ対応を行っています。

## 主な機能

- HOMEのナビゲーションから各ページまたは各セクションへ移動できます。
- HOMEのアルバム一覧はボタンで追加作品を表示できます。
- TOURではEraを選択すると、写真、ロゴ、年代、リンク先が切り替わります。
- ALBUMSではURLの`album`パラメータに応じて作品情報を表示します。
  - 例：`album.html?album=red`
- 各アルバムページにはSpotify、YouTube、写真ギャラリー、前後の作品へのリンクがあります。
- モバイル画面ではハンバーガーメニューを使用できます。

## 使用した外部サービス・参考資料

- Spotify埋め込みプレイヤー
- Taylor Swift公式YouTubeチャンネルの動画
- Taylor Swift公式サイト
- GRAMMY公式サイト
- IFPI公式サイト

本サイトは授業課題として制作した非公式サイトです。Taylor Swift、TAS Rights Management、Spotify、YouTube、その他の参照先とは関係ありません。画像、映像、商標などの権利は各権利者に帰属します。
