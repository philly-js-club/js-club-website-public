import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/about.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0dc67e8d"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=0dc67e8d";
import { PageGrid } from "/app/components/PageGrid.tsx";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle("About")
  }];
};
export default function About() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: "Who, Us?"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 23,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "The Philadelphia JavaScript Club, founded in 2022, is a place for developers of all skill and experience levels to connect, show off their work, and learn new things."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "We are devoted to being good citizens: we're here to help support individual and organizational development, to connect developers with the events going on in Philadelphia, and to provide a safe space for people to try new things. We want to empower everyone who joins us to build the best things they can build; we want to help make instant friends amongst the developers who call Philadelphia home."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 29,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "We’re happy for you to join us."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 38,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: "The Team"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 39,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("ul", {
        className: "body-text",
        children: data.members.map(({
          name,
          role
        }) => /* @__PURE__ */jsxDEV("li", {
          children: [/* @__PURE__ */jsxDEV("strong", {
            children: name
          }, void 0, false, {
            fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this), " - ", role]
        }, name, true, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 8
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "Organizers Emeritus"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 47,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("ul", {
        className: "body-text",
        children: data.organizersEmeritum.map(name => /* @__PURE__ */jsxDEV("li", {
          children: name
        }, name, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 50,
          columnNumber: 8
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 48,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "Get In Touch"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 53,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "about-page-text",
        children: ["You can reach out to", " ", /* @__PURE__ */jsxDEV("a", {
          href: "mailto:organizers@phillyjs.com",
          children: "the Team over email"
        }, void 0, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this), " ", "with any questions or comments."]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 54,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "The Website"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "about-page-text",
        children: "Courtesy of Josh using Figma, Remix, and TypeScript."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 60,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "About"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, this);
}
_s(About, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function () {
  return [useLoaderData];
});
_c = About;
var _c;
$RefreshReg$(_c, "About");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/about" && window.__remixRouteModuleUpdates.set("routes/about", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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QUVvQixJQUFBLEVBQUs7VUFBaUNWLFFBQUE7UUFBQSxHQUF6QztVQUFBRSxRQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQTRELEdBQUssS0FBSTtNQUFBLEdBRnRFO1FBQUFGLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FJQSxHQUNBLGVBQUFkLE1BQUEsQ0FBQztRQUFHVyxTQUFBLEVBQVU7UUFBUUQsUUFBQTtNQUFBLEdBQXRCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBaUMsR0FDakMsZUFBQWQsTUFBQSxDQUFDO1FBQUVXLFNBQUEsRUFBVTtRQUFrQkQsUUFBQTtNQUFBLEdBQS9CO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FFQTtJQUFBLEdBeENEO01BQUFGLFFBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0F5Q0E7SUFFRE8sUUFBQSxFQUFRO0lBQ1JoQixLQUFBLEVBQU07RUFBQSxHQTlDUDtJQUFBTyxRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BK0NBO0FBRUY7QUFBQVAsRUFBQSxDQXJEd0JEO0VBQUFBLFFBQ1ZMLGFBQUE7QUFBQTtBQUFBcUIsRUFBQSxHQURVaEI7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJGcmFnbWVudCIsImpzeERFViIsInVzZUxvYWRlckRhdGEiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIkFib3V0IiwiX3MiLCJkYXRhIiwibGVmdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWVtYmVycyIsIm1hcCIsIm5hbWUiLCJyb2xlIiwib3JnYW5pemVyc0VtZXJpdHVtIiwiaHJlZiIsInN1YnRpdGxlIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYWJvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHsgUGFnZUdyaWQgfSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VHcmlkXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RTaXRlVGl0bGUgfSBmcm9tIFwifi91dGlscy9jb21tb25cIjtcblxuaW1wb3J0IHRlYW0gZnJvbSBcIi4uL2RhdGEvdGVhbS5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKFwiQWJvdXRcIikgfV07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuXHRyZXR1cm4gdGVhbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPHR5cGVvZiBsb2FkZXI+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZUdyaWRcblx0XHRcdGxlZnQ9e1xuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsYXJnZXJcIj5XaG8sIFVzPzwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRUaGUgUGhpbGFkZWxwaGlhIEphdmFTY3JpcHQgQ2x1YiwgZm91bmRlZCBpbiAyMDIyLCBpcyBhIHBsYWNlIGZvclxuXHRcdFx0XHRcdFx0ZGV2ZWxvcGVycyBvZiBhbGwgc2tpbGwgYW5kIGV4cGVyaWVuY2UgbGV2ZWxzIHRvIGNvbm5lY3QsIHNob3cgb2ZmXG5cdFx0XHRcdFx0XHR0aGVpciB3b3JrLCBhbmQgbGVhcm4gbmV3IHRoaW5ncy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRXZSBhcmUgZGV2b3RlZCB0byBiZWluZyBnb29kIGNpdGl6ZW5zOiB3ZSdyZSBoZXJlIHRvIGhlbHAgc3VwcG9ydFxuXHRcdFx0XHRcdFx0aW5kaXZpZHVhbCBhbmQgb3JnYW5pemF0aW9uYWwgZGV2ZWxvcG1lbnQsIHRvIGNvbm5lY3QgZGV2ZWxvcGVyc1xuXHRcdFx0XHRcdFx0d2l0aCB0aGUgZXZlbnRzIGdvaW5nIG9uIGluIFBoaWxhZGVscGhpYSwgYW5kIHRvIHByb3ZpZGUgYSBzYWZlXG5cdFx0XHRcdFx0XHRzcGFjZSBmb3IgcGVvcGxlIHRvIHRyeSBuZXcgdGhpbmdzLiBXZSB3YW50IHRvIGVtcG93ZXIgZXZlcnlvbmUgd2hvXG5cdFx0XHRcdFx0XHRqb2lucyB1cyB0byBidWlsZCB0aGUgYmVzdCB0aGluZ3MgdGhleSBjYW4gYnVpbGQ7IHdlIHdhbnQgdG8gaGVscFxuXHRcdFx0XHRcdFx0bWFrZSBpbnN0YW50IGZyaWVuZHMgYW1vbmdzdCB0aGUgZGV2ZWxvcGVycyB3aG8gY2FsbCBQaGlsYWRlbHBoaWFcblx0XHRcdFx0XHRcdGhvbWUuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPldl4oCZcmUgaGFwcHkgZm9yIHlvdSB0byBqb2luIHVzLjwvcD5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibGFyZ2VyXCI+VGhlIFRlYW08L2gyPlxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdHtkYXRhLm1lbWJlcnMubWFwKCh7IG5hbWUsIHJvbGUgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtuYW1lfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntuYW1lfTwvc3Ryb25nPiAtIHtyb2xlfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibGFyZ2VcIj5Pcmdhbml6ZXJzIEVtZXJpdHVzPC9oMz5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+XG5cdFx0XHRcdFx0XHR7ZGF0YS5vcmdhbml6ZXJzRW1lcml0dW0ubWFwKChuYW1lKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsYXJnZVwiPkdldCBJbiBUb3VjaDwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRZb3UgY2FuIHJlYWNoIG91dCB0b3tcIiBcIn1cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJtYWlsdG86b3JnYW5pemVyc0BwaGlsbHlqcy5jb21cIj50aGUgVGVhbSBvdmVyIGVtYWlsPC9hPntcIiBcIn1cblx0XHRcdFx0XHRcdHdpdGggYW55IHF1ZXN0aW9ucyBvciBjb21tZW50cy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxhcmdlXCI+VGhlIFdlYnNpdGU8L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0LXBhZ2UtdGV4dFwiPlxuXHRcdFx0XHRcdFx0Q291cnRlc3kgb2YgSm9zaCB1c2luZyBGaWdtYSwgUmVtaXgsIGFuZCBUeXBlU2NyaXB0LlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRzdWJ0aXRsZVxuXHRcdFx0dGl0bGU9XCJBYm91dFwiXG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvYWJvdXQudHN4In0=