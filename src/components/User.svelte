<script>
	import Box from '../ui/Box.svelte';

	export let mode = 'daily';

	const handleDaily = () => {
		mode = 'daily';
	};

	const handleWeekly = () => {
		mode = 'weekly';
	};

	const handleMonthly = () => {
		mode = 'monthy';
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
	<Box {mode} />
</section>

<style>
	h1 {
		line-height: 1;
	}
	.container {
		max-width: 1440px;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
		grid-template-rows: repeat(4, 1fr);
		justify-content: center;
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

	.user-name h1 {
		padding-top: 1rem;
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

	@media (max-width: 591px) {
		h1 {
			font-size: 1.6rem;
		}

		p {
			font-size: 0.8rem;
		}

		.user-head {
			padding: 1rem 0.6rem;
			grid-template-columns: repeat(auto, 1fr);
			align-items: center;
		}

		.user-name {
			grid-row: 1/2;
			grid-column: 2/3;
		}

		.user-head img {
			height: 4rem;
			width: 4rem;
		}

		.user-body ol {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			padding: 2rem 0.5rem;
			justify-items: center;
		}
	}
</style>
