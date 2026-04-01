export const defaultLang = "sv" as const;

export const supportedLangs = [
  defaultLang,
  "en",
  "fr",
  "es",
  "zh",
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
  { code: "zh", label: "中文" },
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
        "Chatboten är ej tillgänglig just nu.",
      inputPlaceholder: "Skriv ett meddelande…",
      send: "Skicka",
      assistantLabel: "AI",
      userLabel: "Du",
      noResponse: "Tyvärr fick jag inget svar.",
      apiError: "Det gick inte att hämta ett svar just nu.",
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
        "The chatbot is not available right now.",
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
        "Le chatbot n'est pas disponible pour le moment.",
      inputPlaceholder: "Écrire un message…",
      send: "Envoyer",
      assistantLabel: "IA",
      userLabel: "Vous",
      noResponse: "Désolé, je n'ai pas obtenu de réponse.",
      apiError: "Impossible de récupérer une réponse pour le moment.",
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
        "El chatbot no está disponible en este momento.",
      inputPlaceholder: "Escribe un mensaje…",
      send: "Enviar",
      assistantLabel: "IA",
      userLabel: "Tú",
      noResponse: "Lo siento, no obtuve respuesta.",
      apiError: "No se pudo obtener una respuesta ahora mismo.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      cv: "简历",
      stack: "技术栈",
      translate: "翻译",
      chooseLanguage: "选择语言",
    },
    footer: {
      text: `Ivan ${new Date().getFullYear()}`,
      socials: {
        email: "电子邮件",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Ivan",
      description: "Ivan 的个人网站。",
      intro: "你好，我叫",
      role: "学生 & 业余开发者",
      stats: {
        age: "生于 2010 年",
      },
      ctas: {
        about: "关于我",
        cv: "简历",
        stack: "技术栈",
      },
    },
    about: {
      title: "关于我",
      metaTitle: "关于我 — Ivan",
      description: "关于我 — 学生与业余开发者。",
      age: "生于 2010 年",
      school: "马尔默基础学校",
      intro:
        "我今年 15 岁，住在瑞典马尔默。我就读于马尔默的一所基础学校，自我描述为一个善于社交、有责任心、也能独立工作的人。我对技术很感兴趣，业余时间喜欢做网页开发。我参加游泳比赛，也打高尔夫球。我有一只狗，很喜欢和动物在一起。之前在 ICA 超市完成了为期两周的实习，协助完成补货、整理货架、帮助顾客等各种工作。",
      builtWith: "本网站使用",
      hobbiesTitle: "爱好",
      hobbiesText:
        "我的爱好包括动物、网页开发、游泳、高尔夫、旅行以及与朋友相处。我有一只狗，很享受和动物在一起的时光。业余时间我也做网页开发，例如创建和设计网站。此外，我参加游泳比赛，也打高尔夫球，这些活动既有趣又让我不断成长。",
      interestsHeading: "兴趣",
      interests: ["动物", "网页开发", "游泳", "高尔夫", "旅行", "社交"],
      workTitle: "工作经历",
      workText:
        "我在 ICA 超市完成了为期两周的实习，体验了店内的多种工作。我负责补货、整理货架陈列、协助收银、在仓库分拣和拆包货物，以及帮助顾客寻找商品。我还协助保持店内整洁有序。",
      lessonsHeading: "所学技能",
      lessons: ["收银", "补货", "客户服务", "仓库管理", "店铺整理"],
    },
    cv: {
      title: "简历",
      metaTitle: "简历 — Ivan",
      description: "下载 Ivan 的简历。",
      intro: "您可以在这里直接下载我的 PDF 简历。",
      download: "下载简历",
      openPdf: "在新标签页中打开 PDF",
    },
    stack: {
      title: "技术栈",
      metaTitle: "技术栈 — Ivan",
      description: "我目前使用的工具和技术。",
      intro: "我使用的工具和技术",
      filterLabel: "筛选",
      filters: {
        all: "全部",
        web: "网页开发",
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
            "语义化标记，是构建结构清晰、无障碍访问且对 SEO 友好的网页的基础。",
          categoryKey: "web",
          categoryLabel: "网页开发",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          linkLabel: "MDN HTML",
        },
        {
          name: "tailwind",
          label: "Tailwind CSS",
          color: "text-sky-200",
          description:
            "实用优先的 CSS 框架，可以直接在标记中轻松构建响应式且一致的界面。",
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
            "带类型的 JavaScript，提供更好的自动补全、更安全的重构，并减少大型项目中的运行时错误。",
          categoryKey: "web",
          categoryLabel: "网页开发",
          href: "https://www.typescriptlang.org",
          linkLabel: "TypeScriptLang.org",
        },
        {
          name: "nextjs",
          label: "Next.js (前端 + 后端)",
          color: "text-slate-200",
          description:
            "我的主要全栈框架，支持 App Router、API 路由、服务端操作和内置 TypeScript 支持。",
          categoryKey: "web",
          categoryLabel: "网页开发",
          href: "https://nextjs.org",
          linkLabel: "NextJS.org",
        },
        {
          name: "prisma",
          label: "Prisma + PostgreSQL",
          color: "text-violet-200",
          description:
            "TypeScript 优先的 ORM，结合 PostgreSQL 实现类型安全的模型、迁移和可靠的数据存储。",
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
            "灵活的身份验证解决方案，支持 OAuth 提供商、邮件链接和凭证登录。",
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
            "我用于版本控制、Pull Request、代码审查和项目部署流程的平台。",
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
        "聊天机器人暂时不可用。",
      inputPlaceholder: "输入消息…",
      send: "发送",
      assistantLabel: "AI",
      userLabel: "您",
      noResponse: "抱歉，未能获取回复。",
      apiError: "暂时无法获取回复。",
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
