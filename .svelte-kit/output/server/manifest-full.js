export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Carrier Pigeon.png","Discord.png","Dynasty.png","Email.png","League Page.png","Phone.png","Rebuild.png","Rookies.png","Sleeper.png","Text.png","Vets.png","WhatsApp.png","Win Now.png","awards/champion.png","awards/division.png","awards/generic.png","awards/record-1.png","awards/record-2.png","awards/record-3.png","awards/second.png","awards/third.png","awards/toilet.png","awayDivider.jpg","badge.png","banner.png","deflated-football.png","division-1-banner.png","division-2-banner.png","dropdown.png","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","green.png","helmets.png","homeDivider.jpg","laurel.png","managers/everyone.png","managers/question.jpg","manifest.json","medal.png","newsIcons/DynastyFF.png","newsIcons/dynastyLeague.png","newsIcons/dynastyNerds.jpeg","newsIcons/fantasyfootball.png","newsIcons/ffballers.jpeg","newsIcons/ftn.png","newsIcons/nbcSportsEdge.jpeg","podium.png","pwa/apple-icon-180.png","pwa/apple-splash-1125-2436.jpg","pwa/apple-splash-1136-640.jpg","pwa/apple-splash-1170-2532.jpg","pwa/apple-splash-1242-2208.jpg","pwa/apple-splash-1242-2688.jpg","pwa/apple-splash-1284-2778.jpg","pwa/apple-splash-1334-750.jpg","pwa/apple-splash-1536-2048.jpg","pwa/apple-splash-1620-2160.jpg","pwa/apple-splash-1668-2224.jpg","pwa/apple-splash-1668-2388.jpg","pwa/apple-splash-1792-828.jpg","pwa/apple-splash-2048-1536.jpg","pwa/apple-splash-2048-2732.jpg","pwa/apple-splash-2160-1620.jpg","pwa/apple-splash-2208-1242.jpg","pwa/apple-splash-2224-1668.jpg","pwa/apple-splash-2388-1668.jpg","pwa/apple-splash-2436-1125.jpg","pwa/apple-splash-2532-1170.jpg","pwa/apple-splash-2688-1242.jpg","pwa/apple-splash-2732-2048.jpg","pwa/apple-splash-2778-1284.jpg","pwa/apple-splash-640-1136.jpg","pwa/apple-splash-750-1334.jpg","pwa/apple-splash-828-1792.jpg","pwa/manifest-icon-192.png","pwa/manifest-icon-512.png","red.png","retired.png","serious-logo-no-bg.png","smui-dark.css","smui.css","tiedDivider.jpg","toilet-banner.png","toilet-bowl-2.png","trophy.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".xml":"application/xml",".svg":"image/svg+xml",".json":"application/json",".jpeg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.0897cbed.js","app":"_app/immutable/entry/app.199630cd.js","imports":["_app/immutable/entry/start.0897cbed.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/entry/app.199630cd.js","_app/immutable/chunks/index.78a9f0bb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/addBlogComments/[id]",
				pattern: /^\/api\/addBlogComments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/addBlogComments/_id_/_server.js'))
			},
			{
				id: "/api/checkGlobalVersion",
				pattern: /^\/api\/checkGlobalVersion\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/checkGlobalVersion/_server.js'))
			},
			{
				id: "/api/checkVersion",
				pattern: /^\/api\/checkVersion\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/checkVersion/_server.js'))
			},
			{
				id: "/api/fetch_players_info",
				pattern: /^\/api\/fetch_players_info\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/fetch_players_info/_server.js'))
			},
			{
				id: "/api/fetch_serverside_news",
				pattern: /^\/api\/fetch_serverside_news\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/fetch_serverside_news/_server.js'))
			},
			{
				id: "/api/getBlogComments/[id]",
				pattern: /^\/api\/getBlogComments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/getBlogComments/_id_/_server.js'))
			},
			{
				id: "/api/getBlogPosts",
				pattern: /^\/api\/getBlogPosts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/getBlogPosts/_server.js'))
			},
			{
				id: "/awards",
				pattern: /^\/awards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/constitution",
				pattern: /^\/constitution\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/drafts",
				pattern: /^\/drafts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/managers",
				pattern: /^\/managers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/manager",
				pattern: /^\/manager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/matchups",
				pattern: /^\/matchups\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/records",
				pattern: /^\/records\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/rivalry",
				pattern: /^\/rivalry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/rosters",
				pattern: /^\/rosters\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/standings",
				pattern: /^\/standings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/transactions",
				pattern: /^\/transactions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
