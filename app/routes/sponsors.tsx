import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/sponsors.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=23a23b3a"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=23a23b3a";
import { Icons } from "/app/components/Icons.tsx";
import { PageGrid } from "/app/components/PageGrid.tsx";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle("Sponsors")
  }];
};
export default function Sponsors() {
  _s();
  const sponsors2 = useLoaderData();
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: "Thanks, Sponsors!"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
        lineNumber: 23,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "sponsor-cta body-text",
        children: ["Philly JS wouldn't exist without the support of our beloved sponsors. Interested in sponsoring us?", " ", /* @__PURE__ */jsxDEV("a", {
          className: "underline",
          href: "mailto:phillyjs@joewoods.dev",
          children: "Reach out to Joe!"
        }, void 0, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV(Icons, {
        icons: sponsors2.currentSponsors,
        imageClassName: "sponsor-image"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
        lineNumber: 31,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "Sponsors"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, this);
}
_s(Sponsors, "Tg+S8s++PuzXajdRzyUwZU+fSYg=", false, function () {
  return [useLoaderData];
});
_c = Sponsors;
var _c;
$RefreshReg$(_c, "Sponsors");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/sponsors" && window.__remixRouteModuleUpdates.set("routes/sponsors", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXFCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXBCSixTQUE0QkMsYUFBQSxRQUFxQjtBQUVqRCxTQUFTQyxLQUFBLFFBQWE7QUFDdEIsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQU01QixhQUFNQyxJQUFBLEdBQXFCQSxNQUFNO0VBQ3ZDLE9BQU8sQ0FBQztJQUFFQyxLQUFBLEVBQU9GLGtCQUFBLENBQW1CLFVBQVU7RUFBRSxDQUFDO0FBQ2xEO0FBRUEsd0JBQXdCRyxXQUFXO0VBQUFDLEVBQUE7RUFDbEMsTUFBTUMsWUFBV1IsYUFBQSxDQUE2QjtFQUU5QyxPQUNDLGVBQUFELE1BQUEsQ0FBQ0csUUFBQTtJQUNBTyxJQUFBLEVBQ0MsZUFBQVYsTUFBQSxDQUFBRCxRQUFBO01BQ0NZLFFBQUEsa0JBQUFYLE1BQUEsQ0FBQztRQUFHWSxTQUFBLEVBQVU7UUFBU0QsUUFBQTtNQUFBLEdBQXZCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBd0MsR0FDeEMsZUFBQWYsTUFBQSxDQUFDO1FBQUVZLFNBQUEsRUFBVTtRQUF3QkQsUUFBQSx5R0FFRyxLQUN2QyxlQUFBWCxNQUFBLENBQUM7VUFBRVksU0FBQSxFQUFVO1VBQVlJLElBQUEsRUFBSztVQUErQkwsUUFBQTtRQUFBLEdBQTdEO1VBQUFFLFFBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FFQTtNQUFBLEdBTEQ7UUFBQUYsUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQU1BLEdBQ0EsZUFBQWYsTUFBQSxDQUFDRSxLQUFBO1FBQ0FlLEtBQUEsRUFBT1IsVUFBU1MsZUFBQTtRQUNoQkMsY0FBQSxFQUFlO01BQUEsR0FGaEI7UUFBQU4sUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUdBO0lBQUEsR0FaRDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BYUE7SUFFREssUUFBQSxFQUFRO0lBQ1JkLEtBQUEsRUFBTTtFQUFBLEdBbEJQO0lBQUFPLFFBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FtQkE7QUFFRjtBQUFBUCxFQUFBLENBekJ3QkQ7RUFBQUEsUUFDTk4sYUFBQTtBQUFBO0FBQUFvQixFQUFBLEdBRE1kO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJ1c2VMb2FkZXJEYXRhIiwiSWNvbnMiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIlNwb25zb3JzIiwiX3MiLCJzcG9uc29ycyIsImxlZnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImhyZWYiLCJpY29ucyIsImN1cnJlbnRTcG9uc29ycyIsImltYWdlQ2xhc3NOYW1lIiwic3VidGl0bGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcG9uc29ycy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5zdGFibGVfZGVmaW5lTG9hZGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgdHlwZSBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbnNcIjtcbmltcG9ydCB7IFBhZ2VHcmlkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlR3JpZFwiO1xuaW1wb3J0IHsgY29uc3RydWN0U2l0ZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvY29tbW9uXCI7XG5cbmltcG9ydCBzcG9uc29ycyBmcm9tIFwiLi4vZGF0YS9zcG9uc29ycy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSB1bnN0YWJsZV9kZWZpbmVMb2FkZXIoKCkgPT4gc3BvbnNvcnMpO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4gW3sgdGl0bGU6IGNvbnN0cnVjdFNpdGVUaXRsZShcIlNwb25zb3JzXCIpIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BvbnNvcnMoKSB7XG5cdGNvbnN0IHNwb25zb3JzID0gdXNlTG9hZGVyRGF0YTx0eXBlb2YgbG9hZGVyPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibGFyZ2VyXCI+VGhhbmtzLCBTcG9uc29ycyE8L2gyPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNwb25zb3ItY3RhIGJvZHktdGV4dFwiPlxuXHRcdFx0XHRcdFx0UGhpbGx5IEpTIHdvdWxkbid0IGV4aXN0IHdpdGhvdXQgdGhlIHN1cHBvcnQgb2Ygb3VyIGJlbG92ZWRcblx0XHRcdFx0XHRcdHNwb25zb3JzLiBJbnRlcmVzdGVkIGluIHNwb25zb3JpbmcgdXM/e1wiIFwifVxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCIgaHJlZj1cIm1haWx0bzpwaGlsbHlqc0Bqb2V3b29kcy5kZXZcIj5cblx0XHRcdFx0XHRcdFx0UmVhY2ggb3V0IHRvIEpvZSFcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PEljb25zXG5cdFx0XHRcdFx0XHRpY29ucz17c3BvbnNvcnMuY3VycmVudFNwb25zb3JzfVxuXHRcdFx0XHRcdFx0aW1hZ2VDbGFzc05hbWU9XCJzcG9uc29yLWltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdH1cblx0XHRcdHN1YnRpdGxlXG5cdFx0XHR0aXRsZT1cIlNwb25zb3JzXCJcblx0XHQvPlxuXHQpO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9waGlsbHktanMtY2x1Yi13ZWJzaXRlL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvYXBwL3JvdXRlcy9zcG9uc29ycy50c3gifQ==