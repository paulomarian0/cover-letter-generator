import { FileTerminal, Linkedin, Github, MailIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const LandingPage = () => {
	return (
		<section>
			<header className="flex justify-between items-center w-full mb-4 p-4 shadow-md shadow-gray-200 bg-amber-200">
				<span className="flex items-center">
					<FileTerminal color="#5664f5" size={45} />
					<h1 className="text-2xl font-bold ml-2">Cover Letter Generator</h1>
				</span>
			</header>
			<main className="flex flex-col items-center p-6 bg-amber-600 justify-between">
				<div className="flex flex-col items-center p-8 w-full max-w-4xl">
					<h1 className="text-4xl font-bold mb-4 text-center">Create Your Perfect Cover Letter</h1>

					<p className="text-lg mb-8 text-center">Transform your CV into a professional cover letter in minutes, completely free! Let us help you make the best impression possible.</p>

					<Button variant="default" className="p-5 bg-[#5664f5]">
						Get Started
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
					<Card>
						<CardContent>
							<img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="Alex Johnson" className="w-16 h-16 rounded-full mx-auto mb-4" />
							<p className="text-center">"A game changer! My cover letter has never looked so good."</p>
							<p className="font-semibold text-center">- Alex Johnson, Marketing Specialist</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent>
							<img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="Linda Smith" className="w-16 h-16 rounded-full mx-auto mb-4" />
							<p className="text-center">"Quick and easy! Got my dream job with the help of this app."</p>
							<p className="font-semibold text-center">- Linda Smith, Software Engineer</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent>
							<img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="Michael Brown" className="w-16 h-16 rounded-full mx-auto mb-4" />
							<p className="text-center">"Highly recommend! Professional results every time."</p>
							<p className="font-semibold text-center">- Michael Brown, HR Manager</p>
						</CardContent>
					</Card>
				</div>
			</main>

			<footer className="flex flex-col justify-center items-center w-full p-4 bg-[#f0f1ff] text-[#101010]">
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
				<p>Made with ❤️ by Paulo Mariano</p>
				<p className="text-center">&copy; {new Date().getFullYear()} Cover Letter Generator</p>
			</footer>
		</section>
	);
};

export default LandingPage;
