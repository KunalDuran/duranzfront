<script>
// @ts-nocheck

	export let some;
</script>

{#if some.statusCode == 200}
	<hr>
	<div class="py-3">
		<div class="">
			<table class="table align-middle table-borderless caption-top">
				<caption class="text-center h1 text-dark">{some.content[0].player_name}</caption>
				<tbody>
					<!-- Batting Stats -->
					<tr>
						<th colspan="2" class="text-center h5"> Batting Stats</th>
					</tr>
					{#each Object.entries(some.content[0].batting) as [statName, statValue]}
						<tr class="">
							<th	scope="row"	class="col-md-8 text-center">
								{statName.replace('_', ' ').toUpperCase()}
							</th>
							<td class="col-md-4 text-start"> {statValue} </td>
						</tr>
					{/each}

					<!-- Bowling Stats -->
					<tr>
						<th colspan="2" class="text-center h5"> Bowling Stats</th>
					</tr>
					{#each Object.entries(some.content[0].bowling) as [statName, statValue]}
						<tr class="">
							<th scope="row" class="col-md-8 text-center">
								{statName.replace('_', ' ').toUpperCase()}
							</th>
							<td class="col-md-4 text-start"> {statValue} </td>
						</tr>
					{/each}

					<!-- Fielding Stats -->
					<tr>
						<th colspan="2" class="text-center h5"> Fielding Stats</th>
					</tr>
					{#each Object.entries(some.content[0].fielding) as [statName, statValue]}
						<tr class="">
							<th	scope="row" class="col-md-8 text-center">
								{statName.replace('_', ' ').toUpperCase()}
							</th>
							<td class="col-md-4 text-start"> {statValue} </td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{/if}
