import {
  Icons
} from "/build/_shared/chunk-SQBTQ5JI.js";
import {
  PageGrid
} from "/build/_shared/chunk-KY4DZDIW.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-6Q5F5BI6.js";
import "/build/_shared/chunk-RGZDRY3U.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-WL3M2UO4.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-OXIDVDL3.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// browser-route-module:routes/sponsors.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/sponsors.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: constructSiteTitle("Sponsors") }];
};
function Sponsors() {
  const sponsors = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "Thanks, Sponsors!" }, void 0, false, {
          fileName: "app/routes/sponsors.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sponsor-cta body-text", children: [
          "Philly JS wouldn't exist without the support of our beloved sponsors. Interested in sponsoring us?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline", href: "mailto:phillyjs@joewoods.dev", children: "Reach out to Joe!" }, void 0, false, {
            fileName: "app/routes/sponsors.tsx",
            lineNumber: 34,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sponsors.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Icons,
          {
            icons: sponsors.currentSponsors,
            imageClassName: "sponsor-image"
          },
          void 0,
          false,
          {
            fileName: "app/routes/sponsors.tsx",
            lineNumber: 38,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/sponsors.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      subtitle: true,
      title: "Sponsors"
    },
    void 0,
    false,
    {
      fileName: "app/routes/sponsors.tsx",
      lineNumber: 27,
      columnNumber: 3
    },
    this
  );
}
export {
  Sponsors as default,
  meta
};
//# sourceMappingURL=/build/routes/sponsors-UGT45NTF.js.map
