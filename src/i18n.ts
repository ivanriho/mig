export const defaultLang = "sv" as const;

export const supportedLangs = [
  defaultLang,
  "ja",
  "en",
  "fr",
  "ru",
  "es",
] as const;

export type SiteLang = (typeof supportedLangs)[number];
export type RouteKey = "home" | "about" | "cv" | "stack";

export const nonDefaultLanguages = supportedLangs.filter(
  (lang) => lang !== defaultLang,
) as Exclude<SiteLang, typeof defaultLang>[];

export const languageOptions = [
  { code: "sv", label: "Svenska" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
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
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "E-post",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Personlig webbplats för Ivan.",
      intro: "Hej, jag heter",
      role: "Elev & fritidsutvecklare",
      stats: {
        age: "Född 2010",
      },
      ctas: {
        about: "Om mig",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Om mig",
      metaTitle: "Om mig — Ivan",
      description: "Om mig — elev & fritidsutvecklare.",
      age: "Född 2010",
      school: "Grundskola i Malmö",
      intro:
        "Jag är 15 år och bor i Malmö. Jag går på en grundskola i Malmö och beskriver mig själv som en social och ansvarstagande person som också fungerar bra med att arbeta självständigt. Jag är tekniskt intresserad och tycker om att arbeta med webbutveckling på min fritid. Jag tävlingssimmar och spelar golf, och tycker om träning. Jag har också en hund och tycker om att vara med djur. Tidigare har jag praoat i två veckor på ICA där jag fick hjälpa till med olika uppgifter i butiken, till exempel att fylla på varor, fronta hyllor och hjälpa kunder.",
      builtWith: "Hemsidan är byggd på",
      hobbiesTitle: "Hobbyer",
      hobbiesText:
        "Mina hobbies är djur, webbutveckling, simning, golf, att resa och att umgås med vänner. Jag har en hund och tycker om att vara med djur. På fritiden arbetar jag också med webbutveckling, till exempel att skapa och designa hemsidor. Dessutom tävlingssimmar jag och spelar golf, vilket jag tycker är både roligt och utvecklande.",
      interestsHeading: "Intressen",
      interests: ["Djur", "Webbutveckling", "Simning", "Golf", "Resa", "Umgås"],
      workTitle: "Tidigare jobb",
      workText:
        "Jag praoade i två veckor på ICA och fick prova på många olika arbetsuppgifter i butiken. Jag plockade upp varor och fyllde på hyllor, frontade varor så att det såg snyggt ut i butiken, hjälpte till i kassan, sorterade och packade upp leveranser i lagret samt hjälpte kunder som behövde hitta varor. Jag fick också hjälpa till att hålla ordning i butiken och se till att allt var rent och organiserat.",
      lessonsHeading: "Lärdomar",
      lessons: ["Kassa", "Varuplock", "Kundservice", "Lager", "Butiksordning"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan",
      description: "Ladda ner CV för Ivan",
      intro: "Här kan du ladda ner mitt CV direkt som PDF.",
      download: "Ladda ner CV",
      openPdf: "Öppna PDF i ny flik",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan",
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
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "メール",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Ivan の個人ウェブサイト。",
      intro: "こんにちは、私は",
      role: "学生・個人開発者",
      stats: {
        age: "2010年生まれ",
      },
      ctas: {
        about: "私について",
        cv: "履歴書",
        stack: "技術スタック",
      },
    },
    about: {
      title: "私について",
      metaTitle: "私について — Ivan",
      description: "2010年生まれの学生であり個人開発者である Ivan の紹介。",
      age: "2010年生まれ",
      school: "マルメの基礎学校",
      intro:
        "私は15歳で、マルメに住んでいます。マルメの基礎学校に通っており、社交的で責任感があり、自立して働くこともできる人間だと自分を表現しています。技術に強い関心があり、自由時間にはウェブ開発に取り組むのが好きです。競泳をしており、ゴルフも楽しんでいます。犬を飼っていて、動物と過ごす時間も大切にしています。以前は ICA で2週間の職場体験をし、商品の補充、棚の整理、接客などさまざまな仕事を経験しました。",
      builtWith: "このサイトは",
      hobbiesTitle: "趣味",
      hobbiesText:
        "私の趣味は動物、ウェブ開発、水泳、ゴルフ、旅行、そして友人と過ごすことです。犬を飼っていて、動物と関わるのが好きです。自由時間にはウェブサイトを作成したりデザインしたりしています。また競泳やゴルフにも取り組んでおり、とても楽しく、自分を成長させてくれる活動だと感じています。",
      interestsHeading: "興味分野",
      interests: ["動物", "ウェブ開発", "水泳", "ゴルフ", "旅行", "交流"],
      workTitle: "これまでの仕事",
      workText:
        "ICA で2週間の職場体験を行い、店舗内のさまざまな業務を経験しました。商品の補充、棚の見栄えを整える作業、レジ補助、倉庫での荷物の仕分けと開梱、商品を探しているお客様の案内などを担当しました。また、店内を清潔で整理された状態に保つ手伝いもしました。",
      lessonsHeading: "学んだこと",
      lessons: ["レジ", "品出し", "接客", "倉庫", "売場整理"],
    },
    cv: {
      title: "履歴書",
      metaTitle: "履歴書 — Ivan",
      description: "Ivan の履歴書をダウンロード。",
      intro: "ここから私の履歴書を PDF で直接ダウンロードできます。",
      download: "履歴書をダウンロード",
      openPdf: "PDF を新しいタブで開く",
    },
    stack: {
      title: "技術スタック",
      metaTitle: "技術スタック — Ivan",
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
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "Email",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Personal website for Ivan.",
      intro: "Hi, my name is",
      role: "Student & hobby developer",
      stats: {
        age: "Born 2010",
      },
      ctas: {
        about: "About Me",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "About Me",
      metaTitle: "About Me — Ivan",
      description: "About me — student and hobby developer.",
      age: "Born 2010",
      school: "Primary school in Malmö",
      intro:
        "I am 15 years old and live in Malmö. I attend a primary school in Malmö and describe myself as a social and responsible person who also works well independently. I am interested in technology and enjoy working with web development in my spare time. I compete in swimming and play golf, and enjoy training. I also have a dog and like being around animals. Previously, I did a two-week internship at ICA where I helped with different tasks in the store, such as restocking items, facing shelves and helping customers.",
      builtWith: "The website is built with",
      hobbiesTitle: "Hobbies",
      hobbiesText:
        "My hobbies are animals, web development, swimming, golf, traveling and spending time with friends. I have a dog and enjoy being around animals. In my spare time I also work with web development, for example creating and designing websites. I also compete in swimming and play golf, which I find both fun and rewarding.",
      interestsHeading: "Interests",
      interests: ["Animals", "Web Development", "Swimming", "Golf", "Travel", "Socializing"],
      workTitle: "Previous Work",
      workText:
        "I completed a two-week internship at ICA and got to try many different tasks in the store. I stocked shelves, arranged products so the store looked neat, helped at the checkout, sorted and unpacked deliveries in the stockroom, and helped customers find products. I also helped keep the store clean, tidy and organized.",
      lessonsHeading: "What I Learned",
      lessons: ["Checkout", "Restocking", "Customer Service", "Stockroom", "Store Organization"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan",
      description: "Download Ivan's CV",
      intro: "Here you can download my CV directly as a PDF.",
      download: "Download CV",
      openPdf: "Open PDF in new tab",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan",
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
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "E-mail",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Site personnel d'Ivan.",
      intro: "Bonjour, je m'appelle",
      role: "Élève & développeur amateur",
      stats: {
        age: "Né en 2010",
      },
      ctas: {
        about: "À propos",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "À propos",
      metaTitle: "À propos — Ivan",
      description: "À propos — élève et développeur amateur.",
      age: "Né en 2010",
      school: "École primaire à Malmö",
      intro:
        "J'ai 15 ans et j'habite à Malmö. Je fréquente une école primaire à Malmö et je me décris comme une personne sociable et responsable, capable de travailler aussi bien en équipe qu'en autonomie. Je m'intéresse à la technologie et j'aime développer des sites web pendant mon temps libre. Je fais de la natation de compétition et joue au golf. J'ai aussi un chien et j'aime être entouré d'animaux. J'ai précédemment effectué un stage de deux semaines chez ICA où j'ai aidé à diverses tâches en magasin, comme remplir les rayons, mettre en avant les produits et aider les clients.",
      builtWith: "Le site est construit avec",
      hobbiesTitle: "Loisirs",
      hobbiesText:
        "Mes loisirs sont les animaux, le développement web, la natation, le golf, les voyages et passer du temps avec des amis. J'ai un chien et j'aime être avec les animaux. Pendant mon temps libre, je travaille aussi sur des projets web, comme créer et designer des sites. Je fais également de la natation de compétition et joue au golf, ce que je trouve à la fois amusant et enrichissant.",
      interestsHeading: "Centres d'intérêt",
      interests: ["Animaux", "Développement web", "Natation", "Golf", "Voyages", "Sociabilité"],
      workTitle: "Expérience professionnelle",
      workText:
        "J'ai effectué un stage de deux semaines chez ICA et j'ai pu essayer de nombreuses tâches différentes en magasin. J'ai rempli les rayons, mis en valeur les produits, aidé en caisse, trié et déballé les livraisons en réserve, et guidé les clients. J'ai aussi contribué à maintenir le magasin propre et bien organisé.",
      lessonsHeading: "Ce que j'ai appris",
      lessons: ["Caisse", "Mise en rayon", "Service client", "Réserve", "Organisation"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan",
      description: "Télécharger le CV d'Ivan.",
      intro: "Vous pouvez télécharger mon CV directement en PDF ici.",
      download: "Télécharger le CV",
      openPdf: "Ouvrir le PDF dans un nouvel onglet",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan",
      description: "Outils et technologies avec lesquels je travaille.",
      intro: "Outils et technologies avec lesquels je travaille",
      filterLabel: "Filtrer",
      filters: {
        all: "Tout",
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
            "Balisage sémantique qui forme la base de pages web bien structurées, accessibles et optimisées pour le référencement.",
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
            "Framework CSS utilitaire qui facilite la création d'interfaces responsives et cohérentes directement dans le balisage.",
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
            "Mon framework fullstack principal pour le frontend et le backend, avec App Router, routes API, server actions et support TypeScript natif.",
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
            "ORM TypeScript-first associé à PostgreSQL pour des modèles typés, des migrations et un stockage de données robuste.",
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
            "Solution d'authentification flexible avec support des fournisseurs OAuth, des liens par e-mail et de la connexion par identifiants.",
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
            "Système de contrôle de version distribué que j'utilise quotidiennement pour les branches, les commits, les fusions et l'historique.",
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
            "La plateforme que j'utilise pour le versionnage, les pull requests, les revues de code et les workflows de déploiement.",
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
        "Bonjour ! Je suis l'assistant IA d'Ivan. Posez-moi des questions sur Ivan, ses projets ou ses compétences.",
      inputPlaceholder: "Écrire un message…",
      send: "Envoyer",
      assistantLabel: "IA",
      userLabel: "Vous",
      noResponse: "Désolé, je n'ai pas obtenu de réponse.",
      apiError: "Impossible de récupérer une réponse pour le moment.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      cv: "Резюме",
      stack: "Стек",
      translate: "Перевести",
      chooseLanguage: "Выбрать язык",
    },
    footer: {
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "Эл. почта",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Личный сайт Ивана.",
      intro: "Привет, меня зовут",
      role: "Ученик и разработчик-любитель",
      stats: {
        age: "Рождён в 2010",
      },
      ctas: {
        about: "Обо мне",
        cv: "Резюме",
        stack: "Стек",
      },
    },
    about: {
      title: "Обо мне",
      metaTitle: "Обо мне — Ivan",
      description: "Обо мне — ученик и разработчик-любитель.",
      age: "Рождён в 2010",
      school: "Начальная школа в Мальмё",
      intro:
        "Мне 15 лет, я живу в Мальмё. Я учусь в начальной школе в Мальмё и описываю себя как общительного и ответственного человека, который умеет работать как в команде, так и самостоятельно. Меня интересуют технологии, и я люблю заниматься веб-разработкой в свободное время. Я занимаюсь плаванием на соревновательном уровне и играю в гольф. У меня есть собака, и я люблю животных. Ранее я проходил двухнедельную практику в магазине ICA, где помогал с различными задачами: пополнял полки, выкладывал товары и помогал покупателям.",
      builtWith: "Сайт построен на",
      hobbiesTitle: "Увлечения",
      hobbiesText:
        "Мои увлечения — животные, веб-разработка, плавание, гольф, путешествия и общение с друзьями. У меня есть собака, и я люблю проводить время с животными. В свободное время я также занимаюсь веб-разработкой: создаю и проектирую сайты. Кроме того, я занимаюсь соревновательным плаванием и играю в гольф — это приносит мне удовольствие и помогает развиваться.",
      interestsHeading: "Интересы",
      interests: ["Животные", "Веб-разработка", "Плавание", "Гольф", "Путешествия", "Общение"],
      workTitle: "Опыт работы",
      workText:
        "Я прошёл двухнедельную практику в магазине ICA и попробовал множество различных задач. Я пополнял полки, выкладывал товары, помогал на кассе, сортировал и распаковывал доставки на складе, а также помогал покупателям найти нужные товары. Я также помогал поддерживать порядок и чистоту в магазине.",
      lessonsHeading: "Чему я научился",
      lessons: ["Касса", "Выкладка товаров", "Обслуживание клиентов", "Склад", "Порядок в магазине"],
    },
    cv: {
      title: "Резюме",
      metaTitle: "Резюме — Ivan",
      description: "Скачать резюме Ивана.",
      intro: "Здесь вы можете скачать моё резюме в формате PDF.",
      download: "Скачать резюме",
      openPdf: "Открыть PDF в новой вкладке",
    },
    stack: {
      title: "Стек",
      metaTitle: "Стек — Ivan",
      description: "Инструменты и технологии, с которыми я работаю.",
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
            "Семантическая разметка, лежащая в основе хорошо структурированных, доступных и SEO-дружественных веб-страниц.",
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
            "Утилитарный CSS-фреймворк, позволяющий легко создавать адаптивные и согласованные интерфейсы прямо в разметке.",
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
            "Типизированный JavaScript с улучшенным автодополнением, безопасным рефакторингом и меньшим числом ошибок в крупных проектах.",
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
            "Мой основной фулстек-фреймворк для фронтенда и бэкенда с App Router, API routes, server actions и встроенной поддержкой TypeScript.",
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
            "TypeScript-first ORM вместе с PostgreSQL для типобезопасных моделей, миграций и надёжного хранения данных.",
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
            "Гибкое решение для аутентификации с поддержкой OAuth-провайдеров, входа по ссылке на почту и по учётным данным.",
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
            "Распределённая система контроля версий, которую я использую ежедневно для веток, коммитов, слияний и истории кода.",
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
            "Платформа для контроля версий, pull request'ов, код-ревью и деплой-процессов в проектах.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Открыть ИИ-чат",
      panelAriaLabel: "ИИ-чат",
      title: "ИИ-ассистент",
      minimize: "Свернуть чат",
      greeting:
        "Привет! Я ИИ-ассистент Ивана. Спросите меня что угодно об Иване, его проектах или навыках.",
      inputPlaceholder: "Написать сообщение…",
      send: "Отправить",
      assistantLabel: "ИИ",
      userLabel: "Вы",
      noResponse: "Извините, я не получил ответа.",
      apiError: "Не удалось получить ответ прямо сейчас.",
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
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "Correo",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Sitio web personal de Ivan.",
      intro: "Hola, me llamo",
      role: "Estudiante y desarrollador aficionado",
      stats: {
        age: "Nacido en 2010",
      },
      ctas: {
        about: "Sobre mí",
        cv: "CV",
        stack: "Stack",
      },
    },
    about: {
      title: "Sobre mí",
      metaTitle: "Sobre mí — Ivan",
      description: "Sobre mí — estudiante y desarrollador aficionado.",
      age: "Nacido en 2010",
      school: "Escuela primaria en Malmö",
      intro:
        "Tengo 15 años y vivo en Malmö. Asisto a una escuela primaria en Malmö y me describo como una persona sociable y responsable que también trabaja bien de forma independiente. Me interesa la tecnología y disfruto del desarrollo web en mi tiempo libre. Hago natación de competición y juego al golf. También tengo un perro y me gustan los animales. Anteriormente hice unas prácticas de dos semanas en ICA, donde ayudé con diversas tareas en la tienda, como reponer estantes, colocar productos y atender a los clientes.",
      builtWith: "La web está construida con",
      hobbiesTitle: "Aficiones",
      hobbiesText:
        "Mis aficiones son los animales, el desarrollo web, la natación, el golf, viajar y pasar tiempo con amigos. Tengo un perro y me encanta estar con los animales. En mi tiempo libre también trabajo en proyectos web, como crear y diseñar sitios. Además, hago natación de competición y juego al golf, lo cual encuentro divertido y enriquecedor.",
      interestsHeading: "Intereses",
      interests: ["Animales", "Desarrollo web", "Natación", "Golf", "Viajes", "Socializar"],
      workTitle: "Experiencia laboral",
      workText:
        "Realicé unas prácticas de dos semanas en ICA y pude probar muchas tareas diferentes en la tienda. Repuse estantes, coloqué productos para que la tienda tuviera buen aspecto, ayudé en caja, ordené y desempaqueté entregas en el almacén y ayudé a los clientes a encontrar productos. También ayudé a mantener la tienda limpia y organizada.",
      lessonsHeading: "Lo que aprendí",
      lessons: ["Caja", "Reposición", "Atención al cliente", "Almacén", "Organización"],
    },
    cv: {
      title: "CV",
      metaTitle: "CV — Ivan",
      description: "Descargar el CV de Ivan.",
      intro: "Aquí puedes descargar mi CV directamente en PDF.",
      download: "Descargar CV",
      openPdf: "Abrir PDF en nueva pestaña",
    },
    stack: {
      title: "Stack",
      metaTitle: "Stack — Ivan",
      description: "Herramientas y tecnologías con las que trabajo.",
      intro: "Herramientas y tecnologías con las que trabajo",
      filterLabel: "Filtrar",
      filters: {
        all: "Todo",
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
            "Framework CSS de utilidades que facilita la creación de interfaces responsivas y coherentes directamente en el marcado.",
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
            "JavaScript tipado que ofrece mejor autocompletado, refactorización más segura y menos errores en tiempo de ejecución en proyectos grandes.",
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
            "Mi framework fullstack principal para frontend y backend, con App Router, rutas API, server actions y soporte nativo para TypeScript.",
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
            "ORM TypeScript-first junto con PostgreSQL para modelos tipados, migraciones y almacenamiento de datos robusto.",
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
            "Solución de autenticación flexible con soporte para proveedores OAuth, enlaces por correo y inicio de sesión con credenciales.",
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
            "Sistema de control de versiones distribuido que uso a diario para ramas, commits, fusiones e historial de código.",
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
            "La plataforma que uso para control de versiones, pull requests, revisiones de código y flujos de despliegue.",
          categoryKey: "devops",
          categoryLabel: "DevOps",
          href: "https://github.com",
          linkLabel: "GitHub.com",
        },
      ],
    },
    chat: {
      toggleAriaLabel: "Abrir chat IA",
      panelAriaLabel: "Chat IA",
      title: "Asistente IA",
      minimize: "Minimizar chat",
      greeting:
        "¡Hola! Soy el asistente IA de Ivan. Pregúntame lo que quieras sobre Ivan, sus proyectos o sus habilidades.",
      inputPlaceholder: "Escribe un mensaje…",
      send: "Enviar",
      assistantLabel: "IA",
      userLabel: "Tú",
      noResponse: "Lo siento, no obtuve respuesta.",
      apiError: "No se pudo obtener una respuesta ahora mismo.",
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
