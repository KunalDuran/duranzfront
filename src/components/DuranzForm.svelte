
<script>
// @ts-nocheck
	
	var allSeasons = [
		2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
	];
	let name;
	let format;
	let season;
	export let data;
	
	let promise = 0;
	$: data = promise;

	async function fetchUsers() {
		var url = `http://api.kunalduran.com/player-stats/${name}?format=${format}&season=${season}`

		console.log(url)
		const response = await self.fetch(url);

		if (response.ok) {
			return response.json();
		} else {
			throw new Error(users);
		}
	}

	function handleClick() {
		// Now set it to the real fetch promise
		promise = fetchUsers();

		console.log("printing promise", promise)

	}

	function handleSubmit() {
		data = name;
		console.log(`Data requested for : ${name}  ${format} ${season}`);
		if (
			name != '' &&
			format != '' &&
			name != undefined &&
			format != undefined &&
			season != undefined
		) {

			handleClick();
		}
	}

	</script>

<div class="mt-4">
	<h4 class="mb-3">Player Stats</h4>
	<form class="needs-validation" on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="firstName" class="form-label">Player Name</label>
			<input type="text" class="form-control" id="firstName" placeholder="" bind:value={name} required>
		</div>
	  <div class="row g-3">

		<div class="col">
		  <label for="state" class="form-label">Format</label>
		  <select class="form-select" bind:value={format}>
			<option selected>All</option>
			<option value="ipl">IPL</option>
			<option value="odi">ODI</option>
			<option value="test">Test</option>
			<option value="big-bash">Big-Bash</option>
			</select>
		</div>
		<div class="col">
		  <label for="state" class="form-label">Season</label>
		  <select class="form-select" bind:value={season}>
			<option selected>All</option>
			{#each allSeasons as s}
			<option value={s}>{s}</option>
			{/each}
		</select>
		</div>
	  </div>

	  <button class="btn btn-secondary my-4" type="submit">Submit</button>
	</form>
</div>