import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/code-of-conduct.tsx");import RefreshRuntime from "/@id/__x00__virtual:remix/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "Remix Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=303a5aed"; const Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import { PageGrid } from "/app/components/PageGrid.tsx";
import { constructSiteTitle } from "/app/utils/common.ts";
export const meta = () => {
  return [{
    title: constructSiteTitle("Code of Conduct")
  }];
};
export default function About() {
  return /* @__PURE__ */jsxDEV(PageGrid, {
    left: /* @__PURE__ */jsxDEV(Fragment, {
      children: [/* @__PURE__ */jsxDEV("h2", {
        className: "larger",
        children: "Anti-Harassment and Anti-Bullying Code of Conduct"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 15,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "The Philadelphia JavaScript Club is dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members of the Philadelphia JavaScript Club, but to anyone who chooses to become involved in the larger Philadelphia JavaScript Club community of users, developers and integrators through events or interactions."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 18,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "Harassment includes offensive verbal/electronic comments related to personal characteristics or choices, sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, Slack messages, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention. Participants asked to stop any harassing or bullying behavior are expected to comply immediately."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 27,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Philadelphia JavaScript Club event, or expulsion from mailing lists, Slack groups, discussion boards, and other electronic communications channels to resolve the issue. This may include expulsion from Philadelphia JavaScript Club membership."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 37,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Philadelphia JavaScript Club, Slack group admins, website admins, or organizers/representatives of any physical events put on under the auspices of the Philadelphia JavaScript Club."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 46,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "—"
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 54,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: ["This Code of Conduct adapted from", " ", /* @__PURE__ */jsxDEV("a", {
          className: "page-grid-footer-link",
          href: "https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct",
          rel: "noreferrer",
          target: "_blank",
          children: "https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct"
        }, void 0, false, {
          fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this), /* @__PURE__ */jsxDEV("p", {
        className: "body-text",
        children: "The content of this Code of Conduct is licensed under a Creative Commons Attribution-ShareAlike 4.0 International license."
      }, void 0, false, {
        fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
        lineNumber: 66,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    subtitle: true,
    title: "CoC"
  }, void 0, false, {
    fileName: "/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/work/philly-js-club-website/philly-js-club-website/app/routes/code-of-conduct.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/code-of-conduct" && window.__remixRouteModuleUpdates.set("routes/code-of-conduct", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYUksU0FBQUEsUUFBQSxFQUNDQyxNQUFBLFFBREQ7QUFYSixTQUFTQyxRQUFBLFFBQWdCO0FBQ3pCLFNBQVNDLGtCQUFBLFFBQTBCO0FBRTVCLGFBQU1DLElBQUEsR0FBcUJBLE1BQU07RUFDdkMsT0FBTyxDQUFDO0lBQUVDLEtBQUEsRUFBT0Ysa0JBQUEsQ0FBbUIsaUJBQWlCO0VBQUUsQ0FBQztBQUN6RDtBQUVBLHdCQUF3QkcsUUFBUTtFQUMvQixPQUNDLGVBQUFMLE1BQUEsQ0FBQ0MsUUFBQTtJQUNBSyxJQUFBLEVBQ0MsZUFBQU4sTUFBQSxDQUFBRCxRQUFBO01BQ0NRLFFBQUEsa0JBQUFQLE1BQUEsQ0FBQztRQUFHUSxTQUFBLEVBQVU7UUFBU0QsUUFBQTtNQUFBLEdBQXZCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FFQSxHQUNBLGVBQUFYLE1BQUEsQ0FBQztRQUFFUSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FRQSxHQUNBLGVBQUFYLE1BQUEsQ0FBQztRQUFFUSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FTQSxHQUNBLGVBQUFYLE1BQUEsQ0FBQztRQUFFUSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FRQSxHQUNBLGVBQUFYLE1BQUEsQ0FBQztRQUFFUSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FPQSxHQUNBLGVBQUFYLE1BQUEsQ0FBQztRQUFFUSxTQUFBLEVBQVU7UUFBWUQsUUFBQTtNQUFBLEdBQXpCO1FBQUFFLFFBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBMEIsR0FDMUIsZUFBQVgsTUFBQSxDQUFDO1FBQUVRLFNBQUEsRUFBVTtRQUFZRCxRQUFBLHdDQUNVLEtBQ2xDLGVBQUFQLE1BQUEsQ0FBQztVQUNBUSxTQUFBLEVBQVU7VUFDVkksSUFBQSxFQUFLO1VBQ0xDLEdBQUEsRUFBSTtVQUNKQyxNQUFBLEVBQU87VUFDUFAsUUFBQTtRQUFBLEdBTEQ7VUFBQUUsUUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQU9BO01BQUEsR0FURDtRQUFBRixRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BVUEsR0FDQSxlQUFBWCxNQUFBLENBQUM7UUFBRVEsU0FBQSxFQUFVO1FBQVlELFFBQUE7TUFBQSxHQUF6QjtRQUFBRSxRQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BR0E7SUFBQSxHQXZERDtNQUFBRixRQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9Bd0RBO0lBRURJLFFBQUEsRUFBUTtJQUNSWCxLQUFBLEVBQU07RUFBQSxHQTdEUDtJQUFBSyxRQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BOERBO0FBRUY7QUFBQUssRUFBQSxHQWxFd0JYO0FBQUFBO0FBQUFBIiwibmFtZXMiOlsiRnJhZ21lbnQiLCJqc3hERVYiLCJQYWdlR3JpZCIsImNvbnN0cnVjdFNpdGVUaXRsZSIsIm1ldGEiLCJ0aXRsZSIsIkFib3V0IiwibGVmdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaHJlZiIsInJlbCIsInRhcmdldCIsInN1YnRpdGxlIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY29kZS1vZi1jb25kdWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCB7IFBhZ2VHcmlkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlR3JpZFwiO1xuaW1wb3J0IHsgY29uc3RydWN0U2l0ZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvY29tbW9uXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiBbeyB0aXRsZTogY29uc3RydWN0U2l0ZVRpdGxlKFwiQ29kZSBvZiBDb25kdWN0XCIpIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2VHcmlkXG5cdFx0XHRsZWZ0PXtcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibGFyZ2VyXCI+XG5cdFx0XHRcdFx0XHRBbnRpLUhhcmFzc21lbnQgYW5kIEFudGktQnVsbHlpbmcgQ29kZSBvZiBDb25kdWN0XG5cdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdFRoZSBQaGlsYWRlbHBoaWEgSmF2YVNjcmlwdCBDbHViIGlzIGRlZGljYXRlZCB0byBwcm92aWRpbmcgYVxuXHRcdFx0XHRcdFx0cmVzcGVjdGZ1bCwgaGFyYXNzbWVudC1mcmVlIGNvbW11bml0eSBmb3IgZXZlcnlvbmUuIFdlIGRvIG5vdFxuXHRcdFx0XHRcdFx0dG9sZXJhdGUgaGFyYXNzbWVudCBvciBidWxseWluZyBvZiBhbnkgY29tbXVuaXR5IG1lbWJlciBpbiBhbnkgZm9ybS5cblx0XHRcdFx0XHRcdFRoaXMgZG9lcyBub3Qgb25seSBleHRlbmQgdG8gbWVtYmVycyBvZiB0aGUgUGhpbGFkZWxwaGlhIEphdmFTY3JpcHRcblx0XHRcdFx0XHRcdENsdWIsIGJ1dCB0byBhbnlvbmUgd2hvIGNob29zZXMgdG8gYmVjb21lIGludm9sdmVkIGluIHRoZSBsYXJnZXJcblx0XHRcdFx0XHRcdFBoaWxhZGVscGhpYSBKYXZhU2NyaXB0IENsdWIgY29tbXVuaXR5IG9mIHVzZXJzLCBkZXZlbG9wZXJzIGFuZFxuXHRcdFx0XHRcdFx0aW50ZWdyYXRvcnMgdGhyb3VnaCBldmVudHMgb3IgaW50ZXJhY3Rpb25zLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdEhhcmFzc21lbnQgaW5jbHVkZXMgb2ZmZW5zaXZlIHZlcmJhbC9lbGVjdHJvbmljIGNvbW1lbnRzIHJlbGF0ZWQgdG9cblx0XHRcdFx0XHRcdHBlcnNvbmFsIGNoYXJhY3RlcmlzdGljcyBvciBjaG9pY2VzLCBzZXh1YWwgaW1hZ2VzIG9yIGNvbW1lbnRzIGluXG5cdFx0XHRcdFx0XHRwdWJsaWMgb3Igb25saW5lIHNwYWNlcywgZGVsaWJlcmF0ZSBpbnRpbWlkYXRpb24sIGJ1bGx5aW5nLFxuXHRcdFx0XHRcdFx0c3RhbGtpbmcsIGZvbGxvd2luZywgaGFyYXNzaW5nIHBob3RvZ3JhcGh5IG9yIHJlY29yZGluZywgc3VzdGFpbmVkXG5cdFx0XHRcdFx0XHRkaXNydXB0aW9uIG9mIHRhbGtzLCBTbGFjayBtZXNzYWdlcywgZWxlY3Ryb25pYyBtZWV0aW5ncywgcGh5c2ljYWxcblx0XHRcdFx0XHRcdG1lZXRpbmdzIG9yIG90aGVyIGV2ZW50cywgaW5hcHByb3ByaWF0ZSBwaHlzaWNhbCBjb250YWN0LCBvclxuXHRcdFx0XHRcdFx0dW53ZWxjb21lIHNleHVhbCBhdHRlbnRpb24uIFBhcnRpY2lwYW50cyBhc2tlZCB0byBzdG9wIGFueSBoYXJhc3Npbmdcblx0XHRcdFx0XHRcdG9yIGJ1bGx5aW5nIGJlaGF2aW9yIGFyZSBleHBlY3RlZCB0byBjb21wbHkgaW1tZWRpYXRlbHkuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPlxuXHRcdFx0XHRcdFx0SWYgYSBwYXJ0aWNpcGFudCBlbmdhZ2VzIGluIGhhcmFzc2luZyBiZWhhdmlvciwgcmVwcmVzZW50YXRpdmVzIG9mXG5cdFx0XHRcdFx0XHR0aGUgY29tbXVuaXR5IG1heSB0YWtlIHJlYXNvbmFibGUgYWN0aW9uIHRoZXkgZGVlbSBhcHByb3ByaWF0ZSxcblx0XHRcdFx0XHRcdGluY2x1ZGluZyB3YXJuaW5nIHRoZSBvZmZlbmRlciwgZXhwdWxzaW9uIGZyb20gYW55IFBoaWxhZGVscGhpYVxuXHRcdFx0XHRcdFx0SmF2YVNjcmlwdCBDbHViIGV2ZW50LCBvciBleHB1bHNpb24gZnJvbSBtYWlsaW5nIGxpc3RzLCBTbGFja1xuXHRcdFx0XHRcdFx0Z3JvdXBzLCBkaXNjdXNzaW9uIGJvYXJkcywgYW5kIG90aGVyIGVsZWN0cm9uaWMgY29tbXVuaWNhdGlvbnNcblx0XHRcdFx0XHRcdGNoYW5uZWxzIHRvIHJlc29sdmUgdGhlIGlzc3VlLiBUaGlzIG1heSBpbmNsdWRlIGV4cHVsc2lvbiBmcm9tXG5cdFx0XHRcdFx0XHRQaGlsYWRlbHBoaWEgSmF2YVNjcmlwdCBDbHViIG1lbWJlcnNoaXAuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPlxuXHRcdFx0XHRcdFx0SWYgeW91IGFyZSBiZWluZyBoYXJhc3NlZCwgbm90aWNlIHRoYXQgc29tZW9uZSBlbHNlIGlzIGJlaW5nXG5cdFx0XHRcdFx0XHRoYXJhc3NlZCwgb3IgaGF2ZSBhbnkgb3RoZXIgY29uY2VybnMsIHBsZWFzZSBhY3QgdG8gaW50ZXJjZWRlIG9yIGFza1xuXHRcdFx0XHRcdFx0Zm9yIGhlbHAgZnJvbSBhbnkgbWVtYmVyIG9mIHRoZSBQaGlsYWRlbHBoaWEgSmF2YVNjcmlwdCBDbHViLCBTbGFja1xuXHRcdFx0XHRcdFx0Z3JvdXAgYWRtaW5zLCB3ZWJzaXRlIGFkbWlucywgb3Igb3JnYW5pemVycy9yZXByZXNlbnRhdGl2ZXMgb2YgYW55XG5cdFx0XHRcdFx0XHRwaHlzaWNhbCBldmVudHMgcHV0IG9uIHVuZGVyIHRoZSBhdXNwaWNlcyBvZiB0aGUgUGhpbGFkZWxwaGlhXG5cdFx0XHRcdFx0XHRKYXZhU2NyaXB0IENsdWIuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPuKAlDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdFRoaXMgQ29kZSBvZiBDb25kdWN0IGFkYXB0ZWQgZnJvbXtcIiBcIn1cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2UtZ3JpZC1mb290ZXItbGlua1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3Bsb25lLm9yZy9mb3VuZGF0aW9uL21hdGVyaWFscy9mb3VuZGF0aW9uLXJlc29sdXRpb25zL2NvZGUtb2YtY29uZHVjdFwiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRodHRwczovL3Bsb25lLm9yZy9mb3VuZGF0aW9uL21hdGVyaWFscy9mb3VuZGF0aW9uLXJlc29sdXRpb25zL2NvZGUtb2YtY29uZHVjdFxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5cblx0XHRcdFx0XHRcdFRoZSBjb250ZW50IG9mIHRoaXMgQ29kZSBvZiBDb25kdWN0IGlzIGxpY2Vuc2VkIHVuZGVyIGEgQ3JlYXRpdmVcblx0XHRcdFx0XHRcdENvbW1vbnMgQXR0cmlidXRpb24tU2hhcmVBbGlrZSA0LjAgSW50ZXJuYXRpb25hbCBsaWNlbnNlLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRzdWJ0aXRsZVxuXHRcdFx0dGl0bGU9XCJDb0NcIlxuXHRcdC8+XG5cdCk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3BoaWxseS1qcy1jbHViLXdlYnNpdGUvcGhpbGx5LWpzLWNsdWItd2Vic2l0ZS9hcHAvcm91dGVzL2NvZGUtb2YtY29uZHVjdC50c3gifQ==