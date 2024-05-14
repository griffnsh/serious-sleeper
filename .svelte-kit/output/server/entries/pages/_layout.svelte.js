import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, s as setContext, o as onDestroy, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, h as getContext, v as validate_component, m as missing_component, i as globals, j as escape, k as each, l as subscribe } from "../../chunks/index3.js";
import { l as leagueID, a as leagueName, e as enableBlog, m as managers } from "../../chunks/leagueInfo.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
import { f as forwardEventsBuilder, c as classMap, B as Button, A, H as Header, T as Title, C as Content, a as Text, S as Subheader } from "../../chunks/index.svelte_svelte_type_style_lang.js";
import { d as dispatch } from "../../chunks/dispatch.js";
import { I as Icon, L as Label } from "../../chunks/index4.js";
import { L as List, I as Item, G as Graphic, S as Separator } from "../../chunks/index5.js";
import "../../chunks/records.js";
import { e as exclude, p as prefixFilter } from "../../chunks/prefixFilter.js";
import { R as Ripple } from "../../chunks/Ripple.js";
import { MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from "@material/tab-indicator";
import { I as IconButton } from "../../chunks/IconButton.js";
import "fuzzyjs";
const tabs = [
  {
    icon: "home",
    label: "Home",
    dest: "/"
  },
  {
    icon: "sports",
    label: "Matchups",
    dest: "/matchups"
  },
  {
    icon: "swap_horiz",
    label: "Trades & Waivers",
    dest: "/transactions"
  },
  {
    icon: "article",
    label: "Blog",
    dest: "/blog"
  },
  {
    icon: "view_comfy",
    label: "League Info",
    nest: true,
    children: [
      {
        icon: "storage",
        label: "Rosters",
        dest: "/rosters"
      },
      {
        icon: "groups",
        label: "Managers",
        dest: "/managers"
      },
      {
        icon: "local_fire_department",
        label: "Rivalry",
        dest: "/rivalry"
      },
      {
        icon: "leaderboard",
        label: "Standings",
        dest: "/standings"
      },
      {
        icon: "view_comfy",
        label: "Drafts",
        dest: "/drafts"
      },
      {
        icon: "emoji_events",
        label: "Trophy Room",
        dest: "/awards"
      },
      {
        icon: "military_tech",
        label: "Records",
        dest: "/records"
      },
      {
        icon: "history_edu",
        label: "Constitution",
        dest: "/constitution"
      },
      {
        icon: "sports_football",
        label: "Go to Sleeper",
        dest: `https://sleeper.app/leagues/${leagueID}`
      }
    ]
  },
  {
    icon: "lightbulb",
    label: "Resources",
    dest: "/resources"
  }
];
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-drawer": true,
          "mdc-drawer--dismissible": variant === "dismissible",
          "mdc-drawer--modal": variant === "modal",
          "smui-drawer__absolute": variant === "modal" && !fixed,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</aside>`;
});
const TabIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "active",
    "type",
    "transition",
    "content$use",
    "content$class",
    "activate",
    "deactivate",
    "computeContentClientRect",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { type = "underline" } = $$props;
  let { transition = "slide" } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let internalClasses = {};
  let contentStyles = {};
  let changeSets = [];
  let oldTransition = transition;
  function getInstance() {
    const Foundation = {
      fade: MDCFadingTabIndicatorFoundation,
      slide: MDCSlidingTabIndicatorFoundation
    }[transition] || MDCSlidingTabIndicatorFoundation;
    return new Foundation({
      addClass: (...props) => doChange(() => addClass(...props)),
      removeClass: (...props) => doChange(() => removeClass(...props)),
      computeContentClientRect,
      setContentStyleProperty: (...props) => doChange(() => addContentStyle(...props))
    });
  }
  function doChange(fn) {
    if (changeSets.length) {
      changeSets[changeSets.length - 1].push(fn);
    } else {
      fn();
    }
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addContentStyle(name, value) {
    if (contentStyles[name] != value) {
      if (value === "" || value == null) {
        delete contentStyles[name];
        contentStyles = contentStyles;
      } else {
        contentStyles[name] = value;
      }
    }
  }
  function activate(previousIndicatorClientRect) {
    active = true;
    instance.activate(previousIndicatorClientRect);
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function computeContentClientRect() {
    changeSets.push([]);
    changeSets = changeSets;
    return content.getBoundingClientRect();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.computeContentClientRect === void 0 && $$bindings.computeContentClientRect && computeContentClientRect !== void 0)
    $$bindings.computeContentClientRect(computeContentClientRect);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldTransition !== transition) {
      oldTransition = transition;
      instance && instance.destroy();
      internalClasses = {};
      contentStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (changeSets.length) {
      requestAnimationFrame(() => {
        var _a;
        const changeSet = (_a = changeSets.shift()) !== null && _a !== void 0 ? _a : [];
        changeSets = changeSets;
        for (const fn of changeSet) {
          fn();
        }
      });
    }
  }
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-indicator": true,
          "mdc-tab-indicator--active": active,
          "mdc-tab-indicator--fade": transition === "fade",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["content$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [content$class]: true,
          "mdc-tab-indicator__content": true,
          "mdc-tab-indicator__content--underline": type === "underline",
          "mdc-tab-indicator__content--icon": type === "icon"
        }))
      },
      {
        style: escape_attribute_value(Object.entries(contentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      {
        "aria-hidden": escape_attribute_value(type === "icon" ? "true" : void 0)
      },
      escape_object(prefixFilter($$restProps, "content$"))
    ],
    {}
  )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}</span>
</span>`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "tab",
    "ripple",
    "stacked",
    "minWidth",
    "indicatorSpanOnlyContent",
    "href",
    "content$use",
    "content$class",
    "component",
    "activate",
    "deactivate",
    "focus",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { tab: tabId } = $$props;
  let { ripple = true } = $$props;
  let { stacked = false } = $$props;
  let { minWidth = false } = $$props;
  let { indicatorSpanOnlyContent = false } = $$props;
  let { href = void 0 } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let tabIndicator;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let focusOnActivate = getContext("SMUI:tab:focusOnActivate");
  let active = tabId === getContext("SMUI:tab:initialActive");
  let forceAccessible = false;
  let { component = href == null ? Button : A } = $$props;
  setContext("SMUI:label:context", "tab");
  setContext("SMUI:icon:context", "tab");
  if (!tabId) {
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function activate(previousIndicatorClientRect, skipFocus) {
    active = true;
    if (skipFocus) {
      instance.setFocusOnActivate(false);
    }
    instance.activate(previousIndicatorClientRect);
    if (skipFocus) {
      instance.setFocusOnActivate(focusOnActivate);
    }
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function focus() {
    getElement().focus();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tab === void 0 && $$bindings.tab && tabId !== void 0)
    $$bindings.tab(tabId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.minWidth === void 0 && $$bindings.minWidth && minWidth !== void 0)
    $$bindings.minWidth(minWidth);
  if ($$props.indicatorSpanOnlyContent === void 0 && $$bindings.indicatorSpanOnlyContent && indicatorSpanOnlyContent !== void 0)
    $$bindings.indicatorSpanOnlyContent(indicatorSpanOnlyContent);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-tab": true,
            "mdc-tab--active": active,
            "mdc-tab--stacked": stacked,
            "mdc-tab--min-width": minWidth,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { role: "tab" },
        {
          "aria-selected": active ? "true" : "false"
        },
        {
          tabindex: active || forceAccessible ? "0" : "-1"
        },
        { href },
        internalAttrs,
        exclude($$restProps, ["content$", "tabIndicator$"]),
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${spread(
            [
              {
                class: escape_attribute_value(classMap({
                  [content$class]: true,
                  "mdc-tab__content": true
                }))
              },
              escape_object(prefixFilter($$restProps, "content$"))
            ],
            {}
          )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}
    ${indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({}, { active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}</span>
  ${!indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({}, { active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}
  <span class="mdc-tab__ripple"></span>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$3 = {
  code: ".menuIcon{position:absolute;top:15px;left:15px;font-size:2em;color:#888;padding:6px;cursor:pointer}.menuIcon:hover{color:#51B59A}.nav-drawer{z-index:5;top:0;left:0}.nav-item{color:#858585 !important}.nav-back.svelte-owk18z{position:fixed;z-index:4;width:100%;width:100vw;height:100%;height:100vh;top:0;left:0;background-color:rgba(0, 0, 0, 0.32);transition:all 0.7s}",
  map: null
};
const NavSmall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active, tabs: tabs2 } = $$props;
  let open = false;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs2 !== void 0)
    $$bindings.tabs(tabs2);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons menuIcon" }, {}, {
      default: () => {
        return `menu`;
      }
    })}

<div class="nav-back svelte-owk18z" style="${"pointer-events: " + escape(open ? "visible" : "none", true) + "; opacity: " + escape(open ? 1 : 0, true) + ";"}"></div>

${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        variant: "modal",
        class: "nav-drawer",
        fixed: true,
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(leagueName)}`;
                }
              })}`;
            }
          })}
	${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(List, "List").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(tabs2, (tab) => {
                    return `${!tab.nest && (tab.label != "Blog" || tab.label == "Blog" && enableBlog) ? `${validate_component(Item, "Item").$$render(
                      $$result,
                      {
                        href: "javascript:void(0)",
                        activated: active == tab.dest
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Graphic, "Graphic").$$render(
                            $$result,
                            {
                              class: "material-icons" + (active == tab.dest ? "" : " nav-item"),
                              "aria-hidden": "true"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(tab.icon)}`;
                              }
                            }
                          )}
						${validate_component(Text, "Text").$$render(
                            $$result,
                            {
                              class: active == tab.dest ? "" : "nav-item"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(tab.label)}`;
                              }
                            }
                          )}
					`;
                        }
                      }
                    )}` : ``}`;
                  })}
			${each(tabs2, (tab) => {
                    return `${tab.nest ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
					${validate_component(Subheader, "Subheader").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(tab.label)}`;
                      }
                    })}
					${each(tab.children, (subTab) => {
                      return `${subTab.label == "Managers" ? `${managers.length ? `${validate_component(Item, "Item").$$render(
                        $$result,
                        {
                          href: "javascript:void(0)",
                          activated: active == subTab.dest
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Graphic, "Graphic").$$render(
                              $$result,
                              {
                                class: "material-icons" + (active == subTab.dest ? "" : " nav-item"),
                                "aria-hidden": "true"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(subTab.icon)}`;
                                }
                              }
                            )}
									${validate_component(Text, "Text").$$render(
                              $$result,
                              {
                                class: active == subTab.dest ? "" : "nav-item"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(subTab.label)}`;
                                }
                              }
                            )}
								`;
                          }
                        }
                      )}` : ``}` : `${validate_component(Item, "Item").$$render(
                        $$result,
                        {
                          href: "javascript:void(0)",
                          activated: active == subTab.dest
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Graphic, "Graphic").$$render(
                              $$result,
                              {
                                class: "material-icons" + (active == subTab.dest ? "" : " nav-item"),
                                "aria-hidden": "true"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(subTab.icon)}`;
                                }
                              }
                            )}
								${validate_component(Text, "Text").$$render(
                              $$result,
                              {
                                class: active == subTab.dest ? "" : "nav-item"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(subTab.label)}`;
                                }
                              }
                            )}
							`;
                          }
                        }
                      )}`}`;
                    })}` : ``}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TabScroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "align",
    "scrollArea$use",
    "scrollArea$class",
    "scrollContent$use",
    "scrollContent$class",
    "getScrollPosition",
    "getScrollContentWidth",
    "incrementScroll",
    "scrollTo",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { scrollArea$use = [] } = $$props;
  let { scrollArea$class = "" } = $$props;
  let { scrollContent$use = [] } = $$props;
  let { scrollContent$class = "" } = $$props;
  let element;
  let instance;
  let scrollArea;
  let scrollContent;
  let internalClasses = {};
  let scrollAreaClasses = {};
  let scrollAreaStyles = {};
  let scrollContentStyles = {};
  function getScrollPosition() {
    return instance.getScrollPosition();
  }
  function getScrollContentWidth() {
    return scrollContent.offsetWidth;
  }
  function incrementScroll(scrollXIncrement) {
    instance.incrementScroll(scrollXIncrement);
  }
  function scrollTo(scrollX) {
    instance.scrollTo(scrollX);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.scrollArea$use === void 0 && $$bindings.scrollArea$use && scrollArea$use !== void 0)
    $$bindings.scrollArea$use(scrollArea$use);
  if ($$props.scrollArea$class === void 0 && $$bindings.scrollArea$class && scrollArea$class !== void 0)
    $$bindings.scrollArea$class(scrollArea$class);
  if ($$props.scrollContent$use === void 0 && $$bindings.scrollContent$use && scrollContent$use !== void 0)
    $$bindings.scrollContent$use(scrollContent$use);
  if ($$props.scrollContent$class === void 0 && $$bindings.scrollContent$class && scrollContent$class !== void 0)
    $$bindings.scrollContent$class(scrollContent$class);
  if ($$props.getScrollPosition === void 0 && $$bindings.getScrollPosition && getScrollPosition !== void 0)
    $$bindings.getScrollPosition(getScrollPosition);
  if ($$props.getScrollContentWidth === void 0 && $$bindings.getScrollContentWidth && getScrollContentWidth !== void 0)
    $$bindings.getScrollContentWidth(getScrollContentWidth);
  if ($$props.incrementScroll === void 0 && $$bindings.incrementScroll && incrementScroll !== void 0)
    $$bindings.incrementScroll(incrementScroll);
  if ($$props.scrollTo === void 0 && $$bindings.scrollTo && scrollTo !== void 0)
    $$bindings.scrollTo(scrollTo);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-scroller": true,
          "mdc-tab-scroller--align-start": align === "start",
          "mdc-tab-scroller--align-end": align === "end",
          "mdc-tab-scroller--align-center": align === "center",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["scrollArea$", "scrollContent$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollArea$class]: true,
          "mdc-tab-scroller__scroll-area": true,
          ...scrollAreaClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollAreaStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollArea$"))
    ],
    {}
  )}${add_attribute("this", scrollArea, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollContent$class]: true,
          "mdc-tab-scroller__scroll-content": true
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollContentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollContent$"))
    ],
    {}
  )}${add_attribute("this", scrollContent, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
const { Object: Object_1 } = globals;
const TabBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "tabs",
    "key",
    "focusOnActivate",
    "focusOnProgrammatic",
    "useAutomaticActivation",
    "active",
    "scrollIntoView",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabs: tabs2 = [] } = $$props;
  let { key = (tab) => tab } = $$props;
  let { focusOnActivate = true } = $$props;
  let { focusOnProgrammatic = false } = $$props;
  let { useAutomaticActivation = true } = $$props;
  let { active = void 0 } = $$props;
  let element;
  let instance;
  let tabScroller;
  let activeIndex = tabs2.indexOf(active);
  let tabAccessorMap = {};
  let tabAccessorWeakMap = /* @__PURE__ */ new WeakMap();
  setContext("SMUI:tab:focusOnActivate", focusOnActivate);
  setContext("SMUI:tab:initialActive", active);
  function scrollIntoView(index) {
    instance.scrollIntoView(index);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs2 !== void 0)
    $$bindings.tabs(tabs2);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.focusOnActivate === void 0 && $$bindings.focusOnActivate && focusOnActivate !== void 0)
    $$bindings.focusOnActivate(focusOnActivate);
  if ($$props.focusOnProgrammatic === void 0 && $$bindings.focusOnProgrammatic && focusOnProgrammatic !== void 0)
    $$bindings.focusOnProgrammatic(focusOnProgrammatic);
  if ($$props.useAutomaticActivation === void 0 && $$bindings.useAutomaticActivation && useAutomaticActivation !== void 0)
    $$bindings.useAutomaticActivation(useAutomaticActivation);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.scrollIntoView === void 0 && $$bindings.scrollIntoView && scrollIntoView !== void 0)
    $$bindings.scrollIntoView(scrollIntoView);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (active !== tabs2[activeIndex]) {
        activeIndex = tabs2.indexOf(active);
      }
    }
    {
      if (tabs2.length) {
        const accessor = tabs2[0] instanceof Object ? tabAccessorWeakMap.get(tabs2[0]) : tabAccessorMap[tabs2[0]];
        if (accessor) {
          accessor.forceAccessible(activeIndex === -1);
        }
      }
    }
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({ [className]: true, "mdc-tab-bar": true }))
        },
        { role: "tablist" },
        escape_object(exclude($$restProps, ["tabScroller$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${validate_component(TabScroller, "TabScroller").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "tabScroller$"), { this: tabScroller }),
      {
        this: ($$value) => {
          tabScroller = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(tabs2, (tab) => {
            return `${slots.default ? slots.default({ tab }) : ``}`;
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$2 = {
  code: ".navBar{display:inline-flex;position:relative;justify-content:center}.navBar .material-icons{font-size:1.8em;height:25px;width:22px}.parent.svelte-1wryr23{position:relative}.subMenu.svelte-1wryr23{overflow-y:hidden;display:block;position:absolute;z-index:5;background-color:var(--fff);transition:all 0.4s}.overlay.svelte-1wryr23{display:block;position:absolute;top:0;left:0;width:100%;height:100%;height:100vh;z-index:4}.mdc-deprecated-list{padding:0}.subText{font-size:0.8em}.dontDisplay{display:none}",
  map: null
};
const NavLarge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active, tabs: tabs2 } = $$props;
  let el, width, height, left, top;
  const sizeSubMenu = (w) => {
    top = 0;
    const bottom = 0;
    height = bottom - top + 1;
    left = 0;
    const right = 0;
    width = right - left;
  };
  let tabChildren = [];
  for (const tab of tabs2) {
    if (tab.nest) {
      tabChildren = tab.children;
    }
  }
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs2 !== void 0)
    $$bindings.tabs(tabs2);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      sizeSubMenu();
    }
    $$rendered = `



<div class="overlay svelte-1wryr23" style="${"display: " + escape("none", true) + ";"}"></div>

<div class="parent svelte-1wryr23">${validate_component(TabBar, "TabBar").$$render(
      $$result,
      { class: "navBar", tabs: tabs2, active },
      {
        active: ($$value) => {
          active = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ tab }) => {
          return `${tab.nest ? `<div${add_attribute("this", el, 0)}>${validate_component(Tab, "Tab").$$render($$result, { tab, minWidth: true }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `${escape(tab.icon)}`;
                }
              })}
					${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(tab.label)}`;
                }
              })}`;
            }
          })}</div>` : `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: tab.label == "Blog" && !enableBlog ? "dontDisplay" : "",
              tab,
              minWidth: true
            },
            {},
            {
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `${escape(tab.icon)}`;
                  }
                })}
				${validate_component(Label, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(tab.label)}`;
                  }
                })}`;
              }
            }
          )}`}`;
        }
      }
    )}
	<div class="subMenu svelte-1wryr23" style="${"max-height: " + escape(
      0,
      true
    ) + "px; width: " + escape(width, true) + "px; top: " + escape(height, true) + "px; left: " + escape(left, true) + "px; box-shadow: 0 0 " + escape("0", true) + " 0 #00316b; border: " + escape("0", true) + " solid #00316b; border-top: none;"}">${validate_component(List, "List").$$render($$result, {}, {}, {
      default: () => {
        return `${each(tabChildren, (subTab, ix) => {
          return `${subTab.label == "Managers" ? `${validate_component(Item, "Item").$$render(
            $$result,
            {
              class: managers.length ? "" : "dontDisplay"
            },
            {},
            {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `${escape(subTab.icon)}`;
                  }
                })}
						${validate_component(Text, "Text").$$render($$result, { class: "subText" }, {}, {
                  default: () => {
                    return `${escape(subTab.label)}`;
                  }
                })}
					`;
              }
            }
          )}
					${ix != tabChildren.length - 1 ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `${escape(subTab.icon)}`;
                }
              })}
						${validate_component(Text, "Text").$$render($$result, { class: "subText" }, {}, {
                default: () => {
                  return `${escape(subTab.label)}`;
                }
              })}
					`;
            }
          })}
					${ix != tabChildren.length - 1 ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}`}`;
        })}`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css$1 = {
  code: "a.svelte-1ga5r9q{display:table;margin:0 auto;color:#51B59A}nav.svelte-1ga5r9q{background-color:var(--fff);position:relative;z-index:2;border-bottom:1px solid #006b5b;box-shadow:0 0 8px 0 #006b5b}#logo.svelte-1ga5r9q{width:80px;display:block;margin:0 auto;padding:10px}.large.svelte-1ga5r9q{display:block}.small.svelte-1ga5r9q{display:none}.container.svelte-1ga5r9q{position:absolute;top:0.25em;right:0.25em}.lightDark{color:var(--g555)}@media(max-width: 950px){.large.svelte-1ga5r9q{display:none}.small.svelte-1ga5r9q{display:block}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lightTheme = typeof window === "undefined" || window.matchMedia("(prefers-color-scheme: light)").matches;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    active = tabs.find((tab) => tab.dest == $page.url.pathname || tab.nest && tab.children.find((subTab) => subTab.dest == $page.url.pathname));
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1bkd5b9_START -->${$$result.title = `<title>${escape(!$page.url.pathname[1] ? "Home" : $page.url.pathname[1].toUpperCase() + $page.url.pathname.slice(2))} | League Page</title>`, ""}<!-- HEAD_svelte-1bkd5b9_END -->`, ""}



