<script>
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<nav class="flex justify-between p-2">
	<h2 class="font-semibold">bnchmrkfit</h2>
	<div class="flex gap-2">
		{#if session}
			<Button size="sm" href="/auth/logout">Logout</Button>
		{:else}
			<Button size="sm" variant="link" href="/auth/login">Login</Button>
			<Button size="sm" href="/auth/signup">Signup</Button>
		{/if}
	</div>
</nav>
<slot></slot>
