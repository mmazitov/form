import AppLogo from '@/app/components/logo/AppLogo';
import Auth from './components/auth/Auth';

export default function Home() {
	return (
		<div className="poppins">
			<header className="flex justify-center items-center border-primary py-2 border-b-2">
				<AppLogo />
			</header>
			<div className="flex justify-center items-center">
				<Auth />
			</div>
		</div>
	);
}
