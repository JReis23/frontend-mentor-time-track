<script>
	import Box from '../ui/Box.svelte';
	import User from '../components/User.svelte';
</script>

<svelte:head>
	<title>Frontendmentor challenge dashbboard</title>
	<meta name="author" content="Joao Reis" />
</svelte:head>

<main class="main">
	<div class="user">
		<User />
	</div>
</main>

<style>
	main {
		display: grid;
		min-height: 100vh;
		min-width: 100vw;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1440px));
		justify-content: center;
		align-content: center;
	}
</style>
