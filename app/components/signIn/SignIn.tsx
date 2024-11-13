'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { FormProvider, useForm } from 'react-hook-form';

import AppLogo from '../logo/AppLogo';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { authSchema } from '@/app/components/form/validateSchema';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type AuthFormData = z.infer<typeof authSchema>;
const SignIn = () => {
	const methods = useForm<AuthFormData>({ resolver: zodResolver(authSchema) });
	const { toast } = useToast();

	const onSubmit = (data: AuthFormData) => {
		console.log('Submitting form', data);
		toast({
			title: 'Login Successful',
			description: 'You have successfully logged in.',
		});
	};
	const handleErrorToast = () => {
		const { errors } = methods.formState;

		if (errors.email) {
			toast({
				title: 'Validation Error',
				description: errors.email.message?.toString(),
				variant: 'destructive',
			});
		}
		if (errors.password) {
			toast({
				title: 'Validation Error',
				description: errors.password.message?.toString(),
				variant: 'destructive',
			});
		}
	};
	return (
		<div>
			<AppLogo />
			<Card className="py-2 w-[350px] max-w-sm">
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
						<CardHeader className="pt-3 pb-0">
							<CardTitle className="font-bold text-[22px]">Login</CardTitle>
							<CardDescription>
								Enter your email below to login to your account.
							</CardDescription>
						</CardHeader>
						<CardContent className="gap-5 grid mt-3">
							<FormInput
								label="email"
								id="email"
								type="email"
								errorMessage="Email required"
							/>
							<FormInput
								label="password"
								id="password"
								type="password"
								errorMessage="Password required"
							/>
							<div className="flex justify-center items-center gap-1 text-sm">
								<span>Don&apos;t have an account?</span>
								<Label className="text-primary">
									<Link href="/pages/signUp">Sign up</Link>
								</Label>
							</div>
						</CardContent>
						<CardFooter className="pb-3">
							<FormButton value="Sign in" />
						</CardFooter>
					</form>
				</FormProvider>
			</Card>
		</div>
	);
};

export default SignIn;
