import {
  useSearchParams
} from "/build/_shared/chunk-62MKTFXD.js";
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

// browser-route-module:routes/ad.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/ad.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/AdLogo.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdLogo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      "aria-label": "PhillyJS Logo",
      className,
      fill: "none",
      height: "1000",
      viewBox: "0 0 1000 1000",
      width: "1000",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1000 0H0V1000H1000V0Z", fill: "var(--color-background)" }, void 0, false, {
          fileName: "app/components/AdLogo.tsx",
          lineNumber: 17,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "path",
          {
            d: "M822 868H902.4V434.8H822V868Z",
            fill: "var(--color-foreground)"
          },
          void 0,
          false,
          {
            fileName: "app/components/AdLogo.tsx",
            lineNumber: 18,
            columnNumber: 5
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "path",
          {
            d: "M546.22 869H627.22V732.2C627.22 699.8 646.42 681.8 678.82 681.8C707.62 681.8 721.42 698 721.42 726.8V869H802.42V721.4C802.42 648.8 762.22 608 706.42 608C671.02 608 642.82 624.2 627.22 653.6V435.8H546.22V869Z",
            fill: "var(--color-foreground)"
          },
          void 0,
          false,
          {
            fileName: "app/components/AdLogo.tsx",
            lineNumber: 22,
            columnNumber: 5
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "path",
          {
            d: "M234.85 868H318.85V775H347.65C461.05 775 530.05 716.2 530.05 617.8C530.05 519.4 461.65 460 347.65 460H234.85V868ZM318.85 701.2V533.8H345.25C412.45 533.8 443.65 561.4 443.65 617.8C443.65 673.6 413.65 701.2 345.25 701.2H318.85Z",
            fill: "var(--color-foreground)"
          },
          void 0,
          false,
          {
            fileName: "app/components/AdLogo.tsx",
            lineNumber: 26,
            columnNumber: 5
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/AdLogo.tsx",
        lineNumber: 16,
        columnNumber: 4
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/AdLogo.tsx",
      lineNumber: 7,
      columnNumber: 3
    },
    this
  );
}

// app/routes/ad.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const { month, year } = getMonthAndYear(params);
  if (!isValidMonth(month) || !isValidYear(year)) {
    return [{ title: "Ad | Philly JS Club" }];
  }
  return [{ title: `Ad (${upperFirst(month)} ${year}) | Philly JS Club` }];
};
function Ad() {
  const [params] = useSearchParams();
  const { month, year } = getMonthAndYear(params);
  if (!isValidMonth(month)) {
    return "nope (month)";
  }
  if (!isValidYear(year)) {
    return "nope (year)";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "ad-main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ad-img-area", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdLogo, { className: "ad-img" }, void 0, false, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ad-text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Philly JS Club" }, void 0, false, {
        fileName: "app/routes/ad.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        upperFirst(month),
        " ",
        year
      ] }, void 0, true, {
        fileName: "app/routes/ad.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ad.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
function upperFirst(text) {
  return text[0].toUpperCase() + text.slice(1);
}
function getMonthAndYear(params) {
  const month = params.get("month")?.toLowerCase() ?? "idk";
  const year = params.get("year")?.toLowerCase() ?? "when";
  return { month, year };
}
function isValidMonth(month) {
  const monthNames = /* @__PURE__ */ new Set([
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ]);
  return monthNames.has(month);
}
function isValidYear(year) {
  return /\d{4}/.test(year);
}
export {
  Ad as default,
  meta
};
//# sourceMappingURL=/build/routes/ad-N77UNQUD.js.map
