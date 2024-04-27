<script>
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				/**
				 * Queue this as a task so the navigation won't prevent the
				 * triggering function from completing
				 */
				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}
			if (newSession?.expires_at !== session?.expires_at) {
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
			<Button size="sm" href="/auth/signup">Sign up</Button>
		{/if}
	</div>
</nav>
<slot></slot>
