<script>
	import Box from '../ui/Box.svelte';

	let dailyButton = true;
	let weeklyButton = false;
	let monthyButton = false;

	const handleDaily = () => {
		dailyButton = true;
	};

	const handleWeekly = () => {
		weeklyButton = true;
		dailyButton = false;
	};

	const handleMonthly = () => {
		weeklyButton = false;
		dailyButton = false;
		monthyButton = true;
	};
</script>

<section class="container">
	<div class="user-box">
		<div class="user-head">
			<img src="../../images/image-jeremy.png" alt="" />
			<div class="user-name">
				<p>Report for</p>
				<h1>Jeremy Robson</h1>
			</div>
		</div>
		<div class="user-body">
			<ol>
				<li><button on:click={handleDaily}>Daily</button></li>
				<li><button on:click={handleWeekly}>Weekly</button></li>
				<li><button on:click={handleMonthly}>Monthly</button></li>
			</ol>
		</div>
	</div>
	<Box {dailyButton} {weeklyButton} {monthyButton} />
</section>

<style>
	h1 {
		line-height: 1;
	}
	.container {
		max-width: 1200px;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
		grid-template-rows: repeat(4, 1fr);
	}

	.user-box {
		grid-row: 1/5;
		display: grid;

		background: var(--Dark-blue);
		border-radius: 1.175rem;
	}

	.user-head {
		display: grid;
		background: var(--Blue);
		border-radius: 1.175rem;
		padding: 2rem;
	}

	.user-head img {
		border: 3px solid white;
		border-radius: 100vh;
		height: 6rem;
		width: 6rem;
	}

	.user-name {
		grid-row: 2/3;
	}

	.user-body {
		display: grid;
		align-items: center;
	}

	.user-body ol {
		align-content: center;
		padding-left: 1rem;
	}

	.user-body ol li {
		padding: 0.225rem 0;
	}
</style>
