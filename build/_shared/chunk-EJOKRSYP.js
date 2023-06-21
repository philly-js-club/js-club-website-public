import {
  site
} from "/build/_shared/chunk-B4YQL3S4.js";

// app/utils/common.ts
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
//# sourceMappingURL=/build/_shared/chunk-EJOKRSYP.js.map
