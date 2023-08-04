import {
  EventDetails,
  require_node
} from "/build/_shared/chunk-5FHX4T7V.js";
import {
  PageGrid
} from "/build/_shared/chunk-K5LDEEVN.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-EJOKRSYP.js";
import {
  site
} from "/build/_shared/chunk-B4YQL3S4.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-BM33BZRX.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/events.tsx
var import_node = __toESM(require_node());

// app/components/CalendarSubscriptionLinks.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CalendarSubscriptionLinks({
  webcalUrl
}) {
  const [showMore, setShowMore] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-subscription", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowMore((s) => !s), children: "\u{1F4C6} Subscribe with your favorite calendar client" }, void 0, false, {
      fileName: "app/components/CalendarSubscriptionLinks.tsx",
      lineNumber: 14,
      columnNumber: 4
    }, this),
    showMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://www.google.com/calendar/render?cid=${webcalUrl}`, children: "Subscribe with Google Calendar" }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 19,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "To subscribe, point your calendar client to the following URL:" }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: webcalUrl }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 25,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u26A0\uFE0F Be sure to not download and import that file! You'll need to subscribe to the calendar updates in order for your calendar client to continue to fetch new events." }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 26,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CalendarSubscriptionLinks.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CalendarSubscriptionLinks.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

// app/routes/events.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: constructSiteTitle("Events") }];
};
function Events() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          CalendarSubscriptionLinks,
          {
            webcalUrl: `webcal://${site.domain}/ics-feed.ics`
          },
          void 0,
          false,
          {
            fileName: "app/routes/events.tsx",
            lineNumber: 41,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "events-year", children: Object.entries(data).sort(([a], [b]) => +b - +a).map(([year, events]) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "events-year-list", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "events-year-heading", children: year }, void 0, false, {
            fileName: "app/routes/events.tsx",
            lineNumber: 49,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "events-year-events-list", children: events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              lineNumber: 52,
              columnNumber: 12
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/events.tsx",
            lineNumber: 50,
            columnNumber: 10
          }, this)
        ] }, year, true, {
          fileName: "app/routes/events.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)) }, void 0, false, {
          fileName: "app/routes/events.tsx",
          lineNumber: 44,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/events.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      subtitle: true,
      title: "Events"
    },
    void 0,
    false,
    {
      fileName: "app/routes/events.tsx",
      lineNumber: 38,
      columnNumber: 3
    },
    this
  );
}
export {
  Events as default,
  meta
};
//# sourceMappingURL=/build/routes/events-RULAGPO6.js.map
