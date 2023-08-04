import {
  Arrow
} from "/build/_shared/chunk-K5LDEEVN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BM33BZRX.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/Icons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Icons({ icons, imageClassName }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "icons", children: icons.map(({ description, href, imageHref, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "icon-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        alt: `${name} logo`,
        className: imageClassName,
        src: imageHref
      },
      void 0,
      false,
      {
        fileName: "app/components/Icons.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "larger", children: [
        name,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Arrow,
          {
            className: "arrow-out medium",
            label: "External link indication arrow",
            rotate: -45
          },
          void 0,
          false,
          {
            fileName: "app/components/Icons.tsx",
            lineNumber: 30,
            columnNumber: 10
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 27,
        columnNumber: 8
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "smaller", children: description }, void 0, false, {
        fileName: "app/components/Icons.tsx",
        lineNumber: 37,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Icons.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 20,
    columnNumber: 6
  }, this) }, name, false, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this)) }, void 0, false, {
    fileName: "app/components/Icons.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

export {
  Icons
};
//# sourceMappingURL=/build/_shared/chunk-B2PNKIUT.js.map
