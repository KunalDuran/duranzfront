<script>
	import DuranzNav from './../components/DuranzNav.svelte';
	import DuranzStats from './../components/DuranzStats.svelte';
	import DuranzOutput from './../components/DuranzOutput.svelte';

	var allSeasons = [
		2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
	];
	let name;
	let format;
	let season;

	let promise = Promise.resolve([]);

	async function fetchUsers() {
		var url = `http://kunalduran.com/player-stats/${name}?format=${format}&season=${season}`

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
	}

	function handleSubmit() {
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

<main>
	<DuranzNav />
	<DuranzStats />

	<div class="px-8 py-4">
		<form action="" on:submit|preventDefault={handleSubmit}>
			<div class="py-4 items-center">
				<div class="py-2 sm:w-3/5">
					<label for="format">Select Format</label>
					<select
						bind:value={format}
						class="form-select appearance-none
									block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding bg-no-repeat
									border border-solid border-gray-300
									rounded
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						aria-label="Default select example"
					>
						<option selected value="ipl">IPL</option>
						<option value="odi">ODI</option>
						<option value="test">Test</option>
						<option value="big-bash">Big-Bash</option>
						<option disabled>All</option>
					</select>
				</div>

				<div class="py-2 sm:w-3/5">
					<label for="season">Select Season</label>
					<select
						bind:value={season}
						class="form-select appearance-none
							block
							w-full
							px-3
							py-1.5
							text-base
							font-normal
							text-gray-700
							bg-white bg-clip-padding bg-no-repeat
							border border-solid border-gray-300
							rounded
							transition
							ease-in-out
							m-0
							focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						aria-label="Default select example"
					>
						<option selected value="">All</option>
						{#each allSeasons as s}
							<option value={s}>{s}</option>
						{/each}
					</select>
				</div>

				<div id="1st" class="py-2 sm:w-3/5">
					<label for="player">Player Name</label>
					<input
						bind:value={name}
						type="text"
						class="w-full font-mono border border-solid border-gray-300 px-3 py-1.5 rounded"
						name="player"
						id="player"
					/>
				</div>
			</div>

			<div class="text-center">
				<button type="submit" class="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 text-white"
					>Submit</button
				>
			</div>
		</form>
	</div>

	{#await promise}
		<!-- <p>...waiting</p> -->
	{:then data}
		<DuranzOutput {data} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>
