// .vitepress/plugins/katex-plugin.js
import { defineClientAppEnhance } from 'vitepress';

import { renderMathInElement } from 'katex/contrib/auto-render';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  if (typeof window !== 'undefined') {
    // Render persamaan LaTeX setelah aplikasi dimuat
    router.afterEach(() => {
      setTimeout(() => {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true }, // Mode display
            { left: '$', right: '$', display: false }, // Mode inline
            { left: '\\(', right: '\\)', display: false }, // Mode inline
            { left: '\\[', right: '\\]', display: true }, // Mode display
          ],
          throwOnError: false,
        });
      }, 100);
    });
  }
});