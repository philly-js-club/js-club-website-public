import {
  Arrow
} from "/build/_shared/chunk-QCPUN34Q.js";
import {
  region
} from "/build/_shared/chunk-FFZGQZPJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/EventDetails.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EventDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EventDetails.tsx"
  );
  import.meta.hot.lastModified = "1712813150351.668";
}
function EventDetails({
  date,
  link,
  location,
  linkText,
  topics,
  weight = "light"
}) {
  const formatter = new Intl.DateTimeFormat(region.locale, {
    timeZone: region.timeZone,
    day: "numeric",
    month: "long"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: `event-details medium event-details-${weight}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "event-details-date", children: formatter.format(date) }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 37,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: location }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "event-details-topics", children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "event-details-topic", children: topic }, topic, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 40,
      columnNumber: 26
    }, this)) }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link, rel: "noreferrer", target: "_blank", children: [
      linkText,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, { className: "arrow-out", label: "External link indication arrow", rotate: -45 }, void 0, false, {
        fileName: "app/components/EventDetails.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EventDetails.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = EventDetails;
var _c;
$RefreshReg$(_c, "EventDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  EventDetails
};
//# sourceMappingURL=/build/_shared/chunk-CXYTQFLA.js.map
