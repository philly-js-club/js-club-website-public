import {
  useLoaderData
} from "/build/_shared/chunk-7O6BMA6M.js";
import {
  Arrow,
  PageGrid
} from "/build/_shared/chunk-TFQRX5Y4.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-6Q5F5BI6.js";
import "/build/_shared/chunk-RGZDRY3U.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ARZZKGUF.js";
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "sponsors", children: sponsors.currentSponsors.map(
          ({ name, description, href, imageHref }) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "sponsor-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sponsor", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  alt: `${name} logo`,
                  className: "sponsor-image",
                  src: imageHref
                },
                void 0,
                false,
                {
                  fileName: "app/routes/sponsors.tsx",
                  lineNumber: 44,
                  columnNumber: 12
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sponsor-info", children: [
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
                      fileName: "app/routes/sponsors.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/routes/sponsors.tsx",
                  lineNumber: 51,
                  columnNumber: 14
                }, this) }, void 0, false, {
                  fileName: "app/routes/sponsors.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "smaller", children: description }, void 0, false, {
                  fileName: "app/routes/sponsors.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/sponsors.tsx",
                lineNumber: 49,
                columnNumber: 12
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/sponsors.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this) }, name, false, {
              fileName: "app/routes/sponsors.tsx",
              lineNumber: 42,
              columnNumber: 10
            }, this);
          }
        ) }, void 0, false, {
          fileName: "app/routes/sponsors.tsx",
          lineNumber: 38,
          columnNumber: 6
        }, this)
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
//# sourceMappingURL=/build/routes/sponsors-ZZYXPDTH.js.map
