import { Linkedin, Github, MailIcon, ScrollText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	return (
		<section className="flex flex-col min-h-screen bg-gray-50">
			<header className="flex justify-between items-center w-full p-4 shadow-md animate-add-shadow">
				<span className="flex items-center">
					<ScrollText color="#5664f5" size={45} />
					<h1 className="text-xl sm:text-2xl font-bold ml-2">Cover Letter Generator</h1>
				</span>
			</header>

			<main className="flex flex-col items-center justify-evenly flex-grow p-4">
				<div className="flex flex-col items-center w-full max-w-4xl animate-fade-slide-up">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
						Create Your Perfect <span className="text-[#2500f5] font-bold">Cover Letter </span>
						in <span className="text-[#5664f5] font-bold animate-pulse">Seconds</span>
					</h1>

					<p className="text-base sm:text-lg md:text-xl mb-8 mt-2 text-center">
						Upload your resume in <span className="text-red-500 font-bold">PDF</span> format and we'll quickly generate a professional cover letter for you, completely{" "}
						<span className="text-[#2500f5] font-bold animate-pulse">FREE</span>! Make a lasting impression and stand out to employers.
					</p>

					<Button variant="default" className="p-4 sm:p-6 bg-[#5664f5] hover:bg-[#4b55e8] cursor-pointer text-base sm:text-lg text-white font-bold" onClick={() => navigate("/generate-cover-letter")}>
						Get Started
					</Button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl animate-fade-slide-up p-4">
					{feedbacks.map((feedback) => (
						<div
							key={feedback.id}
							className="w-full animate-rotate-border transition-all rounded-xl duration-2000 linear cursor-pointer bg-conic/[from_var(--border-angle)] from-[#f3f3f8] via-[#5664f5] to-[#4b55e8] from-80% via-90% to-100% p-0.5"
						>
							<Card className="h-full">
								<CardContent className="flex flex-col h-full p-4">
									<img src={feedback.avatar} alt={feedback.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
									<blockquote className="text-sm sm:text-base text-center pb-2 flex-grow italic">"{feedback.message}"</blockquote>
									<p className="font-semibold text-sm sm:text-base text-center">
										- {feedback.name}, {feedback.role}
									</p>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</main>

			<footer className="flex flex-col justify-center items-center w-full p-4 text-[#101010] mt-1 inset-shadow-sm inset-shadow-gray-300">
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
		</section>
	);
};

export default LandingPage;
