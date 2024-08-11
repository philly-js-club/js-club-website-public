import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/join-us.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=aa7fe17c"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=aa7fe17c";
import { Icons } from "/app/components/Icons.tsx";
import { PageGrid } from "/app/components/PageGrid.tsx";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle("Join Us")
  }];
};
export default function Socials() {
  _s();
  const platforms2 = useLoaderData();
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "Here's where you can find us:"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV(Icons, {
        icons: platforms2.currentPlatforms,
        imageClassName: "platform-image"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx",
        lineNumber: 25,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "Join Us"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}
_s(Socials, "vtCr+UID4V8jpzd6eBDwuTICKB0=", false, function () {
  return [useLoaderData];
});
_c = Socials;
var _c;
$RefreshReg$(_c, "Socials");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/join-us.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/join-us" && window.__remixRouteModuleUpdates.set("routes/join-us", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXNCSSxTQUFBQSxRQUFBLEVBQ0NDLE1BQUEsUUFERDtBQXRCSixTQUE0QkMsYUFBQSxRQUFxQjtBQUVqRCxTQUFTQyxLQUFBLFFBQWE7QUFDdEIsU0FBU0MsUUFBQSxRQUFnQjtBQUN6QixTQUFTQyxrQkFBQSxRQUEwQjtBQVE1QixhQUFNQyxJQUFBLEdBQXFCQSxNQUFNO0VBQ3ZDLE9BQU8sQ0FBQztJQUFFQyxLQUFBLEVBQU9GLGtCQUFBLENBQW1CLFNBQVM7RUFBRSxDQUFDO0FBQ2pEO0FBRUEsd0JBQXdCRyxVQUFVO0VBQUFDLEVBQUE7RUFDakMsTUFBTUMsYUFBWVIsYUFBQSxDQUE2QjtFQUUvQyxPQUNDLGVBQUFELE1BQUEsQ0FBQ0csUUFBQTtJQUNBTyxJQUFBLEVBQ0MsZUFBQVYsTUFBQSxDQUFBRCxRQUFBO01BQ0NZLFFBQUEsa0JBQUFYLE1BQUEsQ0FBQztRQUFFWSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBc0QsR0FDdEQsZUFBQWYsTUFBQSxDQUFDRSxLQUFBO1FBQ0FjLEtBQUEsRUFBT1AsV0FBVVEsZ0JBQUE7UUFDakJDLGNBQUEsRUFBZTtNQUFBLEdBRmhCO1FBQUFMLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FHQTtJQUFBLEdBTEQ7TUFBQUYsUUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQU1BO0lBRURJLFFBQUEsRUFBUTtJQUNSYixLQUFBLEVBQU07RUFBQSxHQVhQO0lBQUFPLFFBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FZQTtBQUVGO0FBQUFQLEVBQUEsQ0FsQndCRDtFQUFBQSxRQUNMTixhQUFBO0FBQUE7QUFBQW1CLEVBQUEsR0FES2I7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJJY29ucyIsIlBhZ2VHcmlkIiwiY29uc3RydWN0U2l0ZVRpdGxlIiwibWV0YSIsInRpdGxlIiwiU29jaWFscyIsIl9zIiwicGxhdGZvcm1zIiwibGVmdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaWNvbnMiLCJjdXJyZW50UGxhdGZvcm1zIiwiaW1hZ2VDbGFzc05hbWUiLCJzdWJ0aXRsZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImpvaW4tdXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwifi9jb21wb25lbnRzL0ljb25zXCI7XG5pbXBvcnQgeyBQYWdlR3JpZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZUdyaWRcIjtcbmltcG9ydCB7IGNvbnN0cnVjdFNpdGVUaXRsZSB9IGZyb20gXCJ+L3V0aWxzL2NvbW1vblwiO1xuXG5pbXBvcnQgcGxhdGZvcm1zIGZyb20gXCIuLi9kYXRhL3BsYXRmb3Jtcy5qc29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIoKSB7XG5cdHJldHVybiBwbGF0Zm9ybXM7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKFwiSm9pbiBVc1wiKSB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbHMoKSB7XG5cdGNvbnN0IHBsYXRmb3JtcyA9IHVzZUxvYWRlckRhdGE8dHlwZW9mIGxvYWRlcj4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlR3JpZFxuXHRcdFx0bGVmdD17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+SGVyZSdzIHdoZXJlIHlvdSBjYW4gZmluZCB1czo8L3A+XG5cdFx0XHRcdFx0PEljb25zXG5cdFx0XHRcdFx0XHRpY29ucz17cGxhdGZvcm1zLmN1cnJlbnRQbGF0Zm9ybXN9XG5cdFx0XHRcdFx0XHRpbWFnZUNsYXNzTmFtZT1cInBsYXRmb3JtLWltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdH1cblx0XHRcdHN1YnRpdGxlXG5cdFx0XHR0aXRsZT1cIkpvaW4gVXNcIlxuXHRcdC8+XG5cdCk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9hcHAvcm91dGVzL2pvaW4tdXMudHN4In0=