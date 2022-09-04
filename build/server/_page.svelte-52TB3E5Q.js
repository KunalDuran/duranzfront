import {
  add_attribute,
  create_ssr_component,
  each,
  escape,
  is_promise,
  noop,
  validate_component
} from "./chunk-WLZJ6EIJ.js";
import "./chunk-TWLJ45QX.js";

// .svelte-kit/adapter-node/entries/pages/_page.svelte.js
var DuranzNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"navbar navbar-expand-md navbar-dark bg-dark"}" aria-label="${"Fourth navbar example"}"><div class="${"container"}"><a class="${"navbar-brand"}" href="${"#/"}">Duranz</a>
      <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarsExample04"}" aria-controls="${"navbarsExample04"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>

      <div class="${"collapse navbar-collapse"}" id="${"navbarsExample04"}"><ul class="${"navbar-nav ms-auto mb-2 mb-md-0"}"><li class="${"nav-item"}"><a class="${"nav-link"}" aria-current="${"page"}" href="${"#/"}">Home</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link active"}" href="${"#/"}">Cricket</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"#/"}">Programming</a></li></ul></div></div></nav>`;
});
var DuranzStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><div class="${"d-flex justify-content-between py-4"}"><div>Player-Stats</div>
		<div>Team-Stats</div>
		<div>Batsman vs Bowler</div>
		<div>Player vs Team</div>
		<div>Team vs Team</div>
		<div>Comparison</div></div></div>`;
});
var DuranzOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { some } = $$props;
  if ($$props.some === void 0 && $$bindings.some && some !== void 0)
    $$bindings.some(some);
  return `${some.statusCode == 200 ? `<hr>
	<div class="${"py-3"}"><div class="${""}"><table class="${"table align-middle table-borderless caption-top"}"><caption class="${"text-center h1 text-dark"}">${escape(some.content[0].player_name)}</caption>
				<tbody>
					<tr><th colspan="${"2"}" class="${"text-center h5"}">Batting Stats</th></tr>
					${each(Object.entries(some.content[0].batting), ([statName, statValue]) => {
    return `<tr class="${""}"><th scope="${"row"}" class="${"col-md-8 text-center"}">${escape(statName.replace("_", " ").toUpperCase())}</th>
							<td class="${"col-md-4 text-start"}">${escape(statValue)}</td>
						</tr>`;
  })}

					
					<tr><th colspan="${"2"}" class="${"text-center h5"}">Bowling Stats</th></tr>
					${each(Object.entries(some.content[0].bowling), ([statName, statValue]) => {
    return `<tr class="${""}"><th scope="${"row"}" class="${"col-md-8 text-center"}">${escape(statName.replace("_", " ").toUpperCase())}</th>
							<td class="${"col-md-4 text-start"}">${escape(statValue)}</td>
						</tr>`;
  })}

					
					<tr><th colspan="${"2"}" class="${"text-center h5"}">Fielding Stats</th></tr>
					${each(Object.entries(some.content[0].fielding), ([statName, statValue]) => {
    return `<tr class="${""}"><th scope="${"row"}" class="${"col-md-8 text-center"}">${escape(statName.replace("_", " ").toUpperCase())}</th>
							<td class="${"col-md-4 text-start"}">${escape(statValue)}</td>
						</tr>`;
  })}</tbody></table></div></div>` : ``}`;
});
var DuranzForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var allSeasons = [
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022
  ];
  let name;
  let { data } = $$props;
  let promise = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data = promise;
  return `<div class="${"mt-4"}"><h4 class="${"mb-3"}">Player Stats</h4>
	<form class="${"needs-validation"}"><div><label for="${"firstName"}" class="${"form-label"}">Player Name</label>
			<input type="${"text"}" class="${"form-control"}" id="${"firstName"}" placeholder="${""}" required${add_attribute("value", name, 0)}></div>
	  <div class="${"row g-3"}"><div class="${"col"}"><label for="${"state"}" class="${"form-label"}">Format</label>
		  <select class="${"form-select"}"><option selected value="${"All"}">All</option><option value="${"ipl"}">IPL</option><option value="${"odi"}">ODI</option><option value="${"test"}">Test</option><option value="${"big-bash"}">Big-Bash</option></select></div>
		<div class="${"col"}"><label for="${"state"}" class="${"form-label"}">Season</label>
		  <select class="${"form-select"}"><option selected value="${"All"}">All</option>${each(allSeasons, (s) => {
    return `<option${add_attribute("value", s, 0)}>${escape(s)}</option>`;
  })}</select></div></div>

	  <button class="${"btn btn-secondary my-4"}" type="${"submit"}">Submit</button></form></div>`;
});
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var data = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main>${validate_component(DuranzNav, "DuranzNav").$$render($$result, {}, {}, {})}
	${validate_component(DuranzStats, "DuranzStats").$$render($$result, {}, {}, {})}

	<div class="${"container"}">${validate_component(DuranzForm, "DuranzForm").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		

		${data ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
				${escape("...waiting")}
			`;
      }
      return function(some) {
        return `
				${validate_component(DuranzOutput, "DuranzOutput").$$render($$result, { some }, {}, {})}
			`;
      }(__value);
    }(data)}` : `Enter player details`}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-52TB3E5Q.js.map
