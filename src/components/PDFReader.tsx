import type React from "react";
import { useState, useEffect } from "react";
import InputFile from "./ui/inputfile";
import TextAreaReadOnly from "./ui/text-area-read-only";
import CopyButton from "./ui/copy-button";
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import ButtonWithLoading from "./ui/ButtonWithLoading";
import { defaultCoverLetter } from "@/constants/cover-letter";

const groq = createGroq({
	apiKey: import.meta.env.VITE_GROQ_API_KEY,
});
declare global {
	interface Window {
		pdfjsLib: any;
	}
}

const PDFReader: React.FC = () => {
	const [textContent, setTextContent] = useState<string>("");
	const [coverLetter, setCoverLetter] = useState<string>(defaultCoverLetter);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
		script.onload = () => {
			window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
		};
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const file = event.target.files?.[0];
		if (file && file.type === "application/pdf") {
			const reader = new FileReader();

			reader.onload = (e) => {
				const typedArray = new Uint8Array(e.target?.result as ArrayBuffer);

				window.pdfjsLib.getDocument(typedArray).promise.then((pdf: any) => {
					let textContent = "";
					const totalPages = pdf.numPages;

					const extractTextFromPage = (pageNum: number): void => {
						pdf.getPage(pageNum).then((page: any) => {
							page.getTextContent().then((text: any) => {
								text.items.forEach((item: any) => {
									textContent += `${item.str} \n`;
								});

								if (pageNum < totalPages) {
									extractTextFromPage(pageNum + 1);
								} else {
									setTextContent(textContent);
								}
							});
						});
					};

					extractTextFromPage(1);
				});
			};

			reader.readAsArrayBuffer(file);
		} else {
			console.log("Please upload a valid PDF file.");
		}
	};

	const handleGenerateCoverLetter = async () => {
		setLoading(true);
		try {
			const { text } = await generateText({
				model: groq("llama3-70b-8192"),
				prompt: `Write a cover letter directly, without any introduction, explanation, or extra text. Just the cover letter itself.  
				Mention the position, highlight relevant experience, and express interest in the role: ${textContent}`,
			});
			const textWithoutIntroductionMessage = text.split(":")[1];

			setCoverLetter(textWithoutIntroductionMessage.trim());
		} catch (error) {
			console.error("Erro ao gerar a carta de apresentação", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="flex flex-col md:flex-row flex-grow">
			<div className="flex-1 flex items-start justify-center p-4 animate-fade-slide-up">
				<div className="w-full flex flex-col border-2 shadow-lg border-gray-200 rounded-lg p-4">
					<h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
					<InputFile handleFileChange={handleFileChange} />
					<p className="text-[#5664f5] mt-2">Attach your resume in PDF format to get started.</p>

					<ButtonWithLoading loading={loading} disabled={!textContent} onClick={handleGenerateCoverLetter}>
						Generate Cover Letter
					</ButtonWithLoading>
				</div>
			</div>

			<div className="flex-1 flex flex-col max-h-[83vh] p-4 animate-fade-slide-up">
				<div className="w-full flex flex-col gap-4 border-2 shadow-sm h-full border-gray-200 rounded-lg p-4 overflow-hidden">
					<h2 className="text-xl font-bold mb-4">Generated Cover Letter</h2>

					<div className="flex-1 overflow-auto">
						<TextAreaReadOnly value={coverLetter} />
					</div>

					<div className="pt-2">
						<CopyButton text={coverLetter}>Copy to Clipboard</CopyButton>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PDFReader;
