<script lang="ts">
	import { enhance } from '$app/forms';
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Login to <span class="font-bold text-muted-foreground">bnchmrkfit</span></Card.Title
		>
		<Card.Description>Enter your details below to login</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid min-w-72 gap-6">
			<form action="?/login" method="POST" use:enhance>
				<div class="grid gap-2">
					<div class="grid gap-1">
						<Label class="sr-only" for="email">Email</Label>
						<Input
							id="email"
							name="email"
							placeholder="name@example.com"
							type="email"
							autocapitalize="none"
							autocomplete="email"
							autocorrect="off"
							disabled={isLoading}
						/>
					</div>
					<div class="grid gap-1">
						<Label class="sr-only" for="password">Password</Label>
						<Input
							id="password"
							name="password"
							placeholder="password"
							type="password"
							autocapitalize="none"
							autocomplete="password"
							autocorrect="off"
							disabled={isLoading}
						/>
					</div>
					<Button type="submit" disabled={isLoading}>
						{#if isLoading}
							<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						Sign In with Email
					</Button>
				</div>
			</form>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
				</div>
			</div>
			<Button variant="outline" type="button" disabled={isLoading}>
				{#if isLoading}
					<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
				{:else}
					<Icons.google class="mr-2 h-4 w-4" />
				{/if}
				Google
			</Button>
		</div>
	</Card.Content>
</Card.Root>
