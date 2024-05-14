import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, h as getContext, l as subscribe, s as setContext, o as onDestroy, y as set_store_value, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, z as compute_slots, j as escape } from "./index3.js";
import { w as writable } from "./index2.js";
import { f as forwardEventsBuilder, c as classMap } from "./index.svelte_svelte_type_style_lang.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  let $progressClosed, $$unsubscribe_progressClosed;
  let $sortDirectionStore, $$unsubscribe_sortDirectionStore;
  let $sortStore, $$unsubscribe_sortStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { sortable = false } = $$props;
  let { sort = null } = $$props;
  let { sortDirection = "ascending" } = $$props;
  let { sortAscendingAriaLabel = "sorted, ascending" } = $$props;
  let { sortDescendingAriaLabel = "sorted, descending" } = $$props;
  let { container$use = [] } = $$props;
  let { container$class = "" } = $$props;
  let { table$use = [] } = $$props;
  let { table$class = "" } = $$props;
  let element;
  let instance;
  let container;
  let internalClasses = {};
  let progressIndicatorStyles = { height: "auto", top: "initial" };
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let progressClosed = writable(false);
  $$unsubscribe_progressClosed = subscribe(progressClosed, (value) => $progressClosed = value);
  let sortStore = writable(sort);
  $$unsubscribe_sortStore = subscribe(sortStore, (value) => $sortStore = value);
  let sortDirectionStore = writable(sortDirection);
  $$unsubscribe_sortDirectionStore = subscribe(sortDirectionStore, (value) => $sortDirectionStore = value);
  setContext("SMUI:checkbox:context", "data-table");
  setContext("SMUI:linear-progress:context", "data-table");
  setContext("SMUI:linear-progress:closed", progressClosed);
  setContext("SMUI:data-table:sortable", sortable);
  setContext("SMUI:data-table:sort", sortStore);
  setContext("SMUI:data-table:sortDirection", sortDirectionStore);
  setContext("SMUI:data-table:sortAscendingAriaLabel", sortAscendingAriaLabel);
  setContext("SMUI:data-table:sortDescendingAriaLabel", sortDescendingAriaLabel);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousProgressClosed = void 0;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function layout() {
    return instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.sortAscendingAriaLabel === void 0 && $$bindings.sortAscendingAriaLabel && sortAscendingAriaLabel !== void 0)
    $$bindings.sortAscendingAriaLabel(sortAscendingAriaLabel);
  if ($$props.sortDescendingAriaLabel === void 0 && $$bindings.sortDescendingAriaLabel && sortDescendingAriaLabel !== void 0)
    $$bindings.sortDescendingAriaLabel(sortDescendingAriaLabel);
  if ($$props.container$use === void 0 && $$bindings.container$use && container$use !== void 0)
    $$bindings.container$use(container$use);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.table$use === void 0 && $$bindings.table$use && table$use !== void 0)
    $$bindings.table$use(table$use);
  if ($$props.table$class === void 0 && $$bindings.table$class && table$class !== void 0)
    $$bindings.table$class(table$class);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(sortStore, $sortStore = sort, $sortStore);
  set_store_value(sortDirectionStore, $sortDirectionStore = sortDirection, $sortDirectionStore);
  {
    if ($$slots.progress && instance && previousProgressClosed !== $progressClosed) {
      previousProgressClosed = $progressClosed;
      if ($progressClosed) {
        instance.hideProgress();
      } else {
        instance.showProgress();
      }
    }
  }
  $$unsubscribe_progressClosed();
  $$unsubscribe_sortDirectionStore();
  $$unsubscribe_sortStore();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-data-table": true,
          "mdc-data-table--sticky-header": stickyHeader,
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["container$", "table$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [container$class]: true,
          "mdc-data-table__table-container": true
        }))
      },
      escape_object(prefixFilter($$restProps, "container$"))
    ],
    {}
  )}${add_attribute("this", container, 0)}><table${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [table$class]: true,
          "mdc-data-table__table": true
        }))
      },
      escape_object(prefixFilter($$restProps, "table$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>

  ${$$slots.progress ? `<div class="mdc-data-table__progress-indicator"${add_attribute("style", Object.entries(progressIndicatorStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}><div class="mdc-data-table__scrim"></div>
      ${slots.progress ? slots.progress({}) : ``}</div>` : ``}

  ${slots.paginate ? slots.paginate({}) : ``}
</div>`;
});
const Head$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let element;
  setContext("SMUI:data-table:row:header", true);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<thead${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const Body$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  setContext("SMUI:data-table:row:header", false);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<tbody${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-data-table__content": true
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
let counter$1 = 0;
const Row$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "rowId", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { rowId = "SMUI-data-table-row-" + counter$1++ } = $$props;
  let element;
  let checkbox = void 0;
  let internalClasses = {};
  let internalAttrs = {};
  let header = getContext("SMUI:data-table:row:header");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.rowId === void 0 && $$bindings.rowId && rowId !== void 0)
    $$bindings.rowId(rowId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<tr${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-data-table__header-row": header,
          "mdc-data-table__row": !header,
          "mdc-data-table__row--selected": !header && checkbox && checkbox.checked,
          ...internalClasses
        }))
      },
      {
        "aria-selected": escape_attribute_value(void 0)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</tr>`;
});
let counter = 0;
const Cell$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"]);
  let $sort, $$unsubscribe_sort;
  let $sortDirection, $$unsubscribe_sortDirection;
  forwardEventsBuilder(get_current_component());
  let header = getContext("SMUI:data-table:row:header");
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { numeric = false } = $$props;
  let { checkbox = false } = $$props;
  let { columnId = header ? "SMUI-data-table-column-" + counter++ : "SMUI-data-table-unused" } = $$props;
  let { sortable = getContext("SMUI:data-table:sortable") } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let sort = getContext("SMUI:data-table:sort");
  $$unsubscribe_sort = subscribe(sort, (value) => $sort = value);
  let sortDirection = getContext("SMUI:data-table:sortDirection");
  $$unsubscribe_sortDirection = subscribe(sortDirection, (value) => $sortDirection = value);
  let sortAscendingAriaLabel = getContext("SMUI:data-table:sortAscendingAriaLabel");
  let sortDescendingAriaLabel = getContext("SMUI:data-table:sortDescendingAriaLabel");
  if (sortable) {
    setContext("SMUI:label:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:aria-describedby", columnId + "-status-label");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.numeric === void 0 && $$bindings.numeric && numeric !== void 0)
    $$bindings.numeric(numeric);
  if ($$props.checkbox === void 0 && $$bindings.checkbox && checkbox !== void 0)
    $$bindings.checkbox(checkbox);
  if ($$props.columnId === void 0 && $$bindings.columnId && columnId !== void 0)
    $$bindings.columnId(columnId);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_sort();
  $$unsubscribe_sortDirection();
  return `${header ? `<th${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-data-table__header-cell": true,
          "mdc-data-table__header-cell--numeric": numeric,
          "mdc-data-table__header-cell--checkbox": checkbox,
          "mdc-data-table__header-cell--with-sort": sortable,
          "mdc-data-table__header-cell--sorted": sortable && $sort === columnId,
          ...internalClasses
        }))
      },
      { role: "columnheader" },
      { scope: "col" },
      {
        "data-column-id": escape_attribute_value(columnId)
      },
      {
        "aria-sort": escape_attribute_value(sortable ? $sort === columnId ? $sortDirection : "none" : void 0)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${sortable ? `
      <div class="mdc-data-table__header-cell-wrapper">${slots.default ? slots.default({}) : ``}
        <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="${escape(columnId, true) + "-status-label"}">${escape($sort === columnId ? $sortDirection === "ascending" ? sortAscendingAriaLabel : sortDescendingAriaLabel : "")}</div></div>
    ` : `${slots.default ? slots.default({}) : ``}`}</th>` : `<td${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-data-table__cell": true,
          "mdc-data-table__cell--numeric": numeric,
          "mdc-data-table__cell--checkbox": checkbox,
          ...internalClasses
        }))
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const Head = Head$1;
const Body = Body$1;
const Row = Row$1;
const Cell = Cell$1;
export {
  Body as B,
  Cell as C,
  DataTable as D,
  Head as H,
  Row as R
};
