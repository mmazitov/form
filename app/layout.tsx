import { Toaster } from '@/components/ui/toaster';
import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins--poppins-font',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.variable}>
				<Toaster />
				<main>{children}</main>
			</body>
		</html>
	);
}
