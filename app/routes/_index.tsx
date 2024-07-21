import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/_index.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c3759ee1"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=c3759ee1";
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
        lineNumber: 44,
        columnNumber: 7
      }, this), events.map((event, index) => /* @__PURE__ */jsxDEV(EventDetails, {
        date: new Date(event.date),
        link: event.link,
        linkText: "Register Now",
        location: event.location,
        topics: event.topics,
        weight: "medium"
      }, index, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 8
      }, this))]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 6
    }, this) : /* @__PURE__ */jsxDEV(Fragment, {}, void 0, false, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 6
    }, this),
    title: /* @__PURE__ */jsxDEV(Fragment, {
      children: ["PHILLY", /* @__PURE__ */jsxDEV("br", {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 66,
        columnNumber: 6
      }, this), "JS CLUB"]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQTBDSyxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXhDTCxTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQXlCNUIsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQjtFQUFFLENBQUM7QUFDeEM7QUFFQSx3QkFBd0JHLFFBQVE7RUFBQUMsRUFBQTtFQUMvQixNQUFNQyxNQUFBLEdBQVNSLGFBQUEsQ0FBNkI7RUFFNUMsT0FDQyxlQUFBRCxNQUFBLENBQUNHLFFBQUE7SUFDQU8sSUFBQSxFQUNDRCxNQUFBLENBQU9FLE1BQUEsR0FDTixlQUFBWCxNQUFBLENBQUFELFFBQUE7TUFDQ2EsUUFBQSxrQkFBQVosTUFBQSxDQUFDO1FBQUdhLFNBQUEsRUFBVTtRQUFTRCxRQUFBLGdCQUNaSCxNQUFBLENBQU9FLE1BQUEsS0FBVyxJQUFJLEtBQUs7TUFBQSxHQUR0QztRQUFBRyxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BRUEsR0FDQ1AsTUFBQSxDQUFPUSxHQUFBLENBQUksQ0FBQ0MsS0FBQSxFQUFPQyxLQUFBLEtBQ25CLGVBQUFuQixNQUFBLENBQUNFLFlBQUE7UUFDQWtCLElBQUEsRUFBTSxJQUFJQyxJQUFBLENBQUtILEtBQUEsQ0FBTUUsSUFBSTtRQUV6QkUsSUFBQSxFQUFNSixLQUFBLENBQU1JLElBQUE7UUFDWkMsUUFBQSxFQUFTO1FBQ1RDLFFBQUEsRUFBVU4sS0FBQSxDQUFNTSxRQUFBO1FBQ2hCQyxNQUFBLEVBQVFQLEtBQUEsQ0FBTU8sTUFBQTtRQUNkQyxNQUFBLEVBQU87TUFBQSxHQUxGUCxLQUFBLEVBRk47UUFBQUwsUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQVFBLENBQ0E7SUFBQSxHQWRGO01BQUFGLFFBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FlQSxJQUVBLGVBQUFoQixNQUFBLENBQUFELFFBQUE7TUFBQWUsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFO0lBR0pWLEtBQUEsRUFDQyxlQUFBTixNQUFBLENBQUFELFFBQUE7TUFBRWEsUUFBQSxhQUVELGVBQUFaLE1BQUEsQ0FBQyxVQUFEO1FBQUFjLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBSSxHQUFFO0lBQUEsR0FGUDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BSUE7RUFBQSxHQTVCRjtJQUFBRixRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BOEJBO0FBRUY7QUFBQVIsRUFBQSxDQXBDd0JEO0VBQUFBLFFBQ1JOLGFBQUE7QUFBQTtBQUFBMEIsRUFBQSxHQURRcEI7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJFdmVudERldGFpbHMiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIkluZGV4IiwiX3MiLCJldmVudHMiLCJsZWZ0IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJldmVudCIsImluZGV4IiwiZGF0ZSIsIkRhdGUiLCJsaW5rIiwibGlua1RleHQiLCJsb2NhdGlvbiIsInRvcGljcyIsIndlaWdodCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIl9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5zdGFibGVfZGVmaW5lTG9hZGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCB7IEV2ZW50RGV0YWlscyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRXZlbnREZXRhaWxzXCI7XG5pbXBvcnQgeyBQYWdlR3JpZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZUdyaWRcIjtcbmltcG9ydCB7IGNvbnN0cnVjdFNpdGVUaXRsZSB9IGZyb20gXCJ+L3V0aWxzL2NvbW1vblwiO1xuXG5pbXBvcnQgZXZlbnRzSnNvbiBmcm9tIFwiLi4vZGF0YS9ldmVudHMuanNvblwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gdW5zdGFibGVfZGVmaW5lTG9hZGVyKCgpID0+IHtcblx0Ly8gVGhpcyBhc3N1bWVzIHRoZSBldmVudHMgYXJlIGFsd2F5cyBpbiBzb3J0ZWQgb3JkZXIsIG5ld2VzdCBmaXJzdC5cblx0Ly8gU3VyZWx5IHRoaXMgYXNzdW1wdGlvbiBvbiB1bmRvY3VtZW50ZWQgZGF0YSBiZWhhdmlvciB3aWxsIG5ldmVyIGNvbWUgYmFjayB0byBoYXVudCB1cy5cblx0Y29uc3QgZXZlbnRzID0gZXZlbnRzSnNvbi5tYXAoKGV2ZW50KSA9PiAoe1xuXHRcdC4uLmV2ZW50LFxuXHRcdGRhdGU6IG5ldyBEYXRlKGV2ZW50LmRhdGUpLFxuXHR9KSk7XG5cblx0Ly8gVGhpcyBhc3N1bWVzIHdlJ2xsIGFsd2F5cyBoYXZlIGEgcmVidWlsZCBvZiB0aGUgc2l0ZSBhZnRlciBhbiBldmVudCBmaW5pc2hlcy5cblx0Ly8gU3VyZWx5IHRoaXMgYXNzdW1wdGlvbiB0aWVkIHRvIGRhdGV0aW1lIGxvZ2ljIHdpbGwgbmV2ZXIgY29tZSBiYWNrIHRvIGhhdW50IHVzLlxuXHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBzaXhXZWVrc0luVGhlRnV0dXJlID0gbmV3IERhdGUoXG5cdFx0bm93LmdldFRpbWUoKSArIDYgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcblx0KTtcblxuXHQvLyBGaWx0ZXIgYW5kIHNvcnQgZXZlbnQgZGF0ZSBpbiBhc2NlbmRpbmcgb3JkZXIuXG5cdHJldHVybiBldmVudHNcblx0XHQuZmlsdGVyKCh7IGRhdGUgfSkgPT4gZGF0ZSA+IG5vdyAmJiBkYXRlIDwgc2l4V2Vla3NJblRoZUZ1dHVyZSlcblx0XHQuc29ydCgoYSwgYikgPT4gYS5kYXRlLmdldFRpbWUoKSAtIGIuZGF0ZS5nZXRUaW1lKCkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKCkgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0Y29uc3QgZXZlbnRzID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0ZXZlbnRzLmxlbmd0aCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxhcmdlclwiPlxuXHRcdFx0XHRcdFx0XHROZXh0IEphd257ZXZlbnRzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxFdmVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRkYXRlPXtuZXcgRGF0ZShldmVudC5kYXRlKX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdGxpbms9e2V2ZW50Lmxpbmt9XG5cdFx0XHRcdFx0XHRcdFx0bGlua1RleHQ9XCJSZWdpc3RlciBOb3dcIlxuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uPXtldmVudC5sb2NhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHR0b3BpY3M9e2V2ZW50LnRvcGljc31cblx0XHRcdFx0XHRcdFx0XHR3ZWlnaHQ9XCJtZWRpdW1cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0dGl0bGU9e1xuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFBISUxMWVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdEpTIENMVUJcblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvX2luZGV4LnRzeCJ9