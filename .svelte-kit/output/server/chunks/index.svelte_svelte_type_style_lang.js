import { t as listen, u as bubble, w as prevent_default, x as stop_propagation, c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, d as escape_object, f as add_attribute, h as getContext, s as setContext, o as onDestroy, v as validate_component, i as globals, m as missing_component, e as escape_attribute_value } from "./index3.js";
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const Div$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1 } = globals;
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            [smuiClass]: true,
            ...smuiClassMap
          })
        },
        props,
        $$restProps,
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
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
const A$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<button${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const H1$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h1${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h1>`;
});
const H2$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h2${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h2>`;
});
const H3$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h3${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h3>`;
});
const H5$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h5${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h5>`;
});
const H6$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h6${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h6>`;
});
const Hr$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<hr${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>
${slots.default ? slots.default({}) : ``}`;
});
const Li$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<li${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</li>`;
});
const Nav$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<nav${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</nav>`;
});
const Span$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Ul$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<ul${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</ul>`;
});
const A = A$1;
const Button = Button$1;
const Div = Div$1;
const H1 = H1$1;
const H2 = H2$1;
const H3 = H3$1;
const H5 = H5$1;
const H6 = H6$1;
const Hr = Hr$1;
const Li = Li$1;
const Nav = Nav$1;
const Span = Span$1;
const Ul = Ul$1;
classAdderBuilder({
  class: "mdc-drawer-app-content",
  component: Div
});
const Content$1 = classAdderBuilder({
  class: "mdc-drawer__content",
  component: Div
});
const Header = classAdderBuilder({
  class: "mdc-drawer__header",
  component: Div
});
const Title$1 = classAdderBuilder({
  class: "mdc-drawer__title",
  component: H1
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  component: H2
});
const Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  component: Div
});
const Subheader = classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  component: H3
});
const NavSmall_svelte_svelte_type_style_lang = "";
const NavLarge_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$6 = "";
const Footer_svelte_svelte_type_style_lang = "";
const Content = classAdderBuilder({
  class: "smui-paper__content",
  component: Div
});
const Title = classAdderBuilder({
  class: "smui-paper__title",
  component: H5
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  component: H6
});
const SingleNews_svelte_svelte_type_style_lang = "";
const Pagination_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$5 = "";
const Resources_svelte_svelte_type_style_lang = "";
const Awards_svelte_svelte_type_style_lang = "";
const RosterRow_svelte_svelte_type_style_lang = "";
const Roster_svelte_svelte_type_style_lang = "";
const RosterSorter_svelte_svelte_type_style_lang = "";
const Rosters_svelte_svelte_type_style_lang = "";
const Matchup_svelte_svelte_type_style_lang = "";
const TransactionMove_svelte_svelte_type_style_lang = "";
const TradeTransaction_svelte_svelte_type_style_lang = "";
const ComparissonBar_svelte_svelte_type_style_lang = "";
const ManagerSelectors_svelte_svelte_type_style_lang = "";
const RivalryControls_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$4 = "";
const WaiverTransaction_svelte_svelte_type_style_lang = "";
const Transactions_svelte_svelte_type_style_lang = "";
const HelperLine = classAdderBuilder({
  class: "mdc-text-field-helper-line",
  component: Div
});
const Prefix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  component: Span
});
const Suffix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  component: Span
});
const TransactionsPage_svelte_svelte_type_style_lang = "";
const MatchupWeeks_svelte_svelte_type_style_lang = "";
const BracketsColumn_svelte_svelte_type_style_lang = "";
const Brackets_svelte_svelte_type_style_lang = "";
const MatchupsAndBrackets_svelte_svelte_type_style_lang = "";
const DraftRow_svelte_svelte_type_style_lang = "";
const Draft_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$3 = "";
const RecordTeam_svelte_svelte_type_style_lang = "";
const Bar_svelte_svelte_type_style_lang = "";
const BarChart_svelte_svelte_type_style_lang = "";
const RecordsAndRankings_svelte_svelte_type_style_lang = "";
const PerSeasonRecords_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$2 = "";
const ManagerFantasyInfo_svelte_svelte_type_style_lang = "";
const ManagerAwards_svelte_svelte_type_style_lang = "";
const Manager_svelte_svelte_type_style_lang = "";
const ManagerRow_svelte_svelte_type_style_lang = "";
const AllManagers_svelte_svelte_type_style_lang = "";
const PowerRankingsDisplay_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang$1 = "";
const AuthorAndDate_svelte_svelte_type_style_lang = "";
const Post_svelte_svelte_type_style_lang = "";
const HomePost_svelte_svelte_type_style_lang = "";
const CreateComment_svelte_svelte_type_style_lang = "";
classAdderBuilder({
  class: "mdc-dialog__header",
  component: Div,
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
classAdderBuilder({
  class: "mdc-dialog__title",
  component: H2
});
classAdderBuilder({
  class: "mdc-dialog__content",
  component: Div
});
classAdderBuilder({
  class: "mdc-dialog__actions",
  component: Div,
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
const Comments_svelte_svelte_type_style_lang = "";
const FullPost_svelte_svelte_type_style_lang = "";
const Posts_svelte_svelte_type_style_lang = "";
const Standing_svelte_svelte_type_style_lang = "";
const index_svelte_svelte_type_style_lang = "";
export {
  A,
  Button as B,
  Content$1 as C,
  Header as H,
  Li as L,
  Nav as N,
  Prefix as P,
  Subheader as S,
  Title$1 as T,
  Ul as U,
  Text as a,
  Title as b,
  classMap as c,
  Content as d,
  Span as e,
  forwardEventsBuilder as f,
  Hr as g,
  Span$1 as h,
  Suffix as i,
  HelperLine as j
};
