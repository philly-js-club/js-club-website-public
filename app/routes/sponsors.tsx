import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/sponsors.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=315c44a9"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=315c44a9";
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
        lineNumber: 24,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "sponsor-cta body-text",
        children: ["Philly JS wouldn't exist without the support of our beloved sponsors. Interested in sponsoring us?", " ", /* @__PURE__ */jsxDEV("a", {
          className: "underline",
          href: "mailto:phillyjs@joewoods.dev",
          children: "Reach out to Joe!"
        }, void 0, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
        lineNumber: 25,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV(Icons, {
        icons: sponsors2.currentSponsors,
        imageClassName: "sponsor-image"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
        lineNumber: 32,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "Sponsors"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/sponsors.tsx",
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXNCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXRCSixTQUE0QkMsYUFBQSxRQUFxQjtBQUVqRCxTQUFTQyxLQUFBLFFBQWE7QUFDdEIsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQVE1QixhQUFNQyxJQUFBLEdBQXFCQSxNQUFNO0VBQ3ZDLE9BQU8sQ0FBQztJQUFFQyxLQUFBLEVBQU9GLGtCQUFBLENBQW1CLFVBQVU7RUFBRSxDQUFDO0FBQ2xEO0FBRUEsd0JBQXdCRyxXQUFXO0VBQUFDLEVBQUE7RUFDbEMsTUFBTUMsWUFBV1IsYUFBQSxDQUE2QjtFQUU5QyxPQUNDLGVBQUFELE1BQUEsQ0FBQ0csUUFBQTtJQUNBTyxJQUFBLEVBQ0MsZUFBQVYsTUFBQSxDQUFBRCxRQUFBO01BQ0NZLFFBQUEsa0JBQUFYLE1BQUEsQ0FBQztRQUFHWSxTQUFBLEVBQVU7UUFBU0QsUUFBQTtNQUFBLEdBQXZCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBd0MsR0FDeEMsZUFBQWYsTUFBQSxDQUFDO1FBQUVZLFNBQUEsRUFBVTtRQUF3QkQsUUFBQSx5R0FFRyxLQUN2QyxlQUFBWCxNQUFBLENBQUM7VUFBRVksU0FBQSxFQUFVO1VBQVlJLElBQUEsRUFBSztVQUErQkwsUUFBQTtRQUFBLEdBQTdEO1VBQUFFLFFBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FFQTtNQUFBLEdBTEQ7UUFBQUYsUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQU1BLEdBQ0EsZUFBQWYsTUFBQSxDQUFDRSxLQUFBO1FBQ0FlLEtBQUEsRUFBT1IsVUFBU1MsZUFBQTtRQUNoQkMsY0FBQSxFQUFlO01BQUEsR0FGaEI7UUFBQU4sUUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUdBO0lBQUEsR0FaRDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BYUE7SUFFREssUUFBQSxFQUFRO0lBQ1JkLEtBQUEsRUFBTTtFQUFBLEdBbEJQO0lBQUFPLFFBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FtQkE7QUFFRjtBQUFBUCxFQUFBLENBekJ3QkQ7RUFBQUEsUUFDTk4sYUFBQTtBQUFBO0FBQUFvQixFQUFBLEdBRE1kO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJ1c2VMb2FkZXJEYXRhIiwiSWNvbnMiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIlNwb25zb3JzIiwiX3MiLCJzcG9uc29ycyIsImxlZnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImhyZWYiLCJpY29ucyIsImN1cnJlbnRTcG9uc29ycyIsImltYWdlQ2xhc3NOYW1lIiwic3VidGl0bGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzcG9uc29ycy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbnNcIjtcbmltcG9ydCB7IFBhZ2VHcmlkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlR3JpZFwiO1xuaW1wb3J0IHsgY29uc3RydWN0U2l0ZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvY29tbW9uXCI7XG5cbmltcG9ydCBzcG9uc29ycyBmcm9tIFwiLi4vZGF0YS9zcG9uc29ycy5qc29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIoKSB7XG5cdHJldHVybiBzcG9uc29ycztcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIFt7IHRpdGxlOiBjb25zdHJ1Y3RTaXRlVGl0bGUoXCJTcG9uc29yc1wiKSB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb25zb3JzKCkge1xuXHRjb25zdCBzcG9uc29ycyA9IHVzZUxvYWRlckRhdGE8dHlwZW9mIGxvYWRlcj4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlR3JpZFxuXHRcdFx0bGVmdD17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxhcmdlclwiPlRoYW5rcywgU3BvbnNvcnMhPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcG9uc29yLWN0YSBib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdFBoaWxseSBKUyB3b3VsZG4ndCBleGlzdCB3aXRob3V0IHRoZSBzdXBwb3J0IG9mIG91ciBiZWxvdmVkXG5cdFx0XHRcdFx0XHRzcG9uc29ycy4gSW50ZXJlc3RlZCBpbiBzcG9uc29yaW5nIHVzP3tcIiBcIn1cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInVuZGVybGluZVwiIGhyZWY9XCJtYWlsdG86cGhpbGx5anNAam9ld29vZHMuZGV2XCI+XG5cdFx0XHRcdFx0XHRcdFJlYWNoIG91dCB0byBKb2UhXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxJY29uc1xuXHRcdFx0XHRcdFx0aWNvbnM9e3Nwb25zb3JzLmN1cnJlbnRTcG9uc29yc31cblx0XHRcdFx0XHRcdGltYWdlQ2xhc3NOYW1lPVwic3BvbnNvci1pbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRzdWJ0aXRsZVxuXHRcdFx0dGl0bGU9XCJTcG9uc29yc1wiXG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvc3BvbnNvcnMudHN4In0=