import {
  site
} from "/build/_shared/chunk-WJSCC6NI.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";

// app/utils/common.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/common.ts"
  );
  import.meta.hot.lastModified = "1719815586697.7776";
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
//# sourceMappingURL=/build/_shared/chunk-JRFM4DXV.js.map
