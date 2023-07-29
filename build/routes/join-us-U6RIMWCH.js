import {
  Icons
} from "/build/_shared/chunk-PCBANBPR.js";
import {
  PageGrid
} from "/build/_shared/chunk-BYCBHZSJ.js";
import {
  constructSiteTitle
} from "/build/_shared/chunk-EJOKRSYP.js";
import "/build/_shared/chunk-B4YQL3S4.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-J2YLHYFZ.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/join-us.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: constructSiteTitle("Join Us") }];
};
function Socials() {
  const platforms = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    PageGrid,
    {
      left: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "body-text", children: "Here's where you can find us:" }, void 0, false, {
          fileName: "app/routes/join-us.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Icons,
          {
            icons: platforms.currentPlatforms,
            imageClassName: "platform-image"
          },
          void 0,
          false,
          {
            fileName: "app/routes/join-us.tsx",
            lineNumber: 28,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/join-us.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      subtitle: true,
      title: "Join Us"
    },
    void 0,
    false,
    {
      fileName: "app/routes/join-us.tsx",
      lineNumber: 24,
      columnNumber: 3
    },
    this
  );
}
export {
  Socials as default,
  meta
};
//# sourceMappingURL=/build/routes/join-us-U6RIMWCH.js.map
