import { Linkedin, Github, MailIcon } from "lucide-react";

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center items-center w-full pt-3 text-[#101010] mt-1 inset-shadow-sm inset-shadow-gray-300 animate-fade-slide-up">
			<div className="flex gap-4 mb-4">
				<a target="_blank" href="mailto:paulomariano2501@gmail.com" className="text-center" rel="noreferrer">
					<MailIcon />
				</a>
				<a target="_blank" href="https://www.github.com/paulomarian0" className="text-center" rel="noreferrer">
					<Github />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/paulomarian0/" className="text-center" rel="noreferrer">
					<Linkedin />
				</a>
			</div>
			<p className="text-sm sm:text-base text-center">
				Made with <span className="animate-pulse duration-3000">❤️</span> by{" "}
				<a target="_blank" href="https://paulo-mariano.vercel.app" rel="noreferrer">
					Paulo Mariano
				</a>
			</p>
			<p className="text-sm sm:text-base text-center">&copy; {new Date().getFullYear()} Cover Letter Generator</p>
		</footer>
	);
};

export default Footer;