<nav class="svelte-1ga5r9q"><a href="/" class="svelte-1ga5r9q"><img id="logo" alt="league logo" src="/serious-logo-no-bg.png" class="svelte-1ga5r9q"></a>

	<div class="container svelte-1ga5r9q">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        toggle: true,
        pressed: lightTheme,
        class: "lightDark"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
            default: () => {
              return `dark_mode`;
            }
          })}
			${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `light_mode`;
            }
          })}`;
        }
      }
    )}</div>

	<div class="large svelte-1ga5r9q">${validate_component(NavLarge, "NavLarge").$$render(
      $$result,
      { tabs, active },
      {
        active: ($$value) => {
          active = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

	<div class="small svelte-1ga5r9q">${validate_component(NavSmall, "NavSmall").$$render(
      $$result,
      { tabs, active: $page.url.pathname },
      {
        active: ($$value) => {
          $page.url.pathname = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></nav>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: 'footer.svelte-1h6vhv4.svelte-1h6vhv4{background-color:var(--f8f8f8);width:100%;display:block;position:absolute;bottom:0;z-index:1;border-top:1px solid #51B59A;padding:30px 0 60px;text-align:center;color:#777}#navigation.svelte-1h6vhv4.svelte-1h6vhv4{margin:0 0 2em}#navigation.svelte-1h6vhv4 ul.svelte-1h6vhv4{margin:0;padding:0}#navigation.svelte-1h6vhv4 ul li.svelte-1h6vhv4{list-style-type:none;display:inline}#navigation.svelte-1h6vhv4 li.svelte-1h6vhv4:not(:first-child):before{content:" | "}.navLink.svelte-1h6vhv4.svelte-1h6vhv4{display:inline-block;cursor:pointer;padding:6px 10px}.navLink.svelte-1h6vhv4.svelte-1h6vhv4:hover{color:#51B59A}.updateNotice.svelte-1h6vhv4.svelte-1h6vhv4{color:var(--g999);font-style:italic;font-size:0.8em;margin-top:0}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el, footerHeight;
  const resize = (e, delay) => {
    const bottom = el?.getBoundingClientRect().bottom;
    const top = el?.getBoundingClientRect().top;
    if (delay) {
      setTimeout(
        () => {
          resize(e, false);
        },
        100
      );
    } else {
      footerHeight = bottom - top;
    }
  };
  let managersOutOfDate = false;
  if (managers) {
    for (const manager of managers) {
      if (manager.roster && !manager.managerID) {
        managersOutOfDate = true;
        resize(el?.getBoundingClientRect(), true);
        break;
      }
    }
  }
  (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css);
  {
    resize(el?.getBoundingClientRect(), false);
  }
  return `



<div class="footerSpacer" style="${"height: " + escape(footerHeight, true) + "px;"}"></div>


<footer class="svelte-1h6vhv4"${add_attribute("this", el, 0)}>${``}
    ${managersOutOfDate ? `<p class="updateNotice svelte-1h6vhv4">Your managers page needs an update, <a href="https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers">please follow the instructions</a> to get the most up-to-date experience.</p>` : ``}
	<div id="navigation" class="svelte-1h6vhv4"><ul class="svelte-1h6vhv4">${each(tabs, (tab) => {
    return `${!tab.nest ? `<li class="svelte-1h6vhv4"><div class="navLink svelte-1h6vhv4">${escape(tab.label)}</div></li>` : `${each(tab.children, (child) => {
      return `
				        ${child.label != "Managers" || managers.length > 0 ? `<li class="svelte-1h6vhv4"><div class="navLink svelte-1h6vhv4">${escape(child.label)}</div></li>` : ``}`;
    })}`}`;
  })}</ul></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<main>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} 
  
    ${slots.default ? slots.default({}) : ``}

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Layout as default
};
