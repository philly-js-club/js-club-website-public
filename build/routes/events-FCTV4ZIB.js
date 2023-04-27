import {
  EventDetails
} from "/build/_shared/chunk-Q4V7EJS5.js";
import {
  PageGrid
} from "/build/_shared/chunk-L3DBNCDU.js";
import {
  useLoaderData
} from "/build/_shared/chunk-OTWBB2NH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/events.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Events | Philly JS Club" }];
};
function Events() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "events-year", children: Object.entries(data).sort(([a], [b]) => +b - +a).map(([year, events]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "events-year-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "events-year-heading", children: year }, void 0, false, {
          fileName: "app/routes/events.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "events-year-events-list", children: events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          EventDetails,
          {
            date: new Date(event.date),
            link: event.link,
            linkText: "Details",
            location: event.location,
            topics: event.topics
          },
          event.date,
          false,
          {
            fileName: "app/routes/events.tsx",
            lineNumber: 47,
            columnNumber: 11
          },
          this
        )) }, void 0, false, {
          fileName: "app/routes/events.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ] }, year, true, {
        fileName: "app/routes/events.tsx",
        lineNumber: 43,
        columnNumber: 8
      }, this)) }, void 0, false, {
        fileName: "app/routes/events.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      subtitle: true,
      title: "Events"
    },
    void 0,
    false,
    {
      fileName: "app/routes/events.tsx",
      lineNumber: 37,
      columnNumber: 3
    },
    this
  );
}
export {
  Events as default,
  meta
};
//# sourceMappingURL=/build/routes/events-FCTV4ZIB.js.map
