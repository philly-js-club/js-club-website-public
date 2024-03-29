import {
  Icons
} from "/build/_shared/chunk-LR2ZQL6Y.js";
import {
  PageGrid
} from "/build/_shared/chunk-ZKZXE4QR.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-VSZCZT5Q.js";
import "/build/_shared/chunk-6ORTDTOG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-QSBDK2AJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-4RRP2SUU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/join-us.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/join-us.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/join-us.tsx"
  );
  import.meta.hot.lastModified = "1711660802831.3574";
}
var meta = () => {
  return [{
    title: constructSiteTitle("Join Us")
  }];
};
function Socials() {
  _s();
  const platforms = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageGrid, { left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "Here's where you can find us:" }, void 0, false, {
      fileName: "app/routes/join-us.tsx",
      lineNumber: 38,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icons, { icons: platforms.currentPlatforms, imageClassName: "platform-image" }, void 0, false, {
      fileName: "app/routes/join-us.tsx",
      lineNumber: 39,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/join-us.tsx",
    lineNumber: 37,
    columnNumber: 26
  }, this), subtitle: true, title: "Join Us" }, void 0, false, {
    fileName: "app/routes/join-us.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(Socials, "xyYEPBWvpf/KttH4gPP1DFn1ip4=", false, function() {
  return [useLoaderData];
});
_c = Socials;
var _c;
$RefreshReg$(_c, "Socials");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Socials as default,
  meta
};
//# sourceMappingURL=/build/routes/join-us-5OKE55AH.js.map
