import {
  EventDetails
} from "/build/_shared/chunk-Q4V7EJS5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-5FSI6U5Z.js";
import {
  PageGrid
} from "/build/_shared/chunk-L3DBNCDU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Philly JS Club" }];
};
function Index() {
  const event = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "larger", children: "Next Jawn" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 34,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          EventDetails,
          {
            date: new Date(event.date),
            link: event.link,
            linkText: "Register Now",
            location: event.location,
            topics: event.topics,
            weight: "medium"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 35,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this),
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        "PHILLY",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 48,
          columnNumber: 6
        }, this),
        "JS CLUB"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 3
    },
    this
  );
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-ORY72FHV.js.map
