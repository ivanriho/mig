export const defaultLang = "sv" as const;

export const supportedLangs = [
  defaultLang,
  "ja",
  "sr",
  "en",
  "ru",
  "ko",
  "es",
  "fr",
  "ar",
  "pt-BR",
  "zh-CN",
  "da",
  "de",
] as const;

export type SiteLang = (typeof supportedLangs)[number];
export type RouteKey = "home" | "about" | "cv" | "stack";

export const nonDefaultLanguages = supportedLangs.filter(
  (lang) => lang !== defaultLang,
) as Exclude<SiteLang, typeof defaultLang>[];

export const languageOptions = [
  { code: "sv", label: "Svenska" },
  { code: "ja", label: "日本語" },
  { code: "sr", label: "Српски" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "ko", label: "한국어" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "pt-BR", label: "Português (BR)" },
  { code: "zh-CN", label: "中文" },
  { code: "da", label: "Dansk" },
  { code: "de", label: "Deutsch" },
] as const;

const routeSegments: Record<RouteKey, string> = {
  home: "",
  about: "about",
  cv: "cv",
  stack: "stack",
};

const translations = {
  sv: {
    nav: {
      home: "Hem",
      about: "Om mig",
      cv: "CV",
      stack: "Stack",
      translate: "Översätt",
      chooseLanguage: "Välj språk",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "E-post",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Personlig webbplats för Ivan Ristić Hofrén.",
      intro: "Hej, jag heter",
      role: "Elev & fritidsutvecklare",
      stats: {
        age: "15 år gammal (2010)",
      },
      ctas: {
        about: "Om mig",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Om mig",
      metaTitle: "Om mig — Ivan Ristić Hofrén",
      description: "Om mig — 15-årig elev & fritidsutvecklare.",
      age: "15 år gammal",
      school: "Fågelbacksskolan",
      intro:
        "Jag är 15 år och bor i Malmö. Jag går på Fågelbacksskolan och beskriver mig själv som en social och ansvarstagande person som också fungerar bra med att arbeta självständigt. Jag är tekniskt intresserad och tycker om att arbeta med webbutveckling på min fritid. Jag tävlingssimmar i Vellinge och tycker om träning. Jag har också en hund och tycker om att vara med djur. Tidigare har jag praoat i två veckor på ICA där jag fick hjälpa till med olika uppgifter i butiken, till exempel att fylla på varor, fronta hyllor och hjälpa kunder.",
      builtWith: "Hemsidan är byggd på",
      hobbiesTitle: "Hobbyer",
      hobbiesText:
        "Mina hobbies är djur, webbutveckling, simning, att resa och att umgås med vänner. Jag har en hund och tycker om att vara med djur. På fritiden arbetar jag också med webbutveckling, till exempel att skapa och designa hemsidor. Dessutom tävlingssimmar jag, vilket jag tycker är både roligt och utvecklande.",
      interestsHeading: "Intressen",
      interests: ["Djur", "Webbutveckling", "Simning", "Resa", "Umgås"],
      workTitle: "Tidigare jobb",
      workText:
        "Jag praoade i två veckor på ICA och fick prova på många olika arbetsuppgifter i butiken. Jag plockade upp varor och fyllde på hyllor, frontade varor så att det såg snyggt ut i butiken, hjälpte till i kassan, sorterade och packade upp leveranser i lagret samt hjälpte kunder som behövde hitta varor. Jag fick också hjälpa till att hålla ordning i butiken och se till att allt var rent och organiserat.",
      lessonsHeading: "Lärdomar",
      lessons: ["Kassa", "Varuplock", "Kundservice", "Lager", "Butiksordning"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Ladda ner CV för Ivan Ristić Hofrén",
      intro: "Här kan du ladda ner mitt CV direkt som PDF.",
      download: "Ladda ner CV",
      openPdf: "Öppna PDF i ny flik",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Verktyg och tekniker jag kan just nu.",
      intro: "Verktyg och tekniker jag arbetar med",
      filterLabel: "Filtrera",
      filters: {
        all: "Alla",
        web: "Webbutveckling",
        styling: "Styling",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Semantisk markup som bildar grunden för välstrukturerade, tillgängliga och SEO-vänliga webbsidor.",
          categoryKey: "web",
          categoryLabel: "Webbutveckling",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Utility-first CSS-ramverk som gör det lätt att bygga responsiva och konsekventa gränssnitt direkt i markupen.",
          categoryKey: "styling",
          categoryLabel: "Styling",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Typsäker JavaScript som ger bättre autokomplettering, säkrare refaktorering och färre runtime-fel i större projekt.",
          categoryKey: "web",
          categoryLabel: "Webbutveckling",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Mitt primära fullstack-ramverk för både frontend och backend med App Router, API routes, server actions och inbyggt stöd för TypeScript.",
          categoryKey: "web",
          categoryLabel: "Webbutveckling",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "TypeScript-first ORM tillsammans med PostgreSQL för typsäkra modeller, migreringar och robust datalagring.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Flexibel autentiseringslösning med stöd för OAuth-leverantörer, e-postlänkar och credentials-inloggning.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Distribuerat versionshanteringssystem jag använder dagligen för branchar, commits, merges och historik i kodbaser.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Plattformen jag använder för versionshantering, pull requests, kodgranskning och deployment-flöden i projekt.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Öppna AI-chat",
      panelAriaLabel: "AI-chat",
      title: "AI-assistent",
      minimize: "Minimera chat",
      greeting:
        "Hej! Jag är Ivans AI-assistent. Fråga mig vad du vill om Ivan, hans projekt eller kompetenser.",
      inputPlaceholder: "Skriv ett meddelande…",
      send: "Skicka",
      assistantLabel: "AI",
      userLabel: "Du",
      noResponse: "Tyvärr fick jag inget svar.",
      apiError: "Det gick inte att hämta ett svar just nu.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私について",
      cv: "履歴書",
      stack: "技術スタック",
      translate: "翻訳",
      chooseLanguage: "言語を選択",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "メール",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Ivan Ristić Hofrén の個人ウェブサイト。",
      intro: "こんにちは、私は",
      role: "学生・個人開発者",
      stats: {
        age: "15歳 (2010年生まれ)",
      },
      ctas: {
        about: "私について",
        cv: "履歴書",
        stack: "技術スタック",
      },
    },
    about: {
      title: "私について",
      metaTitle: "私について — Ivan Ristić Hofrén",
      description: "15歳の学生であり個人開発者である Ivan の紹介。",
      age: "15歳",
      school: "Fågelbacksskolan",
      intro:
        "私は15歳で、マルメに住んでいます。Fågelbacksskolan に通っており、社交的で責任感があり、自立して働くこともできる人間だと自分を表現しています。技術に強い関心があり、自由時間にはウェブ開発に取り組むのが好きです。Vellinge で競泳をしており、運動も好きです。犬を飼っていて、動物と過ごす時間も大切にしています。以前は ICA で2週間の職場体験をし、商品の補充、棚の整理、接客などさまざまな仕事を経験しました。",
      builtWith: "このサイトは",
      hobbiesTitle: "趣味",
      hobbiesText:
        "私の趣味は動物、ウェブ開発、水泳、旅行、そして友人と過ごすことです。犬を飼っていて、動物と関わるのが好きです。自由時間にはウェブサイトを作成したりデザインしたりしています。また競泳にも取り組んでおり、とても楽しく、自分を成長させてくれる活動だと感じています。",
      interestsHeading: "興味分野",
      interests: ["動物", "ウェブ開発", "水泳", "旅行", "交流"],
      workTitle: "これまでの仕事",
      workText:
        "ICA で2週間の職場体験を行い、店舗内のさまざまな業務を経験しました。商品の補充、棚の見栄えを整える作業、レジ補助、倉庫での荷物の仕分けと開梱、商品を探しているお客様の案内などを担当しました。また、店内を清潔で整理された状態に保つ手伝いもしました。",
      lessonsHeading: "学んだこと",
      lessons: ["レジ", "品出し", "接客", "倉庫", "売場整理"],
    },
    cv: {
      title: "履歴書",
      metaTitle: "履歴書 — Ivan Ristić Hofrén",
      description: "Ivan Ristić Hofrén の履歴書をダウンロード。",
      intro: "ここから私の履歴書を PDF で直接ダウンロードできます。",
      download: "履歴書をダウンロード",
      openPdf: "PDF を新しいタブで開く",
    },
    stack: {
      title: "技術スタック",
      metaTitle: "技術スタック — Ivan Ristić Hofrén",
      description: "現在扱っているツールと技術。",
      intro: "私が扱っているツールと技術",
      filterLabel: "絞り込み",
      filters: {
        all: "すべて",
        web: "Web開発",
        styling: "スタイリング",
        backend: "バックエンド",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "構造化され、アクセシブルで SEO に強いウェブページの土台となるセマンティックマークアップです。",
          categoryKey: "web",
          categoryLabel: "Web開発",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "レスポンシブで一貫性のある UI をマークアップ内で効率よく構築できる utility-first CSS フレームワークです。",
          categoryKey: "styling",
          categoryLabel: "スタイリング",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "より良い補完、安全なリファクタリング、大規模プロジェクトでの実行時エラー削減を実現する型付き JavaScript です。",
          categoryKey: "web",
          categoryLabel: "Web開発",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "App Router、API routes、server actions、TypeScript サポートを備えた、私の主要なフルスタックフレームワークです。",
          categoryKey: "web",
          categoryLabel: "Web開発",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "Prisma と PostgreSQL を組み合わせた、型安全なモデル、マイグレーション、堅牢なデータ管理のための構成です。",
          categoryKey: "backend",
          categoryLabel: "バックエンド",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "OAuth、メールリンク、認証情報ログインに対応した柔軟な認証ソリューションです。",
          categoryKey: "backend",
          categoryLabel: "バックエンド",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "ブランチ、コミット、マージ、履歴管理のために日常的に使用している分散バージョン管理システムです。",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "バージョン管理、プルリクエスト、コードレビュー、デプロイフローに使っているプラットフォームです。",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "AIチャットを開く",
      panelAriaLabel: "AIチャット",
      title: "AIアシスタント",
      minimize: "チャットを最小化",
      greeting:
        "こんにちは。私は Ivan の AI アシスタントです。Ivan や彼のプロジェクト、スキルについて気軽に質問してください。",
      inputPlaceholder: "メッセージを入力…",
      send: "送信",
      assistantLabel: "AI",
      userLabel: "あなた",
      noResponse: "申し訳ありません。回答を取得できませんでした。",
      apiError: "現在は回答を取得できません。",
    },
  },
  sr: {
    nav: {
      home: "Почетна",
      about: "О мени",
      cv: "CV",
      stack: "Стек",
      translate: "Преведи",
      chooseLanguage: "Изабери језик",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "Е-пошта",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Лична веб страница Ивана Ристића Хофрена.",
      intro: "Здраво, ја сам",
      role: "Ученик и девелопер у слободно време",
      stats: {
        age: "15 година (2010)",
      },
      ctas: {
        about: "О мени",
        cv: "CV",
        stack: "Стек",
      },
    },
    about: {
      title: "О мени",
      metaTitle: "О мени — Ivan Ristić Hofrén",
      description: "О мени — 15-годишњи ученик и девелопер у слободно време.",
      age: "15 година",
      school: "Fågelbacksskolan",
      intro:
        "Имам 15 година и живим у Малмеу. Идем у Fågelbacksskolan и описујем себе као друштвену и одговорну особу која добро функционише и када ради самостално. Занимам се за технологију и волим да се бавим веб развојем у слободно време. Такмичарски пливам у Vellinge-у и волим тренинг. Такође имам пса и волим животиње. Раније сам био на двонедељној пракси у ICA где сам помагао у продавници, на пример допуњавао робу, сређивао полице и помагао купцима.",
      builtWith: "Сајт је направљен уз помоћ",
      hobbiesTitle: "Хобији",
      hobbiesText:
        "Моји хобији су животиње, веб развој, пливање, путовања и дружење са пријатељима. Имам пса и волим да будем са животињама. У слободно време радим и на веб развоју, на пример правим и дизајнирам сајтове. Поред тога се бавим такмичарским пливањем, што ми је и забавно и корисно за развој.",
      interestsHeading: "Интересовања",
      interests: ["Животиње", "Веб развој", "Пливање", "Путовања", "Дружење"],
      workTitle: "Претходни посао",
      workText:
        "Био сам две недеље на пракси у ICA и пробао много различитих задатака у продавници. Допуњавао сам робу и полице, сређивао производе да продавница изгледа уредно, помагао на каси, сортирао и распаковао испоруке у складишту и помагао купцима да пронађу производе. Такође сам помагао да продавница остане уредна, чиста и организована.",
      lessonsHeading: "Шта сам научио",
      lessons: ["Каса", "Допуна робе", "Корисничка подршка", "Складиште", "Ред у продавници"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Преузми CV Ивана Ристића Хофрена",
      intro: "Овде можеш директно да преузмеш мој CV као PDF.",
      download: "Преузми CV",
      openPdf: "Отвори PDF у новом табу",
    },
    stack: {
      title: "Стек",
      metaTitle: "Стек — Ivan Ristić Hofrén",
      description: "Алати и технологије које тренутно користим.",
      intro: "Алати и технологије са којима радим",
      filterLabel: "Филтрирај",
      filters: {
        all: "Све",
        web: "Веб развој",
        styling: "Стилизација",
        backend: "Бекенд",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Семантички markup који чини основу добро структурираних, приступачних и SEO-пријатељских веб страница.",
          categoryKey: "web",
          categoryLabel: "Веб развој",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Utility-first CSS framework који олакшава изградњу респонзивних и доследних интерфејса директно у markupu.",
          categoryKey: "styling",
          categoryLabel: "Стилизација",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Типизовани JavaScript који доноси бољи autocomplete, сигурније рефакторисање и мање грешака при извршавању у већим пројектима.",
          categoryKey: "web",
          categoryLabel: "Веб развој",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Мој главни fullstack framework за frontend и backend, са App Router-ом, API рутама, server actions и уграђеном подршком за TypeScript.",
          categoryKey: "web",
          categoryLabel: "Веб развој",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "TypeScript-first ORM заједно са PostgreSQL-ом за тип-сигурне моделе, миграције и поуздано складиштење података.",
          categoryKey: "backend",
          categoryLabel: "Бекенд",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Флексибилно решење за аутентификацију са подршком за OAuth провајдере, e-mail линкове и пријаву са акредитивима.",
          categoryKey: "backend",
          categoryLabel: "Бекенд",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Дистрибуирани систем за контролу верзија који свакодневно користим за branch-eve, commit-e, merge-eve и историју кода.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Платформа коју користим за управљање верзијама, pull request-ове, code review и deployment токове у пројектима.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Отвори AI чет",
      panelAriaLabel: "AI чет",
      title: "AI асистент",
      minimize: "Смањи чет",
      greeting:
        "Здраво. Ја сам Иванов AI асистент. Питај ме било шта о Ивану, његовим пројектима или вештинама.",
      inputPlaceholder: "Напиши поруку…",
      send: "Пошаљи",
      assistantLabel: "AI",
      userLabel: "Ти",
      noResponse: "Нажалост, нисам добио одговор.",
      apiError: "Тренутно није могуће добити одговор.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      cv: "CV",
      stack: "Stack",
      translate: "Translate",
      chooseLanguage: "Choose language",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "Email",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Personal website for Ivan Ristić Hofrén.",
      intro: "Hi, my name is",
      role: "Student & hobby developer",
      stats: {
        age: "15 years old (2010)",
      },
      ctas: {
        about: "About Me",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "About Me",
      metaTitle: "About Me — Ivan Ristić Hofrén",
      description: "About me — 15-year-old student and hobby developer.",
      age: "15 years old",
      school: "Fågelbacksskolan",
      intro:
        "I am 15 years old and live in Malmö. I attend Fågelbacksskolan and describe myself as a social and responsible person who also works well independently. I am interested in technology and enjoy working with web development in my spare time. I compete in swimming in Vellinge and enjoy training. I also have a dog and like being around animals. Previously, I did a two-week internship at ICA where I helped with different tasks in the store, such as restocking items, facing shelves and helping customers.",
      builtWith: "The website is built with",
      hobbiesTitle: "Hobbies",
      hobbiesText:
        "My hobbies are animals, web development, swimming, traveling and spending time with friends. I have a dog and enjoy being around animals. In my spare time I also work with web development, for example creating and designing websites. I also compete in swimming, which I find both fun and rewarding.",
      interestsHeading: "Interests",
      interests: ["Animals", "Web Development", "Swimming", "Travel", "Socializing"],
      workTitle: "Previous Work",
      workText:
        "I completed a two-week internship at ICA and got to try many different tasks in the store. I stocked shelves, arranged products so the store looked neat, helped at the checkout, sorted and unpacked deliveries in the stockroom, and helped customers find products. I also helped keep the store clean, tidy and organized.",
      lessonsHeading: "What I Learned",
      lessons: ["Checkout", "Restocking", "Customer Service", "Stockroom", "Store Organization"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Download Ivan Ristić Hofrén's CV",
      intro: "Here you can download my CV directly as a PDF.",
      download: "Download CV",
      openPdf: "Open PDF in new tab",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Tools and technologies I work with right now.",
      intro: "Tools and technologies I work with",
      filterLabel: "Filter",
      filters: {
        all: "All",
        web: "Web Development",
        styling: "Styling",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Semantic markup that forms the foundation of well-structured, accessible and SEO-friendly web pages.",
          categoryKey: "web",
          categoryLabel: "Web Development",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "A utility-first CSS framework that makes it easy to build responsive and consistent interfaces directly in your markup.",
          categoryKey: "styling",
          categoryLabel: "Styling",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Typed JavaScript that provides better autocomplete, safer refactoring and fewer runtime errors in larger projects.",
          categoryKey: "web",
          categoryLabel: "Web Development",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "My primary fullstack framework for both frontend and backend, with App Router, API routes, server actions and built-in TypeScript support.",
          categoryKey: "web",
          categoryLabel: "Web Development",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "A TypeScript-first ORM together with PostgreSQL for type-safe models, migrations and robust data storage.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "A flexible authentication solution with support for OAuth providers, email links and credential-based sign-in.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "A distributed version control system I use daily for branches, commits, merges and code history.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "The platform I use for version control, pull requests, code reviews and deployment workflows in projects.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Open AI chat",
      panelAriaLabel: "AI chat",
      title: "AI Assistant",
      minimize: "Minimize chat",
      greeting:
        "Hi. I'm Ivan's AI assistant. Ask me anything about Ivan, his projects or his skills.",
      inputPlaceholder: "Type a message…",
      send: "Send",
      assistantLabel: "AI",
      userLabel: "You",
      noResponse: "Sorry, I didn't get a response.",
      apiError: "Unable to fetch a response right now.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      cv: "Резюме",
      stack: "Стек",
      translate: "Перевести",
      chooseLanguage: "Выберите язык",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "Эл. почта",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Личный сайт Ивана Ристича Хофрена.",
      intro: "Привет, меня зовут",
      role: "Ученик и разработчик в свободное время",
      stats: {
        age: "15 лет (2010)",
      },
      ctas: {
        about: "Обо мне",
        cv: "Резюме",
        stack: "Стек",
      },
    },
    about: {
      title: "Обо мне",
      metaTitle: "Обо мне — Ivan Ristić Hofrén",
      description: "Обо мне — 15-летний ученик и разработчик в свободное время.",
      age: "15 лет",
      school: "Fågelbacksskolan",
      intro:
        "Мне 15 лет, я живу в Мальмё. Я учусь в Fågelbacksskolan и считаю себя общительным и ответственным человеком, который также хорошо работает самостоятельно. Я интересуюсь технологиями и люблю заниматься веб-разработкой в свободное время. Я занимаюсь спортивным плаванием в Vellinge и люблю тренировки. У меня также есть собака, и мне нравится проводить время с животными. Ранее я проходил двухнедельную практику в ICA, где помогал с разными задачами в магазине: пополнение товаров, выкладка на полках и помощь покупателям.",
      builtWith: "Сайт создан с помощью",
      hobbiesTitle: "Хобби",
      hobbiesText:
        "Мои хобби - животные, веб-разработка, плавание, путешествия и общение с друзьями. У меня есть собака, и мне нравится быть рядом с животными. В свободное время я также занимаюсь веб-разработкой, например создаю и оформляю сайты. Кроме того, я занимаюсь спортивным плаванием, что для меня и интересно, и полезно для развития.",
      interestsHeading: "Интересы",
      interests: ["Животные", "Веб-разработка", "Плавание", "Путешествия", "Общение"],
      workTitle: "Предыдущий опыт",
      workText:
        "Я проходил двухнедельную практику в ICA и попробовал множество разных задач в магазине. Я пополнял товары и полки, раскладывал продукцию так, чтобы магазин выглядел аккуратно, помогал на кассе, сортировал и распаковывал поставки на складе, а также помогал покупателям находить товары. Я также помогал поддерживать порядок, чистоту и организованность в магазине.",
      lessonsHeading: "Чему я научился",
      lessons: ["Касса", "Пополнение товаров", "Обслуживание клиентов", "Склад", "Порядок в магазине"],
    },
    cv: {
      title: "Резюме",
      metaTitle: "Резюме — Ivan Ristić Hofrén",
      description: "Скачать резюме Ивана Ристича Хофрена",
      intro: "Здесь можно скачать мое резюме в формате PDF.",
      download: "Скачать резюме",
      openPdf: "Открыть PDF в новой вкладке",
    },
    stack: {
      title: "Стек",
      metaTitle: "Стек — Ivan Ristić Hofrén",
      description: "Инструменты и технологии, с которыми я сейчас работаю.",
      intro: "Инструменты и технологии, с которыми я работаю",
      filterLabel: "Фильтр",
      filters: {
        all: "Все",
        web: "Веб-разработка",
        styling: "Стилизация",
        backend: "Бэкенд",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Семантическая разметка, которая является основой хорошо структурированных, доступных и SEO-дружественных веб-страниц.",
          categoryKey: "web",
          categoryLabel: "Веб-разработка",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "CSS-фреймворк utility-first, который упрощает создание адаптивных и единообразных интерфейсов прямо в разметке.",
          categoryKey: "styling",
          categoryLabel: "Стилизация",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Типизированный JavaScript с лучшим автодополнением, более безопасным рефакторингом и меньшим количеством runtime-ошибок в крупных проектах.",
          categoryKey: "web",
          categoryLabel: "Веб-разработка",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Мой основной fullstack-фреймворк для фронтенда и бэкенда: App Router, API routes, server actions и встроенная поддержка TypeScript.",
          categoryKey: "web",
          categoryLabel: "Веб-разработка",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "ORM TypeScript-first вместе с PostgreSQL для типобезопасных моделей, миграций и надежного хранения данных.",
          categoryKey: "backend",
          categoryLabel: "Бэкенд",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Гибкое решение для аутентификации с поддержкой OAuth-провайдеров, email-ссылок и входа по учетным данным.",
          categoryKey: "backend",
          categoryLabel: "Бэкенд",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Распределенная система контроля версий, которую я использую каждый день для веток, коммитов, слияний и истории кода.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Платформа, которую я использую для контроля версий, pull request, code review и деплой-процессов в проектах.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Открыть AI-чат",
      panelAriaLabel: "AI-чат",
      title: "AI-ассистент",
      minimize: "Свернуть чат",
      greeting:
        "Привет. Я AI-ассистент Ивана. Спроси меня что угодно об Иване, его проектах или навыках.",
      inputPlaceholder: "Введите сообщение…",
      send: "Отправить",
      assistantLabel: "AI",
      userLabel: "Вы",
      noResponse: "К сожалению, я не получил ответ.",
      apiError: "Сейчас не удалось получить ответ.",
    },
  },
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      cv: "이력서",
      stack: "스택",
      translate: "번역",
      chooseLanguage: "언어 선택",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "이메일",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Ivan Ristić Hofrén의 개인 웹사이트입니다.",
      intro: "안녕하세요, 저는",
      role: "학생이자 취미 개발자",
      stats: {
        age: "15세 (2010년생)",
      },
      ctas: {
        about: "소개",
        cv: "이력서",
        stack: "스택",
      },
    },
    about: {
      title: "소개",
      metaTitle: "소개 — Ivan Ristić Hofrén",
      description: "소개 — 15세 학생이자 취미 개발자.",
      age: "15세",
      school: "Fågelbacksskolan",
      intro:
        "저는 15세이고 말뫼에 살고 있습니다. Fågelbacksskolan에 다니며, 사교적이고 책임감이 있으며 독립적으로도 잘 일하는 사람이라고 생각합니다. 기술에 관심이 많고 여가 시간에는 웹 개발을 즐깁니다. Vellinge에서 경쟁 수영을 하고 있으며 운동을 좋아합니다. 또한 반려견이 있고 동물과 함께하는 시간을 좋아합니다. 이전에는 ICA에서 2주간 실습을 하며 상품 보충, 진열 정리, 고객 응대 등 다양한 업무를 도왔습니다.",
      builtWith: "이 웹사이트는 다음 기술로 만들었습니다:",
      hobbiesTitle: "취미",
      hobbiesText:
        "저의 취미는 동물, 웹 개발, 수영, 여행, 그리고 친구들과 시간을 보내는 것입니다. 반려견이 있고 동물과 함께하는 것을 좋아합니다. 여가 시간에는 웹사이트를 만들고 디자인하는 등 웹 개발도 합니다. 또한 경쟁 수영도 하고 있으며, 재미있고 성장에 도움이 된다고 느낍니다.",
      interestsHeading: "관심사",
      interests: ["동물", "웹 개발", "수영", "여행", "교류"],
      workTitle: "이전 경험",
      workText:
        "저는 ICA에서 2주간 실습하며 매장의 다양한 업무를 경험했습니다. 상품과 선반을 채우고, 매장이 깔끔해 보이도록 진열을 정리하고, 계산대 지원을 하고, 창고에서 입고 물품을 분류·개봉했으며, 고객이 상품을 찾도록 도왔습니다. 또한 매장을 깨끗하고 정돈된 상태로 유지하는 데도 참여했습니다.",
      lessonsHeading: "배운 점",
      lessons: ["계산", "상품 보충", "고객 서비스", "창고", "매장 정리"],
    },
    cv: {
      title: "이력서",
      metaTitle: "이력서 — Ivan Ristić Hofrén",
      description: "Ivan Ristić Hofrén의 이력서를 다운로드하세요",
      intro: "여기서 제 이력서를 PDF로 바로 다운로드할 수 있습니다.",
      download: "이력서 다운로드",
      openPdf: "새 탭에서 PDF 열기",
    },
    stack: {
      title: "스택",
      metaTitle: "스택 — Ivan Ristić Hofrén",
      description: "현재 제가 사용하는 도구와 기술입니다.",
      intro: "제가 작업할 때 사용하는 도구와 기술",
      filterLabel: "필터",
      filters: {
        all: "전체",
        web: "웹 개발",
        styling: "스타일링",
        backend: "백엔드",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "구조적이고 접근 가능하며 SEO 친화적인 웹 페이지의 기반이 되는 시맨틱 마크업입니다.",
          categoryKey: "web",
          categoryLabel: "웹 개발",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "마크업 안에서 반응형이고 일관된 인터페이스를 쉽게 구축할 수 있는 utility-first CSS 프레임워크입니다.",
          categoryKey: "styling",
          categoryLabel: "스타일링",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "더 나은 자동완성, 안전한 리팩터링, 대규모 프로젝트에서 더 적은 런타임 오류를 제공하는 타입 기반 JavaScript입니다.",
          categoryKey: "web",
          categoryLabel: "웹 개발",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "프론트엔드와 백엔드를 모두 위한 저의 주력 풀스택 프레임워크로, App Router, API routes, server actions, TypeScript 지원을 포함합니다.",
          categoryKey: "web",
          categoryLabel: "웹 개발",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "Prisma와 PostgreSQL을 함께 사용하여 타입 안정적인 모델, 마이그레이션, 안정적인 데이터 저장을 구현합니다.",
          categoryKey: "backend",
          categoryLabel: "백엔드",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "OAuth 제공자, 이메일 링크, 자격 증명 로그인을 지원하는 유연한 인증 솔루션입니다.",
          categoryKey: "backend",
          categoryLabel: "백엔드",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "브랜치, 커밋, 머지, 코드 이력 관리를 위해 매일 사용하는 분산 버전 관리 시스템입니다.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "버전 관리, 풀 리퀘스트, 코드 리뷰, 배포 워크플로우를 위해 사용하는 플랫폼입니다.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "AI 채팅 열기",
      panelAriaLabel: "AI 채팅",
      title: "AI 어시스턴트",
      minimize: "채팅 최소화",
      greeting:
        "안녕하세요. 저는 Ivan의 AI 어시스턴트입니다. Ivan, 그의 프로젝트, 기술에 대해 무엇이든 물어보세요.",
      inputPlaceholder: "메시지 입력…",
      send: "보내기",
      assistantLabel: "AI",
      userLabel: "사용자",
      noResponse: "죄송합니다. 응답을 받지 못했습니다.",
      apiError: "지금은 응답을 가져올 수 없습니다.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      cv: "CV",
      stack: "Stack",
      translate: "Traducir",
      chooseLanguage: "Elegir idioma",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "Correo",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Sitio web personal de Ivan Ristić Hofrén.",
      intro: "Hola, me llamo",
      role: "Estudiante y desarrollador en su tiempo libre",
      stats: {
        age: "15 años (2010)",
      },
      ctas: {
        about: "Sobre mí",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Sobre mí",
      metaTitle: "Sobre mí — Ivan Ristić Hofrén",
      description: "Sobre mí — estudiante de 15 años y desarrollador en su tiempo libre.",
      age: "15 años",
      school: "Fågelbacksskolan",
      intro:
        "Tengo 15 años y vivo en Malmö. Estudio en Fågelbacksskolan y me describo como una persona sociable y responsable que también trabaja bien de forma independiente. Me interesa la tecnología y me gusta trabajar con desarrollo web en mi tiempo libre. Compito en natación en Vellinge y me gusta entrenar. También tengo un perro y me gusta estar con animales. Anteriormente hice prácticas durante dos semanas en ICA, donde ayudé con distintas tareas de la tienda, por ejemplo reponer productos, ordenar estanterías y ayudar a clientes.",
      builtWith: "El sitio web está construido con",
      hobbiesTitle: "Aficiones",
      hobbiesText:
        "Mis aficiones son los animales, el desarrollo web, la natación, viajar y pasar tiempo con amigos. Tengo un perro y me gusta estar con animales. En mi tiempo libre también trabajo con desarrollo web, por ejemplo creando y diseñando sitios web. Además, practico natación competitiva, algo que me parece divertido y formativo.",
      interestsHeading: "Intereses",
      interests: ["Animales", "Desarrollo web", "Natación", "Viajar", "Socializar"],
      workTitle: "Experiencia previa",
      workText:
        "Realicé dos semanas de prácticas en ICA y probé muchas tareas distintas en la tienda. Reponía productos y estanterías, organizaba productos para que la tienda se viera ordenada, ayudaba en caja, clasificaba y desempaquetaba entregas en el almacén y ayudaba a clientes a encontrar productos. También ayudé a mantener la tienda limpia, ordenada y organizada.",
      lessonsHeading: "Lo que aprendí",
      lessons: ["Caja", "Reposición", "Atención al cliente", "Almacén", "Orden en tienda"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Descargar CV de Ivan Ristić Hofrén",
      intro: "Aquí puedes descargar mi CV directamente en PDF.",
      download: "Descargar CV",
      openPdf: "Abrir PDF en una pestaña nueva",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Herramientas y tecnologías con las que trabajo ahora.",
      intro: "Herramientas y tecnologías con las que trabajo",
      filterLabel: "Filtrar",
      filters: {
        all: "Todas",
        web: "Desarrollo web",
        styling: "Estilos",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Marcado semántico que forma la base de páginas web bien estructuradas, accesibles y optimizadas para SEO.",
          categoryKey: "web",
          categoryLabel: "Desarrollo web",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Framework CSS utility-first que facilita crear interfaces responsivas y consistentes directamente en el marcado.",
          categoryKey: "styling",
          categoryLabel: "Estilos",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "JavaScript tipado que ofrece mejor autocompletado, refactorización más segura y menos errores en ejecución en proyectos grandes.",
          categoryKey: "web",
          categoryLabel: "Desarrollo web",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Mi framework fullstack principal para frontend y backend con App Router, API routes, server actions y soporte integrado para TypeScript.",
          categoryKey: "web",
          categoryLabel: "Desarrollo web",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "ORM orientado a TypeScript junto con PostgreSQL para modelos tipados, migraciones y almacenamiento robusto de datos.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Solución flexible de autenticación con soporte para proveedores OAuth, enlaces por correo e inicio de sesión con credenciales.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Sistema de control de versiones distribuido que uso a diario para ramas, commits, merges e historial de código.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Plataforma que uso para control de versiones, pull requests, revisión de código y flujos de despliegue.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Abrir chat de IA",
      panelAriaLabel: "Chat de IA",
      title: "Asistente de IA",
      minimize: "Minimizar chat",
      greeting:
        "Hola. Soy el asistente de IA de Ivan. Pregúntame lo que quieras sobre Ivan, sus proyectos o sus habilidades.",
      inputPlaceholder: "Escribe un mensaje…",
      send: "Enviar",
      assistantLabel: "IA",
      userLabel: "Tú",
      noResponse: "Lo siento, no recibí una respuesta.",
      apiError: "No se pudo obtener una respuesta ahora mismo.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      cv: "CV",
      stack: "Stack",
      translate: "Traduire",
      chooseLanguage: "Choisir la langue",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "E-mail",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Site personnel d'Ivan Ristić Hofrén.",
      intro: "Bonjour, je m'appelle",
      role: "Étudiant et développeur à ses heures perdues",
      stats: {
        age: "15 ans (2010)",
      },
      ctas: {
        about: "À propos",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "À propos",
      metaTitle: "À propos — Ivan Ristić Hofrén",
      description: "À propos — élève de 15 ans et développeur à ses heures perdues.",
      age: "15 ans",
      school: "Fågelbacksskolan",
      intro:
        "J'ai 15 ans et j'habite à Malmö. Je fréquente Fågelbacksskolan et je me décris comme une personne sociable et responsable, capable aussi de travailler de manière autonome. Je m'intéresse à la technologie et j'aime faire du développement web pendant mon temps libre. Je pratique la natation en compétition à Vellinge et j'aime m'entraîner. J'ai aussi un chien et j'aime être avec les animaux. J'ai auparavant fait un stage de deux semaines chez ICA, où j'ai aidé sur différentes tâches en magasin, par exemple le réassort, l'organisation des rayons et l'aide aux clients.",
      builtWith: "Le site est construit avec",
      hobbiesTitle: "Loisirs",
      hobbiesText:
        "Mes loisirs sont les animaux, le développement web, la natation, les voyages et le temps passé avec mes amis. J'ai un chien et j'aime être avec les animaux. Pendant mon temps libre, je travaille aussi sur le développement web, par exemple en créant et en concevant des sites. Je fais également de la natation en compétition, ce que je trouve à la fois amusant et formateur.",
      interestsHeading: "Centres d'intérêt",
      interests: ["Animaux", "Développement web", "Natation", "Voyages", "Vie sociale"],
      workTitle: "Expérience précédente",
      workText:
        "J'ai effectué un stage de deux semaines chez ICA et découvert de nombreuses tâches en magasin. Je réapprovisionnais les rayons, mettais les produits en ordre pour garder le magasin soigné, aidais à la caisse, triais et déballais les livraisons au stock, et aidais les clients à trouver des produits. J'ai aussi contribué à maintenir le magasin propre, rangé et organisé.",
      lessonsHeading: "Ce que j'ai appris",
      lessons: ["Caisse", "Réassort", "Service client", "Stock", "Organisation du magasin"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Télécharger le CV d'Ivan Ristić Hofrén",
      intro: "Ici, vous pouvez télécharger directement mon CV en PDF.",
      download: "Télécharger le CV",
      openPdf: "Ouvrir le PDF dans un nouvel onglet",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Outils et technologies avec lesquels je travaille actuellement.",
      intro: "Outils et technologies avec lesquels je travaille",
      filterLabel: "Filtrer",
      filters: {
        all: "Tous",
        web: "Développement web",
        styling: "Style",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Un balisage sémantique qui constitue la base de pages web bien structurées, accessibles et optimisées pour le SEO.",
          categoryKey: "web",
          categoryLabel: "Développement web",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Un framework CSS utility-first qui facilite la création d'interfaces réactives et cohérentes directement dans le markup.",
          categoryKey: "styling",
          categoryLabel: "Style",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "JavaScript typé offrant une meilleure autocomplétion, un refactoring plus sûr et moins d'erreurs à l'exécution dans les grands projets.",
          categoryKey: "web",
          categoryLabel: "Développement web",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Mon framework fullstack principal pour le frontend et le backend avec App Router, API routes, server actions et support TypeScript intégré.",
          categoryKey: "web",
          categoryLabel: "Développement web",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "Un ORM orienté TypeScript avec PostgreSQL pour des modèles typés, des migrations et un stockage de données robuste.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Solution d'authentification flexible avec prise en charge des fournisseurs OAuth, des liens e-mail et de la connexion par identifiants.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Système de contrôle de version distribué que j'utilise chaque jour pour les branches, commits, merges et l'historique du code.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "La plateforme que j'utilise pour le versioning, les pull requests, la revue de code et les flux de déploiement.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Ouvrir le chat IA",
      panelAriaLabel: "Chat IA",
      title: "Assistant IA",
      minimize: "Réduire le chat",
      greeting:
        "Bonjour. Je suis l'assistant IA d'Ivan. Pose-moi ce que tu veux sur Ivan, ses projets ou ses compétences.",
      inputPlaceholder: "Écris un message…",
      send: "Envoyer",
      assistantLabel: "IA",
      userLabel: "Vous",
      noResponse: "Désolé, je n'ai pas reçu de réponse.",
      apiError: "Impossible d'obtenir une réponse pour le moment.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      cv: "السيرة الذاتية",
      stack: "التقنيات",
      translate: "ترجمة",
      chooseLanguage: "اختر اللغة",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "البريد الإلكتروني",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "الموقع الشخصي لـ Ivan Ristić Hofrén.",
      intro: "مرحبًا، اسمي",
      role: "طالب ومطور في وقت الفراغ",
      stats: {
        age: "15 عامًا (2010)",
      },
      ctas: {
        about: "نبذة عني",
        cv: "السيرة الذاتية",
        stack: "التقنيات",
      },
    },
    about: {
      title: "نبذة عني",
      metaTitle: "نبذة عني — Ivan Ristić Hofrén",
      description: "نبذة عني - طالب عمره 15 عامًا ومطور في وقت الفراغ.",
      age: "15 عامًا",
      school: "Fågelbacksskolan",
      intro:
        "عمري 15 سنة وأعيش في مالمو. أدرس في Fågelbacksskolan وأصف نفسي بأنني اجتماعي ومسؤول وأجيد أيضًا العمل بشكل مستقل. أهتم بالتقنية وأحب تطوير الويب في وقت الفراغ. أمارس السباحة التنافسية في Vellinge وأحب التدريب. لدي أيضًا كلب وأحب قضاء الوقت مع الحيوانات. سابقًا تدربت لمدة أسبوعين في ICA وساعدت في مهام مختلفة في المتجر مثل تعبئة البضائع وتنظيم الرفوف ومساعدة العملاء.",
      builtWith: "تم بناء الموقع باستخدام",
      hobbiesTitle: "الهوايات",
      hobbiesText:
        "هواياتي هي الحيوانات وتطوير الويب والسباحة والسفر وقضاء الوقت مع الأصدقاء. لدي كلب وأحب الحيوانات. في وقت الفراغ أعمل أيضًا على تطوير الويب مثل إنشاء وتصميم المواقع. كما أمارس السباحة التنافسية، وهو شيء ممتع ومفيد لتطوري.",
      interestsHeading: "الاهتمامات",
      interests: ["الحيوانات", "تطوير الويب", "السباحة", "السفر", "التواصل الاجتماعي"],
      workTitle: "الخبرة السابقة",
      workText:
        "أتممت تدريبًا لمدة أسبوعين في ICA وجربت العديد من المهام داخل المتجر. قمت بترتيب وتعبئة الرفوف، وتنظيم المنتجات ليظهر المتجر بشكل مرتب، والمساعدة عند صندوق الدفع، وفرز وتفريغ الشحنات في المخزن، ومساعدة العملاء في العثور على المنتجات. كما ساعدت في الحفاظ على نظافة المتجر وترتيبه وتنظيمه.",
      lessonsHeading: "ما تعلمته",
      lessons: ["الصندوق", "تعبئة البضائع", "خدمة العملاء", "المخزن", "تنظيم المتجر"],
    },
    cv: {
      title: "السيرة الذاتية",
      metaTitle: "السيرة الذاتية — Ivan Ristić Hofrén",
      description: "تحميل السيرة الذاتية لـ Ivan Ristić Hofrén",
      intro: "يمكنك هنا تنزيل سيرتي الذاتية مباشرة بصيغة PDF.",
      download: "تحميل السيرة الذاتية",
      openPdf: "فتح PDF في تبويب جديد",
    },
    stack: {
      title: "التقنيات",
      metaTitle: "التقنيات — Ivan Ristić Hofrén",
      description: "الأدوات والتقنيات التي أعمل بها حاليًا.",
      intro: "الأدوات والتقنيات التي أعمل بها",
      filterLabel: "تصفية",
      filters: {
        all: "الكل",
        web: "تطوير الويب",
        styling: "التنسيق",
        backend: "الواجهة الخلفية",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "ترميز دلالي يشكل أساس صفحات ويب منظمة وسهلة الوصول وصديقة لمحركات البحث.",
          categoryKey: "web",
          categoryLabel: "تطوير الويب",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "إطار CSS بأسلوب utility-first يسهل بناء واجهات متجاوبة ومتناسقة مباشرة داخل الـ markup.",
          categoryKey: "styling",
          categoryLabel: "التنسيق",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "JavaScript مضبوط بالأنواع يمنح إكمالًا تلقائيًا أفضل وإعادة هيكلة أكثر أمانًا وأخطاء تشغيل أقل في المشاريع الكبيرة.",
          categoryKey: "web",
          categoryLabel: "تطوير الويب",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "إطار العمل fullstack الأساسي لدي للواجهة الأمامية والخلفية مع App Router وAPI routes وserver actions ودعم TypeScript مدمج.",
          categoryKey: "web",
          categoryLabel: "تطوير الويب",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "ORM بنهج TypeScript-first مع PostgreSQL لنماذج آمنة نوعيًا وترحيلات وتخزين بيانات موثوق.",
          categoryKey: "backend",
          categoryLabel: "الواجهة الخلفية",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "حل مرن للمصادقة يدعم مزودي OAuth وروابط البريد وتسجيل الدخول بالبيانات.",
          categoryKey: "backend",
          categoryLabel: "الواجهة الخلفية",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "نظام تحكم بالإصدارات موزع أستخدمه يوميًا للفروع والالتزامات والدمج وتاريخ الكود.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "المنصة التي أستخدمها لإدارة الإصدارات وطلبات السحب ومراجعة الكود وتدفقات النشر.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "فتح دردشة الذكاء الاصطناعي",
      panelAriaLabel: "دردشة الذكاء الاصطناعي",
      title: "مساعد الذكاء الاصطناعي",
      minimize: "تصغير الدردشة",
      greeting:
        "مرحبًا. أنا مساعد Ivan بالذكاء الاصطناعي. اسألني أي شيء عن Ivan أو مشاريعه أو مهاراته.",
      inputPlaceholder: "اكتب رسالة…",
      send: "إرسال",
      assistantLabel: "AI",
      userLabel: "أنت",
      noResponse: "عذرًا، لم أتلقَ ردًا.",
      apiError: "تعذر الحصول على رد الآن.",
    },
  },
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Sobre mim",
      cv: "CV",
      stack: "Stack",
      translate: "Traduzir",
      chooseLanguage: "Escolher idioma",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "E-mail",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Site pessoal de Ivan Ristić Hofrén.",
      intro: "Olá, eu me chamo",
      role: "Estudante e desenvolvedor no tempo livre",
      stats: {
        age: "15 anos (2010)",
      },
      ctas: {
        about: "Sobre mim",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Sobre mim",
      metaTitle: "Sobre mim — Ivan Ristić Hofrén",
      description: "Sobre mim — estudante de 15 anos e desenvolvedor no tempo livre.",
      age: "15 anos",
      school: "Fågelbacksskolan",
      intro:
        "Tenho 15 anos e moro em Malmö. Estudo na Fågelbacksskolan e me descrevo como uma pessoa sociável e responsável, que também trabalha bem de forma independente. Tenho interesse por tecnologia e gosto de trabalhar com desenvolvimento web no meu tempo livre. Nado competitivamente em Vellinge e gosto de treinar. Também tenho um cachorro e gosto de estar com animais. Antes, fiz duas semanas de prática na ICA, onde ajudei em diferentes tarefas da loja, por exemplo reposição de produtos, organização de prateleiras e atendimento a clientes.",
      builtWith: "O site foi construído com",
      hobbiesTitle: "Hobbies",
      hobbiesText:
        "Meus hobbies são animais, desenvolvimento web, natação, viajar e passar tempo com amigos. Tenho um cachorro e gosto de estar com animais. No tempo livre também trabalho com desenvolvimento web, por exemplo criando e desenhando sites. Além disso, pratico natação competitiva, algo que considero divertido e que me ajuda a evoluir.",
      interestsHeading: "Interesses",
      interests: ["Animais", "Desenvolvimento web", "Natação", "Viagens", "Convivência"],
      workTitle: "Experiência anterior",
      workText:
        "Fiz duas semanas de prática na ICA e experimentei várias tarefas na loja. Repunha produtos e prateleiras, organizava itens para a loja ficar arrumada, ajudava no caixa, separava e desembalava entregas no estoque e ajudava clientes a encontrar produtos. Também ajudei a manter a loja limpa, organizada e em ordem.",
      lessonsHeading: "O que aprendi",
      lessons: ["Caixa", "Reposição", "Atendimento ao cliente", "Estoque", "Organização da loja"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Baixar CV de Ivan Ristić Hofrén",
      intro: "Aqui você pode baixar meu CV diretamente em PDF.",
      download: "Baixar CV",
      openPdf: "Abrir PDF em nova aba",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Ferramentas e tecnologias com as quais trabalho atualmente.",
      intro: "Ferramentas e tecnologias com as quais trabalho",
      filterLabel: "Filtrar",
      filters: {
        all: "Todas",
        web: "Desenvolvimento web",
        styling: "Estilo",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Marcação semântica que forma a base de páginas web bem estruturadas, acessíveis e amigáveis para SEO.",
          categoryKey: "web",
          categoryLabel: "Desenvolvimento web",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Framework CSS utility-first que facilita criar interfaces responsivas e consistentes diretamente no markup.",
          categoryKey: "styling",
          categoryLabel: "Estilo",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "JavaScript tipado que oferece melhor autocomplete, refatoração mais segura e menos erros de runtime em projetos maiores.",
          categoryKey: "web",
          categoryLabel: "Desenvolvimento web",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Meu principal framework fullstack para frontend e backend, com App Router, API routes, server actions e suporte nativo a TypeScript.",
          categoryKey: "web",
          categoryLabel: "Desenvolvimento web",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "ORM com foco em TypeScript junto com PostgreSQL para modelos tipados, migrações e armazenamento de dados robusto.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Solução flexível de autenticação com suporte a provedores OAuth, links por e-mail e login por credenciais.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Sistema distribuído de controle de versão que uso diariamente para branches, commits, merges e histórico de código.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Plataforma que uso para versionamento, pull requests, revisão de código e fluxos de deploy em projetos.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Abrir chat de IA",
      panelAriaLabel: "Chat de IA",
      title: "Assistente de IA",
      minimize: "Minimizar chat",
      greeting:
        "Olá. Eu sou o assistente de IA do Ivan. Pergunte qualquer coisa sobre Ivan, seus projetos ou suas habilidades.",
      inputPlaceholder: "Digite uma mensagem…",
      send: "Enviar",
      assistantLabel: "IA",
      userLabel: "Você",
      noResponse: "Desculpe, não recebi uma resposta.",
      apiError: "Não foi possível obter uma resposta agora.",
    },
  },
  "zh-CN": {
    nav: {
      home: "首页",
      about: "关于我",
      cv: "简历",
      stack: "技术栈",
      translate: "翻译",
      chooseLanguage: "选择语言",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "邮箱",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Ivan Ristić Hofrén 的个人网站。",
      intro: "你好，我是",
      role: "学生与业余开发者",
      stats: {
        age: "15岁（2010年出生）",
      },
      ctas: {
        about: "关于我",
        cv: "简历",
        stack: "技术栈",
      },
    },
    about: {
      title: "关于我",
      metaTitle: "关于我 — Ivan Ristić Hofrén",
      description: "关于我——15岁的学生和业余开发者。",
      age: "15岁",
      school: "Fågelbacksskolan",
      intro:
        "我15岁，住在马尔默。我就读于 Fågelbacksskolan，认为自己是一个善于社交、有责任心，同时也能独立工作的人。我对技术很感兴趣，喜欢在空闲时间做网页开发。我在 Vellinge 进行竞技游泳，也喜欢锻炼。我还养了一只狗，喜欢和动物相处。此前我曾在 ICA 进行了两周的实习，在店里帮助完成补货、整理货架和帮助顾客等不同工作。",
      builtWith: "本网站使用以下技术构建：",
      hobbiesTitle: "兴趣爱好",
      hobbiesText:
        "我的兴趣包括动物、网页开发、游泳、旅行以及和朋友相处。我养了一只狗，也很喜欢和动物待在一起。空闲时间里我会做网页开发，比如创建和设计网站。此外，我还进行竞技游泳，这项运动既有趣也能让我不断成长。",
      interestsHeading: "兴趣",
      interests: ["动物", "网页开发", "游泳", "旅行", "社交"],
      workTitle: "过往工作经历",
      workText:
        "我曾在 ICA 进行过两周实习，体验了商店里的许多不同工作。我补充商品和货架、整理商品陈列让商店看起来更整洁、协助收银、在仓库中分类和拆包货物，也帮助顾客找到他们需要的商品。我还协助保持商店整洁、有序并维持清洁。",
      lessonsHeading: "收获",
      lessons: ["收银", "补货", "客户服务", "仓库", "门店整理"],
    },
    cv: {
      title: "简历",
      metaTitle: "简历 — Ivan Ristić Hofrén",
      description: "下载 Ivan Ristić Hofrén 的简历",
      intro: "你可以在这里直接下载我的 PDF 简历。",
      download: "下载简历",
      openPdf: "在新标签页打开 PDF",
    },
    stack: {
      title: "技术栈",
      metaTitle: "技术栈 — Ivan Ristić Hofrén",
      description: "我目前使用的工具和技术。",
      intro: "我正在使用的工具和技术",
      filterLabel: "筛选",
      filters: {
        all: "全部",
        web: "Web 开发",
        styling: "样式",
        backend: "后端",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "语义化标记语言，是构建结构良好、可访问且对 SEO 友好的网页基础。",
          categoryKey: "web",
          categoryLabel: "Web 开发",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "一种 utility-first CSS 框架，便于直接在标记中构建响应式且一致的界面。",
          categoryKey: "styling",
          categoryLabel: "样式",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "带类型的 JavaScript，可提供更好的自动补全、更安全的重构以及在大型项目中更少的运行时错误。",
          categoryKey: "web",
          categoryLabel: "Web 开发",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "我主要使用的全栈框架，适用于前端和后端，包含 App Router、API routes、server actions 和内置 TypeScript 支持。",
          categoryKey: "web",
          categoryLabel: "Web 开发",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "将 Prisma 与 PostgreSQL 结合，用于类型安全的数据模型、迁移以及稳健的数据存储。",
          categoryKey: "backend",
          categoryLabel: "后端",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "灵活的身份验证解决方案，支持 OAuth 提供商、电子邮件链接和账号密码登录。",
          categoryKey: "backend",
          categoryLabel: "后端",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "我每天使用的分布式版本控制系统，用于分支、提交、合并和代码历史管理。",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "我用于版本管理、拉取请求、代码审查和部署流程的平台。",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "打开 AI 聊天",
      panelAriaLabel: "AI 聊天",
      title: "AI 助手",
      minimize: "最小化聊天",
      greeting:
        "你好，我是 Ivan 的 AI 助手。你可以向我询问任何关于 Ivan、他的项目或技能的问题。",
      inputPlaceholder: "输入消息…",
      send: "发送",
      assistantLabel: "AI",
      userLabel: "你",
      noResponse: "抱歉，我没有收到回复。",
      apiError: "暂时无法获取回复。",
    },
  },
  da: {
    nav: {
      home: "Hjem",
      about: "Om mig",
      cv: "CV",
      stack: "Stack",
      translate: "Oversæt",
      chooseLanguage: "Vælg sprog",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "E-mail",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Personlig hjemmeside for Ivan Ristić Hofrén.",
      intro: "Hej, jeg hedder",
      role: "Elev og udvikler i fritiden",
      stats: {
        age: "15 år gammel (2010)",
      },
      ctas: {
        about: "Om mig",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Om mig",
      metaTitle: "Om mig — Ivan Ristić Hofrén",
      description: "Om mig — 15-årig elev og udvikler i fritiden.",
      age: "15 år gammel",
      school: "Fågelbacksskolan",
      intro:
        "Jeg er 15 år og bor i Malmø. Jeg går på Fågelbacksskolan og beskriver mig selv som en social og ansvarlig person, som også fungerer godt selvstændigt. Jeg er teknisk interesseret og kan godt lide at arbejde med webudvikling i min fritid. Jeg konkurrencesvømmer i Vellinge og kan godt lide at træne. Jeg har også en hund og holder af at være sammen med dyr. Tidligere var jeg i to ugers praktik hos ICA, hvor jeg hjalp med forskellige opgaver i butikken, for eksempel at fylde varer op, rette hylder til og hjælpe kunder.",
      builtWith: "Hjemmesiden er bygget med",
      hobbiesTitle: "Hobbyer",
      hobbiesText:
        "Mine hobbyer er dyr, webudvikling, svømning, rejser og at være sammen med venner. Jeg har en hund og holder af dyr. I min fritid arbejder jeg også med webudvikling, for eksempel ved at skabe og designe hjemmesider. Derudover dyrker jeg konkurrencesvømning, som jeg synes både er sjovt og udviklende.",
      interestsHeading: "Interesser",
      interests: ["Dyr", "Webudvikling", "Svømning", "Rejser", "Samvær"],
      workTitle: "Tidligere arbejde",
      workText:
        "Jeg var i to ugers praktik hos ICA og prøvede mange forskellige arbejdsopgaver i butikken. Jeg fyldte varer på hylderne, frontede varer så butikken så pæn ud, hjalp ved kassen, sorterede og pakkede leverancer ud på lageret og hjalp kunder med at finde varer. Jeg hjalp også med at holde butikken ren, ryddelig og organiseret.",
      lessonsHeading: "Det lærte jeg",
      lessons: ["Kasse", "Opfyldning", "Kundeservice", "Lager", "Butiksorden"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan Ristić Hofrén",
      description: "Download CV for Ivan Ristić Hofrén",
      intro: "Her kan du downloade mit CV direkte som PDF.",
      download: "Download CV",
      openPdf: "Åbn PDF i ny fane",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Værktøjer og teknologier jeg arbejder med lige nu.",
      intro: "Værktøjer og teknologier jeg arbejder med",
      filterLabel: "Filtrer",
      filters: {
        all: "Alle",
        web: "Webudvikling",
        styling: "Styling",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Semantisk markup, som danner grundlaget for velstrukturerede, tilgængelige og SEO-venlige websider.",
          categoryKey: "web",
          categoryLabel: "Webudvikling",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Et utility-first CSS-framework, der gør det nemt at bygge responsive og konsistente brugerflader direkte i markup.",
          categoryKey: "styling",
          categoryLabel: "Styling",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Typet JavaScript, som giver bedre autoudfyldning, sikrere refaktorering og færre runtime-fejl i større projekter.",
          categoryKey: "web",
          categoryLabel: "Webudvikling",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Mit primære fullstack-framework til både frontend og backend med App Router, API-ruter, server actions og indbygget TypeScript-understøttelse.",
          categoryKey: "web",
          categoryLabel: "Webudvikling",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "En TypeScript-first ORM sammen med PostgreSQL til typesikre modeller, migreringer og robust datalagring.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "En fleksibel autentificeringsløsning med understøttelse af OAuth-udbydere, e-mail-links og login med credentials.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Et distribueret versionsstyringssystem, jeg bruger dagligt til branches, commits, merges og historik i kodebaser.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Platformen jeg bruger til versionsstyring, pull requests, code review og deployment-flows i projekter.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Åbn AI-chat",
      panelAriaLabel: "AI-chat",
      title: "AI-assistent",
      minimize: "Minimer chat",
      greeting:
        "Hej. Jeg er Ivans AI-assistent. Spørg mig om hvad som helst om Ivan, hans projekter eller hans kompetencer.",
      inputPlaceholder: "Skriv en besked…",
      send: "Send",
      assistantLabel: "AI",
      userLabel: "Du",
      noResponse: "Beklager, jeg fik ikke noget svar.",
      apiError: "Kunne ikke hente et svar lige nu.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      cv: "Lebenslauf",
      stack: "Stack",
      translate: "Übersetzen",
      chooseLanguage: "Sprache wählen",
    },
    footer: {
      text: `Ivan Ristić Hofrén ${new Date().getFullYear()}`,
      socials: {
        email: "E-Mail",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan Ristić Hofrén",
      description: "Persönliche Website von Ivan Ristić Hofrén.",
      intro: "Hallo, ich heiße",
      role: "Schüler und Entwickler in der Freizeit",
      stats: {
        age: "15 Jahre alt (2010)",
      },
      ctas: {
        about: "Über mich",
        cv: "Lebenslauf",
        stack: "Stack",
      },
    },
    about: {
      title: "Über mich",
      metaTitle: "Über mich — Ivan Ristić Hofrén",
      description: "Über mich — 15-jähriger Schüler und Entwickler in der Freizeit.",
      age: "15 Jahre alt",
      school: "Fågelbacksskolan",
      intro:
        "Ich bin 15 Jahre alt und lebe in Malmö. Ich besuche die Fågelbacksskolan und beschreibe mich selbst als soziale und verantwortungsbewusste Person, die auch gut selbstständig arbeiten kann. Ich interessiere mich für Technik und arbeite in meiner Freizeit gern an Webentwicklung. Ich schwimme wettkampfmäßig in Vellinge und trainiere gern. Ich habe außerdem einen Hund und verbringe gern Zeit mit Tieren. Zuvor habe ich ein zweiwöchiges Praktikum bei ICA gemacht, wo ich bei verschiedenen Aufgaben im Laden geholfen habe, zum Beispiel beim Auffüllen von Waren, beim Ordnen der Regale und bei der Kundenhilfe.",
      builtWith: "Die Website wurde erstellt mit",
      hobbiesTitle: "Hobbys",
      hobbiesText:
        "Meine Hobbys sind Tiere, Webentwicklung, Schwimmen, Reisen und Zeit mit Freunden zu verbringen. Ich habe einen Hund und mag Tiere sehr. In meiner Freizeit arbeite ich auch an Webentwicklung, zum Beispiel indem ich Websites erstelle und gestalte. Außerdem betreibe ich Wettkampfschwimmen, was ich sowohl spannend als auch fördernd finde.",
      interestsHeading: "Interessen",
      interests: ["Tiere", "Webentwicklung", "Schwimmen", "Reisen", "Freunde"],
      workTitle: "Bisherige Arbeit",
      workText:
        "Ich habe ein zweiwöchiges Praktikum bei ICA gemacht und viele verschiedene Aufgaben im Laden ausprobiert. Ich habe Waren eingeräumt und Regale aufgefüllt, Produkte so angeordnet, dass der Laden ordentlich aussieht, an der Kasse geholfen, Lieferungen im Lager sortiert und ausgepackt und Kunden beim Finden von Produkten unterstützt. Außerdem habe ich geholfen, den Laden sauber, ordentlich und gut organisiert zu halten.",
      lessonsHeading: "Was ich gelernt habe",
      lessons: ["Kasse", "Waren einräumen", "Kundenservice", "Lager", "Ladenordnung"],
    },
    cv: {
      title: "Lebenslauf",
      metaTitle: "Lebenslauf — Ivan Ristić Hofrén",
      description: "Lebenslauf von Ivan Ristić Hofrén herunterladen",
      intro: "Hier kannst du meinen Lebenslauf direkt als PDF herunterladen.",
      download: "Lebenslauf herunterladen",
      openPdf: "PDF in neuem Tab öffnen",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan Ristić Hofrén",
      description: "Werkzeuge und Technologien, mit denen ich derzeit arbeite.",
      intro: "Werkzeuge und Technologien, mit denen ich arbeite",
      filterLabel: "Filtern",
      filters: {
        all: "Alle",
        web: "Webentwicklung",
        styling: "Styling",
        backend: "Backend",
        devops: "DevOps",
      },
      cards: [
        {
          name: "html",
          label: "HTML5",
          color: "text-orange-200",
          description:
            "Semantisches Markup, das die Grundlage für gut strukturierte, barrierefreie und SEO-freundliche Webseiten bildet.",
          categoryKey: "web",
          categoryLabel: "Webentwicklung",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "Ein Utility-First-CSS-Framework, mit dem sich responsive und konsistente Oberflächen direkt im Markup einfach erstellen lassen.",
          categoryKey: "styling",
          categoryLabel: "Styling",
          href: "https://tailwindcss.com",
          linkLabel: "TailwindCSS.com",
        },
        {
          name: "typescript",
          label: "TypeScript",
          color: "text-sky-200",
          description:
            "Typisiertes JavaScript mit besserer Autovervollständigung, sichererem Refactoring und weniger Laufzeitfehlern in größeren Projekten.",
          categoryKey: "web",
          categoryLabel: "Webentwicklung",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (Frontend + Backend)",
          color: "text-slate-200",
          description:
            "Mein primäres Fullstack-Framework für Frontend und Backend mit App Router, API-Routen, Server Actions und integrierter TypeScript-Unterstützung.",
          categoryKey: "web",
          categoryLabel: "Webentwicklung",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "Ein TypeScript-First-ORM zusammen mit PostgreSQL für typsichere Modelle, Migrationen und robuste Datenspeicherung.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          links: [
            { href: "https://www.prisma.io", label: "Prisma.io" },
            { href: "https://www.postgresql.org", label: "PostgreSQL.org" },
          ],
        },
        {
          name: "authjs",
          label: "Auth.js",
          color: "text-yellow-100",
          description:
            "Eine flexible Authentifizierungslösung mit Unterstützung für OAuth-Anbieter, E-Mail-Links und Anmeldungen mit Zugangsdaten.",
          categoryKey: "backend",
          categoryLabel: "Backend",
          href: "https://authjs.dev",
          linkLabel: "AuthJS.dev",
        },
        {
          name: "git",
          label: "Git",
          color: "text-emerald-200",
          description:
            "Ein verteiltes Versionskontrollsystem, das ich täglich für Branches, Commits, Merges und Code-Historie verwende.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://git-scm.com",
          linkLabel: "Git-SCM.com",
        },
        {
          name: "github",
          label: "GitHub",
          color: "text-slate-200",
          description:
            "Die Plattform, die ich für Versionsverwaltung, Pull Requests, Code-Reviews und Deployment-Workflows nutze.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "AI-Chat öffnen",
      panelAriaLabel: "AI-Chat",
      title: "AI-Assistent",
      minimize: "Chat minimieren",
      greeting:
        "Hallo. Ich bin Ivans AI-Assistent. Frag mich alles über Ivan, seine Projekte oder seine Fähigkeiten.",
      inputPlaceholder: "Nachricht eingeben…",
      send: "Senden",
      assistantLabel: "AI",
      userLabel: "Du",
      noResponse: "Leider habe ich keine Antwort erhalten.",
      apiError: "Gerade konnte keine Antwort abgerufen werden.",
    },
  },
} as const;

type TranslationLang = keyof typeof translations;

const fallbackCopyLangByLang: Partial<Record<SiteLang, TranslationLang>> = {};

export type SiteCopy = (typeof translations)[TranslationLang];

export function isSupportedLang(lang: string): lang is SiteLang {
  return supportedLangs.includes(lang as SiteLang);
}

export function normalizeLang(lang: string | undefined | null): SiteLang {
  if (!lang) {
    return defaultLang;
  }

  return isSupportedLang(lang) ? lang : defaultLang;
}

export function getSiteCopy(lang: SiteLang): SiteCopy {
  if (lang in translations) {
    return translations[lang as TranslationLang];
  }

  const fallbackLang = fallbackCopyLangByLang[lang] ?? defaultLang;
  return translations[fallbackLang];
}

function normalizeBasePath(basePath: string): string {
  const trimmed = basePath.replace(/\/+$/, "");
  return trimmed || "";
}

export function getLocalePath(
  basePath: string,
  lang: SiteLang,
  routeKey: RouteKey,
): string {
  const normalizedBase = normalizeBasePath(basePath);
  const routeSegment = routeSegments[routeKey];
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  const suffix = routeSegment ? `/${routeSegment}` : "";
  const path = `${normalizedBase}${prefix}${suffix}`;

  if (!path) {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

export function getLangFromPath(pathname: string): SiteLang {
  const [firstSegment] = pathname.replace(/^\/+|\/+$/g, "").split("/");
  return normalizeLang(firstSegment);
}

export function getNavPages(basePath: string, lang: SiteLang) {
  const copy = getSiteCopy(lang);
  return [
    { name: copy.nav.about, href: getLocalePath(basePath, lang, "about") },
    { name: copy.nav.cv, href: getLocalePath(basePath, lang, "cv") },
    { name: copy.nav.stack, href: getLocalePath(basePath, lang, "stack") },
  ];
}
