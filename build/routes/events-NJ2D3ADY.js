import {
  EventDetails
} from "/build/_shared/chunk-PN232BDI.js";
import {
  PageGrid
} from "/build/_shared/chunk-DC63RHJT.js";
import {
  useLoaderData
} from "/build/_shared/chunk-62MKTFXD.js";
import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6GQJD64I.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// browser-route-module:routes/events.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/events.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
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
//# sourceMappingURL=/build/routes/events-NJ2D3ADY.js.map
