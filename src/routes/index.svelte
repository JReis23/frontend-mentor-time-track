<script>
	import Box from '../ui/Box.svelte';
	import User from '../components/User.svelte';
</script>

<main class="main">
	<div class="user">
		<User />
	</div>
</main>

<style>
	main {
		display: grid;
		padding: 2rem;
		min-height: 100vh;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1200px));
	}
</style>
