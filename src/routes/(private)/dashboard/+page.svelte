<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';
	import type { PageData } from '../../$types';

	export let data: PageData;
	$: ({ supabase, user } = data);

	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;

		const form = evt.target as HTMLFormElement;

		const note = (new FormData(form).get('note') ?? '') as string;
		if (!note) return;

		const { error } = await supabase.from('notes').insert({ note });
		if (error) console.error(error);

		invalidate('supabase:db:notes');
		form.reset();
	};
</script>

<h1>Private page for user: {user?.email}</h1>
