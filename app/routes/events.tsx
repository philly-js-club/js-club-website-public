import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/events.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c77f7f27"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=c77f7f27";
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
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV(CalendarSubscriptionLinks, {
        webcalUrl: `webcal://${site.domain}/ics-feed.ics`
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
        lineNumber: 27,
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
            lineNumber: 35,
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
              lineNumber: 38,
              columnNumber: 12
            }, this))
          }, void 0, false, {
            fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
            lineNumber: 36,
            columnNumber: 10
          }, this)]
        }, year, true, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
        lineNumber: 30,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "Events"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx",
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXlCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXhCSixTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLHlCQUFBLFFBQWlDO0FBQzFDLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxJQUFBLFFBQVk7QUFDckIsU0FBU0Msa0JBQUEsUUFBbUM7QUFRckMsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQixRQUFRO0VBQUUsQ0FBQztBQUNoRDtBQUVBLHdCQUF3QkcsU0FBUztFQUFBQyxFQUFBO0VBQ2hDLE1BQU1DLElBQUEsR0FBT1YsYUFBQSxDQUE2QjtFQUUxQyxPQUNDLGVBQUFELE1BQUEsQ0FBQ0ksUUFBQTtJQUNBUSxJQUFBLEVBQ0MsZUFBQVosTUFBQSxDQUFBRCxRQUFBO01BQ0NjLFFBQUEsa0JBQUFiLE1BQUEsQ0FBQ0UseUJBQUE7UUFDQVksU0FBQSxFQUFXLFlBQVlULElBQUEsQ0FBS1UsTUFBTTtNQUFBLEdBRG5DO1FBQUFDLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FFQSxHQUNBLGVBQUFsQixNQUFBLENBQUM7UUFBR21CLFNBQUEsRUFBVTtRQUNaTixRQUFBLEVBQUFPLE1BQUEsQ0FBT0MsT0FBQSxDQUFRVixJQUFJLEVBQ2xCVyxJQUFBLENBQUssQ0FBQyxDQUFDQyxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxNQUFNLENBQUNBLENBQUEsR0FBSSxDQUFDRCxDQUFDLEVBQzFCRSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLE9BQU0sTUFDbEIsZUFBQTNCLE1BQUEsQ0FBQztVQUFHbUIsU0FBQSxFQUFVO1VBQ2JOLFFBQUEsa0JBQUFiLE1BQUEsQ0FBQztZQUFHbUIsU0FBQSxFQUFVO1lBQXVCTixRQUFBLEVBQUFhO1VBQUEsR0FBckM7WUFBQVYsUUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUEwQyxHQUMxQyxlQUFBbEIsTUFBQSxDQUFDO1lBQUdtQixTQUFBLEVBQVU7WUFDWk4sUUFBQSxFQUFBYyxRQUFPRixHQUFBLENBQUtHLEtBQUEsSUFDWixlQUFBNUIsTUFBQSxDQUFDRyxZQUFBO2NBQ0EwQixJQUFBLEVBQU0sSUFBSUMsSUFBQSxDQUFLRixLQUFBLENBQU1DLElBQUk7Y0FFekJFLElBQUEsRUFBTUgsS0FBQSxDQUFNRyxJQUFBO2NBQ1pDLFFBQUEsRUFBUztjQUNUQyxRQUFBLEVBQVVMLEtBQUEsQ0FBTUssUUFBQTtjQUNoQkMsTUFBQSxFQUFRTixLQUFBLENBQU1NO1lBQUEsR0FKVE4sS0FBQSxDQUFNQyxJQUFBLEVBRlo7Y0FBQWIsUUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxPQU9BLENBQ0E7VUFBQSxHQVZGO1lBQUFGLFFBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsT0FXQTtRQUFBLEdBYnFDUSxJQUFBLEVBQXRDO1VBQUFWLFFBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FjQSxDQUNBO01BQUEsR0FuQkg7UUFBQUYsUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQW9CQTtJQUFBLEdBeEJEO01BQUFGLFFBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0F5QkE7SUFFRGlCLFFBQUEsRUFBUTtJQUNSM0IsS0FBQSxFQUFNO0VBQUEsR0E5QlA7SUFBQVEsUUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQStCQTtBQUVGO0FBQUFSLEVBQUEsQ0FyQ3dCRDtFQUFBQSxRQUNWUixhQUFBO0FBQUE7QUFBQW1DLEVBQUEsR0FEVTNCO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJ1c2VMb2FkZXJEYXRhIiwiQ2FsZW5kYXJTdWJzY3JpcHRpb25MaW5rcyIsIkV2ZW50RGV0YWlscyIsIlBhZ2VHcmlkIiwic2l0ZSIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIkV2ZW50cyIsIl9zIiwiZGF0YSIsImxlZnQiLCJjaGlsZHJlbiIsIndlYmNhbFVybCIsImRvbWFpbiIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJ5ZWFyIiwiZXZlbnRzIiwiZXZlbnQiLCJkYXRlIiwiRGF0ZSIsImxpbmsiLCJsaW5rVGV4dCIsImxvY2F0aW9uIiwidG9waWNzIiwic3VidGl0bGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJldmVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBDYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9DYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbHMgfSBmcm9tIFwifi9jb21wb25lbnRzL0V2ZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgUGFnZUdyaWQgfSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VHcmlkXCI7XG5pbXBvcnQgeyBzaXRlIH0gZnJvbSBcIn4vY29uZmlnXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RTaXRlVGl0bGUsIGdyb3VwQnkgfSBmcm9tIFwifi91dGlscy9jb21tb25cIjtcblxuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi4vZGF0YS9ldmVudHMuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuXHRyZXR1cm4gZ3JvdXBCeShldmVudHMsIChldmVudCkgPT4gbmV3IERhdGUoZXZlbnQuZGF0ZSkuZ2V0RnVsbFllYXIoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKFwiRXZlbnRzXCIpIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8Q2FsZW5kYXJTdWJzY3JpcHRpb25MaW5rc1xuXHRcdFx0XHRcdFx0d2ViY2FsVXJsPXtgd2ViY2FsOi8vJHtzaXRlLmRvbWFpbn0vaWNzLWZlZWQuaWNzYH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxvbCBjbGFzc05hbWU9XCJldmVudHMteWVhclwiPlxuXHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKGRhdGEpXG5cdFx0XHRcdFx0XHRcdC5zb3J0KChbYV0sIFtiXSkgPT4gK2IgLSArYSlcblx0XHRcdFx0XHRcdFx0Lm1hcCgoW3llYXIsIGV2ZW50c10pID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiZXZlbnRzLXllYXItbGlzdFwiIGtleT17eWVhcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiZXZlbnRzLXllYXItaGVhZGluZ1wiPnt5ZWFyfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8b2wgY2xhc3NOYW1lPVwiZXZlbnRzLXllYXItZXZlbnRzLWxpc3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV2ZW50RGV0YWlsc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0ZT17bmV3IERhdGUoZXZlbnQuZGF0ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2V2ZW50LmRhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5rPXtldmVudC5saW5rfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlua1RleHQ9XCJEZXRhaWxzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uPXtldmVudC5sb2NhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljcz17ZXZlbnQudG9waWNzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdH1cblx0XHRcdHN1YnRpdGxlXG5cdFx0XHR0aXRsZT1cIkV2ZW50c1wiXG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvZXZlbnRzLnRzeCJ9