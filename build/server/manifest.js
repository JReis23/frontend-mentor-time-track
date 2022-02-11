export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/favicon-32x32.png","images/icon-ellipsis.svg","images/icon-exercise.svg","images/icon-play.svg","images/icon-self-care.svg","images/icon-social.svg","images/icon-study.svg","images/icon-work.svg","images/image-jeremy.png"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-630d895c.js","js":["start-630d895c.js","chunks/vendor-21c2ed5f.js"],"css":[]},
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
