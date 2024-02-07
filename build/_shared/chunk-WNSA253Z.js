import {
  Arrow
} from "/build/_shared/chunk-I3K6KDBR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Icons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Icons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Icons.tsx"
  );
  import.meta.hot.lastModified = "1707301607430.8157";
}
function Icons({
  icons,
  imageClassName
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "icons", children: icons.map(({
    description,
    href,
    imageHref,
    name
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "icon-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: `${name} logo`, className: imageClassName, src: imageHref }, void 0, false, {
      fileName: "app/components/Icons.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "larger", children: [
        name,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, { className: "arrow-out medium", label: "External link indication arrow", rotate: -45 }, void 0, false, {
          fileName: "app/components/Icons.tsx",
          lineNumber: 39,
          columnNumber: 10
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 36,
        columnNumber: 8
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "smaller", children: description }, void 0, false, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 42,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Icons.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 33,
    columnNumber: 6
  }, this) }, name, false, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Icons;
var _c;
$RefreshReg$(_c, "Icons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Icons
};
//# sourceMappingURL=/build/_shared/chunk-WNSA253Z.js.map
