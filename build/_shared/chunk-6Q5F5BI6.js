import {
  site
} from "/build/_shared/chunk-RGZDRY3U.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-OXIDVDL3.js";

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
//# sourceMappingURL=/build/_shared/chunk-6Q5F5BI6.js.map
