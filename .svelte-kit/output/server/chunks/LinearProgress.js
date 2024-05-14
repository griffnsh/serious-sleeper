import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, h as getContext, l as subscribe, y as set_store_value, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute } from "./index3.js";
import { f as forwardEventsBuilder, c as classMap } from "./index.svelte_svelte_type_style_lang.js";
const LinearProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer",
    "getElement"
  ]);
  let $closedStore, $$unsubscribe_closedStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { indeterminate = false } = $$props;
  let { closed = false } = $$props;
  let { progress = 0 } = $$props;
  let { buffer = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let internalStyles = {};
  let bufferBarStyles = {};
  let primaryBarStyles = {};
  let context = getContext("SMUI:linear-progress:context");
  let closedStore = getContext("SMUI:linear-progress:closed");
  $$unsubscribe_closedStore = subscribe(closedStore, (value) => $closedStore = value);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.closed === void 0 && $$bindings.closed && closed !== void 0)
    $$bindings.closed(closed);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.buffer === void 0 && $$bindings.buffer && buffer !== void 0)
    $$bindings.buffer(buffer);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (closedStore) {
      set_store_value(closedStore, $closedStore = closed, $closedStore);
    }
  }
  $$unsubscribe_closedStore();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-linear-progress": true,
          "mdc-linear-progress--indeterminate": indeterminate,
          "mdc-linear-progress--closed": closed,
          "mdc-data-table__linear-progress": context === "data-table",
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      { role: "progressbar" },
      {
        "aria-valuemin": escape_attribute_value(0)
      },
      {
        "aria-valuemax": escape_attribute_value(1)
      },
      {
        "aria-valuenow": escape_attribute_value(indeterminate ? void 0 : progress)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"${add_attribute("style", Object.entries(bufferBarStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}></div>
    <div class="mdc-linear-progress__buffer-dots"></div></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"${add_attribute("style", Object.entries(primaryBarStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}><span class="mdc-linear-progress__bar-inner"></span></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div>
</div>`;
});
export {
  LinearProgress as L
};
