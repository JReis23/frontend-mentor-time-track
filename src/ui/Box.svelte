<script>
	import options from '../data/options.js';
	import { draggable } from '@neodrag/svelte';

	export let mode = 'daily';
</script>

{#each options as option (option.id)}
	<section class="box" use:draggable={{ grid: [1, 3] }}>
		<div class="head-{option.title} head" style="background: var({option.color});">
			<img src={option.icon} alt={`${option.title} ${option.id}`} />
		</div>
		<div class="body-{option.title} body">
			<div class="body-title">
				<h2>{option.title}</h2>
				<button><img src="../static/images/icon-ellipsis.svg" alt="ellipsis" /></button>
			</div>
			{#if mode === 'daily'}
				<h3>{option.timeframes.daily.current}hrs</h3>
				<p>Yesterday - {option.timeframes.daily.previous}</p>
			{:else if mode === 'weekly'}
				<h3>{option.timeframes.weekly.current}hrs</h3>
				<p>Last week - {option.timeframes.weekly.previous}</p>
			{:else if mode === 'monthy'}
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
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		justify-items: end;
		border-radius: 1.175rem 1.175rem 0 0;
		height: 5rem;
	}

	.head img {
		object-fit: none;
		margin-right: 10px;
	}

	.body {
		grid-row: 2/-1;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		align-items: center;
		border-radius: 1.175rem;
		background: var(--Dark-blue);
		margin-top: -1.5rem;
		padding: 1rem;
	}

	.body-title {
		display: grid;
		justify-content: space-between;
	}

	button {
		grid-column: 2/3;
	}
	p {
		color: var(--Desaturated-blue);
	}

	@media (max-width: 591px) {
		h3 {
			font-size: 2.2rem;
			grid-row: 2/3;
		}

		p {
			grid-row: 2/3;
		}

		.box {
			height: 11rem;
		}

		.body {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			align-items: center;
			margin-top: -2.5rem;
		}

		.body-title {
			grid-column: span 2;
		}
	}
</style>
