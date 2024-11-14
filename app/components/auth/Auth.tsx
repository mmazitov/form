'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import SignIn from '@/app/components/auth/signIn/SignIn';
import SignUp from '@/app/components/auth/signUp/SignUp';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(true);
	return (
		<div>
			<Card className="py-2 w-[350px] max-w-sm">
				<CardHeader className="pt-3 pb-0">
					{isSignUp ? (
						<>
							<CardTitle className="font-bold text-[22px]">SignUp</CardTitle>
							<CardDescription>
								Enter your information to create an account.
							</CardDescription>
						</>
					) : (
						<>
							<CardTitle className="font-bold text-[22px]">Login</CardTitle>
							<CardDescription>
								Enter your email below to login to your account.
							</CardDescription>
						</>
					)}
				</CardHeader>

				<CardContent>{isSignUp ? <SignUp /> : <SignIn />}</CardContent>

				<CardFooter className="pb-3">
					{isSignUp ? (
						<div className="flex justify-center items-center gap-1 text-sm">
							<span>Already have an account?</span>
							<Label
								className="text-primary cursor-pointer"
								onClick={() => setIsSignUp(false)}
							>
								Sign in
							</Label>
						</div>
					) : (
						<div className="flex justify-center items-center gap-1 text-sm">
							<span>Don&apos;t have an account?</span>
							<Label
								className="text-primary cursor-pointer"
								onClick={() => setIsSignUp(true)}
							>
								Sign up
							</Label>
						</div>
					)}
				</CardFooter>
			</Card>
		</div>
	);
};

export default Auth;
