import {
  PageGrid
} from "/build/_shared/chunk-F7OFZTGJ.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-4TNXVTL7.js";
import "/build/_shared/chunk-RRWEP237.js";
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

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1710177829214.5774";
}
var meta = () => {
  return [{
    title: constructSiteTitle("About")
  }];
};
function About() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageGrid, { left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "Who, Us?" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "The Philadelphia JavaScript Club, founded in 2022, is a a place for developers of all skill and experience levels to connect, show off their work, and learn new things." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 38,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "We are devoted to being good citizens: we're here to help support individual and organizational development, to connect developers with the events going on in Philadelphia, and to provide a safe space for people to try new things. We want to empower everyone who joins us to build the best things they can build; we want to help make instant friends amongst the developers who call Philadelphia home." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 43,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "We\u2019re happy for you to join us." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 52,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "The Team" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 53,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "body-text", children: data.members.map(({
      name,
      role
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: name }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      " - ",
      role
    ] }, name, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 54,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "Organizers Emeritus" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 62,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "body-text", children: data.organizersEmeritum.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: name }, name, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 64,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 63,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "Get In Touch" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 66,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-page-text", children: [
      "You can reach out to",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:phillyjs@joewoods.dev", children: "Joe over email" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      " with any questions or comments."
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 67,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "The Website" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 72,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-page-text", children: "Courtesy of Josh using Figma, Remix, and TypeScript." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 73,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 36,
    columnNumber: 26
  }, this), subtitle: true, title: "About" }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(About, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-7F6ZH4OC.js.map
