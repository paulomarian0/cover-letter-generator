import { Linkedin, Github, MailIcon, ScrollText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const feedbacks = [
	{
		id: 1,
		avatar:
			"https://media.licdn.com/dms/image/v2/C4D03AQH2lmPjZq8lTg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649724960043?e=1747267200&v=beta&t=TEEsmbOFMh7ebpEc1t8MF-f1ar0Cj6jwvExw-8F4PPw",
		name: "Alex Johnson",
		role: "Marketing Specialist",
		message: "A game changer! My cover letter has never looked so good.",
	},
	{
		id: 2,
		avatar:
			"https://media.licdn.com/dms/image/v2/C4D03AQH2lmPjZq8lTg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649724960043?e=1747267200&v=beta&t=TEEsmbOFMh7ebpEc1t8MF-f1ar0Cj6jwvExw-8F4PPw",
		name: "Linda Smith",
		role: "Software Engineer",
		message: "Quick and easy! Got my dream job with the help of this app.",
	},
	{
		id: 3,
		avatar:
			"https://media.licdn.com/dms/image/v2/C4D03AQH2lmPjZq8lTg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649724960043?e=1747267200&v=beta&t=TEEsmbOFMh7ebpEc1t8MF-f1ar0Cj6jwvExw-8F4PPw",
		name: "Michael Brown",
		role: "HR Manager",
		message: "Highly recommend! Professional results every time.",
	},
];

const LandingPage = () => {
	return (
		<section className="flex flex-col h-screen pb-3 bg-[#f3f3f8]">
			<header className="flex justify-between items-center w-full mb-1 p-4 shadow-md animate-add-shadow">
				<span className="flex items-center">
					<ScrollText color="#5664f5" size={45} />
					<h1 className="text-2xl font-bold ml-2">Cover Letter Generator</h1>
				</span>
			</header>

			<main className="flex flex-col items-center justify-evenly flex-grow bg-white">
				<div className="flex flex-col items-center w-full max-w-4xl animate-fade-slide-up">
					<h1 className="text-4xl font-bold mb-4 text-center">Craft Your Perfect Cover Letter in Minutes</h1>

					<p className="text-lg mb-8 text-center">Turn your resume into a professional cover letter quickly and for free! We’ll help you make a lasting impression and stand out to employers.</p>

					<Button variant="default" className="p-5 bg-[#5664f5] hover:bg-[#4b55e8] cursor-pointer text-white font-bold">
						Get Started
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl animate-fade-slide-up">
					{feedbacks.map((feedback) => (
						<div
							key={feedback.id}
							className="w-full animate-rotate-border max-w-sm transition-all rounded-xl duration-2000 linear cursor-pointer bg-conic/[from_var(--border-angle)] from-[#f3f3f8] via-[#5664f5] to-[#4b55e8] from-80% via-90% to-100% p-0.5"
						>
							<Card className="h-full">
								<CardContent className="flex flex-col h-full">
									<img src={feedback.avatar} alt={feedback.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
									<blockquote className="text-center pb-2 flex-grow italic">"{feedback.message}"</blockquote>
									<p className="font-semibold text-center">
										- {feedback.name}, {feedback.role}
									</p>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</main>

			<footer className="flex flex-col justify-center items-center w-full p-2 text-[#101010] animate-fade-slide-up">
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
				<p>
					Made with <span className="animate-pulse duration-3000">❤️</span> by Paulo Mariano
				</p>
				<p className="text-center">&copy; {new Date().getFullYear()} Cover Letter Generator</p>
			</footer>
		</section>
	);
};

export default LandingPage;
