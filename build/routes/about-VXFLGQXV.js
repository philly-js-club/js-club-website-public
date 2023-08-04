import {
  PageGrid
} from "/build/_shared/chunk-K5LDEEVN.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-EJOKRSYP.js";
import "/build/_shared/chunk-B4YQL3S4.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-BM33BZRX.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: constructSiteTitle("About") }];
};
function About() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "Who, Us?" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "The Philadelphia JavaScript Club, founded in 2022, is a a place for developers of all skill and experience levels to connect, show off their work, and learn new things." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "We are devoted to being good citizens: we're here to help support individual and organizational development, to connect developers with the events going on in Philadelphia, and to provide a safe space for people to try new things. We want to empower everyone who joins us to build the best things they can build; we want to help make instant friends amongst the developers who call Philadelphia home." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 33,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "We\u2019re happy for you to join us." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "The Team" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 43,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "body-text", children: data.members.map(({ name, role }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: name }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          " - ",
          role
        ] }, name, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 46,
          columnNumber: 8
        }, this)) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 44,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "Organizers Emeritus" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 51,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "body-text", children: data.organizersEmeritum.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: name }, name, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 54,
          columnNumber: 8
        }, this)) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "Get In Touch" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 57,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-page-text", children: [
          "You can reach out to",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:phillyjs@joewoods.dev", children: "Joe over email" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 60,
            columnNumber: 7
          }, this),
          " with any questions or comments."
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 58,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "large", children: "The Website" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-page-text", children: "Courtesy of Josh using Figma, Remix, and TypeScript." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 64,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      subtitle: true,
      title: "About"
    },
    void 0,
    false,
    {
      fileName: "app/routes/about.tsx",
      lineNumber: 24,
      columnNumber: 3
    },
    this
  );
}
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-VXFLGQXV.js.map
