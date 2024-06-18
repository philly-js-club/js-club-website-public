import {
  EventDetails,
  require_node
} from "/build/_shared/chunk-EFHVIVNR.js";
import {
  PageGrid
} from "/build/_shared/chunk-EG7JSUA4.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-2YWCX55A.js";
import "/build/_shared/chunk-KJEIWIQ2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-AMD6ONX5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1718678307543.2646";
}
var meta = () => {
  return [{
    title: constructSiteTitle()
  }];
};
function Index() {
  _s();
  const events = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageGrid, { left: events.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: [
      "Next Jawn",
      events.length === 1 ? "" : "s"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    events.map((event, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventDetails, { date: new Date(event.date), link: event.link, linkText: "Register Now", location: event.location, topics: event.topics, weight: "medium" }, index, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 37
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 53,
    columnNumber: 42
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this), title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    "PHILLY",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 6
    }, this),
    "JS CLUB"
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 26
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(Index, "0qsQ0LJMbp4ZAcOenpedLepO/y4=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-QZWWZ7I7.js.map
