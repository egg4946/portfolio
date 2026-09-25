/* ==========================================================================
   Data — 事実はGitHub（README・コミット・Contributors、2026.09.25時点）から。
   裏付けのない担当・成果は verify: true で「要確認」として表示する。
   ========================================================================== */

const GH = "https://github.com";
const POLARIS = `${GH}/HACK-STAGE-STAGE2-teamG-YOZORA/Polaris`;
const HAYANERO = `${GH}/kc3hack/2026_team26`;
const WEBCLASS = `${GH}/egg4946/discordbot_webclass`;
const SEF_FRONT = `${GH}/egg4946/SysHack-Sefirot-frontend`;
const SEF_BACK = `${GH}/egg4946/SysHack-Sefirot-backend`;

const SRC = {
  polarisReadme: { label: "Polaris README", href: `${POLARIS}#readme` },
  polarisCommits: { label: "egg4946のコミット", href: `${POLARIS}/commits?author=egg4946` },
  polarisContrib: { label: "Contributors", href: `${POLARIS}/graphs/contributors` },
  award: { label: "本人提供の情報" },
  hackstage: { label: "HACK STAGE connpass", href: "https://localstage.connpass.com/event/397029/" },
  hayaReadme: { label: "README", href: `${HAYANERO}#readme` },
  hayaCommits: { label: "egg4946のコミット", href: `${HAYANERO}/commits?author=egg4946` },
  hayaContrib: { label: "Contributors", href: `${HAYANERO}/graphs/contributors` },
  hayaVideo: { label: "デモ動画", href: "https://www.youtube.com/watch?v=fbzGp0XJGq8" },
  webReadme: { label: "README", href: `${WEBCLASS}#readme` },
  webCommits: { label: "コミット履歴", href: `${WEBCLASS}/commits` },
  sefSpec: { label: "仕様メモ jissou.md", href: `${SEF_FRONT}/blob/main/jissou.md` },
  sefFront: { label: "frontのコミット", href: `${SEF_FRONT}/commits?author=egg4946` },
  sefBack: { label: "backのコミット", href: `${SEF_BACK}/commits?author=egg4946` },
  srm: { label: "Seven Rich Men", href: `${GH}/egg4946/Seven-Rich-Men` },
  srmRules: { label: "RULES.md", href: `${GH}/egg4946/Seven-Rich-Men/blob/main/docs/RULES.md` },
  magnet: { label: "magnet-pals README", href: `${GH}/egg4946/magnet-pals#readme` },
  nand: { label: "NANDmain", href: `${GH}/egg4946/NANDmain` },
  quiz: { label: "shadowverse-Voice-Quiz", href: `${GH}/egg4946/shadowverse-Voice-Quiz` },
  portfolio: { label: "このリポジトリのREADME", href: `${GH}/egg4946/portfolio` },
};

const actionLinks = [
  { label: "GitHub", href: `${GH}/egg4946`, primary: true },
  { label: "Polaris", href: POLARIS },
  { label: "はよ寝ろくん", href: HAYANERO },
  { label: "WebClass Bot", href: WEBCLASS },
  { label: "NAND", href: "https://nandmain.vercel.app/" },
  { label: "Slides", href: "https://canva.link/jj0s9kmno36hmj0" },
];

const DEFAULT_STEPS = ["課題", "発想", "担当", "技術", "結果"];

