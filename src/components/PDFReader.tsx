import type React from "react";
import { useState, useEffect, Component } from "react";
import InputFile from "./ui/inputfile";
import TextAreaReadOnly from "./ui/text-area-read-only";
import CopyButton from "./ui/copy-button";
import { Button } from "./ui/button";

declare global {
	interface Window {
		pdfjsLib: any;
	}
}

const PDFReader = () => {
	const [textContent, setTextContent] = useState<string>("");

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
			alert("Por favor, selecione um arquivo PDF.");
		}
	};

	return (
		<main className="flex flex-col md:flex-row flex-grow">
			<div className="flex-1 flex items-start justify-center p-4 animate-fade-slide-up">
				<div className="w-full flex flex-col border-2 shadow-lg border-gray-200 rounded-lg p-4">
					<h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
					<InputFile handleFileChange={handleFileChange} />
					<p className="text-[#5664f5] mt-2">Attach your resume in PDF format to get started.</p>

					<Button variant="default" disabled={!textContent} className="mt-4 bg-[#5664f5] hover:bg-[#4b55e8] text-white font-bold">
						Generate Cover Letter
					</Button>
				</div>
			</div>

			<div className="flex-1 flex items-start h-full p-4 animate-fade-slide-up">
				<div className="w-full flex flex-col gap-4 border-2 shadow-sm h-full border-gray-200 rounded-lg p-4">
					<h2 className="text-xl font-bold mb-4">Generated Cover Letter</h2>

					<TextAreaReadOnly />
					<CopyButton text={"TEST BROTHER"}>Copy to Clipboard</CopyButton>
				</div>
			</div>
		</main>
	);
};

export default PDFReader;
