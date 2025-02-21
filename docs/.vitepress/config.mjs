import { defineConfig } from "vitepress";
import navigationPlugin from './plugins/navigation';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blueink",
  description: "DevImpact",
  head: [
    // Menambahkan favicon.ico
    ["link", { rel: "icon", href: "/logo.png" }],
    ["title", {}, "blueink"], // Paksa title kosong di HTML
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css' }],
  ],
  markdown: {
    math: true,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    title: "",
    nav: [
      { text: "Home", link: "/" },
      { text: "Content", link: "/dasar_python/" },
      { text: "Basic Machine Learning", link: "/basic_machine_learning/" },
    ],

    sidebar: {
      "/dasar_python/": [
        {
          text: "Content",
          items: [
            { text: "Python", link: "/dasar_python/" },
            //{ text: 'Intro NumPy dalam Komputasi', link: '/dasar_python/numpy' },
            {
              text: "NumPy",
              items: [
                {
                  text: "Numpy: Memahami Tipe Data",
                  link: "/dasar_python/type_data",
                },
                {
                  text: "NumPy Array",
                  link: "/dasar_python/basic_numpy_array",
                },
                {
                  text: "NumPy Universal Function",
                  link: "/dasar_python/numpy_universal_function",
                },
              ],
              collapsible: true,
              collapsed: true,
            },
            { text: "Pandas", items: [{text: "Pandas", link: "/dasar_python/pandas"}, {text: "Dask", link: "/dasar_python/dask"}], collapsible: true, collapsed: true },
            { text: "Matplotlib", items: [], collapsible: true, collapsed: true },
            { text: "Seaborn", items: [], collapsible: true, collapsed: true },
            { text: "Scipy", items: [], collapsible: true, collapsed: true },
            { text: "Scikitlearn", items: [], collapsible: true, collapsed: true },
            { text: "PyTorch", items: [], collapsible: true, collapsed: true },
            { text: "XGBoost", items: [], collapsible: true, collapsed: true },
            { text: "LightGBM", items: [], collapsible: true, collapsed: true },
            { text: "TensorFlow", items: [], collapsible: true, collapsed: true },
            { text: "Fast.ai", items: [], collapsible: true, collapsed: true },
            { text: "Keras", items: [], collapsible: true, collapsed: true },
            { text: "NLTK", items: [], collapsible: true, collapsed: true },
            { text: "Transformers", items: [], collapsible: true, collapsed: true },
            { text: "Pillow", items: [], collapsible: true, collapsed: true },
            { text: "Django", items: [], collapsible: true, collapsed: true },
            { text: "Stack For Python Colab", items: [
              {
                text: "Go Language",
                link: "/dasar_python/golang",
              },
              {
                text: "Contoh Aplikasi Golang",
                link: "/dasar_python/praktik_golang",
              },
            ], collapsible: true, collapsed: true },


            //{ text: 'Team', link: '/tim' },
          ],
          collapsible: true,
          collapsed: false,
        },
      ],
      "/basic_machine_learning/": [
        {
          text: "Basic Machine Learning",
          items: [{ text: "Umum", link: "/basic_machine_learning/" },
            {
              text: "Fundamental",
              link: "/basic_machine_learning/fundamental",
            },
            {
              text: "Aljabar Linear",
              link: "/basic_machine_learning/aljabar_linear",
            },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue",
          items: [{ text: "Vue Introduction", link: "/vue/" }],
        },
      ],
      "/nginx/": [
        {
          text: "nginx",
          items: [{ text: "Vue Introduction", link: "/nginx/" }],
        },
      ],
    },
    sidebarDepth: 2,

    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]*/
    footer: {
      message: "blueink.id",
      copyright: "Copyright © 2025",
    },
    search: {
      provider: "local",
    },
  },
  plugins: [navigationPlugin()],
  
});