const works = [
  {
    id: "polaris",
    index: "01",
    title: "Polaris",
    kicker: "HACK STAGE STAGE2 · 2026.08",
    badge: "最優秀賞",
    award: true,
    type: "team",
    summary: "経験を言語化し、根拠をたどれる自己分析とES推敲を支援するサービス。",
    detail: "AIの解釈は本人が確かめ、分析結果もESの一文も、元の発言までさかのぼれる。",
    meta: "Team YOZORA / Next.js · LM Studio",
    part: {
      stat: "82 / 119 commits",
      items: ["AIの安全策（入力の上限・通信をPC内に限定・出力の検査）", "Google認証とユーザーごとのデータ分離", "ES推敲フロー・ESハブ・オンボーディング"],
    },
    links: [
      { label: "GitHub", href: POLARIS },
      { label: "HACK STAGE", href: "https://localstage.connpass.com/event/397029/" },
    ],
    steps: [
      {
        lead: "「経験はあるのに、うまく言葉にできない」。AIに任せると、今度は自分の経験と違う文章が出てくる。",
        items: [
          { text: "自己分析やESで、自分の経験を十分に表現できないという学生の悩み", src: "polarisReadme" },
          { text: "AIが生成した文章に、事実と異なる内容が混ざる不安", src: "polarisReadme" },
        ],
      },
      {
        lead: "性格を型に当てはめず、今ある経験から「仮の軸」を立てる。どの分析も、元の発言までたどれるようにする。",
        items: [
          { text: "AIが順に質問し、経験を「経験カード」に整理する", src: "polarisReadme" },
          { text: "Focus/Connect・Plan/Experiment・Mastery/Impact・Stable/Dynamicの4軸で傾向を可視化", src: "polarisReadme" },
          { text: "AIの解釈は本人が確認し、確認済みのデータと出典のある企業情報だけを使う", src: "polarisReadme" },
          { text: "ESの改善案は事実を足さずに作り、変更の理由も添える", src: "polarisReadme" },
        ],
      },
      {
        whole: "チーム（コントリビューター4名）で、対話による自己分析・経験カード・4軸分析・ES推敲までを9日間で開発。",
        lead: "リポジトリ全体119コミットのうち82件がegg4946。AIの入出力の制約とAPI検証を先に入れ、その上に画面とES機能を積んでいる（コミット日付より）。",
        items: [
          { date: "08.06", text: "AIに渡す文脈量の上限、AIとの通信をPC内（ループバック）に限定、ローカルAI出力の堅牢化", src: "polarisCommits" },
          { date: "08.06", text: "OpenAPIでAPIレスポンスを検証するテスト、主要画面（P0）の実装", src: "polarisCommits" },
          { date: "08.07", text: "根拠に基づくAIの安全策と、面接質問の生成（P1）", src: "polarisCommits" },
          { date: "08.08", text: "Google認証とユーザーごとのデータ分離、ES推敲フローの修正", src: "polarisCommits" },
          { date: "08.08", text: "複数セッションの同時進行、経験カードから結果への導線、AI出力への内部IDや内部情報の混入対策、初回オンボーディング", src: "polarisCommits" },
          { date: "08.09", text: "YOZORAデザインで認証後の画面を統一、ESハブと企業情報の出典管理、タブ移動の待ち時間短縮、提出用README", src: "polarisCommits" },
          { text: "チーム内での役割名（リーダーかどうか等）", verify: true },
          { text: "マージを担当したブランチ（ES入力・ES OCR・セッション状態など）の実装者", verify: true },
        ],
      },
      { tech: true, lead: "画面からローカルLLM、データの分離まで。本人のコミットで確認できた用途に「本人」と付けています。" },
      {
        lead: "HACK STAGE STAGE2（学生向けオンラインハッカソン、2026.08.01〜08.09）で最優秀賞。",
        items: [
          { text: "最優秀賞を受賞", src: "award" },
          { text: "9日間の開発期間で119コミット、そのうち82件を担当", src: "polarisContrib" },
          { text: "以前このサイトで「個人参加の予定」と書いていたイベント。実際はteam G YOZORAとして開発", src: "hackstage" },
          { text: "個人エントリーからチームを組んだのかなど、参加の経緯", verify: true },
        ],
      },
    ],
  },
  {
    id: "hayanero",
    index: "02",
    title: "はよ寝ろくん",
    kicker: "KC3Hack 2026 · 2026.02",
    badge: "Team",
    type: "team",
    summary: "カメラ・マイクから疲労の兆候を捉え、夜更かしを抑えるアプリ。",
    detail: "瞬き・視線・表情と声の変化から疲労スコアを出し、しきい値を超えたら止めに入る。",
    meta: "Web dashboard / React · MUI",
    part: {
      stat: "30 / 167 commits",
      items: ["Webダッシュボードのフロントエンド", "ログイン・登録、チーム管理と動的ルーティング", "ダッシュボード・メニューの部品化、測定グラフ"],
    },
    links: [
      { label: "GitHub", href: HAYANERO },
      { label: "デモ動画", href: "https://www.youtube.com/watch?v=fbzGp0XJGq8" },
    ],
    steps: [
      {
        lead: "ゲームに夢中だと、疲れていることに自分では気づけない。やめどきが分からないまま夜更かしが続く。",
        items: [{ text: "特に学生が、夜のゲームをやめられないという問題", src: "hayaReadme" }],
      },
      {
        lead: "自分の感覚に頼らず、疲れを外から測る。",
        items: [
          { text: "カメラ：瞬きの頻度・視線・表情を解析", src: "hayaReadme" },
          { text: "マイク：発声時の周波数の変化を解析", src: "hayaReadme" },
          { text: "組み合わせて疲労スコアを出し、しきい値を超えたら通知", src: "hayaReadme" },
          { text: "チームでデータを共有し、ダッシュボードで健康状態を見守る", src: "hayaReadme" },
        ],
      },
      {
        whole: "チームで、カメラ・マイクによる疲労検知、Goのバックエンド、C#のデスクトップアプリ、Webダッシュボードを開発。",
        lead: "リポジトリ全体167コミットのうち30件がegg4946。コミットはWebダッシュボードのフロントエンドに集中している。",
        items: [
          { date: "02.15", text: "フロントエンドの初期構築", src: "hayaCommits" },
          { date: "02.17", text: "Webダッシュボードのログイン・登録画面", src: "hayaCommits" },
          { date: "02.18", text: "画面のレスポンシブ対応、ログアウト処理", src: "hayaCommits" },
          { date: "02.20", text: "チーム管理の実装と動的ルーティング、仕様書とのすり合わせ", src: "hayaCommits" },
          { date: "02.21", text: "ダッシュボード・メニュー・チーム画面のコンポーネント化、README", src: "hayaCommits" },
          { date: "02.22", text: "チーム招待まわりの調整、デバッグ用の測定とグラフ", src: "hayaCommits" },
          { text: "疲労検知（カメラ・マイク解析）やデスクトップアプリへの関わり", verify: true },
          { text: "チーム内での役割名", verify: true },
        ],
      },
      { tech: true, lead: "本人はWeb側。Go・C#・インフラはチーム全体の構成です。" },
      {
        lead: "KC3Hack 2026に提出し、デモ動画を公開。GitHub ProjectsとGitHub Actionsを使ったチーム開発。",
        items: [
          { text: "デモ動画を公開", src: "hayaVideo" },
          { text: "GitHub Projectsでタスク管理、GitHub ActionsでCI（チームの取り組み）", src: "hayaReadme" },
          { text: "受賞の有無", verify: true },
        ],
      },
    ],
  },
  {
    id: "webclass",
    index: "03",
    title: "WebClass Discord Notifier",
    kicker: "Personal · 2026.06–",
    badge: "Solo",
    type: "solo",
    summary: "南山大学のWebClassを3時間ごとに巡回し、課題と締切の変化をDiscordへ知らせるBot。",
    detail: "新しい課題、期限変更、24時間前、当日未提出の4種類を通知。資料や練習問題は除外する。",
    meta: "Playwright / discord.js / PM2",
    part: {
      stat: "企画から運用まで",
      items: ["Playwrightでログインし課題を取得", "前回の状態と比べ、変化だけを通知", "VPSにPM2で常駐、cronで3時間ごとに巡回"],
    },
    links: [{ label: "GitHub", href: WEBCLASS }],
    steps: [
      {
        lead: "課題や締切に気づくには、WebClassを開いて授業ごとに見て回るしかない。期限の変更も見落としやすい。",
        items: [{ text: "課題・締切を自動で知らせる仕組みがない（Botの目的より）", src: "webReadme" }],
      },
      {
        lead: "毎日開くDiscordに、変化があったときだけ届けばいい。",
        items: [
          { text: "3時間ごとに巡回し、保存した前回の状態と比べて差分だけ通知", src: "webReadme" },
          { text: "新しい課題・期限変更・24時間前・当日未提出の4種類に絞る", src: "webReadme" },
          { text: "資料・参考資料・練習問題は通知しない", src: "webReadme" },
          { text: "確認用スラッシュコマンドを6種類。未提出一覧などはオーナー限定", src: "webReadme" },
        ],
      },
      {
        whole: "個人リポジトリ。企画・実装・運用まで一人で担当。",
        lead: "WebClassの読み取りから通知、サーバーでの常駐まで全部。",
        items: [
          { text: "Playwrightでログインし、授業ページから課題情報を読み取る", src: "webReadme" },
          { text: "状態ファイルとの比較による新規・期限変更の検出", src: "webReadme" },
          { text: "通知と /webclass-all・/webclass-next・/webclass-mute などのコマンド", src: "webReadme" },
          { text: "Ubuntu 22.04のVPSでPM2による常駐、cronで定期巡回、再起動後も自動で復帰", src: "webReadme" },
        ],
      },
      { tech: true, lead: "すべて本人の実装です。" },
      {
        lead: "VPS上で常駐運用。2026.09.25にもリポジトリを更新。",
        items: [
          { text: "KAGOYA CLOUDのVPSで常時稼働", src: "webReadme" },
          { text: "2026.09.25にも更新", src: "webCommits" },
          { text: "利用者数や導入しているサーバー数", verify: true },
        ],
      },
    ],
  },
  {
    id: "sefirot",
    index: "04",
    title: "SEFIROT",
    kicker: "SysHack · 2026.03",
    badge: "Team",
    type: "team",
    summary: "すべてのタスクを同じ重みで扱い、子→親→全体へ進捗を自動集計するチーム向けタスク管理。",
    detail: "",
    meta: "React · Tailwind / Prisma · PostgreSQL",
    image: "./assets/syshack-logo.webp",
    part: {
      stat: "front 78/112 · back 56/59",
      items: ["ゲストログイン、並び替えの保持、通知ポップアップ", "チャットと進捗バーの接続", "SQLiteからPostgreSQLへの移行"],
    },
    links: [
      { label: "Frontend", href: SEF_FRONT },
      { label: "Backend", href: SEF_BACK },
      { label: "Demo", href: "https://sys-hack-sefirot-frontend.vercel.app/" },
    ],
    steps: [
      {
        lead: "チームのタスクがどこまで進んでいるか、全員が同じ基準で把握しにくい。",
        items: [{ text: "進捗を透明に共有することを重視した仕様", src: "sefSpec" }],
      },
      {
        lead: "すべてのタスクを同じ重みとして扱い、進捗を自動で集計する。",
        items: [
          { text: "子タスクの平均が親、親の平均がプロジェクト全体の進捗", src: "sefSpec" },
          { text: "階層は親・子の2段まで（孫タスクは作らない）", src: "sefSpec" },
          { text: "タスクの追加・削除で全体の進捗が下がる「巻き戻り」は仕様として許容", src: "sefSpec" },
          { text: "6桁コードでメンバー招待、リーダーとメンバーで権限を分ける", src: "sefSpec" },
        ],
      },
      {
        whole: "チームでフロントエンドとバックエンドを開発（リポジトリはegg4946の所有）。",
        lead: "フロント112コミット中78件、バックエンド59コミット中56件がegg4946。画面とAPIの両方を担当。",
        items: [
          { text: "フロント：ゲストログイン、並び替え・絞り込み状態の保持、優先度の表示、締切UI、通知ポップアップ、個人詳細画面のソート", src: "sefFront" },
          { text: "バックエンド：チャット機能と進捗バーの接続、プロジェクト・タスクからの退出機能、個人詳細、CORS設定", src: "sefBack" },
          { text: "データベースをSQLiteからPostgreSQLへ完全移行", src: "sefBack" },
          { text: "チーム内での役割名", verify: true },
        ],
      },
      { tech: true, lead: "画面からAPI、DBの移行まで。" },
      {
        lead: "約12日間（リポジトリ作成 03.20〜最終更新 03.31）で、フロントをVercelで公開。",
        items: [
          { text: "フロントエンドをVercelで公開", src: "sefFront" },
          { text: "SysHackでの評価・受賞の有無", verify: true },
        ],
      },
    ],
  },
  {
    id: "lab",
    index: "05",
    title: "個人制作",
    kicker: "Personal lab",
    badge: "4 works",
    type: "solo",
    summary: "気になったことを、一人で最後まで作って公開してみる場所。",
    list: [
      ["Seven Rich Men", "七並べ×大富豪のオンライン対戦"],
      ["magnet-pals", "Godot 4の磁力パズル試作"],
      ["NANDサイト", "学生エンジニア団体のサイト"],
      ["Voice Quiz", "Shadowverseのボイスのクイズ"],
    ],
    meta: "Socket.IO / Godot 4 / HTML · CSS",
    part: {
      stat: "すべて個人リポジトリ",
      items: ["4日間でオンライン対戦と公開まで", "新しいエンジンで、遊びの手触りから試作", "所属団体のサイトも自分で"],
    },
    links: [{ label: "GitHub", href: `${GH}/egg4946?tab=repositories` }],
    steps: [
      {
        label: "Seven Rich Men",
        lead: "七並べをベースに、大富豪の数字効果を組み合わせたオリジナルのトランプゲーム（2026.09.13〜09.16）。",
        items: [
          { text: "7から途切れずにつながる列の両端にだけ出せる。3〜Qには、スキップなどの効果がある", src: "srmRules" },
          { text: "Socket.IOでオンライン対戦とロビー", src: "srm" },
          { text: "ラウンド制（3/5/無限）、前ラウンドの順位で決まる身分に応じたカード交換", src: "srm" },
          { text: "手番の分かりやすさ、演出速度の調整、スマホ向けUI、Renderで公開", src: "srm" },
        ],
      },
      {
        label: "magnet-pals",
        lead: "Godot 4で作る、2人協力の磁力アクションパズルの試作（2026.09〜）。",
        items: [
          { text: "極の切り替え、3つのステージ、磁石の形を描くツール、調整パネル", src: "magnet" },
          { text: "Godotをヘッドレスで動かす自動テスト", src: "magnet" },
        ],
      },
      {
        label: "NANDサイト",
        lead: "南山大学の学生エンジニア団体NANDのWebサイト（2026.05〜）。",
        items: [
          { text: "HTML / CSS / JavaScriptで制作し、Vercelで公開", src: "nand" },
          { text: "NANDでは主任として、Web・アプリ・AI・ゲームを作りながら学ぶ場を運営" },
        ],
      },
      {
        label: "Voice Quiz",
        lead: "Shadowverseのボイスを題材にしたWebクイズ（2025.08）。公開しているものでは一番古い制作。",
        items: [{ text: "HTML / JavaScriptで制作し、Vercelで公開", src: "quiz" }],
      },
    ],
  },
];

