import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, j as escape, k as each, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import { f as forwardEventsBuilder, c as classMap, b as Title, d as Content, a as Text } from "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import { P as Pagination } from "../../../chunks/Pagination.js";
import { L as List, I as Item, G as Graphic, S as Separator } from "../../../chunks/index5.js";
import { b as dynasty } from "../../../chunks/leagueInfo.js";
import "fuzzyjs";
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-paper": true,
          "smui-paper--raised": variant === "raised",
          "smui-paper--unelevated": variant === "unelevated",
          "smui-paper--outlined": variant === "outlined",
          ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
          "smui-paper--rounded": !square,
          ["smui-paper--color-" + color]: color !== "default",
          "smui-paper-transition": transition
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const css$3 = {
  code: ".card-media-square{background-size:600px}.article-title{display:flex;margin:1em 0 0.5em}.title-link.svelte-z26sd2{font-weight:500;color:var(--blueOne);text-decoration:none;text-align:center;max-height:96px;margin:0 auto;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical}.title-link.svelte-z26sd2:hover{color:#920505}.body.svelte-z26sd2{display:flex;margin:2em 0 1em}.icon.svelte-z26sd2{height:40px;width:auto}.body-text.svelte-z26sd2{position:relative;flex-grow:1;min-width:0;max-height:480px;margin:0 auto;overflow:hidden}.body-text.svelte-z26sd2::after{content:'';position:absolute;width:100%;height:60px;top:420px;background:-webkit-linear-gradient(\n            var(--fadeOne),\n            var(--fadeTwo),\n            var(--fadeThree),\n            var(--fadeFour)\n        );background-image:-moz-linear-gradient(\n            var(--fadeOne),\n            var(--fadeTwo),\n            var(--fadeThree),\n            var(--fadeFour)\n        );background-image:-o-linear-gradient(\n            var(--fadeOne),\n            var(--fadeTwo),\n            var(--fadeThree),\n            var(--fadeFour)\n        );background-image:linear-gradient(\n            var(--fadeOne),\n            var(--fadeTwo),\n            var(--fadeThree),\n            var(--fadeFour)\n        );background-image:-ms-linear-gradient(\n            var(--fadeOne),\n            var(--fadeTwo),\n            var(--fadeThree),\n            var(--fadeFour)\n        )}.body-text p{margin-top:0}.body-text a{margin-top:0;word-break:break-word}.body-text blockquote{margin-top:0}.body-text div{overflow-x:scroll}.date.svelte-z26sd2{font-style:italic;color:#888}",
  map: null
};
const SingleNews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  $$result.css.add(css$3);
  return `${validate_component(Paper, "Paper").$$render($$result, { class: "article", elevation: "3" }, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render($$result, { class: "article-title" }, {}, {
        default: () => {
          return `<img class="icon svelte-z26sd2"${add_attribute("src", article.icon, 0)} alt="article thumbnial">
        ${article.link ? `<a${add_attribute("href", article.link, 0)} target="_blank" class="title-link svelte-z26sd2">${escape(article.title)}</a>` : `${escape(article.title)}`}`;
        }
      })}
    ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="body svelte-z26sd2"><div class="body-text svelte-z26sd2"><!-- HTML_TAG_START -->${article.article}<!-- HTML_TAG_END --></div></div>
        <hr>
        ${article.author ? `<span class="author">${escape(article.author)}</span>` : ``}
        <span class="date svelte-z26sd2">${escape(article.date)}</span>`;
        }
      })}`;
    }
  })}`;
});
const css$2 = {
  code: ".pageBody.svelte-csdux7{position:relative;z-index:1;margin-bottom:60px}h4.svelte-csdux7{text-align:center}.articles.svelte-csdux7{width:85%;margin:0 auto;max-width:800px}.article{margin:20px auto}",
  map: null
};
const perPage = 10;
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let { news } = $$props;
  let { articles, fresh } = news;
  let total = 0;
  let page = 0;
  let displayArticles = [];
  const calculateTotal = (a) => {
    total = a.length;
  };
  const changePage = (dest) => {
    const start = dest * perPage;
    const end = (dest + 1) * perPage;
    displayArticles = articles.slice(start, end);
    page = dest;
  };
  let el;
  if ($$props.news === void 0 && $$bindings.news && news !== void 0)
    $$bindings.news(news);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      calculateTotal(articles);
    }
    {
      changePage(page);
    }
    top = 0;
    $$rendered = `<div class="pageBody svelte-csdux7"><div class="banner"${add_attribute("this", el, 0)}><h4 class="svelte-csdux7">Fantasy Football News and Updates</h4></div>

    <div class="articles svelte-csdux7">${each(displayArticles, (article) => {
      return `${validate_component(SingleNews, "SingleNews").$$render($$result, { article }, {}, {})}`;
    })}
        ${validate_component(Pagination, "Pagination").$$render(
      $$result,
      { perPage, total, target: top, page },
      {
        page: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".pageBody.svelte-11v79lo{position:relative;z-index:1}.list{width:90%;max-width:800px;border:1px solid\n        var(--mdc-theme-text-hint-on-background, var(--d7d7d7));margin:15px auto;padding:0 !important;box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree)}.linkText{font-size:1.1em}a.svelte-11v79lo{color:var(--g555);font-size:1.1em;text-decoration:none}h4.svelte-11v79lo{text-align:center}.disclaimer.svelte-11v79lo{color:#888;text-align:center}",
  map: null
};
const Resources = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const today = /* @__PURE__ */ new Date();
  const resources = [
    {
      name: "FTN Fantasy",
      url: "https://www.ftnfantasy.com/nfl",
      icon: "insights",
      premium: true,
      separator: true
    },
    {
      name: "The Fantasy Footballers",
      url: "https://www.thefantasyfootballers.com/",
      icon: "podcasts",
      premium: true,
      separator: true
    },
    {
      name: "FantasyPros Dynasty Trade Value Chart",
      url: `https://www.fantasypros.com/${today.getFullYear()}/${today.getMonth() + 1}/fantasy-football-rankings-dynasty-trade-value-chart-${today.toLocaleString("default", { month: "long" }).toLowerCase()}-${today.getFullYear()}-update/`,
      icon: "assessment",
      premium: false,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "DynastyProcess Trade Calculator",
      url: "https://apps.dynastyprocess.com/calculator/",
      icon: "calculate",
      premium: false,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "Dynasty League Football",
      url: "https://dynastyleaguefootball.com/",
      icon: "insights",
      premium: true,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "Reddit Dynasty Fantasy Football",
      url: "https://www.reddit.com/r/DynastyFF/",
      icon: "article",
      premium: false,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "Reddit Fantasy Football",
      url: "https://www.reddit.com/r/fantasyfootball/",
      icon: "article",
      premium: false,
      separator: true,
      redraftOnly: true
    },
    {
      name: "Dynasty 101 Trade Calculator",
      url: "https://dynasty101.com/trade-calculator/",
      icon: "calculate",
      premium: false,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "Dynasty Nerds GM",
      url: "https://gm.dynastynerds.com/",
      icon: "insights",
      premium: true,
      separator: true,
      dynastyOnly: true
    },
    {
      name: "Fantasy Football Trade Analyzer",
      url: `https://fantasyfootballcalculator.com/trade-analyzer`,
      icon: "calculate",
      premium: false,
      separator: true,
      redraftOnly: true
    },
    {
      name: "Reddit FF Trade Analyzer",
      url: "https://www.reddit.com/r/TradeAnalyzerFF/",
      icon: "assessment",
      premium: false,
      separator: true
    },
    {
      name: "FantasyCalc Trade Calculator",
      url: "https://www.fantasycalc.com/trade-calculator",
      icon: "calculate",
      premium: false,
      separator: false,
      dynastyOnly: false
    }
  ];
  $$result.css.add(css$1);
  return `<div class="pageBody svelte-11v79lo"><div class="banner"><h4 class="svelte-11v79lo">Helpful Dynasty Resources</h4></div>

    ${validate_component(List, "List").$$render($$result, { class: "list", dense: true }, {}, {
    default: () => {
      return `${each(resources, (resource) => {
        return `${resource.dynastyOnly && dynasty ? `<a target="_blank"${add_attribute("href", resource.url, 0)} class="svelte-11v79lo">${validate_component(Item, "Item").$$render($$result, {}, {}, {
          default: () => {
            return `${resource.icon ? `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `${escape(resource.icon)}`;
              }
            })}` : ``}
                        ${validate_component(Text, "Text").$$render($$result, { class: "linkText" }, {}, {
              default: () => {
                return `${escape(resource.name)}${escape(resource.premium ? "*" : "")}`;
              }
            })}
                    `;
          }
        })}
                    ${resource.separator ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}
                </a>` : `${resource.redraftOnly && !dynasty ? `<a target="_blank"${add_attribute("href", resource.url, 0)} class="svelte-11v79lo">${validate_component(Item, "Item").$$render($$result, {}, {}, {
          default: () => {
            return `${resource.icon ? `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `${escape(resource.icon)}`;
              }
            })}` : ``}
                        ${validate_component(Text, "Text").$$render($$result, { class: "linkText" }, {}, {
              default: () => {
                return `${escape(resource.name)}${escape(resource.premium ? "*" : "")}`;
              }
            })}
                    `;
          }
        })}
                    ${resource.separator ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}
                </a>` : `${!resource.redraftOnly && !resource.dynastyOnly ? `<a target="_blank"${add_attribute("href", resource.url, 0)} class="svelte-11v79lo">${validate_component(Item, "Item").$$render($$result, {}, {}, {
          default: () => {
            return `${resource.icon ? `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `${escape(resource.icon)}`;
              }
            })}` : ``}
                        ${validate_component(Text, "Text").$$render($$result, { class: "linkText" }, {}, {
              default: () => {
                return `${escape(resource.name)}${escape(resource.premium ? "*" : "")}`;
              }
            })}
                    `;
          }
        })}
                    ${resource.separator ? `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}
                </a>` : ``}`}`}`;
      })}`;
    }
  })}
    <p class="disclaimer svelte-11v79lo">*Some or all content is behind a paywall</p></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-6mz26e{position:relative;z-index:1;width:85%;margin:0 auto 60px;max-width:800px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const articlesData = data.articlesData;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Resources, "Resources").$$render($$result, {}, {}, {})}

<hr>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<div class="loading svelte-6mz26e"><p>Retrieving fantasy news...</p>
		<br>
		${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
`;
    }
    return function(news) {
      return `
	
	${validate_component(News, "News").$$render($$result, { news }, {}, {})}
`;
    }(__value);
  }(articlesData)}`;
});
export {
  Page as default
};
