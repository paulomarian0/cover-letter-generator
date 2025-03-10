import { ScrollText } from "lucide-react";

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full p-4 shadow-md animate-add-shadow">
			<span className="flex items-center">
				<ScrollText color="#5664f5" size={45} />
				<h1 className="text-xl sm:text-2xl font-bold ml-2">Cover Letter Generator</h1>
			</span>
		</header>
	);
};

export default Header;