// 「その技術を何に使ったか」。scope: mine = egg4946のコミットで確認 / team = プロダクト全体の構成
const techUses = [
  { cat: "画面", tech: "Next.js · React · MUI", use: "対話、経験カード、分析結果、ESの画面", work: "polaris", scope: "mine", src: "polarisCommits" },
  { cat: "画面", tech: "React · Vite · MUI", use: "Webダッシュボード（ログイン、チーム、測定グラフ）", work: "hayanero", scope: "mine", src: "hayaCommits" },
  { cat: "画面", tech: "React · Vite · Tailwind CSS", use: "タスク一覧・締切・優先度・通知ポップアップ", work: "sefirot", scope: "mine", src: "sefFront" },
  { cat: "画面", tech: "HTML · CSS · JavaScript", use: "NANDサイト、Voice Quiz、このポートフォリオ", work: "lab", scope: "mine", src: "nand" },
  { cat: "AI", tech: "LM Studio（ローカルLLM）", use: "自己分析の対話とES推敲をPC内で動かし、AIとの通信を外に出さない", work: "polaris", scope: "mine", src: "polarisCommits" },
  { cat: "AI", tech: "文脈量の上限・出力の検査", use: "AIに渡す情報量を制限し、生成文への内部IDや内部情報の混入を防ぐ", work: "polaris", scope: "mine", src: "polarisCommits" },
  { cat: "データと認証", tech: "Google認証", use: "ログインと、ユーザーごとのデータ分離", work: "polaris", scope: "mine", src: "polarisCommits" },
  { cat: "データと認証", tech: "Prisma · PostgreSQL", use: "経験カードや確認済みデータの保存", work: "polaris", scope: "team", src: "polarisReadme" },
  { cat: "データと認証", tech: "OpenAPI", use: "APIのレスポンスが仕様どおりかをテストで検証", work: "polaris", scope: "mine", src: "polarisCommits" },
  { cat: "データと認証", tech: "Node.js · TypeScript · Prisma", use: "タスク・チャット・退出のAPI", work: "sefirot", scope: "mine", src: "sefBack" },
  { cat: "データと認証", tech: "PostgreSQL", use: "SQLiteからの完全移行", work: "sefirot", scope: "mine", src: "sefBack" },
  { cat: "データと認証", tech: "Go · PostgreSQL", use: "疲労データとチームのバックエンド", work: "hayanero", scope: "team", src: "hayaReadme" },
  { cat: "自動化と運用", tech: "Playwright", use: "WebClassにログインし、授業ページから課題を読み取る", work: "webclass", scope: "mine", src: "webReadme" },
  { cat: "自動化と運用", tech: "discord.js", use: "通知の送信と6種類のスラッシュコマンド", work: "webclass", scope: "mine", src: "webReadme" },
  { cat: "自動化と運用", tech: "cron · PM2", use: "3時間ごとの巡回と、Botの常駐・再起動後の自動復帰", work: "webclass", scope: "mine", src: "webReadme" },
  { cat: "自動化と運用", tech: "VPS（Ubuntu 22.04）", use: "Botを常時動かしておく環境", work: "webclass", scope: "mine", src: "webReadme" },
  { cat: "自動化と運用", tech: "Docker · GitHub Actions · Tailscale", use: "開発環境、CI、端末間の接続", work: "hayanero", scope: "team", src: "hayaReadme" },
  { cat: "デスクトップ・ゲーム", tech: "C# · .NET", use: "カメラ・マイクを扱うデスクトップ側", work: "hayanero", scope: "team", src: "hayaReadme" },
  { cat: "デスクトップ・ゲーム", tech: "Socket.IO · Render", use: "Seven Rich Menのオンライン対戦・ロビーと公開", work: "lab", scope: "mine", src: "srm" },
  { cat: "デスクトップ・ゲーム", tech: "Godot 4 · GDScript", use: "magnet-palsの磁力の挙動、ステージ、自動テスト", work: "lab", scope: "mine", src: "magnet" },
];

const timeline = [
  { ym: [2025, 8], title: "Shadowverse Voice Quiz", type: "solo", note: "公開している中で一番古い制作。ボイスを題材にしたWebクイズ。", work: "lab", step: 3 },
  { ym: [2026, 2], title: "はよ寝ろくん", event: "KC3Hack 2026", type: "team", note: "疲労を検知して夜更かしを止めるアプリ。Webダッシュボードのフロントエンドを担当。", work: "hayanero" },
  { ym: [2026, 3], title: "SEFIROT", event: "SysHack", type: "team", note: "進捗を自動集計するタスク管理。フロントとバックエンドの両方でコミットの大半を担当。", work: "sefirot" },
  { ym: [2026, 5], title: "NANDサイト", type: "solo", note: "学生エンジニア団体NANDのサイトを制作。", work: "lab", step: 2 },
  { ym: [2026, 6], title: "WebClass Discord Notifier", type: "solo", note: "課題・締切の通知Bot。VPSで常駐させ、9月も更新中。", work: "webclass" },
  { ym: [2026, 6], title: "Portfolio v1", type: "solo", note: "29Tech vol.2向けにこのサイトの初版を制作。HACK STAGEへの参加予定もここに書いていた。", src: "portfolio" },
  { ym: [2026, 8], title: "Polaris", event: "HACK STAGE STAGE2", type: "team", award: "最優秀賞", note: "9日間で、根拠をたどれる自己分析とES推敲のサービスを開発。119コミット中82件を担当し、最優秀賞。", work: "polaris" },
  { ym: [2026, 9], title: "Seven Rich Men", type: "solo", note: "七並べ×大富豪のオンライン対戦ゲームを4日間で公開まで。", work: "lab", step: 0 },
  { ym: [2026, 9], title: "magnet-pals", type: "solo", note: "Godot 4で2人協力の磁力パズルを試作中。", work: "lab", step: 1 },
];

/* ==========================================================================
   Helpers
   ========================================================================== */

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const prefersReducedMotion = () => reducedMotionQuery.matches;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const pad = (n) => String(n).padStart(2, "0");
const workById = (id) => works.find((work) => work.id === id);

const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => {
    if (value == null || value === false) {
      return;
    }

    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "html") node.innerHTML = value; // 静的なSVGのみ
    else if (key === "style") Object.entries(value).forEach(([name, v]) => node.style.setProperty(name, v));
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value === true ? "" : value);
  });

  [].concat(children).forEach((child) => {
    if (child != null && child !== false) {
      node.append(child);
    }
  });
  return node;
};

const externalLink = (label, href, className = "button") =>
  el("a", { class: className, href, target: "_blank", rel: "noreferrer", text: label });

const srcChip = (key) => {
  const source = SRC[key];

  if (!source) {
    return null;
  }

  return source.href
    ? el("a", { class: "src", href: source.href, target: "_blank", rel: "noreferrer", text: `出典: ${source.label}` })
    : el("span", { class: "src", text: `出典: ${source.label}` });
};

const verifyTag = () => el("span", { class: "verify-tag", text: "要確認" });

const renderFact = (item) => {
  const fact = typeof item === "string" ? { text: item } : item;

  return el("li", { class: fact.verify ? "fact fact--verify" : "fact" }, [
    fact.date && el("time", { class: "fact-date", text: fact.date }),
    el("span", { class: "fact-text" }, [fact.text, fact.verify && " ", fact.verify && verifyTag()]),
    fact.src && srcChip(fact.src),
  ]);
};

const scopeTag = (scope) =>
  el("span", { class: `scope scope--${scope}`, text: scope === "mine" ? "本人" : "チーム" });

const renderUseRow = (use, { showWork = true } = {}) =>
  el("li", { class: "use-row", "data-work": use.work }, [
    el("span", { class: "use-tech", text: use.tech }),
    el("span", { class: "use-arrow", "aria-hidden": "true", text: "→" }),
    el("span", { class: "use-text", text: use.use }),
    el("span", { class: "use-tags" }, [
      showWork &&
        el("button", {
          class: "use-work",
          type: "button",
          text: workById(use.work).title,
          "aria-label": `${workById(use.work).title}のストーリーを開く`,
          onclick: (event) => openStory(use.work, { from: event.currentTarget }),
        }),
      scopeTag(use.scope),
      srcChip(use.src),
    ]),
  ]);

/* ==========================================================================
   Card effects — 作品の意味に結びついた軽い演出
   ========================================================================== */

// はよ寝ろくん：閲覧者の時刻と滞在時間から「疲労のイメージ」を出す（実際のアルゴリズムではない）
const pageOpenedAt = Date.now();
const fatigueFromClock = (date = new Date()) => {
  const hour = date.getHours() + date.getMinutes() / 60;
  const curve = [
    [0, 64], [1, 76], [2, 86], [3, 92], [5, 80], [7, 40], [9, 16], [17, 18], [20, 30], [22, 46], [24, 64],
  ];
  let base = 18;

  for (let i = 0; i < curve.length - 1; i += 1) {
    const [h1, v1] = curve[i];
    const [h2, v2] = curve[i + 1];

    if (hour >= h1 && hour <= h2) {
      base = v1 + ((v2 - v1) * (hour - h1)) / (h2 - h1);
      break;
    }
  }

  const stay = Math.min(12, Math.floor((Date.now() - pageOpenedAt) / 20000));
  return clamp(Math.round(base + stay), 0, 100);
};

const eyeSvg = (id) => `
  <svg class="eye" viewBox="0 0 120 64" aria-hidden="true">
    <defs><clipPath id="${id}"><path d="M6 32 Q60 -8 114 32 Q60 72 6 32Z"/></clipPath></defs>
    <path class="eye-outline" d="M6 32 Q60 -8 114 32 Q60 72 6 32Z"/>
    <g clip-path="url(#${id})">
      <circle class="eye-iris" cx="60" cy="32" r="15"/>
      <circle class="eye-pupil" cx="60" cy="32" r="6"/>
      <rect class="eye-lid" x="0" y="-64" width="120" height="64"/>
      <rect class="eye-blink" x="0" y="-64" width="120" height="64"/>
    </g>
  </svg>`;

