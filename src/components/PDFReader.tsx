import type React from "react";
import { useState, useEffect } from "react";
import InputFile from "./ui/inputfile";

declare global {
	interface Window {
		pdfjsLib: any;
	}
}

const PDFReader = () => {
	const [file, setFile] = useState<string>("");

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
									setFile(textContent);
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
		<div className="m-auto h-screen flex justify-center items-center">
			<InputFile handleFileChange={handleFileChange} />
			<pre>{file}</pre>
		</div>
	);
};

export default PDFReader;
