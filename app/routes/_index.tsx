import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/_index.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=bb1bfc4c"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=bb1bfc4c";
import { EventDetails } from "/app/components/EventDetails.tsx";
import { PageGrid } from "/app/components/PageGrid.tsx";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle()
  }];
};
export default function Index() {
  _s();
  const events = useLoaderData();
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: events.length ? /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: ["Next Jawn", events.length === 1 ? "" : "s"]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this), events.map((event, index) => /* @__PURE__ */jsxDEV(EventDetails, {
        date: event.date,
        link: event.link,
        linkText: "Register Now",
        location: event.location,
        topics: event.topics,
        weight: "medium"
      }, index, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 8
      }, this))]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 6
    }, this) : /* @__PURE__ */jsxDEV(Fragment, {}, void 0, false, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 6
    }, this),
    title: /* @__PURE__ */jsxDEV(Fragment, {
      children: ["PHILLY", /* @__PURE__ */jsxDEV("br", {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this), "JS CLUB"]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 3
  }, this);
}
_s(Index, "0qsQ0LJMbp4ZAcOenpedLepO/y4=", false, function () {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/_index" && window.__remixRouteModuleUpdates.set("routes/_index", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXlDSyxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXhDTCxTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQXlCNUIsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQjtFQUFFLENBQUM7QUFDeEM7QUFFQSx3QkFBd0JHLFFBQVE7RUFBQUMsRUFBQTtFQUMvQixNQUFNQyxNQUFBLEdBQVNSLGFBQUEsQ0FBNkI7RUFFNUMsT0FDQyxlQUFBRCxNQUFBLENBQUNHLFFBQUE7SUFDQU8sSUFBQSxFQUNDRCxNQUFBLENBQU9FLE1BQUEsR0FDTixlQUFBWCxNQUFBLENBQUFELFFBQUE7TUFDQ2EsUUFBQSxrQkFBQVosTUFBQSxDQUFDO1FBQUdhLFNBQUEsRUFBVTtRQUFTRCxRQUFBLGdCQUNaSCxNQUFBLENBQU9FLE1BQUEsS0FBVyxJQUFJLEtBQUs7TUFBQSxHQUR0QztRQUFBRyxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BRUEsR0FDQ1AsTUFBQSxDQUFPUSxHQUFBLENBQUksQ0FBQ0MsS0FBQSxFQUFPQyxLQUFBLEtBQ25CLGVBQUFuQixNQUFBLENBQUNFLFlBQUE7UUFDQWtCLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBO1FBRVpDLElBQUEsRUFBTUgsS0FBQSxDQUFNRyxJQUFBO1FBQ1pDLFFBQUEsRUFBUztRQUNUQyxRQUFBLEVBQVVMLEtBQUEsQ0FBTUssUUFBQTtRQUNoQkMsTUFBQSxFQUFRTixLQUFBLENBQU1NLE1BQUE7UUFDZEMsTUFBQSxFQUFPO01BQUEsR0FMRk4sS0FBQSxFQUZOO1FBQUFMLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FRQSxDQUNBO0lBQUEsR0FkRjtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BZUEsSUFFQSxlQUFBaEIsTUFBQSxDQUFBRCxRQUFBO01BQUFlLFFBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRTtJQUdKVixLQUFBLEVBQ0MsZUFBQU4sTUFBQSxDQUFBRCxRQUFBO01BQUVhLFFBQUEsYUFFRCxlQUFBWixNQUFBLENBQUMsVUFBRDtRQUFBYyxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUksR0FBRTtJQUFBLEdBRlA7TUFBQUYsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUlBO0VBQUEsR0E1QkY7SUFBQUYsUUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQThCQTtBQUVGO0FBQUFSLEVBQUEsQ0FwQ3dCRDtFQUFBQSxRQUNSTixhQUFBO0FBQUE7QUFBQXlCLEVBQUEsR0FEUW5CO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJ1c2VMb2FkZXJEYXRhIiwiRXZlbnREZXRhaWxzIiwiUGFnZUdyaWQiLCJjb25zdHJ1Y3RTaXRlVGl0bGUiLCJtZXRhIiwidGl0bGUiLCJJbmRleCIsIl9zIiwiZXZlbnRzIiwibGVmdCIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWFwIiwiZXZlbnQiLCJpbmRleCIsImRhdGUiLCJsaW5rIiwibGlua1RleHQiLCJsb2NhdGlvbiIsInRvcGljcyIsIndlaWdodCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIl9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCB7IEV2ZW50RGV0YWlscyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRXZlbnREZXRhaWxzXCI7XG5pbXBvcnQgeyBQYWdlR3JpZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZUdyaWRcIjtcbmltcG9ydCB7IGNvbnN0cnVjdFNpdGVUaXRsZSB9IGZyb20gXCJ+L3V0aWxzL2NvbW1vblwiO1xuXG5pbXBvcnQgZXZlbnRzSnNvbiBmcm9tIFwiLi4vZGF0YS9ldmVudHMuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuXHQvLyBUaGlzIGFzc3VtZXMgdGhlIGV2ZW50cyBhcmUgYWx3YXlzIGluIHNvcnRlZCBvcmRlciwgbmV3ZXN0IGZpcnN0LlxuXHQvLyBTdXJlbHkgdGhpcyBhc3N1bXB0aW9uIG9uIHVuZG9jdW1lbnRlZCBkYXRhIGJlaGF2aW9yIHdpbGwgbmV2ZXIgY29tZSBiYWNrIHRvIGhhdW50IHVzLlxuXHRjb25zdCBldmVudHMgPSBldmVudHNKc29uLm1hcCgoZXZlbnQpID0+ICh7XG5cdFx0Li4uZXZlbnQsXG5cdFx0ZGF0ZTogbmV3IERhdGUoZXZlbnQuZGF0ZSksXG5cdH0pKTtcblxuXHQvLyBUaGlzIGFzc3VtZXMgd2UnbGwgYWx3YXlzIGhhdmUgYSByZWJ1aWxkIG9mIHRoZSBzaXRlIGFmdGVyIGFuIGV2ZW50IGZpbmlzaGVzLlxuXHQvLyBTdXJlbHkgdGhpcyBhc3N1bXB0aW9uIHRpZWQgdG8gZGF0ZXRpbWUgbG9naWMgd2lsbCBuZXZlciBjb21lIGJhY2sgdG8gaGF1bnQgdXMuXG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHNpeFdlZWtzSW5UaGVGdXR1cmUgPSBuZXcgRGF0ZShcblx0XHRub3cuZ2V0VGltZSgpICsgNiAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuXHQpO1xuXG5cdC8vIEZpbHRlciBhbmQgc29ydCBldmVudCBkYXRlIGluIGFzY2VuZGluZyBvcmRlci5cblx0cmV0dXJuIGV2ZW50c1xuXHRcdC5maWx0ZXIoKHsgZGF0ZSB9KSA9PiBkYXRlID4gbm93ICYmIGRhdGUgPCBzaXhXZWVrc0luVGhlRnV0dXJlKVxuXHRcdC5zb3J0KChhLCBiKSA9PiBhLmRhdGUuZ2V0VGltZSgpIC0gYi5kYXRlLmdldFRpbWUoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKCkgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0Y29uc3QgZXZlbnRzID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0ZXZlbnRzLmxlbmd0aCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxhcmdlclwiPlxuXHRcdFx0XHRcdFx0XHROZXh0IEphd257ZXZlbnRzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxFdmVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRkYXRlPXtldmVudC5kYXRlfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0bGluaz17ZXZlbnQubGlua31cblx0XHRcdFx0XHRcdFx0XHRsaW5rVGV4dD1cIlJlZ2lzdGVyIE5vd1wiXG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb249e2V2ZW50LmxvY2F0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdHRvcGljcz17ZXZlbnQudG9waWNzfVxuXHRcdFx0XHRcdFx0XHRcdHdlaWdodD1cIm1lZGl1bVwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8PjwvPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHR0aXRsZT17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0UEhJTExZXG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0SlMgQ0xVQlxuXHRcdFx0XHQ8Lz5cblx0XHRcdH1cblx0XHQvPlxuXHQpO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9waGlsbHktanMtY2x1Yi13ZWJzaXRlL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvYXBwL3JvdXRlcy9faW5kZXgudHN4In0=