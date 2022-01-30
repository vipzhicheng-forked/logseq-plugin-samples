/// <reference types="svelte" />

import "@logseq/libs";
import { css } from "./util";
import App from "./App.svelte";

function createModel() {
  return {
    openQueryPlayground() {
      logseq.showMainUI();
    },
  };
}

function main() {
  new App({
    target: document.querySelector("#app"),
  });

  const key = logseq.baseInfo.id;

  logseq.setMainUIInlineStyle({
    zIndex: 11
  });

  logseq.provideStyle(css`
    div[data-injected-ui=open-query-playground-${key}] {
      display: inline-flex;
      align-items: center;
      opacity: 0.55;
      font-weight: 500;
      padding: 0 5px;
      position: relative;
      font-size: 1.2em;
    }

    div[data-injected-ui=open-query-playground-${key}]:hover {
      opacity: 0.9;
    }
  `);

  logseq.App.registerUIItem('toolbar', {
    key: "open-query-playground",
    template: `
      <a data-on-click="openQueryPlayground" class="button"
         style=""><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
         <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
         <path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd" />
       </svg></a>
    `,
  });
}

logseq.ready(createModel()).then(main).catch(console.error);
