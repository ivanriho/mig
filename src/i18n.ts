export const defaultLang = "sv" as const;

export const supportedLangs = [
  defaultLang,
  "ja",
  "en",
] as const;

export type SiteLang = (typeof supportedLangs)[number];
export type RouteKey = "home" | "about" | "cv" | "stack";

export const nonDefaultLanguages = supportedLangs.filter(
  (lang) => lang !== defaultLang,
) as Exclude<SiteLang, typeof defaultLang>[];

export const languageOptions = [
  { code: "sv", label: "Svenska" },
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
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
