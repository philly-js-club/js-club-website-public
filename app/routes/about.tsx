import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/about.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4c0ab245"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { useLoaderData } from "/node_modules/.vite/deps/@remix-run_react.js?v=4c0ab245";
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
        lineNumber: 22,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "The Philadelphia JavaScript Club, founded in 2022, is a a place for developers of all skill and experience levels to connect, show off their work, and learn new things."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 23,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "We are devoted to being good citizens: we're here to help support individual and organizational development, to connect developers with the events going on in Philadelphia, and to provide a safe space for people to try new things. We want to empower everyone who joins us to build the best things they can build; we want to help make instant friends amongst the developers who call Philadelphia home."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 28,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "We’re happy for you to join us."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: "The Team"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 38,
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
            lineNumber: 42,
            columnNumber: 9
          }, this), " - ", role]
        }, name, true, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 41,
          columnNumber: 8
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 39,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "Organizers Emeritus"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("ul", {
        className: "body-text",
        children: data.organizersEmeritum.map(name => /* @__PURE__ */jsxDEV("li", {
          children: name
        }, name, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 49,
          columnNumber: 8
        }, this))
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 47,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "Get In Touch"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 52,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "about-page-text",
        children: ["You can reach out to", " ", /* @__PURE__ */jsxDEV("a", {
          href: "mailto:phillyjs@joewoods.dev",
          children: "Joe over email"
        }, void 0, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this), " with any questions or comments."]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 53,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("h3", {
        className: "large",
        children: "The Website"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 58,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "about-page-text",
        children: "Courtesy of Josh using Figma, Remix, and TypeScript."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "About"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/about.tsx",
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;base64,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QUVvQixJQUFBLEVBQUs7VUFBK0JWLFFBQUE7UUFBQSxHQUF2QztVQUFBRSxRQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQXFELEdBQUk7TUFBQSxHQUYxRDtRQUFBRixRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BSUEsR0FDQSxlQUFBZCxNQUFBLENBQUM7UUFBR1csU0FBQSxFQUFVO1FBQVFELFFBQUE7TUFBQSxHQUF0QjtRQUFBRSxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQWlDLEdBQ2pDLGVBQUFkLE1BQUEsQ0FBQztRQUFFVyxTQUFBLEVBQVU7UUFBa0JELFFBQUE7TUFBQSxHQUEvQjtRQUFBRSxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BRUE7SUFBQSxHQXhDRDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BeUNBO0lBRURPLFFBQUEsRUFBUTtJQUNSaEIsS0FBQSxFQUFNO0VBQUEsR0E5Q1A7SUFBQU8sUUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQStDQTtBQUVGO0FBQUFQLEVBQUEsQ0FyRHdCRDtFQUFBQSxRQUNWTCxhQUFBO0FBQUE7QUFBQXFCLEVBQUEsR0FEVWhCO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJ1c2VMb2FkZXJEYXRhIiwiUGFnZUdyaWQiLCJjb25zdHJ1Y3RTaXRlVGl0bGUiLCJtZXRhIiwidGl0bGUiLCJBYm91dCIsIl9zIiwiZGF0YSIsImxlZnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIm1lbWJlcnMiLCJtYXAiLCJuYW1lIiwicm9sZSIsIm9yZ2FuaXplcnNFbWVyaXR1bSIsImhyZWYiLCJzdWJ0aXRsZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImFib3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bnN0YWJsZV9kZWZpbmVMb2FkZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB0eXBlIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCB7IFBhZ2VHcmlkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlR3JpZFwiO1xuaW1wb3J0IHsgY29uc3RydWN0U2l0ZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvY29tbW9uXCI7XG5cbmltcG9ydCB0ZWFtIGZyb20gXCIuLi9kYXRhL3RlYW0uanNvblwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4gW3sgdGl0bGU6IGNvbnN0cnVjdFNpdGVUaXRsZShcIkFib3V0XCIpIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IHVuc3RhYmxlX2RlZmluZUxvYWRlcigoKSA9PiB0ZWFtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPHR5cGVvZiBsb2FkZXI+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZUdyaWRcblx0XHRcdGxlZnQ9e1xuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsYXJnZXJcIj5XaG8sIFVzPzwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+XG5cdFx0XHRcdFx0XHRUaGUgUGhpbGFkZWxwaGlhIEphdmFTY3JpcHQgQ2x1YiwgZm91bmRlZCBpbiAyMDIyLCBpcyBhIGEgcGxhY2UgZm9yXG5cdFx0XHRcdFx0XHRkZXZlbG9wZXJzIG9mIGFsbCBza2lsbCBhbmQgZXhwZXJpZW5jZSBsZXZlbHMgdG8gY29ubmVjdCwgc2hvdyBvZmZcblx0XHRcdFx0XHRcdHRoZWlyIHdvcmssIGFuZCBsZWFybiBuZXcgdGhpbmdzLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdFdlIGFyZSBkZXZvdGVkIHRvIGJlaW5nIGdvb2QgY2l0aXplbnM6IHdlJ3JlIGhlcmUgdG8gaGVscCBzdXBwb3J0XG5cdFx0XHRcdFx0XHRpbmRpdmlkdWFsIGFuZCBvcmdhbml6YXRpb25hbCBkZXZlbG9wbWVudCwgdG8gY29ubmVjdCBkZXZlbG9wZXJzXG5cdFx0XHRcdFx0XHR3aXRoIHRoZSBldmVudHMgZ29pbmcgb24gaW4gUGhpbGFkZWxwaGlhLCBhbmQgdG8gcHJvdmlkZSBhIHNhZmVcblx0XHRcdFx0XHRcdHNwYWNlIGZvciBwZW9wbGUgdG8gdHJ5IG5ldyB0aGluZ3MuIFdlIHdhbnQgdG8gZW1wb3dlciBldmVyeW9uZSB3aG9cblx0XHRcdFx0XHRcdGpvaW5zIHVzIHRvIGJ1aWxkIHRoZSBiZXN0IHRoaW5ncyB0aGV5IGNhbiBidWlsZDsgd2Ugd2FudCB0byBoZWxwXG5cdFx0XHRcdFx0XHRtYWtlIGluc3RhbnQgZnJpZW5kcyBhbW9uZ3N0IHRoZSBkZXZlbG9wZXJzIHdobyBjYWxsIFBoaWxhZGVscGhpYVxuXHRcdFx0XHRcdFx0aG9tZS5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+V2XigJlyZSBoYXBweSBmb3IgeW91IHRvIGpvaW4gdXMuPC9wPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsYXJnZXJcIj5UaGUgVGVhbTwvaDI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPlxuXHRcdFx0XHRcdFx0e2RhdGEubWVtYmVycy5tYXAoKHsgbmFtZSwgcm9sZSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e25hbWV9PlxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e25hbWV9PC9zdHJvbmc+IC0ge3JvbGV9XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsYXJnZVwiPk9yZ2FuaXplcnMgRW1lcml0dXM8L2gzPlxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdHtkYXRhLm9yZ2FuaXplcnNFbWVyaXR1bS5tYXAoKG5hbWUpID0+IChcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxhcmdlXCI+R2V0IEluIFRvdWNoPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dC1wYWdlLXRleHRcIj5cblx0XHRcdFx0XHRcdFlvdSBjYW4gcmVhY2ggb3V0IHRve1wiIFwifVxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIm1haWx0bzpwaGlsbHlqc0Bqb2V3b29kcy5kZXZcIj5Kb2Ugb3ZlciBlbWFpbDwvYT4gd2l0aCBhbnlcblx0XHRcdFx0XHRcdHF1ZXN0aW9ucyBvciBjb21tZW50cy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxhcmdlXCI+VGhlIFdlYnNpdGU8L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0LXBhZ2UtdGV4dFwiPlxuXHRcdFx0XHRcdFx0Q291cnRlc3kgb2YgSm9zaCB1c2luZyBGaWdtYSwgUmVtaXgsIGFuZCBUeXBlU2NyaXB0LlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRzdWJ0aXRsZVxuXHRcdFx0dGl0bGU9XCJBYm91dFwiXG5cdFx0Lz5cblx0KTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9waGlsbHktanMtY2x1Yi13ZWJzaXRlL2FwcC9yb3V0ZXMvYWJvdXQudHN4In0=