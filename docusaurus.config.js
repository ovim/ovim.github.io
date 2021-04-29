const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "ovim - programmer",
  tagline: "",
  titleDelimiter: "-",
  url: "https://ovim.github.io/",
  baseUrl: "/",
  favicon: "img/avatar.png",//"img/favicon.ico",
  organizationName: "ovim", // Usually your GitHub org/user name.
  projectName: "ovim.github.io", // Usually your repo name.
  themeConfig: {
    /*announcementBar: {
      id: "feature_release", // Any value that will identify this message.
      content: `发布配套文本：<a href='/docs/videos/vue/vue-echarts-bar-chart'>《Vue 3.0 + Echarts 电影票房数据可视化柱状图展示》点击查看</a>`,
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },*/
    hideableSidebar: true,
    navbar: {
      title: "ovim",
      logo: {
        alt: '<?php echo "The Programming Docs of ovim";',
        src: "img/avatar.png",
        srcDark: "img/avatar.png",
      },
      items: [
        {
          to: "/",
          label: "  blog",
          position: "right",
        },
        {
          label: "note",
          position: "right",
          items: [
            {
              label: "Docker",
              to: "docs/docker/README",
            },
            {
              label: "PHP",
              to: "docs/php/base",
            },
            {
              label: "Linux",
              to: "docs/linux/README",
            },
            {
              label: "SQL",
              to: "docs/sql/mysql/README",
            },
            {
              label: "Git/SVN",
              to: "docs/git-svn/git/base",
            },
            {
              label: "JS/CSS/JQuery",
              to: "docs/javascript/README",
            },
            {
              label: "算法",
              to: "docs/algorithm/common",
            },
          ],
        },
        {
          href: "https://github.com/ovim",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    /*algolia: {
      apiKey: "",
      indexName: "",
      appId: "",
    },*/
    footer: {
      style: "dark",
      links: [
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/ovim",
            },
            {
              label: "Bilibili",
              href: "https://space.bilibili.com/315847004",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "baby‘s csdn",
              to: "https://blog.csdn.net/weixin_45566227",
            },
            {
              label: "ovim‘s cnblogs",
              to: "https://www.cnblogs.com/ovim",
            },
            {
              label: "zxuqian.cn",
              to: "https://zxuqian.cn/",
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} 为牧  Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" style="color: hsl(210deg, 100%, 80%)"><!--网站备案号--></a></p>`,//<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a><br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" style="color: hsl(210deg, 100%, 80%)">CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      defaultLanguage: "javascript",
    },
    // googleAnalytics: {
    //   trackingID: "UA-118572241-1",
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/ovim/ovim.github.io/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            title: "为牧",
            copyright: `Copyright © ${new Date().getFullYear()} 为牧  Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/"><!--网站备案号--></a></p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  // themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // "@docusaurus/plugin-ideal-image",
    path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
    path.resolve(__dirname, "./src/plugin/plugin-onesignal-push"),
    "docusaurus2-dotenv",
    // [
    //   "@easyops-cn/docusaurus-search-local",
    //   {
    //     hashed: true,
    //     // indexPages: true,
    //     blogRouteBasePath: "/",
    //     language: ["en", "zh"],
    //   },
    // ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
    // {
    //   href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    //   type: "text/css",
    //   rel: "stylesheet",
    // },
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
    localeConfigs: {
      "zh-CN": {
        label: "中文",
      },
      /*en: {
        label: "English",
      },*/
    },
  },
};
