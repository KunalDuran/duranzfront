<div class="px-8 py-4">
	<form action="">
		<div class="py-4 items-center">
			<div class="py-2 sm:w-3/5">
				<label for="format">Select Format</label>
				<select
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
					<option selected>All</option>
					<option value="ipl">IPL</option>
					<option value="odi">ODI</option>
					<option value="test">Test</option>
					<option value="big-bash">Big-Bash</option>
				</select>
			</div>

			<div class="py-2 sm:w-3/5">
				<label for="season">Select Season</label>
				<select
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
					<option selected>All</option>
					<option value="1">2019</option>
					<option value="2">2020</option>
					<option value="3">2021</option>
					<option value="3">2022</option>
				</select>
			</div>

			<div id="1st" class="py-2 sm:w-3/5">
				<label for="player">Player Name</label>
				<input
					type="text"
					class="w-full font-mono border border-solid border-gray-300 px-3 py-1.5 rounded"
					name="player"
					id="player"
				/>
			</div>
			<!-- 
                    <div class="py-4">
                        <img class="h-56 w-96 rounded-md"
                            src="https://i.pinimg.com/originals/e0/6a/a7/e06aa7b86fa6809b26584a089d4555a0.jpg"
                            alt="asd">
                    </div> -->

			<!-- <div class="flex"><div class="m-auto text-xl">VS</div></div> -->

			<div class="py-2 sm:w-3/5" id="2nd">
				<label for="player">Player Name</label>
				<input
					type="text"
					class="w-full font-mono border border-solid border-gray-300 px-3 py-1.5 rounded"
					name="player2"
					id="player"
				/>
			</div>
			<!-- 
                    <div class="py-4">
                        <img class="h-56 w-96 rounded-md"
                            src="https://i.pinimg.com/originals/24/64/87/2464870da53d97d59902f677f916995f.jpg"
                            alt="asd">
                    </div> -->
		</div>

		<div class="text-center">
			<button type="submit" class="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 text-white"
				>Submit</button>
		</div>
	</form>
</div>
