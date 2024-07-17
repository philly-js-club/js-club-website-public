import {
  EventDetails,
  require_node
} from "/build/_shared/chunk-TMN2MQQY.js";
import {
  PageGrid
} from "/build/_shared/chunk-N44POULG.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-6EPOBJRL.js";
import {
  site
} from "/build/_shared/chunk-FJ6ZNNFV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-W3GBPXPB.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/events.tsx
var import_node = __toESM(require_node());

// app/components/CalendarSubscriptionLinks.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CalendarSubscriptionLinks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CalendarSubscriptionLinks.tsx"
  );
  import.meta.hot.lastModified = "1721251370148.868";
}
function CalendarSubscriptionLinks({
  webcalUrl
}) {
  _s();
  const [showMore, setShowMore] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-subscription", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowMore((s) => !s), children: "\u{1F4C6} Subscribe with your favorite calendar client" }, void 0, false, {
      fileName: "app/components/CalendarSubscriptionLinks.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    showMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://www.google.com/calendar/render?cid=${webcalUrl}`, children: "Subscribe with Google Calendar" }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "To subscribe, point your calendar client to the following URL:" }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 38,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: webcalUrl }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 39,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u26A0\uFE0F Be sure to not download and import that file! You'll need to subscribe to the calendar updates in order for your calendar client to continue to fetch new events." }, void 0, false, {
        fileName: "app/components/CalendarSubscriptionLinks.tsx",
        lineNumber: 40,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CalendarSubscriptionLinks.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CalendarSubscriptionLinks.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(CalendarSubscriptionLinks, "z+4BA/fiXyLj4HPnnELOZzQs4r4=");
_c = CalendarSubscriptionLinks;
var _c;
$RefreshReg$(_c, "CalendarSubscriptionLinks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/events.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/events.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/events.tsx"
  );
  import.meta.hot.lastModified = "1721251370152.868";
}
var meta = () => {
  return [{
    title: constructSiteTitle("Events")
  }];
};
function Events() {
  _s2();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageGrid, { left: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CalendarSubscriptionLinks, { webcalUrl: `webcal://${site.domain}/ics-feed.ics` }, void 0, false, {
      fileName: "app/routes/events.tsx",
      lineNumber: 41,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "events-year", children: Object.entries(data).sort(([a], [b]) => +b - +a).map(([year, events]) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "events-year-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "events-year-heading", children: year }, void 0, false, {
        fileName: "app/routes/events.tsx",
        lineNumber: 44,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "events-year-events-list", children: events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EventDetails, { date: new Date(event.date), link: event.link, linkText: "Details", location: event.location, topics: event.topics }, event.date, false, {
        fileName: "app/routes/events.tsx",
        lineNumber: 46,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/events.tsx",
        lineNumber: 45,
        columnNumber: 10
      }, this)
    ] }, year, true, {
      fileName: "app/routes/events.tsx",
      lineNumber: 43,
      columnNumber: 81
    }, this)) }, void 0, false, {
      fileName: "app/routes/events.tsx",
      lineNumber: 42,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/events.tsx",
    lineNumber: 40,
    columnNumber: 26
  }, this), subtitle: true, title: "Events" }, void 0, false, {
    fileName: "app/routes/events.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s2(Events, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = Events;
var _c2;
$RefreshReg$(_c2, "Events");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Events as default,
  meta
};
//# sourceMappingURL=/build/routes/events-M5PYP2ZL.js.map
