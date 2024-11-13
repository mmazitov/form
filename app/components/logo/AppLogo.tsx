import { FaCheckDouble } from 'react-icons/fa';

const AppLogo = () => {
	return (
		<div className="flex justify-center items-center gap-2 mb-11">
			<div className="bg-primary p-2 rounded-sm text-lg text-white">
				<FaCheckDouble />
			</div>
			<div className="flex justify-center items-center gap-1 font-bold text-2xl">
				<span className="text-primary">Quick</span>
				<span>Task</span>
			</div>
		</div>
	);
};

export default AppLogo;
