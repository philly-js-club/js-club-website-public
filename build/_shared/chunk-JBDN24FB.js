import {
  site
} from "/build/_shared/chunk-GT7LP5M2.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";

// app/utils/common.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/common.ts"
  );
  import.meta.hot.lastModified = "1720120811808.5034";
}
function constructSiteTitle(pageTitle) {
  if (!pageTitle)
    return site.title;
  return `${pageTitle} | ${site.title}`;
}
function upperFirst(text) {
  return text[0].toUpperCase() + text.slice(1);
}

export {
  constructSiteTitle,
  upperFirst
};
//# sourceMappingURL=/build/_shared/chunk-JBDN24FB.js.map
