import { c as create_ssr_component, a as each, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index-7340f048.js";
var options = [
  {
    id: 1,
    icon: "../../images/icon-work.svg",
    title: "Work",
    color: "--Light-red-work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    id: 2,
    icon: "../../images/icon-play.svg",
    title: "Play",
    color: "--Soft-blue",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    id: 3,
    icon: "../../images/icon-study.svg",
    title: "Study",
    color: "--Light-red-study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    id: 4,
    icon: "../../images/icon-exercise.svg",
    title: "Exercise",
    color: "--Lime-green",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    id: 5,
    icon: "../../images/icon-social.svg",
    title: "Social",
    color: "--Violet",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    id: 6,
    icon: "../../images/icon-self-care.svg",
    title: "Self Care",
    color: "--Soft-orange",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
];
var Box_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".box.svelte-1ykpd30.svelte-1ykpd30{display:grid;grid-template-rows:repeat(3, 1fr);border-radius:1.175rem;height:15rem;grid-row:span 2}.head.svelte-1ykpd30.svelte-1ykpd30{display:grid;grid-template-columns:repeat(1, 1fr);justify-items:end;border-radius:1.175rem 1.175rem 0 0;height:5rem}.head.svelte-1ykpd30 img.svelte-1ykpd30{object-fit:none;margin-right:10px}.body.svelte-1ykpd30.svelte-1ykpd30{grid-row:2/-1;display:grid;grid-template-rows:repeat(3, 1fr);align-items:center;border-radius:1.175rem;background:var(--Dark-blue);margin-top:-1.5rem;padding:1rem}.body-title.svelte-1ykpd30.svelte-1ykpd30{display:grid;justify-content:space-between}button.svelte-1ykpd30.svelte-1ykpd30{grid-column:2/3}p.svelte-1ykpd30.svelte-1ykpd30{color:var(--Desaturated-blue)}@media(max-width: 591px){h3.svelte-1ykpd30.svelte-1ykpd30{font-size:2.2rem;grid-row:2/3}p.svelte-1ykpd30.svelte-1ykpd30{grid-row:2/3}.box.svelte-1ykpd30.svelte-1ykpd30{height:11rem}.body.svelte-1ykpd30.svelte-1ykpd30{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);align-items:center;margin-top:-2.5rem}.body-title.svelte-1ykpd30.svelte-1ykpd30{grid-column:span 2}}",
  map: null
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "daily" } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$2);
  return `${each(options, (option) => {
    return `<section class="${"box svelte-1ykpd30"}"><div class="${"head-" + escape(option.title) + " head svelte-1ykpd30"}" style="${"background: var(" + escape(option.color) + ");"}"><img${add_attribute("src", option.icon, 0)}${add_attribute("alt", `${option.title} ${option.id}`, 0)} class="${"svelte-1ykpd30"}"></div>
		<div class="${"body-" + escape(option.title) + " body svelte-1ykpd30"}"><div class="${"body-title svelte-1ykpd30"}"><h2>${escape(option.title)}</h2>
				<button class="${"svelte-1ykpd30"}"><img src="${"../../images/icon-ellipsis.svg"}" alt="${"ellipsis"}" class="${"svelte-1ykpd30"}"></button></div>
			${mode === "daily" ? `<h3 class="${"svelte-1ykpd30"}">${escape(option.timeframes.daily.current)}hrs</h3>
				<p class="${"svelte-1ykpd30"}">Yesterday - ${escape(option.timeframes.daily.previous)}</p>` : `${mode === "weekly" ? `<h3 class="${"svelte-1ykpd30"}">${escape(option.timeframes.weekly.current)}hrs</h3>
				<p class="${"svelte-1ykpd30"}">Last week - ${escape(option.timeframes.weekly.previous)}</p>` : `${mode === "monthy" ? `<h3 class="${"svelte-1ykpd30"}">${escape(option.timeframes.monthly.current)}hrs</h3>
				<p class="${"svelte-1ykpd30"}">Last month - ${escape(option.timeframes.monthly.previous)}</p>` : ``}`}`}</div>
	</section>`;
  })}`;
});
var User_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-4xduw0.svelte-4xduw0{line-height:1}.container.svelte-4xduw0.svelte-4xduw0{max-width:1440px;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(300px, 300px));grid-template-rows:repeat(4, 1fr);justify-content:center}.user-box.svelte-4xduw0.svelte-4xduw0{grid-row:1/5;display:grid;background:var(--Dark-blue);border-radius:1.175rem}.user-head.svelte-4xduw0.svelte-4xduw0{display:grid;background:var(--Blue);border-radius:1.175rem;padding:2rem}.user-head.svelte-4xduw0 img.svelte-4xduw0{border:3px solid white;border-radius:100vh;height:6rem;width:6rem}.user-name.svelte-4xduw0.svelte-4xduw0{grid-row:2/3}.user-name.svelte-4xduw0 h1.svelte-4xduw0{padding-top:1rem}.user-body.svelte-4xduw0.svelte-4xduw0{display:grid;align-items:center}.user-body.svelte-4xduw0 ol.svelte-4xduw0{align-content:center;padding-left:1rem}.user-body.svelte-4xduw0 ol li.svelte-4xduw0{padding:0.225rem 0}@media(max-width: 591px){h1.svelte-4xduw0.svelte-4xduw0{font-size:1.6rem}p.svelte-4xduw0.svelte-4xduw0{font-size:0.8rem}.user-head.svelte-4xduw0.svelte-4xduw0{padding:1rem 0.6rem;grid-template-columns:repeat(auto, 1fr);align-items:center}.user-name.svelte-4xduw0.svelte-4xduw0{grid-row:1/2;grid-column:2/3}.user-head.svelte-4xduw0 img.svelte-4xduw0{height:4rem;width:4rem}.user-body.svelte-4xduw0 ol.svelte-4xduw0{display:grid;grid-template-columns:repeat(3, 1fr);padding:2rem 0.5rem;justify-items:center}}",
  map: null
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "daily" } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$1);
  return `<section class="${"container svelte-4xduw0"}"><div class="${"user-box svelte-4xduw0"}"><div class="${"user-head svelte-4xduw0"}"><img src="${"../../images/image-jeremy.png"}" alt="${""}" class="${"svelte-4xduw0"}">
			<div class="${"user-name svelte-4xduw0"}"><p class="${"svelte-4xduw0"}">Report for</p>
				<h1 class="${"svelte-4xduw0"}">Jeremy Robson</h1></div></div>
		<div class="${"user-body svelte-4xduw0"}"><ol class="${"svelte-4xduw0"}"><li class="${"svelte-4xduw0"}"><button>Daily</button></li>
				<li class="${"svelte-4xduw0"}"><button>Weekly</button></li>
				<li class="${"svelte-4xduw0"}"><button>Monthly</button></li></ol></div></div>
	${validate_component(Box, "Box").$$render($$result, { mode }, {}, {})}
</section>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-3ej48y{display:grid;min-height:100vh;min-width:100vw;grid-template-columns:repeat(auto-fill, minmax(300px, 1440px));justify-content:center;align-content:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"main svelte-3ej48y"}"><div class="${"user"}">${validate_component(User, "User").$$render($$result, {}, {}, {})}</div>
</main>`;
});
export { Routes as default };