const starSvg = () => {
  let seed = 4946;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const stars = Array.from({ length: 34 }, () => {
    const r = random() * 1.2 + 0.4;
    return `<circle cx="${(random() * 400).toFixed(1)}" cy="${(random() * 300).toFixed(1)}" r="${r.toFixed(2)}" style="--tw:${(random() * 4 + 3).toFixed(1)}s;--td:${(random() * -6).toFixed(1)}s"/>`;
  }).join("");

  return `
  <svg class="fx-stars" viewBox="0 0 400 300" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">
    <g class="fx-dust">${stars}</g>
    <g class="fx-orbits">
      <ellipse cx="318" cy="70" rx="64" ry="64"/>
      <ellipse cx="318" cy="70" rx="118" ry="118"/>
      <ellipse cx="318" cy="70" rx="180" ry="180"/>
      <circle class="fx-planet" cx="318" cy="-48" r="3"/>
      <circle class="fx-planet fx-planet--far" cx="138" cy="70" r="2.2"/>
    </g>
    <polyline class="fx-constellation" points="228,146 262,118 318,70 292,178 228,146"/>
    <g class="fx-polaris"><circle cx="318" cy="70" r="12"/><path d="M318 52 L321 67 L336 70 L321 73 L318 88 L315 73 L300 70 L315 67Z"/></g>
  </svg>`;
};

const fx = {
  polaris: () => el("div", { class: "panel-fx panel-fx--stars", "aria-hidden": "true", html: starSvg() }),

  hayanero: (card) => {
    const wrap = el("div", { class: "panel-fx panel-fx--eye", "aria-hidden": "true", html: eyeSvg("eye-card") });
    const readout = el("p", { class: "fx-readout" });
    const meter = el("span", { class: "fx-meter" }, el("span"));
    const update = () => {
      const now = new Date();
      const score = fatigueFromClock(now);
      card.style.setProperty("--fatigue", score / 100);
      readout.replaceChildren(
        el("span", { text: `閲覧時刻 ${pad(now.getHours())}:${pad(now.getMinutes())} の疲労イメージ` }),
        el("strong", { text: `${score}${score >= 70 ? " はよ寝ろ" : ""}` }),
      );
    };
    update();
    tickers.push(update);
    return [wrap, el("div", { class: "fx-strip" }, [readout, meter])];
  },

  webclass: (card) => {
    const segments = Array.from({ length: 8 }, (_, i) => {
      const a0 = ((i * 45 - 90) * Math.PI) / 180;
      const a1 = (((i + 1) * 45 - 92) * Math.PI) / 180;
      const p = (a, r) => `${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`;
      return `<path data-seg="${i}" d="M${p(a0, 44)} A44 44 0 0 1 ${p(a1, 44)}"/>`;
    }).join("");
    const wrap = el("div", {
      class: "panel-fx panel-fx--clock",
      "aria-hidden": "true",
      html: `<svg viewBox="0 0 100 100">${segments}<line class="fx-hand" x1="50" y1="50" x2="50" y2="14"/><circle cx="50" cy="50" r="2.4"/></svg>`,
    });
    const readout = el("p", { class: "fx-readout" });
    const update = () => {
      const now = new Date();
      const slot = Math.floor(now.getHours() / 3);
      const next = new Date(now);
      next.setHours((slot + 1) * 3, 0, 0, 0);
      const left = Math.max(0, Math.floor((next - now) / 1000));
      wrap.querySelectorAll("[data-seg]").forEach((seg) => seg.classList.toggle("is-now", Number(seg.dataset.seg) === slot));
      const degrees = ((now.getHours() % 24) + now.getMinutes() / 60) * 15;
      card.style.setProperty("--hand", `${degrees}deg`);
      readout.replaceChildren(
        el("span", { text: "3時間ごとの巡回を再現 · 次まで" }),
        el("strong", { text: `${pad(Math.floor(left / 3600))}:${pad(Math.floor((left % 3600) / 60))}:${pad(left % 60)}` }),
      );
    };
    update();
    tickers.push(update);
    return [wrap, el("div", { class: "fx-strip" }, readout)];
  },

  sefirot: (card) => {
    const bars = el("div", { class: "fx-tree", "aria-hidden": "true" });
    const children = [80, 40, 30].map((value) => ({ value, node: el("span", { class: "fx-bar" }, el("i")) }));
    const parent = el("span", { class: "fx-bar fx-bar--parent" }, el("i"));
    const label = el("strong");
    const render = () => {
      const avg = Math.round(children.reduce((sum, child) => sum + child.value, 0) / children.length);
      children.forEach((child) => child.node.style.setProperty("--v", child.value / 100));
      parent.style.setProperty("--v", avg / 100);
      label.textContent = `${avg}%`;
    };
    const shuffle = () => {
      children.forEach((child) => {
        child.value = clamp(child.value + Math.round((Math.random() - 0.5) * 6) * 10, 0, 100);
      });
      render();
    };
    bars.append(el("span", { class: "fx-tree-label", text: "子" }), ...children.map((c) => c.node), el("span", { class: "fx-tree-label", text: "親" }), parent);
    render();
    card.addEventListener("pointerenter", shuffle);
    card.addEventListener("focusin", shuffle);
    return [el("div", { class: "fx-strip" }, [el("p", { class: "fx-readout" }, [el("span", { text: "子の平均が親の進捗に" }), label]), bars])];
  },
};

const tickers = [];
const startTickers = () => {
  let timer = 0;
  const run = () => tickers.forEach((tick) => tick());
  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(run, 1000);
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(timer);
    else {
      run();
      start();
    }
  });
  start();
};

/* ==========================================================================
   Work cards — 表：プロダクト全体 / 裏：本人の担当
   ========================================================================== */

const createWorkCard = (work) => {
  const card = el("article", {
    class: `panel panel--${work.id} reveal${work.image ? " panel--has-image" : ""}`,
    "data-work": work.id,
    "data-state": "front",
    "data-title": work.title,
    "data-kicker": work.kicker,
    "aria-labelledby": `card-title-${work.id}`,
    style: work.image
      ? { "--card-image": `url("${work.image}")`, "--card-image-size": "46% auto", "--card-image-position": "96% 40%", "--card-image-opacity": "0.34" }
      : {},
  });

  const openButton = (label) =>
    el("button", {
      class: "panel-open",
      type: "button",
      "aria-label": `${work.title}のストーリーを開く（課題から結果まで）`,
      onclick: (event) => openStory(work.id, { from: event.currentTarget, card }),
    }, el("span", { text: label }));

  const turnButton = (label, toBack) =>
    el("button", {
      class: "panel-turn",
      type: "button",
      "aria-label": toBack ? `${work.title}の担当範囲を見る（カードを裏返す）` : `${work.title}の全体説明に戻る`,
      onclick: () => toggleCardFlip(card),
    }, [el("span", { "aria-hidden": "true", text: "⟲" }), ` ${label}`]);

  const extra = fx[work.id]?.(card);

  const front = el("div", { class: "panel-face panel-face--front" }, [
    work.id === "polaris" && extra,
    work.id === "hayanero" && extra[0],
    work.id === "webclass" && extra[0],
    el("span", { class: "panel-index", "aria-hidden": "true", text: work.index }),
    el("div", { class: "panel-head" }, [
      el("span", { class: "kicker", text: work.kicker }),
      el("span", { class: work.award ? "badge badge--award" : "badge", text: work.badge }),
    ]),
    el("div", { class: "panel-copy" }, [
      el("h2", { id: `card-title-${work.id}`, text: work.title }),
      el("p", { text: work.summary }),
      work.list &&
        el(
          "ul",
          { class: "panel-list" },
          work.list.map(([name, text]) => el("li", {}, [el("strong", { text: name }), el("span", { text }) ])),
        ),
    ]),
    work.id === "hayanero" && extra[1],
    work.id === "webclass" && extra[1],
    work.id === "sefirot" && extra[0],
    el("div", { class: "panel-foot" }, [
      el("span", { class: "panel-meta", text: work.meta }),
      el("span", { class: "panel-actions" }, [turnButton("担当", true), openButton("Story")]),
    ]),
  ]);

  const back = el("div", { class: "panel-face panel-face--back", inert: true }, [
    el("span", { class: "panel-index", "aria-hidden": "true", text: work.index }),
    el("div", { class: "panel-head" }, [
      el("span", { class: "kicker", text: "egg4946の担当" }),
      el("span", { class: "badge", text: work.part.stat }),
    ]),
    el("p", { class: "panel-back-title", text: work.title }),
    el("ul", { class: "panel-part" }, work.part.items.map((text) => el("li", { text }))),
    el("div", { class: "panel-foot" }, [
      el("span", { class: "panel-meta", text: work.type === "team" ? "チーム作品" : "個人制作" }),
      el("span", { class: "panel-actions" }, [turnButton("全体", false), openButton("Story")]),
    ]),
  ]);

  card.append(el("div", { class: "panel-flip" }, [front, back]));
  return card;
};

const toggleCardFlip = (card) => {
  const isFlipped = card.dataset.state === "flipped";
  const front = card.querySelector(".panel-face--front");
  const back = card.querySelector(".panel-face--back");

  card.dataset.state = isFlipped ? "front" : "flipped";
  front.inert = !isFlipped;
  back.inert = isFlipped;
  (isFlipped ? front : back).querySelector(".panel-turn")?.focus({ preventScroll: true });
};

/* ---- pointer tilt（既存の傾きを継承） ---- */

const cardMotion = new WeakMap();

const resetCardMotion = (card) => {
  const state = cardMotion.get(card);

  if (state?.frame) {
    window.cancelAnimationFrame(state.frame);
  }

  cardMotion.delete(card);
  card.classList.remove("is-active");
  ["--tilt-x", "--tilt-y"].forEach((name) => card.style.setProperty(name, "0deg"));
  ["--media-x", "--media-y"].forEach((name) => card.style.setProperty(name, "0px"));
};

