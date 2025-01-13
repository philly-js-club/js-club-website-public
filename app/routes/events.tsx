import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/events.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/events.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=e4cf544b"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=e4cf544b";
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
              displayDate: event.displayDate ?? "Missing Display Date",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXlCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXhCSixTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLHlCQUFBLFFBQWlDO0FBQzFDLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxJQUFBLFFBQVk7QUFDckIsU0FBU0Msa0JBQUEsUUFBbUM7QUFRckMsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQixRQUFRO0VBQUUsQ0FBQztBQUNoRDtBQUVBLHdCQUF3QkcsU0FBUztFQUFBQyxFQUFBO0VBQ2hDLE1BQU1DLElBQUEsR0FBT1YsYUFBQSxDQUE2QjtFQUUxQyxPQUNDLGVBQUFELE1BQUEsQ0FBQ0ksUUFBQTtJQUNBUSxJQUFBLEVBQ0MsZUFBQVosTUFBQSxDQUFBRCxRQUFBO01BQ0NjLFFBQUEsa0JBQUFiLE1BQUEsQ0FBQ0UseUJBQUE7UUFDQVksU0FBQSxFQUFXLFlBQVlULElBQUEsQ0FBS1UsTUFBTTtNQUFBLEdBRG5DO1FBQUFDLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FFQSxHQUNBLGVBQUFsQixNQUFBLENBQUM7UUFBR21CLFNBQUEsRUFBVTtRQUNaTixRQUFBLEVBQUFPLE1BQUEsQ0FBT0MsT0FBQSxDQUFRVixJQUFJLEVBQ2xCVyxJQUFBLENBQUssQ0FBQyxDQUFDQyxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxNQUFNLENBQUNBLENBQUEsR0FBSSxDQUFDRCxDQUFDLEVBQzFCRSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLE9BQU0sTUFDbEIsZUFBQTNCLE1BQUEsQ0FBQztVQUFHbUIsU0FBQSxFQUFVO1VBQ2JOLFFBQUEsa0JBQUFiLE1BQUEsQ0FBQztZQUFHbUIsU0FBQSxFQUFVO1lBQXVCTixRQUFBLEVBQUFhO1VBQUEsR0FBckM7WUFBQVYsUUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUEwQyxHQUMxQyxlQUFBbEIsTUFBQSxDQUFDO1lBQUdtQixTQUFBLEVBQVU7WUFDWk4sUUFBQSxFQUFBYyxRQUFPRixHQUFBLENBQUtHLEtBQUEsSUFDWixlQUFBNUIsTUFBQSxDQUFDRyxZQUFBO2NBQ0EwQixJQUFBLEVBQU0sSUFBSUMsSUFBQSxDQUFLRixLQUFBLENBQU1DLElBQUk7Y0FDekJFLFdBQUEsRUFDQ0gsS0FBQSxDQUFNRyxXQUFBLElBQWU7Y0FHdEJDLElBQUEsRUFBTUosS0FBQSxDQUFNSSxJQUFBO2NBQ1pDLFFBQUEsRUFBUztjQUNUQyxRQUFBLEVBQVVOLEtBQUEsQ0FBTU0sUUFBQTtjQUNoQkMsTUFBQSxFQUFRUCxLQUFBLENBQU1PO1lBQUEsR0FKVFAsS0FBQSxDQUFNQyxJQUFBLEVBTFo7Y0FBQWIsUUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxPQVVBLENBQ0E7VUFBQSxHQWJGO1lBQUFGLFFBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsT0FjQTtRQUFBLEdBaEJxQ1EsSUFBQSxFQUF0QztVQUFBVixRQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BaUJBLENBQ0E7TUFBQSxHQXRCSDtRQUFBRixRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BdUJBO0lBQUEsR0EzQkQ7TUFBQUYsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQTRCQTtJQUVEa0IsUUFBQSxFQUFRO0lBQ1I1QixLQUFBLEVBQU07RUFBQSxHQWpDUDtJQUFBUSxRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9Ba0NBO0FBRUY7QUFBQVIsRUFBQSxDQXhDd0JEO0VBQUFBLFFBQ1ZSLGFBQUE7QUFBQTtBQUFBb0MsRUFBQSxHQURVNUI7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJDYWxlbmRhclN1YnNjcmlwdGlvbkxpbmtzIiwiRXZlbnREZXRhaWxzIiwiUGFnZUdyaWQiLCJzaXRlIiwiY29uc3RydWN0U2l0ZVRpdGxlIiwibWV0YSIsInRpdGxlIiwiRXZlbnRzIiwiX3MiLCJkYXRhIiwibGVmdCIsImNoaWxkcmVuIiwid2ViY2FsVXJsIiwiZG9tYWluIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiZW50cmllcyIsInNvcnQiLCJhIiwiYiIsIm1hcCIsInllYXIiLCJldmVudHMiLCJldmVudCIsImRhdGUiLCJEYXRlIiwiZGlzcGxheURhdGUiLCJsaW5rIiwibGlua1RleHQiLCJsb2NhdGlvbiIsInRvcGljcyIsInN1YnRpdGxlIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZXZlbnRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FsZW5kYXJTdWJzY3JpcHRpb25MaW5rcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQ2FsZW5kYXJTdWJzY3JpcHRpb25MaW5rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWxzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9FdmVudERldGFpbHNcIjtcbmltcG9ydCB7IFBhZ2VHcmlkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlR3JpZFwiO1xuaW1wb3J0IHsgc2l0ZSB9IGZyb20gXCJ+L2NvbmZpZ1wiO1xuaW1wb3J0IHsgY29uc3RydWN0U2l0ZVRpdGxlLCBncm91cEJ5IH0gZnJvbSBcIn4vdXRpbHMvY29tbW9uXCI7XG5cbmltcG9ydCBldmVudHMgZnJvbSBcIi4uL2RhdGEvZXZlbnRzLmpzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcigpIHtcblx0cmV0dXJuIGdyb3VwQnkoZXZlbnRzLCAoZXZlbnQpID0+IG5ldyBEYXRlKGV2ZW50LmRhdGUpLmdldEZ1bGxZZWFyKCkpO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4gW3sgdGl0bGU6IGNvbnN0cnVjdFNpdGVUaXRsZShcIkV2ZW50c1wiKSB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50cygpIHtcblx0Y29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8dHlwZW9mIGxvYWRlcj4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlR3JpZFxuXHRcdFx0bGVmdD17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PENhbGVuZGFyU3Vic2NyaXB0aW9uTGlua3Ncblx0XHRcdFx0XHRcdHdlYmNhbFVybD17YHdlYmNhbDovLyR7c2l0ZS5kb21haW59L2ljcy1mZWVkLmljc2B9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8b2wgY2xhc3NOYW1lPVwiZXZlbnRzLXllYXJcIj5cblx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyhkYXRhKVxuXHRcdFx0XHRcdFx0XHQuc29ydCgoW2FdLCBbYl0pID0+ICtiIC0gK2EpXG5cdFx0XHRcdFx0XHRcdC5tYXAoKFt5ZWFyLCBldmVudHNdKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWxpc3RcIiBrZXk9e3llYXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWhlYWRpbmdcIj57eWVhcn08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9sIGNsYXNzTmFtZT1cImV2ZW50cy15ZWFyLWV2ZW50cy1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFdmVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGU9e25ldyBEYXRlKGV2ZW50LmRhdGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheURhdGU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5kaXNwbGF5RGF0ZSA/PyBcIk1pc3NpbmcgRGlzcGxheSBEYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17ZXZlbnQuZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbms9e2V2ZW50Lmxpbmt9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5rVGV4dD1cIkRldGFpbHNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYXRpb249e2V2ZW50LmxvY2F0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWNzPXtldmVudC50b3BpY3N9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdDwvPlxuXHRcdFx0fVxuXHRcdFx0c3VidGl0bGVcblx0XHRcdHRpdGxlPVwiRXZlbnRzXCJcblx0XHQvPlxuXHQpO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9waGlsbHktanMtY2x1Yi13ZWJzaXRlL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvYXBwL3JvdXRlcy9ldmVudHMudHN4In0=