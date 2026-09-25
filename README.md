# egg4946 Portfolio

egg4946（久保山諒）のワンページポートフォリオです。ビルド不要の静的サイト（`index.html` / `styles.css` / `script.js`）です。

## 内容

- Polaris（HACK STAGE STAGE2 最優秀賞）：根拠をたどれる自己分析とES推敲の支援サービス
- はよ寝ろくん（KC3Hack 2026）：カメラ・マイクから疲労の兆候を捉え、夜更かしを抑えるアプリ
- WebClass Discord Notifier：WebClassの課題・締切を通知するDiscord Bot
- SEFIROT（SysHack）、Seven Rich Men、magnet-pals、NANDサイト、Shadowverse Voice Quiz

## 仕組み

- 作品データは `script.js` 冒頭の `works`（課題 → 発想 → 担当 → 技術 → 結果）、`techUses`（技術と用途）、`timeline`（年表）にまとまっています。
- 担当・成果は、GitHubのコミット・README・Contributorsで確認できたものだけを書いています。確認できていない項目は `verify: true` にすると「要確認」として表示され、ページ下部の一覧にも載ります。
- 各記述の `src` は `SRC` の出典キーです。Trace mode（`T` キー）で表示されます。

## 操作

- カードをクリック／タップ、または `1`〜`5` キーで作品のストーリーを開く
- ストーリー内は `←` `→`、スワイプ、ボタンで段階を進める。`Esc` で閉じる
- 「担当」ボタンでカードを裏返し、本人の担当範囲を表示
- `prefers-reduced-motion` のときは傾き・星の動き・瞬きなどの演出を止めます

## 公開方法

このフォルダの中身をGitHub Pages、Vercel、Netlifyなどで公開できます。

## Links

- GitHub: https://github.com/egg4946
- Polaris: https://github.com/HACK-STAGE-STAGE2-teamG-YOZORA/Polaris
- はよ寝ろくん: https://github.com/kc3hack/2026_team26
- WebClass Discord Notifier: https://github.com/egg4946/discordbot_webclass
- SEFIROT: https://github.com/egg4946/SysHack-Sefirot-frontend / https://github.com/egg4946/SysHack-Sefirot-backend
- NAND: https://nandmain.vercel.app/
- Canva slides: https://canva.link/jj0s9kmno36hmj0