const updateCardMotion = (card, event) => {
  const state = cardMotion.get(card) ?? { frame: 0, pointerX: 0.5, pointerY: 0.5, rect: card.getBoundingClientRect() };

  card.classList.add("is-active");
  state.pointerX = (event.clientX - state.rect.left) / state.rect.width;
  state.pointerY = (event.clientY - state.rect.top) / state.rect.height;

  if (!state.frame) {
    state.frame = window.requestAnimationFrame(() => {
      state.frame = 0;
      card.style.setProperty("--tilt-x", `${((0.5 - state.pointerY) * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${((state.pointerX - 0.5) * 5).toFixed(2)}deg`);
      card.style.setProperty("--media-x", `${((state.pointerX - 0.5) * -10).toFixed(2)}px`);
      card.style.setProperty("--media-y", `${((state.pointerY - 0.5) * -8).toFixed(2)}px`);
    });
  }

  cardMotion.set(card, state);
};

const initCardMotion = () => {
  document.querySelectorAll(".panel[data-work]").forEach((card) => {
    const enabled = () => finePointerQuery.matches && !prefersReducedMotion();

    card.addEventListener("pointerenter", (event) => {
      if (!enabled()) return;
      cardMotion.set(card, { frame: 0, pointerX: 0.5, pointerY: 0.5, rect: card.getBoundingClientRect() });
      updateCardMotion(card, event);
    }, { passive: true });
    card.addEventListener("pointermove", (event) => enabled() && updateCardMotion(card, event), { passive: true });
    card.addEventListener("pointerleave", () => resetCardMotion(card));
    card.addEventListener("pointercancel", () => resetCardMotion(card));
  });
};

/* ---- 背景グリッドのスポットライト ---- */

const initGridGlow = () => {
  const shell = document.querySelector(".portfolio-shell");
  let frame = 0;
  let x = 0;
  let y = 0;

  shell.addEventListener("pointermove", (event) => {
    if (!finePointerQuery.matches || prefersReducedMotion()) return;
    const rect = shell.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (!frame) {
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        shell.style.setProperty("--gx", `${x}px`);
        shell.style.setProperty("--gy", `${y}px`);
        shell.classList.add("has-glow");
      });
    }
  }, { passive: true });
  shell.addEventListener("pointerleave", () => shell.classList.remove("has-glow"));
};

const initFocusStatus = () => {
  const status = document.querySelector("#focus-project");
  const defaultText = "Works / 2026";

  document.querySelectorAll(".panel[data-title]").forEach((panel) => {
    const setStatus = () => {
      status.textContent = `${panel.dataset.title} / ${panel.dataset.kicker}`;
    };
    const resetStatus = (event) => {
      if (event?.relatedTarget && panel.contains(event.relatedTarget)) return;
      status.textContent = defaultText;
    };

    panel.addEventListener("pointerenter", setStatus);
    panel.addEventListener("pointerleave", resetStatus);
    panel.addEventListener("focusin", setStatus);
    panel.addEventListener("focusout", resetStatus);
  });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 180)}ms`);
    observer.observe(item);
  });
};

/* ==========================================================================
   Trace mode — Polarisの「根拠をたどる」をサイト自体に適用
   ========================================================================== */

const traceButtons = [];
let traceLinesFrame = 0;

const setTrace = (on) => {
  document.documentElement.dataset.trace = on ? "on" : "off";
  traceButtons.forEach((button) => button.setAttribute("aria-pressed", String(on)));

  try {
    window.localStorage.setItem("egg4946-trace", on ? "on" : "off");
  } catch {
    /* ストレージが使えなくても表示は続ける */
  }

  scheduleTraceLines();
};

const toggleTrace = () => setTrace(document.documentElement.dataset.trace !== "on");

// Trace mode中、自己紹介から各カードへ「根拠の線」を引く（3カラム表示のときだけ）
const drawTraceLines = () => {
  traceLinesFrame = 0;
  const shell = document.querySelector(".portfolio-shell");
  let svg = shell.querySelector(".trace-lines");

  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "trace-lines");
    svg.setAttribute("aria-hidden", "true");
    shell.append(svg);
  }

  const on = document.documentElement.dataset.trace === "on" && window.innerWidth > 1120;
  svg.replaceChildren();

  if (!on) return;

  const base = shell.getBoundingClientRect();
  const hero = document.querySelector(".hero-copy").getBoundingClientRect();
  const title = document.querySelector("h1").getBoundingClientRect();
  const center = hero.left + hero.width / 2;
  const hy = title.top + title.height / 2 - base.top;

  svg.setAttribute("viewBox", `0 0 ${base.width} ${base.height}`);
  document.querySelectorAll(".panel[data-work]").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isLeft = rect.left + rect.width / 2 < center;
    const hx = (isLeft ? hero.left - 12 : hero.right + 12) - base.left;
    const cx = (isLeft ? rect.right : rect.left) - base.left;
    const cy = rect.top + rect.height / 2 - base.top;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const mx = (hx + cx) / 2;
    line.setAttribute("d", `M${hx} ${hy} C ${mx} ${hy}, ${mx} ${cy}, ${cx} ${cy}`);
    line.setAttribute("pathLength", "1");
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", String(cx));
    dot.setAttribute("cy", String(cy));
    dot.setAttribute("r", "3");
    svg.append(line, dot);
  });
};

const scheduleTraceLines = () => {
  if (!traceLinesFrame) traceLinesFrame = window.requestAnimationFrame(drawTraceLines);
};

const initTrace = () => {
  const heroButton = document.querySelector("#trace-toggle");
  let initial = false;

  try {
    initial = window.localStorage.getItem("egg4946-trace") === "on";
  } catch {
    initial = false;
  }

  traceButtons.push(heroButton);
  heroButton.addEventListener("click", toggleTrace);
  setTrace(initial);
  window.addEventListener("resize", scheduleTraceLines, { passive: true });
};

/* ==========================================================================
   Story dialog — 課題 → 発想 → 担当 → 技術 → 結果 を段階的に
   ========================================================================== */

const story = {
  dialog: null,
  work: null,
  current: 0,
  revealed: 0,
  returnFocus: null,
  cleanupDemo: null,
};

const narrowStoryQuery = window.matchMedia("(max-width: 820px)");
// 狭い画面ではダイアログ全体、広い画面では右カラムがスクロールする
const storyScroller = () => document.querySelector(narrowStoryQuery.matches ? "#story-shell" : "#story-body");
const offsetIn = (node, scroller) => node.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;

const stepLabel = (work, index) => work.steps[index].label ?? DEFAULT_STEPS[index];

const renderStep = (work, step, index) => {
  const label = stepLabel(work, index);
  const body = [];

  if (step.whole) {
    body.push(
      el("div", { class: "split" }, [
        el("div", { class: "split-col split-col--whole" }, [el("p", { class: "split-label", text: "プロダクト全体" }), el("p", { text: step.whole })]),
        el("div", { class: "split-col split-col--mine" }, [el("p", { class: "split-label", text: "egg4946の担当" }), el("p", { text: step.lead })]),
      ]),
    );
  } else {
    body.push(el("p", { class: "step-lead", text: step.lead }));
  }

  if (step.items) {
    body.push(el("ul", { class: "facts" }, step.items.map(renderFact)));
  }

  if (step.tech) {
    body.push(el("ul", { class: "uses uses--compact" }, techUses.filter((use) => use.work === work.id).map((use) => renderUseRow(use, { showWork: false }))));
  }

  return el("li", { class: "story-step", id: `step-${index}`, "data-step": index, hidden: true }, [
    el("h3", { class: "step-title" }, [el("span", { class: "step-no", text: pad(index + 1) }), label]),
    ...body,
  ]);
};

const updateStoryUi = () => {
  const { work, current, revealed } = story;
  const total = work.steps.length;
  const next = document.querySelector("#story-next");
  const prev = document.querySelector("#story-prev");
  const all = document.querySelector("#story-all");

  document.querySelectorAll("#story-steps .story-step").forEach((step, index) => {
    step.hidden = index > revealed;
    step.classList.toggle("is-current", index === current);
  });

  document.querySelectorAll("#story-rail button").forEach((button, index) => {
    button.classList.toggle("is-revealed", index <= revealed);
    if (index === current) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });

  document.querySelector("#story-progress").style.setProperty("--p", (revealed + 1) / total);
  document.querySelector("#story-count").textContent = `${current + 1} / ${total}　${stepLabel(work, current)}`;
  prev.disabled = current === 0;
  next.disabled = current === total - 1;
  next.textContent = current === total - 1 ? "最後です" : `次へ：${stepLabel(work, current + 1)} →`;
  all.hidden = revealed === total - 1;
};

const goToStep = (index, { scroll = true } = {}) => {
  const total = story.work.steps.length;
  const target = clamp(index, 0, total - 1);
  const isNew = target > story.revealed;

  story.current = target;
  story.revealed = Math.max(story.revealed, target);
  updateStoryUi();

  const stepNode = document.querySelector(`#step-${target}`);

  if (isNew && !prefersReducedMotion()) {
    stepNode.classList.remove("is-entering");
    void stepNode.offsetWidth;
    stepNode.classList.add("is-entering");
  }

  if (scroll) {
    const scroller = storyScroller();
    const rail = narrowStoryQuery.matches ? document.querySelector(".story-rail").offsetHeight : 0;
    scroller.scrollTo({ top: offsetIn(stepNode, scroller) - rail - 12, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }
};

const revealAll = () => {
  story.revealed = story.work.steps.length - 1;
  updateStoryUi();
};

const openStory = (id, { from = null, card = null, step = 0 } = {}) => {
  const work = workById(id);
  const dialog = story.dialog;

  if (!work) return;

  story.cleanupDemo?.();
  story.work = work;
  story.current = 0;
  story.revealed = 0;
  const active = document.activeElement;
  story.returnFocus = from ?? (active && active !== document.body ? active : document.querySelector(`.panel[data-work="${id}"] .panel-open`));

  const shell = document.querySelector("#story-shell");
  shell.dataset.work = work.id;
  document.querySelector("#story-kicker").textContent = `${work.kicker} · ${work.type === "team" ? "チーム作品" : "個人制作"}`;
  document.querySelector("#story-title").textContent = work.title;
  document.querySelector("#story-summary").replaceChildren(work.summary, work.detail ? ` ${work.detail}` : "");
  document.querySelector("#story-links").replaceChildren(
    ...(work.award ? [el("span", { class: "badge badge--award", text: work.badge })] : []),
    ...work.links.map((link) => externalLink(link.label, link.href, "button button--small")),
  );

  document.querySelector("#story-rail").replaceChildren(
    ...work.steps.map((_, index) =>
      el("li", {}, el("button", { type: "button", onclick: () => goToStep(index) }, [el("span", { text: pad(index + 1) }), stepLabel(work, index)])),
    ),
  );
  document.querySelector("#story-steps").replaceChildren(...work.steps.map((step, index) => renderStep(work, step, index)));

  const demoHost = document.querySelector("#story-demo");
  demoHost.replaceChildren();
  story.cleanupDemo = demos[work.id]?.(demoHost) ?? null;
  demoHost.hidden = !demos[work.id];

  if (!dialog.open) {
    dialog.showModal();
  }

  // カードの位置から開く
  const origin = (card ?? document.querySelector(`.panel[data-work="${id}"]`))?.getBoundingClientRect();
  const shellRect = shell.getBoundingClientRect();

  if (origin) {
    shell.style.setProperty("--ox", `${origin.left + origin.width / 2 - shellRect.left}px`);
    shell.style.setProperty("--oy", `${origin.top + origin.height / 2 - shellRect.top}px`);
  }

  shell.classList.remove("is-opening");
  void shell.offsetWidth;
  shell.classList.add("is-opening");

  document.querySelector("#story-body").scrollTop = 0;
  shell.scrollTop = 0;
  goToStep(step, { scroll: step > 0 });
  document.querySelector("#story-next").focus({ preventScroll: true });

  history.replaceState(null, "", `#work-${id}`);
};

// Escで閉じたときも、ボタンで閉じたときも一度だけ後片付けする
const finishStory = () => {
  if (!story.work) return;
  story.cleanupDemo?.();
  story.cleanupDemo = null;
  story.work = null;
  history.replaceState(null, "", window.location.pathname + window.location.search);
  story.returnFocus?.focus?.({ preventScroll: true });
};

const closeStory = () => {
  if (story.dialog.open) story.dialog.close();
  finishStory();
};

const initStory = () => {
  const dialog = document.querySelector("#story");
  const body = document.querySelector("#story-body");
  story.dialog = dialog;

  document.querySelector("#story-next").addEventListener("click", () => goToStep(story.current + 1));
  document.querySelector("#story-prev").addEventListener("click", () => goToStep(story.current - 1));
  document.querySelector("#story-all").addEventListener("click", revealAll);
  document.querySelector("#story-close").addEventListener("click", closeStory);

  // 出典トグルをダイアログにも
  const traceInDialog = el("button", { class: "ghost-button trace-mini", type: "button", "aria-pressed": "false", onclick: toggleTrace }, [
    el("span", { class: "trace-dot", "aria-hidden": "true" }),
    "出典",
  ]);
  traceButtons.push(traceInDialog);
  document.querySelector(".story-foot").append(traceInDialog);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeStory();
  });

  dialog.addEventListener("close", finishStory);

  dialog.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeStory();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToStep(story.current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToStep(story.current - 1);
    } else if (event.key === "t" || event.key === "T") {
      toggleTrace();
    }
  });

  // スワイプで前後へ
  let touch = null;
  body.addEventListener("touchstart", (event) => {
    const t = event.touches[0];
    touch = { x: t.clientX, y: t.clientY };
  }, { passive: true });
  body.addEventListener("touchend", (event) => {
    if (!touch) return;
    const t = event.changedTouches[0];
    const dx = t.clientX - touch.x;
    const dy = t.clientY - touch.y;
    touch = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goToStep(story.current + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });

  // スクロール位置に合わせて現在の段階を追う
  let frame = 0;
  const onScroll = () => {
    if (frame || !story.work) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      if (!story.work) return;
      const scroller = storyScroller();
      const line = scroller.scrollTop + scroller.clientHeight * 0.35;
      let current = 0;
      body.querySelectorAll(".story-step:not([hidden])").forEach((step) => {
        if (offsetIn(step, scroller) <= line) current = Number(step.dataset.step);
      });
      if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4) current = story.revealed;
      if (current !== story.current) {
        story.current = current;
        updateStoryUi();
      }
    });
  };
  body.addEventListener("scroll", onScroll, { passive: true });
  document.querySelector("#story-shell").addEventListener("scroll", onScroll, { passive: true });
};

