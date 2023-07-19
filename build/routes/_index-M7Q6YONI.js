import {
  EventDetails,
  require_node
} from "/build/_shared/chunk-7K52FEZ5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-GOUOVFCO.js";
import {
  PageGrid
} from "/build/_shared/chunk-KD7IWGWX.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-EJOKRSYP.js";
import "/build/_shared/chunk-B4YQL3S4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: constructSiteTitle() }];
};
function Index() {
  const events = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: [
          "Next Jawn",
          events.length === 1 ? "" : "s"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 42,
          columnNumber: 6
        }, this),
        events.map((event, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          EventDetails,
          {
            date: new Date(event.date),
            link: event.link,
            linkText: "Register Now",
            location: event.location,
            topics: event.topics,
            weight: "medium"
          },
          index,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 44,
            columnNumber: 7
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        "PHILLY",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this),
        "JS CLUB"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 3
    },
    this
  );
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-M7Q6YONI.js.map
