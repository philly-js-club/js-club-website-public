import {
  EventDetails
} from "/build/_shared/chunk-HPK5MWYB.js";
import {
  PageGrid
} from "/build/_shared/chunk-I3VYIGH5.js";
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

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Philly JS Club" }];
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
          lineNumber: 38,
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
            lineNumber: 40,
            columnNumber: 7
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        "PHILLY",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this),
        "JS CLUB"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 3
    },
    this
  );
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-OZFABACC.js.map
