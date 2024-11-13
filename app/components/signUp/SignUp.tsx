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

import { signUpSchema } from '@/app/components/form/validateSchema';
import AppLogo from '@/app/components/logo/AppLogo';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import z from 'zod';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
	const methods = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	});
	const { toast } = useToast();

	const onSubmit = (data: SignUpFormData) => {
		console.log('Submitting form:', data);
		toast({
			title: 'Registration Successful',
			description: 'You have successfully registered.',
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
		if (errors.confirmPassword) {
			toast({
				title: 'Validation Error',
				description: errors.confirmPassword.message?.toString(),
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
							<CardTitle className="font-bold text-[22px]">SignUp</CardTitle>
							<CardDescription>
								Enter your information to create an account.
							</CardDescription>
						</CardHeader>
						<CardContent className="gap-5 grid mt-3">
							<FormInput
								label="Name"
								id="name"
								type="text"
								errorMessage="Name required"
							/>
							<FormInput
								label="Email"
								id="email"
								type="email"
								errorMessage="Email required"
							/>
							<FormInput
								label="Password"
								id="password"
								type="password"
								errorMessage="Password required"
							/>
							<FormInput
								label="Confirm Password"
								id="confirmPassword"
								type="password"
								errorMessage="Password must match"
							/>
							<div className="flex justify-center items-center gap-1 text-sm">
								<span>Already have an account?</span>
								<Label className="text-primary">
									<Link href={'/'}>Sign in</Link>
								</Label>
							</div>
						</CardContent>
						<CardFooter className="pb-3">
							<FormButton value="Create account" />
						</CardFooter>
					</form>
				</FormProvider>
			</Card>
		</div>
	);
};

export default SignUp;
