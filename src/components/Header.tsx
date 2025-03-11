const Header = () => {
	return (
		<header className="flex justify-between items-center w-full p-4 shadow-md animate-add-shadow">
			<a href="/" className="flex items-center" rel="noreferrer">
				<img src="src\assets\logo.png" alt="Logo" className="w-10 h-10" />
				<h1 className="text-xl sm:text-2xl font-bold ml-2 bg-gradient-to-r from-[#2500f5] to-[#5664f5] text-transparent bg-clip-text">Cover Letter Generator</h1>
			</a>
		</header>
	);
};

export default Header;
