<script>
	export let data;
</script>

<div class="py-16">
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<caption class=" text-gray-700 bg-gray-100 text-2xl py-2 border"
				>{data.content[0].player_name} </caption
			>
			<tbody>
				<!-- Batting Stats -->
				<tr>
					<th colspan="2" class="py-3 font-medium bg-gray-50 text-lg"> Batting Stats</th>
				</tr>
				{#each Object.entries(data.content[0].batting) as [statName, statValue]}
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center"
						>
							{statName.replace('_', ' ').toUpperCase()}
						</th>
						<td class="px-6 py-4 text-center"> {statValue} </td>
					</tr>
				{/each}

				<!-- Bowling Stats -->
				<tr>
					<th colspan="2" class="py-3 font-medium bg-gray-50 text-lg"> Bowling Stats</th>
				</tr>
				{#each Object.entries(data.content[0].bowling) as [statName, statValue]}
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center"
						>
							{statName.replace('_', ' ').toUpperCase()}
						</th>
						<td class="px-6 py-4 text-center"> {statValue} </td>
					</tr>
				{/each}

				<!-- Fielding Stats -->
				<tr>
					<th colspan="2" class="py-3 font-medium bg-gray-50 text-lg"> Fielding Stats</th>
				</tr>
				{#each Object.entries(data.content[0].fielding) as [statName, statValue]}
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center"
						>
							{statName.replace('_', ' ').toUpperCase()}
						</th>
						<td class="px-6 py-4 text-center"> {statValue} </td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
