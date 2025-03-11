import { ScrollText } from "lucide-react";

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full p-4 shadow-md animate-add-shadow">
			<a href="/" className="flex items-center" rel="noreferrer">
				<ScrollText color="#5664f5" size={45} />
				<h1 className="text-xl sm:text-2xl font-bold ml-2">Cover Letter Generator</h1>
			</a>
		</header>
	);
};

export default Header;
