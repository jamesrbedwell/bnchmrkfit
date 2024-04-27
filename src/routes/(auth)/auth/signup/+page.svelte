<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { enhance } from '$app/forms';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title
			>Signup to <span class="font-bold text-muted-foreground">bnchmrkfit</span></Card.Title
		>
		<Card.Description>Create an account below</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid min-w-72 gap-6">
			<form action="?/signup" method="POST" use:enhance>
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
						/>
					</div>
					<div class="grid gap-1">
						<Label class="sr-only" for="confirmpassword">Confirm password</Label>
						<Input
							id="confirmpassword"
							name="confirmpassword"
							placeholder="confirm password"
							type="password"
							autocapitalize="none"
							autocomplete="password"
							autocorrect="off"
						/>
					</div>
					<Button type="submit">
						<!-- {#if isLoading}
							<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
						{/if} -->
						Create account
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
			<Button variant="outline" type="button">
				{#if false}
					<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
				{:else}
					<Icons.google class="mr-2 h-4 w-4" />
				{/if}
				Google
			</Button>
		</div>
	</Card.Content>
</Card.Root>