/* ==========================================================================
   Story demos — 作品のしくみを触って理解する
   ========================================================================== */

const demoLabel = (text) => el("p", { class: "demo-label", text });

const demos = {
  // Polaris：ESの一文 → 根拠になった経験カード（星）へ線をたどる
  polaris: (host) => {
    const experiences = {
      a: { x: 22, y: 38, label: "経験カード：新歓の振り返り", quote: "「毎回アンケートを取って、次の回に生かしていた」" },
      b: { x: 60, y: 24, label: "経験カード：企画の見直し", quote: "「回答を見て、開始時間と内容を変えた」" },
      c: { x: 82, y: 64, label: "経験カード：アルバイト", quote: "「締め作業の手順を自分で書き出した」" },
      none: { x: 44, y: 78 },
    };
    const sky = el("div", { class: "trace-sky" }, [
      el("span", { class: "trace-orbit", "aria-hidden": "true" }),
      ...Object.entries(experiences)
        .filter(([key]) => key !== "none")
        .map(([key, exp]) =>
          el("span", { class: "trace-star", "data-star": key, style: { left: `${exp.x}%`, top: `${exp.y}%` } }, el("span", { class: "trace-star-label", text: exp.label.replace("経験カード：", "") })),
        ),
      el("span", { class: "trace-void", "data-star": "none", style: { left: `${experiences.none.x}%`, top: `${experiences.none.y}%` }, text: "?" }),
    ]);
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "trace-link");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.append(path);

    const note = el("p", { class: "trace-note", "aria-live": "polite", text: "下線の表現を選ぶと、根拠になった経験カードまで線でたどります。" });
    const phrase = (key, text) =>
      el("button", { class: "trace-phrase", type: "button", "data-ref": key, "aria-describedby": "trace-note" }, text);
    const es = el("p", { class: "trace-es" }, [
      el("span", { class: "trace-es-label", text: "ES下書き" }),
      "サークルでは",
      phrase("a", "毎回アンケートで参加者の声を集め"),
      "、",
      phrase("b", "次の企画の時間や内容を変えてきた"),
      "。この経験から、私は",
      phrase("none", "誰とでもすぐ打ち解けられる"),
      "と考える。",
    ]);
    note.id = "trace-note";
    const demo = el("div", { class: "demo demo--polaris" }, [demoLabel("しくみのイメージ（サンプル文。実際の画面ではありません）"), sky, es, note, svg]);
    host.append(demo);

    let active = null;
    const draw = () => {
      if (!active) return;
      const base = demo.getBoundingClientRect();
      const from = es.querySelector(`[data-ref="${active}"]`).getBoundingClientRect();
      const to = sky.querySelector(`[data-star="${active}"]`).getBoundingClientRect();
      const x1 = from.left + from.width / 2 - base.left;
      const y1 = from.top - base.top;
      const x2 = to.left + to.width / 2 - base.left;
      const y2 = to.top + to.height / 2 - base.top;
      svg.setAttribute("viewBox", `0 0 ${base.width} ${base.height}`);
      path.setAttribute("d", `M${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`);
      path.setAttribute("pathLength", "1");
    };
    const activate = (key) => {
      active = key;
      demo.dataset.active = key;
      demo.querySelectorAll("[data-ref]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ref === key)));
      sky.querySelectorAll("[data-star]").forEach((s) => s.classList.toggle("is-lit", s.dataset.star === key));
      path.classList.remove("is-drawing");
      void path.getBoundingClientRect();
      path.classList.add("is-drawing");
      const exp = experiences[key];
      note.replaceChildren(
        key === "none"
          ? el("span", { class: "trace-warn", text: "根拠が見つからない表現です。事実を足さずに言い換えるか、削る候補として示します。" })
          : el("span", {}, [el("strong", { text: exp.label }), ` ${exp.quote}`]),
      );
      draw();
    };

    es.querySelectorAll("[data-ref]").forEach((button) => {
      const key = button.dataset.ref;
      button.addEventListener("click", () => activate(key));
      button.addEventListener("focus", () => activate(key));
      button.addEventListener("pointerenter", (event) => event.pointerType === "mouse" && activate(key));
    });

    const observer = new ResizeObserver(draw);
    observer.observe(demo);
    return () => observer.disconnect();
  },

  // はよ寝ろくん：時刻を動かすと、各シグナルと疲労スコアが変わる
  hayanero: (host) => {
    const signals = [
      { key: "blink", label: "瞬きの頻度", from: "カメラ", unit: "回/分", f: (t) => Math.round(12 + t * 3.2) },
      { key: "gaze", label: "視線のぶれ", from: "カメラ", unit: "%", f: (t) => Math.round(18 + t * 11) },
      { key: "face", label: "表情の変化の少なさ", from: "カメラ", unit: "%", f: (t) => Math.round(14 + t * 12) },
      { key: "voice", label: "声の高さの変化", from: "マイク", unit: "%", f: (t) => Math.round(82 - t * 10), invert: true },
    ];
    const range = el("input", { type: "range", min: "0", max: "36", step: "1", value: "6", id: "haya-time", "aria-describedby": "haya-hint" });
    const output = el("output", { for: "haya-time", class: "haya-time" });
    const score = el("strong", { class: "haya-score-value" });
    const meter = el("span", { class: "haya-meter" }, [el("span", { class: "haya-meter-fill" }), el("span", { class: "haya-meter-line", title: "しきい値 70" })]);
    const alert = el("p", { class: "haya-alert", role: "status" });
    const rows = signals.map((signal) => {
      const value = el("span", { class: "haya-signal-value" });
      const bar = el("span", { class: "haya-signal-bar" }, el("i"));
      return { signal, value, bar, node: el("li", {}, [el("span", { class: "haya-signal-name" }, [signal.label, el("small", { text: signal.from })]), bar, value]) };
    });
    const eye = el("div", { class: "haya-eye", html: eyeSvg("eye-demo") });

    const demo = el("div", { class: "demo demo--hayanero" }, [
      demoLabel("疲労スコアのイメージ（実際の算出式ではありません）"),
      el("div", { class: "haya-grid" }, [
        eye,
        el("ul", { class: "haya-signals" }, rows.map((row) => row.node)),
        el("div", { class: "haya-score" }, [el("span", { class: "haya-score-label", text: "疲労スコア" }), score, meter]),
      ]),
      el("div", { class: "haya-controls" }, [
        el("label", { for: "haya-time", text: "時刻" }),
        range,
        output,
        el("button", { class: "ghost-button", type: "button", text: "今の時刻にする", onclick: () => setFromNow() }),
      ]),
      el("p", { class: "demo-hint", id: "haya-hint", text: "21:00〜03:00をスライダーか矢印キーで動かすと、瞬き・視線・表情・声のシグナルが変わり、しきい値70を超えると警告します。" }),
      alert,
    ]);

    const render = () => {
      const n = Number(range.value);
      const t = n / 6;
      const minutes = 21 * 60 + n * 10;
      output.textContent = `${pad(Math.floor(minutes / 60) % 24)}:${pad(minutes % 60)}`;
      range.setAttribute("aria-valuetext", output.textContent);
      const value = clamp(Math.round(16 + t * 9 + t * t * 0.95), 0, 100);
      score.textContent = value;
      demo.style.setProperty("--fatigue", value / 100);
      rows.forEach(({ signal, value: v, bar }) => {
        const raw = signal.f(t);
        v.textContent = `${raw}${signal.unit}`;
        const ratio = signal.key === "blink" ? (raw - 10) / 24 : raw / 100;
        bar.style.setProperty("--v", clamp(ratio, 0.04, 1));
      });
      const over = value >= 70;
      demo.classList.toggle("is-over", over);
      alert.textContent = over ? `はよ寝ろ！ 疲労スコア${value}がしきい値70を超えました。` : "";
    };

    const setFromNow = () => {
      const now = new Date();
      const h = now.getHours();
      let n = 0;
      if (h >= 21) n = (h - 21) * 6 + Math.floor(now.getMinutes() / 10);
      else if (h < 3) n = (h + 3) * 6 + Math.floor(now.getMinutes() / 10);
      else if (h < 9) n = 36;
      range.value = String(clamp(n, 0, 36));
      render();
    };

    range.addEventListener("input", render);
    host.append(demo);
    render();
    return null;
  },

  // WebClass：巡回ごとに差分を見て、通知する／しないを決める
  webclass: (host) => {
    const scenario = [
      { time: "10/01 09:00", kind: "new", title: "新しい課題", text: "情報処理演習 レポート第3回（締切 10/04 23:59）", notify: true },
      { time: "10/01 12:00", kind: "none", title: "変化なし", text: "前回の状態と同じなので通知しない", notify: false },
      { time: "10/01 15:00", kind: "change", title: "期限変更", text: "レポート第3回の締切 10/04 → 10/05 23:59", notify: true },
      { time: "10/01 18:00", kind: "skip", title: "資料の追加", text: "授業資料は通知の対象外", notify: false },
      { time: "10/05 00:00", kind: "remind", title: "24時間前", text: "レポート第3回の締切まで残り24時間", notify: true },
      { time: "10/05 09:00", kind: "today", title: "本日締切", text: "未提出の課題が1件あります", notify: true },
    ];
    let index = 0;
    const log = el("ol", { class: "crawl-log", "aria-live": "polite" });
    const clock = el("strong", { class: "crawl-time", text: "--/-- --:--" });
    const count = el("span", { class: "crawl-count", text: "巡回 0回" });
    const nextButton = el("button", { class: "ghost-button ghost-button--accent", type: "button", text: "巡回する" });
    const reset = el("button", { class: "ghost-button", type: "button", text: "最初から" });

    const demo = el("div", { class: "demo demo--webclass" }, [
      demoLabel("巡回と差分通知の再現（サンプルデータ）"),
      el("div", { class: "crawl-grid" }, [
        el("div", { class: "crawl-clock" }, [el("span", { class: "crawl-radar", "aria-hidden": "true" }), clock, count]),
        el("div", { class: "crawl-channel" }, [el("p", { class: "crawl-channel-name", text: "# webclass-通知" }), log]),
      ]),
      el("div", { class: "crawl-controls" }, [nextButton, reset]),
    ]);

    const step = () => {
      if (index >= scenario.length) return;
      const item = scenario[index];
      index += 1;
      clock.textContent = item.time;
      count.textContent = `巡回 ${index}回`;
      demo.classList.remove("is-scanning");
      void demo.offsetWidth;
      demo.classList.add("is-scanning");
      log.append(
        el("li", { class: `crawl-msg crawl-msg--${item.kind}${item.notify ? "" : " is-muted"}` }, [
          el("span", { class: "crawl-msg-head" }, [el("strong", { text: item.notify ? `🔔 ${item.title}` : item.title }), el("time", { text: item.time })]),
          el("span", { text: item.text }),
        ]),
      );
      log.scrollTop = log.scrollHeight;
      nextButton.disabled = index >= scenario.length;
      nextButton.textContent = index >= scenario.length ? "シナリオ終了" : "次の巡回へ";
    };

    nextButton.addEventListener("click", step);
    reset.addEventListener("click", () => {
      index = 0;
      log.replaceChildren();
      clock.textContent = "--/-- --:--";
      count.textContent = "巡回 0回";
      nextButton.disabled = false;
      nextButton.textContent = "巡回する";
    });
    host.append(demo);
    return null;
  },

  // SEFIROT：子の進捗を動かすと、親と全体が再計算される（巻き戻りも体験）
  sefirot: (host) => {
    const initial = () => [
      { name: "企画", children: [{ name: "要件まとめ", v: 100 }, { name: "画面設計", v: 60 }] },
      { name: "実装", children: [{ name: "API", v: 40 }, { name: "画面", v: 20 }] },
    ];
    let parents = initial();
    let added = 0;
    const avg = (list) => (list.length ? list.reduce((sum, value) => sum + value, 0) / list.length : 0);
    const total = el("strong", { class: "sef-total" });
    const totalBar = el("span", { class: "sef-bar sef-bar--total" }, el("i"));
    const tree = el("div", { class: "sef-tree" });
    const note = el("p", { class: "sef-note", role: "status" });
    const add = el("button", { class: "ghost-button", type: "button", text: "「実装」に子タスクを追加" });
    const reset = el("button", { class: "ghost-button", type: "button", text: "元に戻す" });
    const projectValue = () => Math.round(avg(parents.map((p) => avg(p.children.map((c) => c.v)))));

    const render = () => {
      tree.replaceChildren(
        ...parents.map((parent, pi) => {
          const pv = Math.round(avg(parent.children.map((c) => c.v)));
          return el("div", { class: "sef-parent" }, [
            el("p", { class: "sef-parent-head" }, [el("strong", { text: `親：${parent.name}` }), el("span", { text: `${pv}%` })]),
            el("span", { class: "sef-bar", style: { "--v": pv / 100 } }, el("i")),
            el(
              "ul",
              { class: "sef-children" },
              parent.children.map((child, ci) => {
                const id = `sef-${pi}-${ci}`;
                const input = el("input", { id, type: "range", min: "0", max: "100", step: "10", value: String(child.v) });
                input.addEventListener("input", () => {
                  child.v = Number(input.value);
                  note.textContent = "";
                  update();
                  input.nextElementSibling.textContent = `${child.v}%`;
                });
                return el("li", {}, [el("label", { for: id, text: child.name }), input, el("span", { text: `${child.v}%` })]);
              }),
            ),
          ]);
        }),
      );
      update();
    };

    const update = () => {
      const value = projectValue();
      total.textContent = `${value}%`;
      totalBar.style.setProperty("--v", value / 100);
      tree.querySelectorAll(".sef-parent").forEach((node, pi) => {
        const pv = Math.round(avg(parents[pi].children.map((c) => c.v)));
        node.querySelector(".sef-parent-head span").textContent = `${pv}%`;
        node.querySelector(".sef-bar").style.setProperty("--v", pv / 100);
      });
    };

    add.addEventListener("click", () => {
      const before = projectValue();
      added += 1;
      parents[1].children.push({ name: `追加タスク${added}`, v: 0 });
      render();
      note.textContent = `全体 ${before}% → ${projectValue()}%。分母が増えて進捗が下がる「巻き戻り」は、仕様として許容しています。`;
      add.disabled = added >= 3;
    });
    reset.addEventListener("click", () => {
      parents = initial();
      added = 0;
      add.disabled = false;
      note.textContent = "";
      render();
    });

    host.append(
      el("div", { class: "demo demo--sefirot" }, [
        demoLabel("進捗の自動集計（仕様メモの計算方法を再現）"),
        el("div", { class: "sef-project" }, [el("span", { text: "プロジェクト全体" }), total, totalBar]),
        tree,
        el("div", { class: "crawl-controls" }, [add, reset]),
        note,
      ]),
    );
    render();
    return null;
  },
};

