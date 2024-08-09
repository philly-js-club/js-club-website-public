import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/root.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4b113950"; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import "/app/root.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "/node_modules/.vite/deps/@remix-run_react.js?v=4b113950";
import { site } from "/app/config.ts";
const metaTags = [{
  charSet: "utf-8"
}, {
  content: site.baseURL,
  property: "og:url"
}, {
  content: site.baseURL,
  property: "twitter:url"
}, {
  content: `${site.baseURL}/assets/social.png`,
  property: "og:image"
}, {
  content: `${site.baseURL}/assets/social.png`,
  property: "twitter:image"
}, {
  content: site.longTitle,
  property: "og:title"
}, {
  content: site.longTitle,
  property: "twitter:title"
}, {
  content: site.title,
  name: "title"
}, {
  content: "summary",
  property: "twitter:card"
}, {
  content: "website",
  property: "og:type"
}, {
  content: "width=device-width,initial-scale=1",
  name: "viewport"
}, {
  content: site.description,
  name: "description"
}, {
  content: site.description,
  property: "twitter:description"
}];
export default function App() {
  return /* @__PURE__ */jsxDEV("html", {
    lang: "en",
    children: [/* @__PURE__ */jsxDEV("head", {
      children: [metaTags.map(meta => /* @__PURE__ */jsxDEV("meta", {
        ...meta
      }, JSON.stringify(meta), false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 34,
        columnNumber: 6
      }, this)), /* @__PURE__ */jsxDEV("link", {
        href: "https://fonts.googleapis.com",
        rel: "preconnect"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(Meta, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(Links, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this), /* @__PURE__ */jsxDEV("body", {
      children: [/* @__PURE__ */jsxDEV(Outlet, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(ScrollRestoration, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
    lineNumber: 31,
    columnNumber: 3
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "root" && window.__remixRouteModuleUpdates.set("root", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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QUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BY0E7QUFFRjtBQUFBRyxFQUFBLEdBbEJ3Qlo7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJqc3hERVYiLCJMaW5rcyIsIk1ldGEiLCJPdXRsZXQiLCJTY3JpcHRzIiwiU2Nyb2xsUmVzdG9yYXRpb24iLCJzaXRlIiwibWV0YVRhZ3MiLCJjaGFyU2V0IiwiY29udGVudCIsImJhc2VVUkwiLCJwcm9wZXJ0eSIsImxvbmdUaXRsZSIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQXBwIiwibGFuZyIsImNoaWxkcmVuIiwibWFwIiwibWV0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJocmVmIiwicmVsIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicm9vdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9yb290LmNzc1wiO1xuXG5pbXBvcnQge1xuXHRMaW5rcyxcblx0TWV0YSxcblx0T3V0bGV0LFxuXHRTY3JpcHRzLFxuXHRTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHsgc2l0ZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5jb25zdCBtZXRhVGFncyA9IFtcblx0eyBjaGFyU2V0OiBcInV0Zi04XCIgfSxcblx0eyBjb250ZW50OiBzaXRlLmJhc2VVUkwsIHByb3BlcnR5OiBcIm9nOnVybFwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5iYXNlVVJMLCBwcm9wZXJ0eTogXCJ0d2l0dGVyOnVybFwiIH0sXG5cdHsgY29udGVudDogYCR7c2l0ZS5iYXNlVVJMfS9hc3NldHMvc29jaWFsLnBuZ2AsIHByb3BlcnR5OiBcIm9nOmltYWdlXCIgfSxcblx0eyBjb250ZW50OiBgJHtzaXRlLmJhc2VVUkx9L2Fzc2V0cy9zb2NpYWwucG5nYCwgcHJvcGVydHk6IFwidHdpdHRlcjppbWFnZVwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5sb25nVGl0bGUsIHByb3BlcnR5OiBcIm9nOnRpdGxlXCIgfSxcblx0eyBjb250ZW50OiBzaXRlLmxvbmdUaXRsZSwgcHJvcGVydHk6IFwidHdpdHRlcjp0aXRsZVwiIH0sXG5cdHsgY29udGVudDogc2l0ZS50aXRsZSwgbmFtZTogXCJ0aXRsZVwiIH0sXG5cdHsgY29udGVudDogXCJzdW1tYXJ5XCIsIHByb3BlcnR5OiBcInR3aXR0ZXI6Y2FyZFwiIH0sXG5cdHsgY29udGVudDogXCJ3ZWJzaXRlXCIsIHByb3BlcnR5OiBcIm9nOnR5cGVcIiB9LFxuXHR7IGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLCBuYW1lOiBcInZpZXdwb3J0XCIgfSxcblx0eyBjb250ZW50OiBzaXRlLmRlc2NyaXB0aW9uLCBuYW1lOiBcImRlc2NyaXB0aW9uXCIgfSxcblx0eyBjb250ZW50OiBzaXRlLmRlc2NyaXB0aW9uLCBwcm9wZXJ0eTogXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHR7bWV0YVRhZ3MubWFwKChtZXRhKSA9PiAoXG5cdFx0XHRcdFx0PG1ldGEga2V5PXtKU09OLnN0cmluZ2lmeShtZXRhKX0gey4uLm1ldGF9IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIHJlbD1cInByZWNvbm5lY3RcIiAvPlxuXHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb290LnRzeCJ9