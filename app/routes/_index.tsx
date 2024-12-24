import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/_index.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=300f8682"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=300f8682";
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
        date: event.date,
        displayDate: event.displayDate,
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
      lineNumber: 61,
      columnNumber: 6
    }, this),
    title: /* @__PURE__ */jsxDEV(Fragment, {
      children: ["PHILLY", /* @__PURE__ */jsxDEV("br", {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this), "JS CLUB"]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/_index.tsx",
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQTBDSyxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXpDTCxTQUFTQyxhQUFBLFFBQXFCO0FBRTlCLFNBQVNDLFlBQUEsUUFBb0I7QUFDN0IsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQTBCNUIsYUFBTUMsSUFBQSxHQUFxQkEsTUFBTTtFQUN2QyxPQUFPLENBQUM7SUFBRUMsS0FBQSxFQUFPRixrQkFBQSxDQUFtQjtFQUFFLENBQUM7QUFDeEM7QUFFQSx3QkFBd0JHLFFBQVE7RUFBQUMsRUFBQTtFQUMvQixNQUFNQyxNQUFBLEdBQVNSLGFBQUEsQ0FBNkI7RUFFNUMsT0FDQyxlQUFBRCxNQUFBLENBQUNHLFFBQUE7SUFDQU8sSUFBQSxFQUNDRCxNQUFBLENBQU9FLE1BQUEsR0FDTixlQUFBWCxNQUFBLENBQUFELFFBQUE7TUFDQ2EsUUFBQSxrQkFBQVosTUFBQSxDQUFDO1FBQUdhLFNBQUEsRUFBVTtRQUFTRCxRQUFBLGdCQUNaSCxNQUFBLENBQU9FLE1BQUEsS0FBVyxJQUFJLEtBQUs7TUFBQSxHQUR0QztRQUFBRyxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BRUEsR0FDQ1AsTUFBQSxDQUFPUSxHQUFBLENBQUksQ0FBQ0MsS0FBQSxFQUFPQyxLQUFBLEtBQ25CLGVBQUFuQixNQUFBLENBQUNFLFlBQUE7UUFDQWtCLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBO1FBQ1pDLFdBQUEsRUFBYUgsS0FBQSxDQUFNRyxXQUFBO1FBRW5CQyxJQUFBLEVBQU1KLEtBQUEsQ0FBTUksSUFBQTtRQUNaQyxRQUFBLEVBQVM7UUFDVEMsUUFBQSxFQUFVTixLQUFBLENBQU1NLFFBQUE7UUFDaEJDLE1BQUEsRUFBUVAsS0FBQSxDQUFNTyxNQUFBO1FBQ2RDLE1BQUEsRUFBTztNQUFBLEdBTEZQLEtBQUEsRUFITjtRQUFBTCxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BU0EsQ0FDQTtJQUFBLEdBZkY7TUFBQUYsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQWdCQSxJQUVBLGVBQUFoQixNQUFBLENBQUFELFFBQUE7TUFBQWUsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFO0lBR0pWLEtBQUEsRUFDQyxlQUFBTixNQUFBLENBQUFELFFBQUE7TUFBRWEsUUFBQSxhQUVELGVBQUFaLE1BQUEsQ0FBQyxVQUFEO1FBQUFjLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBSSxHQUFFO0lBQUEsR0FGUDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BSUE7RUFBQSxHQTdCRjtJQUFBRixRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BK0JBO0FBRUY7QUFBQVIsRUFBQSxDQXJDd0JEO0VBQUFBLFFBQ1JOLGFBQUE7QUFBQTtBQUFBMEIsRUFBQSxHQURRcEI7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJFdmVudERldGFpbHMiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIkluZGV4IiwiX3MiLCJldmVudHMiLCJsZWZ0IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJldmVudCIsImluZGV4IiwiZGF0ZSIsImRpc3BsYXlEYXRlIiwibGluayIsImxpbmtUZXh0IiwibG9jYXRpb24iLCJ0b3BpY3MiLCJ3ZWlnaHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJfaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBFdmVudERldGFpbHMgfSBmcm9tIFwifi9jb21wb25lbnRzL0V2ZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgUGFnZUdyaWQgfSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VHcmlkXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RTaXRlVGl0bGUgfSBmcm9tIFwifi91dGlscy9jb21tb25cIjtcblxuaW1wb3J0IGV2ZW50c0pzb24gZnJvbSBcIi4uL2RhdGEvZXZlbnRzLmpzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcigpIHtcblx0Ly8gVGhpcyBhc3N1bWVzIHRoZSBldmVudHMgYXJlIGFsd2F5cyBpbiBzb3J0ZWQgb3JkZXIsIG5ld2VzdCBmaXJzdC5cblx0Ly8gU3VyZWx5IHRoaXMgYXNzdW1wdGlvbiBvbiB1bmRvY3VtZW50ZWQgZGF0YSBiZWhhdmlvciB3aWxsIG5ldmVyIGNvbWUgYmFjayB0byBoYXVudCB1cy5cblx0Y29uc3QgZXZlbnRzID0gZXZlbnRzSnNvbi5tYXAoKGV2ZW50KSA9PiAoe1xuXHRcdC4uLmV2ZW50LFxuXHRcdGRhdGU6IG5ldyBEYXRlKGV2ZW50LmRhdGUpLFxuXHRcdGRpc3BsYXlEYXRlOiBldmVudC5kaXNwbGF5RGF0ZSA/PyBcIk1pc3NpbmcgRGlzcGxheSBEYXRlXCIsXG5cdH0pKTtcblxuXHQvLyBUaGlzIGFzc3VtZXMgd2UnbGwgYWx3YXlzIGhhdmUgYSByZWJ1aWxkIG9mIHRoZSBzaXRlIGFmdGVyIGFuIGV2ZW50IGZpbmlzaGVzLlxuXHQvLyBTdXJlbHkgdGhpcyBhc3N1bXB0aW9uIHRpZWQgdG8gZGF0ZXRpbWUgbG9naWMgd2lsbCBuZXZlciBjb21lIGJhY2sgdG8gaGF1bnQgdXMuXG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHNpeFdlZWtzSW5UaGVGdXR1cmUgPSBuZXcgRGF0ZShcblx0XHRub3cuZ2V0VGltZSgpICsgNiAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuXHQpO1xuXG5cdC8vIEZpbHRlciBhbmQgc29ydCBldmVudCBkYXRlIGluIGFzY2VuZGluZyBvcmRlci5cblx0cmV0dXJuIGV2ZW50c1xuXHRcdC5maWx0ZXIoKHsgZGF0ZSB9KSA9PiBkYXRlID4gbm93ICYmIGRhdGUgPCBzaXhXZWVrc0luVGhlRnV0dXJlKVxuXHRcdC5zb3J0KChhLCBiKSA9PiBhLmRhdGUuZ2V0VGltZSgpIC0gYi5kYXRlLmdldFRpbWUoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKCkgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0Y29uc3QgZXZlbnRzID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0ZXZlbnRzLmxlbmd0aCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxhcmdlclwiPlxuXHRcdFx0XHRcdFx0XHROZXh0IEphd257ZXZlbnRzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxFdmVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRkYXRlPXtldmVudC5kYXRlfVxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXlEYXRlPXtldmVudC5kaXNwbGF5RGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdGxpbms9e2V2ZW50Lmxpbmt9XG5cdFx0XHRcdFx0XHRcdFx0bGlua1RleHQ9XCJSZWdpc3RlciBOb3dcIlxuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uPXtldmVudC5sb2NhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHR0b3BpY3M9e2V2ZW50LnRvcGljc31cblx0XHRcdFx0XHRcdFx0XHR3ZWlnaHQ9XCJtZWRpdW1cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0dGl0bGU9e1xuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFBISUxMWVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdEpTIENMVUJcblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvX2luZGV4LnRzeCJ9