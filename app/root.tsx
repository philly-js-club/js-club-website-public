import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/root.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=66e27731"; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import "/app/root.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "/node_modules/.vite/deps/@remix-run_react.js?v=66e27731";
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
      }, this), /* @__PURE__ */jsxDEV("link", {
        href: "/feed.atom",
        rel: "alternate",
        title: site.title,
        type: "application/atom+xml"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this), /* @__PURE__ */jsxDEV("body", {
      children: [/* @__PURE__ */jsxDEV(Outlet, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(ScrollRestoration, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this), /* @__PURE__ */jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/root.tsx",
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;base64,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QUEsT0FBbUIsR0FDbkIsZUFBQXpCLE1BQUEsQ0FBQ0ksT0FBQSxNQUFEO1FBQUFtQixRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQVM7SUFBQSxHQUhWO01BQUFGLFFBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FJQTtFQUFBLEdBbkJEO0lBQUFGLFFBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FvQkE7QUFFRjtBQUFBSSxFQUFBLEdBeEJ3QmI7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJqc3hERVYiLCJMaW5rcyIsIk1ldGEiLCJPdXRsZXQiLCJTY3JpcHRzIiwiU2Nyb2xsUmVzdG9yYXRpb24iLCJzaXRlIiwibWV0YVRhZ3MiLCJjaGFyU2V0IiwiY29udGVudCIsImJhc2VVUkwiLCJwcm9wZXJ0eSIsImxvbmdUaXRsZSIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQXBwIiwibGFuZyIsImNoaWxkcmVuIiwibWFwIiwibWV0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJocmVmIiwicmVsIiwidHlwZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInJvb3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vcm9vdC5jc3NcIjtcblxuaW1wb3J0IHtcblx0TGlua3MsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCB7IHNpdGUgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgbWV0YVRhZ3MgPSBbXG5cdHsgY2hhclNldDogXCJ1dGYtOFwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5iYXNlVVJMLCBwcm9wZXJ0eTogXCJvZzp1cmxcIiB9LFxuXHR7IGNvbnRlbnQ6IHNpdGUuYmFzZVVSTCwgcHJvcGVydHk6IFwidHdpdHRlcjp1cmxcIiB9LFxuXHR7IGNvbnRlbnQ6IGAke3NpdGUuYmFzZVVSTH0vYXNzZXRzL3NvY2lhbC5wbmdgLCBwcm9wZXJ0eTogXCJvZzppbWFnZVwiIH0sXG5cdHsgY29udGVudDogYCR7c2l0ZS5iYXNlVVJMfS9hc3NldHMvc29jaWFsLnBuZ2AsIHByb3BlcnR5OiBcInR3aXR0ZXI6aW1hZ2VcIiB9LFxuXHR7IGNvbnRlbnQ6IHNpdGUubG9uZ1RpdGxlLCBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5sb25nVGl0bGUsIHByb3BlcnR5OiBcInR3aXR0ZXI6dGl0bGVcIiB9LFxuXHR7IGNvbnRlbnQ6IHNpdGUudGl0bGUsIG5hbWU6IFwidGl0bGVcIiB9LFxuXHR7IGNvbnRlbnQ6IFwic3VtbWFyeVwiLCBwcm9wZXJ0eTogXCJ0d2l0dGVyOmNhcmRcIiB9LFxuXHR7IGNvbnRlbnQ6IFwid2Vic2l0ZVwiLCBwcm9wZXJ0eTogXCJvZzp0eXBlXCIgfSxcblx0eyBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiwgbmFtZTogXCJ2aWV3cG9ydFwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5kZXNjcmlwdGlvbiwgbmFtZTogXCJkZXNjcmlwdGlvblwiIH0sXG5cdHsgY29udGVudDogc2l0ZS5kZXNjcmlwdGlvbiwgcHJvcGVydHk6IFwidHdpdHRlcjpkZXNjcmlwdGlvblwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0e21ldGFUYWdzLm1hcCgobWV0YSkgPT4gKFxuXHRcdFx0XHRcdDxtZXRhIGtleT17SlNPTi5zdHJpbmdpZnkobWV0YSl9IHsuLi5tZXRhfSAvPlxuXHRcdFx0XHQpKX1cblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiByZWw9XCJwcmVjb25uZWN0XCIgLz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0aHJlZj1cIi9mZWVkLmF0b21cIlxuXHRcdFx0XHRcdHJlbD1cImFsdGVybmF0ZVwiXG5cdFx0XHRcdFx0dGl0bGU9e3NpdGUudGl0bGV9XG5cdFx0XHRcdFx0dHlwZT1cImFwcGxpY2F0aW9uL2F0b20reG1sXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb290LnRzeCJ9