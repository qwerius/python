// .vitepress/plugins/navigation.js
export default function navigationPlugin() {
    return {
      enhanceApp({ app, router }) {
        router.afterEach((to, from) => {
          console.log(`Navigasi dari ${from.path} ke ${to.path}`);
        });
      },
    };
  }