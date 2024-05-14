import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { q as get_store_value } from "../../../chunks/index3.js";
import { n as news } from "../../../chunks/stores.js";
import "../../../chunks/records.js";
const REDDIT_DYNASTY = "https://www.reddit.com/r/DynastyFF/new.json";
const SERVER_API = "/api/fetch_serverside_news";
const getNews = async (servFetch, bypass = false) => {
  if (get_store_value(news)[0] && !bypass) {
    return { articles: get_store_value(news), fresh: false };
  }
  const smartFetch = servFetch ?? fetch;
  const newsSources = [
    smartFetch(SERVER_API, { compress: true })
  ];
  {
    newsSources.push(getFeed(REDDIT_DYNASTY, processReddit));
  }
  const [serverRes, reddit] = await waitForAll(...newsSources).catch((err) => {
    console.error(err);
  });
  const serverData = await serverRes.json().catch((err) => {
    console.error(err);
  });
  const articles = [...reddit, ...serverData].sort((a, b) => a.ts < b.ts ? 1 : -1);
  news.update(() => articles);
  return { articles, fresh: true };
};
const getFeed = async (feed, callback) => {
  const res = await fetch(feed, { compress: true }).catch((err) => {
    console.error(err);
  });
  const data = await res.json().catch((err) => {
    console.error(err);
  });
  if (res.ok && data && data.data) {
    return callback(data.data);
  } else {
    console.error(data);
    return [];
  }
};
const processReddit = (rawArticles) => {
  const bannedAuthors = [
    "AutoModerator",
    "FFBot",
    "Brookskbrothers",
    "FTAKJ"
  ];
  const bannedIcons = [
    "",
    "self",
    "thumbnail",
    "default"
  ];
  let finalArticles = [];
  const children = rawArticles.children;
  for (const rawArticle of children) {
    const data = rawArticle.data;
    if (bannedAuthors.includes(data.author)) {
      continue;
    }
    const ts = data.created_utc * 1e3;
    const d = new Date(ts);
    const icon = !bannedIcons.includes(data.thumbnail) ? data.thumbnail : `newsIcons/${data.subreddit}.png`;
    const date = stringDate(d);
    let article = `<a href="${data.url}" class="body-link">${data.url}</a>`;
    if (data.selftext_html) {
      article = decodeHTML(data.selftext_html);
    }
    if (data.secure_media_embed?.content) {
      decodeHTML(data.secure_media_embed.content);
    }
    finalArticles.push({
      title: data.title,
      article,
      link: `https://www.reddit.com${data.permalink}`,
      author: `${data.subreddit_name_prefixed} - u/${data.author}`,
      ts,
      date,
      icon
    });
  }
  return finalArticles;
};
var htmlEntities = {
  nbsp: " ",
  cent: "¢",
  pound: "£",
  yen: "¥",
  euro: "€",
  copy: "©",
  reg: "®",
  lt: "<",
  gt: ">",
  quot: '"',
  amp: "&",
  apos: "'"
};
function decodeHTML(str) {
  return str.replace(/\&([^;]+);/g, function(entity, entityCode) {
    let match;
    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
}
const stringDate = (d) => {
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours() % 12}:${(d.getMinutes() < 10 ? "0" : "") + d.getMinutes()}${d.getHours() / 12 >= 1 ? "PM" : "AM"}`;
};
async function load({ fetch: fetch2 }) {
  const articlesData = getNews(fetch2);
  return {
    articlesData
  };
}
export {
  load
};
