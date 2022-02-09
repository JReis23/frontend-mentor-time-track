<script>
	import options from '../data/options.js';

	export let dailyButton = true;
	export let weeklyButton = false;
	export let monthyButton = false;
</script>

{#each options as option (option.id)}
	<section class="box">
		<div class="head-{option.title} head" style="background: var({option.color});">
			<img src={option.icon} alt={`${option.title} ${option.id}`} />
		</div>
		<div class="body-{option.title} body">
			<div class="flex justify-between items-center">
				<h2>{option.title}</h2>
				<a href="/"><img src="../static/images/icon-ellipsis.svg" alt="ellipsis" /></a>
			</div>
			{#if dailyButton}
				<h3>{option.timeframes.daily.current}hrs</h3>
				<p>Yesterday - {option.timeframes.daily.previous}</p>
			{:else if weeklyButton}
				<h3>{option.timeframes.weekly.current}hrs</h3>
				<p>Last week - {option.timeframes.weekly.previous}</p>
			{:else if monthyButton}
				<h3>{option.timeframes.monthly.current}hrs</h3>
				<p>Last month - {option.timeframes.monthly.previous}</p>
			{/if}
		</div>
	</section>
{/each}

<style>
	.box {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		border-radius: 1.175rem;
		height: 15rem;
		grid-row: span 2;
	}

	.head {
		display: flex;
		justify-content: end;
		border-radius: 1.175rem 1.175rem 0 0;
		height: 5rem;
	}

	.head img {
		object-fit: none;
		margin-right: 10px;
	}

	.body {
		border-radius: 1.175rem;
		background: var(--Dark-blue);
		grid-row: 2/-1;
		margin-top: -1.5rem;
		padding: 1rem;
	}

	p {
		color: var(--Desaturated-blue);
	}
</style>
