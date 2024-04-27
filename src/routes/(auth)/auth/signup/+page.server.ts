import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		console.log(email);
		console.log(password);

		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			return redirect(303, '/auth/error');
		} else {
			return redirect(303, '/');
		}
	}
};