/* ==========================================================================
   Timeline
   ========================================================================== */

const initTimeline = () => {
  const track = document.querySelector("#timeline-track");
  const detail = document.querySelector("#timeline-detail");
  const filterHost = document.querySelector("#timeline-filter");
  const play = document.querySelector("#timeline-play");
  const monthIndex = ([y, m]) => y * 12 + m;
  const origin = monthIndex(timeline[0].ym);
  let selected = timeline.length - 3; // Polaris
  let filter = "all";
  let playTimer = 0;

  const nodes = timeline.map((item, index) => {
    const prev = timeline[index - 1];
    const gap = prev ? monthIndex(item.ym) - monthIndex(prev.ym) : 0;
    const button = el("button", {
      class: "tl-node",
      type: "button",
      "data-index": index,
      "aria-pressed": "false",
      tabindex: "-1",
    }, [
      el("time", { text: `${item.ym[0]}.${pad(item.ym[1])}` }),
      el("strong", { text: item.title }),
      el("span", { class: "tl-sub" }, [item.event ?? (item.type === "team" ? "チーム" : "個人"), item.award && el("em", { text: item.award })]),
    ]);
    const li = el("li", { class: `tl-item tl-item--${item.type}${item.award ? " tl-item--award" : ""}`, style: { "--gap": Math.sqrt(gap) } }, button);
    li.dataset.pos = (monthIndex(item.ym) - origin) / (monthIndex(timeline.at(-1).ym) - origin);
    return { item, li, button };
  });

  track.append(...nodes.map((node) => node.li));

  const visible = () => nodes.filter(({ item }) => filter === "all" || item.type === filter);

  const renderDetail = (item) => {
    const work = item.work && workById(item.work);
    detail.replaceChildren(
      el("div", { class: "tl-detail-head" }, [
        el("time", { text: `${item.ym[0]}.${pad(item.ym[1])}` }),
        el("span", { class: `scope scope--${item.type === "team" ? "team" : "mine"}`, text: item.type === "team" ? "チーム作品" : "個人制作" }),
        item.award && el("span", { class: "badge badge--award", text: item.award }),
      ]),
      el("h3", { text: item.event ? `${item.title} — ${item.event}` : item.title }),
      el("p", { text: item.note }),
      el("div", { class: "tl-detail-actions" }, [
        work &&
          el("button", {
            class: "ghost-button ghost-button--accent",
            type: "button",
            text: `${item.step != null ? item.title : work.title}のストーリーを開く`,
            onclick: (event) => openStory(work.id, { from: event.currentTarget, step: item.step ?? 0 }),
          }),
        item.src && srcChip(item.src),
      ]),
    );
  };

  const select = (index, { focus = false, scroll = true } = {}) => {
    selected = index;
    nodes.forEach(({ button }, i) => {
      button.setAttribute("aria-pressed", String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
    const { button, item } = nodes[index];
    if (focus) button.focus({ preventScroll: true });
    if (scroll) {
      const wrap = track.parentElement;
      const target = button.parentElement.offsetLeft - wrap.clientWidth / 2 + button.offsetWidth / 2;
      wrap.scrollTo({ left: target, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
    track.style.setProperty("--progress", nodes[index].li.dataset.pos);
    renderDetail(item);
  };

  const stopPlay = () => {
    window.clearInterval(playTimer);
    playTimer = 0;
    play.setAttribute("aria-pressed", "false");
    play.textContent = "流れを再生";
  };

  const moveBy = (delta) => {
    const list = visible();
    const pos = list.findIndex((node) => nodes.indexOf(node) === selected);
    const next = list[clamp(pos + delta, 0, list.length - 1)];
    select(nodes.indexOf(next), { focus: true });
  };

  track.addEventListener("click", (event) => {
    const button = event.target.closest(".tl-node");
    if (!button || dragMoved) return;
    stopPlay();
    select(Number(button.dataset.index));
  });

  track.addEventListener("keydown", (event) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in keys) {
      event.preventDefault();
      stopPlay();
      moveBy(keys[event.key]);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const list = visible();
      select(nodes.indexOf(event.key === "Home" ? list[0] : list.at(-1)), { focus: true });
    }
  });

  // マウスでつかんで横にスクロール
  const wrap = track.parentElement;
  let drag = null;
  let dragMoved = false;
  wrap.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag = { x: event.clientX, left: wrap.scrollLeft };
    dragMoved = false;
  });
  window.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    if (Math.abs(dx) > 5) {
      dragMoved = true;
      wrap.classList.add("is-dragging");
    }
    if (dragMoved) wrap.scrollLeft = drag.left - dx;
  });
  window.addEventListener("pointerup", () => {
    drag = null;
    wrap.classList.remove("is-dragging");
    window.setTimeout(() => {
      dragMoved = false;
    }, 0);
  });

  const filters = [
    ["all", "すべて"],
    ["team", "チーム"],
    ["solo", "個人"],
  ];
  filterHost.append(
    ...filters.map(([key, label]) =>
      el("button", {
        class: "chip",
        type: "button",
        "aria-pressed": String(key === filter),
        text: label,
        onclick: (event) => {
          filter = key;
          filterHost.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === event.currentTarget)));
          nodes.forEach(({ item, li }) => {
            li.classList.toggle("is-dimmed", filter !== "all" && item.type !== filter);
          });
          const list = visible();
          if (!list.some((node) => nodes.indexOf(node) === selected)) select(nodes.indexOf(list.at(-1)));
          nodes.forEach(({ item, button }) => {
            button.disabled = filter !== "all" && item.type !== filter;
          });
        },
      }),
    ),
  );

  play.addEventListener("click", () => {
    if (playTimer) {
      stopPlay();
      return;
    }
    const list = visible();
    let pos = 0;
    select(nodes.indexOf(list[0]));
    play.setAttribute("aria-pressed", "true");
    play.textContent = "停止";
    playTimer = window.setInterval(() => {
      pos += 1;
      if (pos >= list.length) {
        stopPlay();
        return;
      }
      select(nodes.indexOf(list[pos]));
    }, 2200);
  });

  select(selected, { scroll: false });
  requestAnimationFrame(() => select(selected));
};

