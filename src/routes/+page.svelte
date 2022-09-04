<script>
// @ts-nocheck

	import DuranzNav from './../components/DuranzNav.svelte';
	import DuranzStats from './../components/DuranzStats.svelte';
	import DuranzOutput from './../components/DuranzOutput.svelte';
	import DuranzForm from './../components/DuranzForm.svelte';
	var data = '';
</script>


<main>
	<DuranzNav />
	<DuranzStats />

	<div class="container">

		<DuranzForm bind:data={data} />
		

		{#if data}
			{#await data}
				{"...waiting"}
			{:then some}
				<DuranzOutput some={some} />
			{/await}
		{:else}
			Enter player details
		{/if}
	</div>

</main>
