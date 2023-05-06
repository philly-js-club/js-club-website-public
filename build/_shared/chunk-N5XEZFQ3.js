import {
  site
} from "/build/_shared/chunk-27XL7EJ2.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-6GQJD64I.js";

// app/utils/common.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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
//# sourceMappingURL=/build/_shared/chunk-N5XEZFQ3.js.map
