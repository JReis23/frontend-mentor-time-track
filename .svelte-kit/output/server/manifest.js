export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/favicon-32x32.png","images/icon-ellipsis.svg","images/icon-exercise.svg","images/icon-play.svg","images/icon-self-care.svg","images/icon-social.svg","images/icon-study.svg","images/icon-work.svg","images/image-jeremy.png"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-d635df1e.js","js":["start-d635df1e.js","chunks/vendor-1b18a9de.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
