import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/events.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=575d0bff"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=575d0bff";
import { CalendarSubscriptionLinks } from "/app/components/CalendarSubscriptionLinks.tsx";
import { EventDetails } from "/app/components/EventDetails.tsx";
import { PageGrid } from "/app/components/PageGrid.tsx";
import { site } from "/app/config.ts";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle("Events")
  }];
};
export default function Events() {
  _s();
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV(CalendarSubscriptionLinks, {
        webcalUrl: `webcal://${site.domain}/ics-feed.ics`
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
        lineNumber: 28,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("ol", {
        className: "events-year",
        children: Object.entries(data).sort(([a], [b]) => +b - +a).map(([year, events2]) => /* @__PURE__ */jsxDEV("li", {
          className: "events-year-list",
          children: [/* @__PURE__ */jsxDEV("h2", {
            className: "events-year-heading",
            children: year
          }, void 0, false, {
            fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
            lineNumber: 36,
            columnNumber: 10
          }, this), /* @__PURE__ */jsxDEV("ol", {
            className: "events-year-events-list",
            children: events2.map(event => /* @__PURE__ */jsxDEV(EventDetails, {
              date: new Date(event.date),
              link: event.link,
              linkText: "Details",
              location: event.location,
              topics: event.topics
            }, event.date, false, {
              fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
              lineNumber: 39,
              columnNumber: 12
            }, this))
          }, void 0, false, {
            fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
            lineNumber: 37,
            columnNumber: 10
          }, this)]
        }, year, true, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
        lineNumber: 31,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "Events"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
_s(Events, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function () {
  return [useLoaderData];
});
_c = Events;
var _c;
$RefreshReg$(_c, "Events");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/events" && window.__remixRouteModuleUpdates.set("routes/events", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQTBCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXpCSixTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLHlCQUFBLFFBQWlDO0FBQzFDLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxJQUFBLFFBQVk7QUFDckIsU0FBU0Msa0JBQUEsUUFBbUM7QUFRckMsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQixRQUFRO0VBQUUsQ0FBQztBQUNoRDtBQUVBLHdCQUF3QkcsU0FBUztFQUFBQyxFQUFBO0VBQ2hDLE1BQU1DLElBQUEsR0FBT1YsYUFBQSxDQUE2QjtFQUMxQ1csT0FBQSxDQUFRQyxHQUFBLENBQUlGLElBQUk7RUFFaEIsT0FDQyxlQUFBWCxNQUFBLENBQUNJLFFBQUE7SUFDQVUsSUFBQSxFQUNDLGVBQUFkLE1BQUEsQ0FBQUQsUUFBQTtNQUNDZ0IsUUFBQSxrQkFBQWYsTUFBQSxDQUFDRSx5QkFBQTtRQUNBYyxTQUFBLEVBQVcsWUFBWVgsSUFBQSxDQUFLWSxNQUFNO01BQUEsR0FEbkM7UUFBQUMsUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUVBLEdBQ0EsZUFBQXBCLE1BQUEsQ0FBQztRQUFHcUIsU0FBQSxFQUFVO1FBQ1pOLFFBQUEsRUFBQU8sTUFBQSxDQUFPQyxPQUFBLENBQVFaLElBQUksRUFDbEJhLElBQUEsQ0FBSyxDQUFDLENBQUNDLENBQUMsR0FBRyxDQUFDQyxDQUFDLE1BQU0sQ0FBQ0EsQ0FBQSxHQUFJLENBQUNELENBQUMsRUFDMUJFLEdBQUEsQ0FBSSxDQUFDLENBQUNDLElBQUEsRUFBTUMsT0FBTSxNQUNsQixlQUFBN0IsTUFBQSxDQUFDO1VBQUdxQixTQUFBLEVBQVU7VUFDYk4sUUFBQSxrQkFBQWYsTUFBQSxDQUFDO1lBQUdxQixTQUFBLEVBQVU7WUFBdUJOLFFBQUEsRUFBQWE7VUFBQSxHQUFyQztZQUFBVixRQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLE9BQTBDLEdBQzFDLGVBQUFwQixNQUFBLENBQUM7WUFBR3FCLFNBQUEsRUFBVTtZQUNaTixRQUFBLEVBQUFjLFFBQU9GLEdBQUEsQ0FBS0csS0FBQSxJQUNaLGVBQUE5QixNQUFBLENBQUNHLFlBQUE7Y0FDQTRCLElBQUEsRUFBTSxJQUFJQyxJQUFBLENBQUtGLEtBQUEsQ0FBTUMsSUFBSTtjQUV6QkUsSUFBQSxFQUFNSCxLQUFBLENBQU1HLElBQUE7Y0FDWkMsUUFBQSxFQUFTO2NBQ1RDLFFBQUEsRUFBVUwsS0FBQSxDQUFNSyxRQUFBO2NBQ2hCQyxNQUFBLEVBQVFOLEtBQUEsQ0FBTU07WUFBQSxHQUpUTixLQUFBLENBQU1DLElBQUEsRUFGWjtjQUFBYixRQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLE9BT0EsQ0FDQTtVQUFBLEdBVkY7WUFBQUYsUUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQVdBO1FBQUEsR0FicUNRLElBQUEsRUFBdEM7VUFBQVYsUUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQWNBLENBQ0E7TUFBQSxHQW5CSDtRQUFBRixRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9Bb0JBO0lBQUEsR0F4QkQ7TUFBQUYsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQXlCQTtJQUVEaUIsUUFBQSxFQUFRO0lBQ1I3QixLQUFBLEVBQU07RUFBQSxHQTlCUDtJQUFBVSxRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BK0JBO0FBRUY7QUFBQVYsRUFBQSxDQXRDd0JEO0VBQUFBLFFBQ1ZSLGFBQUE7QUFBQTtBQUFBcUMsRUFBQSxHQURVN0I7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJDYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzIiwiRXZlbnREZXRhaWxzIiwiUGFnZUdyaWQiLCJzaXRlIiwiY29uc3RydWN0U2l0ZVRpdGxlIiwibWV0YSIsInRpdGxlIiwiRXZlbnRzIiwiX3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlZnQiLCJjaGlsZHJlbiIsIndlYmNhbFVybCIsImRvbWFpbiIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJ5ZWFyIiwiZXZlbnRzIiwiZXZlbnQiLCJkYXRlIiwiRGF0ZSIsImxpbmsiLCJsaW5rVGV4dCIsImxvY2F0aW9uIiwidG9waWNzIiwic3VidGl0bGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJldmVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBDYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9DYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbHMgfSBmcm9tIFwifi9jb21wb25lbnRzL0V2ZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgUGFnZUdyaWQgfSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VHcmlkXCI7XG5pbXBvcnQgeyBzaXRlIH0gZnJvbSBcIn4vY29uZmlnXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RTaXRlVGl0bGUsIGdyb3VwQnkgfSBmcm9tIFwifi91dGlscy9jb21tb25cIjtcblxuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi4vZGF0YS9ldmVudHMuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuXHRyZXR1cm4gZ3JvdXBCeShldmVudHMsIChldmVudCkgPT4gbmV3IERhdGUoZXZlbnQuZGF0ZSkuZ2V0RnVsbFllYXIoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKFwiRXZlbnRzXCIpIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlR3JpZFxuXHRcdFx0bGVmdD17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PENhbGVuZGFyU3Vic2NyaXB0aW9uTGlua3Ncblx0XHRcdFx0XHRcdHdlYmNhbFVybD17YHdlYmNhbDovLyR7c2l0ZS5kb21haW59L2ljcy1mZWVkLmljc2B9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8b2wgY2xhc3NOYW1lPVwiZXZlbnRzLXllYXJcIj5cblx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyhkYXRhKVxuXHRcdFx0XHRcdFx0XHQuc29ydCgoW2FdLCBbYl0pID0+ICtiIC0gK2EpXG5cdFx0XHRcdFx0XHRcdC5tYXAoKFt5ZWFyLCBldmVudHNdKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWxpc3RcIiBrZXk9e3llYXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWhlYWRpbmdcIj57eWVhcn08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9sIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWV2ZW50cy1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFdmVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGU9e25ldyBEYXRlKGV2ZW50LmRhdGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtldmVudC5kYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluaz17ZXZlbnQubGlua31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmtUZXh0PVwiRGV0YWlsc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbj17ZXZlbnQubG9jYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpY3M9e2V2ZW50LnRvcGljc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9vbD5cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRzdWJ0aXRsZVxuXHRcdFx0dGl0bGU9XCJFdmVudHNcIlxuXHRcdC8+XG5cdCk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9hcHAvcm91dGVzL2V2ZW50cy50c3gifQ==