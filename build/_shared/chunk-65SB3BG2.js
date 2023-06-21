import {
  Arrow
} from "/build/_shared/chunk-KD7IWGWX.js";
import {
  region
} from "/build/_shared/chunk-B4YQL3S4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/EventDetails.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EventDetails({
  date,
  link,
  location,
  linkText,
  topics,
  weight = "light"
}) {
  const formatter = new Intl.DateTimeFormat(region.locale, {
    timeZone: region.timeZone,
    day: "numeric",
    month: "long"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: `event-details medium event-details-${weight}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "event-details-date", children: formatter.format(date) }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: location }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "event-details-topics", children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "event-details-topic", children: topic }, topic, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 33,
      columnNumber: 6
    }, this)) }, void 0, false, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link, rel: "noreferrer", target: "_blank", children: [
      linkText,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Arrow,
        {
          className: "arrow-out",
          label: "External link indication arrow",
          rotate: -45
        },
        void 0,
        false,
        {
          fileName: "app/components/EventDetails.tsx",
          lineNumber: 40,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/EventDetails.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EventDetails.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

export {
  EventDetails
};
//# sourceMappingURL=/build/_shared/chunk-65SB3BG2.js.map
