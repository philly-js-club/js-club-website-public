import {
  constructSiteTitle,
  upperFirst
} from "/build/_shared/chunk-GFSP2YQL.js";
import {
  site
} from "/build/_shared/chunk-6K5QLAYU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useSearchParams
} from "/build/_shared/chunk-AMD6ONX5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/AdLogo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AdLogo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AdLogo.tsx"
  );
  import.meta.hot.lastModified = "1719260630536.595";
}
function AdLogo({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-label": "PhillyJS Logo", className, fill: "none", height: "1000", viewBox: "0 0 1000 1000", width: "1000", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1000 0H0V1000H1000V0Z", fill: "var(--color-background)" }, void 0, false, {
      fileName: "app/components/AdLogo.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M822 868H902.4V434.8H822V868Z", fill: "var(--color-foreground)" }, void 0, false, {
      fileName: "app/components/AdLogo.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M546.22 869H627.22V732.2C627.22 699.8 646.42 681.8 678.82 681.8C707.62 681.8 721.42 698 721.42 726.8V869H802.42V721.4C802.42 648.8 762.22 608 706.42 608C671.02 608 642.82 624.2 627.22 653.6V435.8H546.22V869Z", fill: "var(--color-foreground)" }, void 0, false, {
      fileName: "app/components/AdLogo.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M234.85 868H318.85V775H347.65C461.05 775 530.05 716.2 530.05 617.8C530.05 519.4 461.65 460 347.65 460H234.85V868ZM318.85 701.2V533.8H345.25C412.45 533.8 443.65 561.4 443.65 617.8C443.65 673.6 413.65 701.2 345.25 701.2H318.85Z", fill: "var(--color-foreground)" }, void 0, false, {
      fileName: "app/components/AdLogo.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AdLogo.tsx",
    lineNumber: 25,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/AdLogo.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = AdLogo;
var _c;
$RefreshReg$(_c, "AdLogo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/dates.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/dates.ts"
  );
  import.meta.hot.lastModified = "1719260630536.595";
}
function getMonthAndYear(params) {
  const month = params.get("month")?.toLowerCase();
  const year = params.get("year")?.toLowerCase();
  return {
    month: isValidMonth(month) ? month : "(invalid month)",
    year: isValidYear(year) ? year : "(invalid year)"
  };
}
function useMonthAndYear() {
  const [params] = useSearchParams();
  return getMonthAndYear(params);
}
var monthNames = /* @__PURE__ */ new Set([
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
function isValidMonth(month) {
  return monthNames.has(month);
}
function isValidYear(year) {
  return !!(year && /\d{4}/.test(year));
}

// app/components/AdText.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AdText.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AdText.tsx"
  );
  import.meta.hot.lastModified = "1719260630536.595";
}
function AdText() {
  _s();
  const {
    month,
    year
  } = useMonthAndYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ad-text", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: site.title }, void 0, false, {
      fileName: "app/components/AdText.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      upperFirst(month),
      " ",
      year
    ] }, void 0, true, {
      fileName: "app/components/AdText.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AdText.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(AdText, "BJZFHF3DJ0WFiQsZsaeaiYs9Yhc=", false, function() {
  return [useMonthAndYear];
});
_c2 = AdText;
var _c2;
$RefreshReg$(_c2, "AdText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/ad.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/ad.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/ad.tsx"
  );
  import.meta.hot.lastModified = "1719260630536.595";
}
var meta = ({
  location
}) => {
  const {
    month,
    year
  } = getMonthAndYear(new URLSearchParams(location.search));
  return [{
    title: constructSiteTitle(`Ad (${upperFirst(month)} ${year})`)
  }];
};
function Ad() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "ad-main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ad-img-area", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdLogo, { className: "ad-img" }, void 0, false, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdText, {}, void 0, false, {
      fileName: "app/routes/ad.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ad.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c3 = Ad;
var _c3;
$RefreshReg$(_c3, "Ad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Ad as default,
  meta
};
//# sourceMappingURL=/build/routes/ad-MJA4YAZY.js.map