/* ==========================================================================
   Toolkit & verify list
   ========================================================================== */

const initToolkit = () => {
  const host = document.querySelector("#toolkit-list");
  const filterHost = document.querySelector("#toolkit-filter");
  const categories = [...new Set(techUses.map((use) => use.cat))];
  let filter = "all";

  const render = () => {
    host.replaceChildren(
      ...categories
        .map((cat) => {
          const rows = techUses.filter((use) => use.cat === cat && (filter === "all" || use.work === filter));
          if (!rows.length) return null;
          return el("section", { class: "use-group" }, [
            el("h3", { class: "use-group-title", text: cat }),
            el("ul", { class: "uses-list" }, rows.map((use) => renderUseRow(use))),
          ]);
        })
        .filter(Boolean),
    );
  };

  filterHost.append(
    ...[["all", "すべて"], ...works.map((work) => [work.id, work.title])].map(([key, label]) =>
      el("button", {
        class: "chip",
        type: "button",
        "aria-pressed": String(key === filter),
        text: label,
        onclick: (event) => {
          filter = key;
          filterHost.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === event.currentTarget)));
          render();
        },
      }),
    ),
  );
  render();
};

const initVerifyList = () => {
  const host = document.querySelector("#verify-list");
  const items = works.flatMap((work) =>
    work.steps.flatMap((step, index) =>
      (step.items ?? []).filter((item) => item.verify).map((item) => ({ work, text: item.text, step: index })),
    ),
  );

  host.append(
    ...items.map(({ work, text, step }) =>
      el("li", {}, [
        el("button", {
          class: "use-work",
          type: "button",
          text: work.title,
          "aria-label": `${work.title}のストーリーを開く`,
          onclick: (event) => openStory(work.id, { from: event.currentTarget, step }),
        }),
        el("span", { text }),
        verifyTag(),
      ]),
    ),
  );
};

/* ==========================================================================
   Keyboard shortcuts & boot
   ========================================================================== */

const initShortcuts = () => {
  document.addEventListener("keydown", (event) => {
    if (story.dialog.open || event.altKey || event.ctrlKey || event.metaKey) return;
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    const number = Number(event.key);
    if (number >= 1 && number <= works.length) {
      event.preventDefault();
      openStory(works[number - 1].id);
    } else if (event.key === "t" || event.key === "T") {
      toggleTrace();
    }
  });
};

const renderPortfolio = () => {
  document.querySelector("#portfolio-actions").append(
    ...actionLinks.map((link) => externalLink(link.label, link.href, link.primary ? "button button--primary" : "button")),
  );
  document.querySelector("#works").append(...works.map(createWorkCard));
  document.querySelector(".hero-copy").classList.add("reveal");

  initCardMotion();
  initGridGlow();
  initFocusStatus();
  initReveal();
  initStory();
  initTrace();
  initTimeline();
  initToolkit();
  initVerifyList();
  initShortcuts();
  startTickers();

  const match = window.location.hash.match(/^#work-(\w+)/);
  if (match && workById(match[1])) {
    openStory(match[1]);
  }

  reducedMotionQuery.addEventListener?.("change", () => document.querySelectorAll(".panel").forEach(resetCardMotion));
  window.addEventListener("load", scheduleTraceLines);
};

renderPortfolio();
