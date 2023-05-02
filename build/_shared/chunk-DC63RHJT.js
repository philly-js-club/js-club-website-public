import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6GQJD64I.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/PageGrid.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Arrow.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/clsx/dist/clsx.m.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// app/components/Arrow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Arrow({ className, label, rotate }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      "aria-label": label,
      className: clsx("arrow", className),
      fill: "none",
      ...rotate && { transform: `rotate(${rotate})` },
      viewBox: "0 0 20 16",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "path",
        {
          d: "M19.1924 8.70711C19.5829 8.31658 19.5829 7.68343 19.1924 7.29289L12.8284 0.928933C12.4379 0.538412 11.8047 1.24551 11.4142 1.63604C11.0237 2.02656 10.3166 2.65973 10.7071 3.05025L15.6569 8L10.7071 12.9497C10.3166 13.3403 11.0237 13.9734 11.4142 14.364C11.8047 14.7545 12.4379 15.4616 12.8284 15.0711L19.1924 8.70711ZM0.100505 9.41421H17.0711V6.58579H0.100505V8V9.41421Z",
          fill: "currentColor"
        },
        void 0,
        false,
        {
          fileName: "app/components/Arrow.tsx",
          lineNumber: 19,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/Arrow.tsx",
      lineNumber: 11,
      columnNumber: 3
    },
    this
  );
}

// app/components/PageGrid.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function PageGrid({ left, subtitle, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "page-grid", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "page-grid-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "page-grid-title", children: title }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      subtitle && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "page-grid-subtitle", href: "/", children: [
        "Philly JS Club",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Arrow,
          {
            className: "arrow-back",
            label: "Back indication arrow",
            rotate: 180
          },
          void 0,
          false,
          {
            fileName: "app/components/PageGrid.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 15,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PageGrid.tsx",
      lineNumber: 12,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "page-grid-left", children: left }, void 0, false, {
      fileName: "app/components/PageGrid.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "page-grid-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "page-grid-footer-link", href: "/about", children: "About" }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "page-grid-footer-link",
          href: "https://github.com/philly-js-club",
          rel: "noreferrer",
          target: "_blank",
          children: [
            "GitHub",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Arrow,
              {
                className: "arrow-out",
                label: "External link indication arrow",
                rotate: -45
              },
              void 0,
              false,
              {
                fileName: "app/components/PageGrid.tsx",
                lineNumber: 37,
                columnNumber: 6
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/PageGrid.tsx",
          lineNumber: 30,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "page-grid-footer-separator" }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "page-grid-footer-link", href: "/code-of-conduct", children: "Code of Conduct" }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "page-grid-footer-link",
          href: "https://forms.gle/NDLyNNE51RHoXgMC7",
          rel: "noreferrer",
          target: "_blank",
          children: [
            "Slack",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Arrow,
              {
                className: "arrow-out",
                label: "External link indication arrow",
                rotate: -45
              },
              void 0,
              false,
              {
                fileName: "app/components/PageGrid.tsx",
                lineNumber: 54,
                columnNumber: 6
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/PageGrid.tsx",
          lineNumber: 47,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "page-grid-footer-separator" }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "page-grid-footer-link", href: "/events", children: "Events" }, void 0, false, {
        fileName: "app/components/PageGrid.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          className: "page-grid-footer-link",
          href: "https://jawns.club/@jsclub",
          rel: "me noreferrer",
          target: "_blank",
          children: [
            "Mastodon",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Arrow,
              {
                className: "arrow-out",
                label: "External link indication arrow",
                rotate: -45
              },
              void 0,
              false,
              {
                fileName: "app/components/PageGrid.tsx",
                lineNumber: 71,
                columnNumber: 6
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/PageGrid.tsx",
          lineNumber: 64,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/PageGrid.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PageGrid.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

export {
  Arrow,
  PageGrid
};
//# sourceMappingURL=/build/_shared/chunk-DC63RHJT.js.map
