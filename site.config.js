const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ssuuuuuuuu",
    image: "/avartar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "수바오",
    bio: "나는 귀염",
    email: "sh010409@gmail.com",
    linkedin: "",
    github: "Ssuuuuuuuu",
    instagram: "s_h__49",
  },
  projects: [
    {
      name: `Ssuulog`,
      href: "https://github.com/Ssuuuuuuuu/notion-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "수바오",
    description: "수이로그",
  },

  // CONFIG configration (required)
  link: "https://ssuuulog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1800, // revalidate time for [slug], index
}

module.exports = { CONFIG }
