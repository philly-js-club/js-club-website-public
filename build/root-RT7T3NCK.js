import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-7LENSBE2.js";
import {
  site
} from "/build/_shared/chunk-MOJPNVST.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MMWTRQXG.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-ZTVRCKAT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.css
var root_default = "/build/_assets/root-TVBK7GC4.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var metaTags = [
  { charSet: "utf-8" },
  { content: site.baseURL, property: "og:url" },
  { content: site.baseURL, property: "twitter:url" },
  { content: `${site.baseURL}/logo.png`, property: "og:image" },
  { content: `${site.baseURL}/logo.png`, property: "twitter:image" },
  { content: site.longTitle, property: "og:title" },
  { content: site.longTitle, property: "twitter:title" },
  { content: site.title, name: "title" },
  { content: "summary", property: "twitter:card" },
  { content: "website", property: "og:type" },
  { content: "width=device-width,initial-scale=1", name: "viewport" },
  { content: site.description, name: "description" },
  { content: site.description, property: "twitter:description" }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      metaTags.map(
        (meta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { ...meta }, JSON.stringify(meta), false, {
          fileName: "app/root.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: "https://fonts.googleapis.com", rel: "preconnect" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: root_default, rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
//# sourceMappingURL=/build/root-RT7T3NCK.js.map
