import { c as create_ssr_component, v as validate_component, k as each, j as escape } from "./index3.js";
import { I as Icon } from "./index4.js";
import "./index.svelte_svelte_type_style_lang.js";
const css = {
  code: ".button{color:#51B59A;cursor:pointer;vertical-align:sub}.button:hover{color:#51B59A}.paginationBar.svelte-19qrch9{display:flex;justify-content:space-between;width:100%;max-width:550px;margin:10px auto;text-align:center}.pg.svelte-19qrch9{font-size:1.2em;padding:.4em;color:#aaa}.spacer.svelte-19qrch9{padding:.4em 0;cursor:default;user-select:none}.dest.svelte-19qrch9{cursor:pointer}.dest.svelte-19qrch9:hover{color:#51B59A}.selected.svelte-19qrch9{color:#51B59A;cursor:default;user-select:none}.placeholder.svelte-19qrch9{width:24px}.totals.svelte-19qrch9{font-style:italic;cursor:default;user-select:none;color:#bbb;font-size:0.8em;text-align:center}",
  map: null
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totPages;
  let { total, perPage, page, target, scroll = true } = $$props;
  let pageLabels = [];
  const computePages = (curPage, pages, iW) => {
    let tempPageLabels = [];
    let before = false;
    let after = false;
    const limit = iW && iW > 380 ? 3 : 2;
    for (let i = 0; i < pages; i++) {
      if (i == 0 || i == pages - 1 && (!iW || iW > 300) || curPage - limit < i && i < curPage + limit) {
        tempPageLabels.push(i + 1);
      } else if (!before && curPage - limit < i && (!iW || iW > 300)) {
        before = true;
        tempPageLabels.push("...");
      } else if (!after && i < curPage + limit) {
        after = true;
        tempPageLabels.push("...");
      }
    }
    pageLabels = tempPageLabels;
  };
  let innerWidth;
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
    $$bindings.perPage(perPage);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.scroll === void 0 && $$bindings.scroll && scroll !== void 0)
    $$bindings.scroll(scroll);
  $$result.css.add(css);
  totPages = Math.ceil(total / perPage);
  {
    computePages(page, totPages, innerWidth);
  }
  return `


${total > 0 && totPages > 1 ? `<div class="paginationBar svelte-19qrch9">${page > 0 ? `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons button" }, {}, {
    default: () => {
      return `chevron_left`;
    }
  })}` : `<span class="placeholder svelte-19qrch9"></span>`}
        <div class="numbers">${each(pageLabels, (pageLabel) => {
    return `${pageLabel == page + 1 ? `<span class="selected pg svelte-19qrch9">${escape(pageLabel)}</span>` : `${pageLabel == "..." ? `<span class="pg spacer svelte-19qrch9">${escape(pageLabel)}</span>` : `<span class="dest pg svelte-19qrch9">${escape(pageLabel)}</span>`}`}`;
  })}</div>
        ${page < totPages - 1 ? `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons button" }, {}, {
    default: () => {
      return `chevron_right`;
    }
  })}` : `<span class="placeholder svelte-19qrch9"></span>`}</div>
    <div class="totals svelte-19qrch9">${escape(page * perPage + 1)} - ${escape(page + 1 == totPages ? total : (page + 1) * perPage)} of ${escape(total)}</div>` : ``}`;
});
export {
  Pagination as P
};
