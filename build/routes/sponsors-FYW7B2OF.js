import {
  Icons
} from "/build/_shared/chunk-QEUKQ57W.js";
import {
  PageGrid
} from "/build/_shared/chunk-CJFMKNCD.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-XYRK24EX.js";
import "/build/_shared/chunk-PDBEMHIO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-QSBDK2AJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sponsors.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sponsors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sponsors.tsx"
  );
  import.meta.hot.lastModified = "1712532099021.7612";
}
var meta = () => {
  return [{
    title: constructSiteTitle("Sponsors")
  }];
};
function Sponsors() {
  _s();
  const sponsors = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageGrid, { left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "Thanks, Sponsors!" }, void 0, false, {
      fileName: "app/routes/sponsors.tsx",
      lineNumber: 38,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sponsor-cta body-text", children: [
      "Philly JS wouldn't exist without the support of our beloved sponsors. Interested in sponsoring us?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline", href: "mailto:phillyjs@joewoods.dev", children: "Reach out to Joe!" }, void 0, false, {
        fileName: "app/routes/sponsors.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sponsors.tsx",
      lineNumber: 39,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icons, { icons: sponsors.currentSponsors, imageClassName: "sponsor-image" }, void 0, false, {
      fileName: "app/routes/sponsors.tsx",
      lineNumber: 46,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 37,
    columnNumber: 26
  }, this), subtitle: true, title: "Sponsors" }, void 0, false, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(Sponsors, "36xcgykwD3cd14N1BIIFX7Atcxs=", false, function() {
  return [useLoaderData];
});
_c = Sponsors;
var _c;
$RefreshReg$(_c, "Sponsors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Sponsors as default,
  meta
};
//# sourceMappingURL=/build/routes/sponsors-FYW7B2OF.js.map
