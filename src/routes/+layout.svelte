<script>
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	let isLoggedIn = false;
</script>

<nav class="flex justify-between p-2">
	<h2 class="font-semibold">bnchmrkfit</h2>
	<div class="flex gap-2">
		{#if isLoggedIn}
			<Button size="sm" href="/auth/logout">Logout</Button>
		{:else}
			<Button size="sm" variant="link" href="/auth/login">Login</Button>
			<Button size="sm" href="/auth/signup">Signup</Button>
		{/if}
	</div>
</nav>
<slot></slot>
