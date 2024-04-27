import type { SvelteComponent } from 'svelte';
import Google from './google.svelte';
import LoaderCircle from 'lucide-svelte';

export type Icon = SvelteComponent;

export const Icons = {
	google: Google,
	spinner: LoaderCircle
};
