"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
	children: React.ReactNode;
	text: string;
}

export default function CopyButton({ children, text }: CopyButtonProps) {
	const [copied, setCopied] = useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text ?? " ");
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="default"
						size="icon"
						className="disabled:opacity-100 w-full bg-[#5664f5] hover:bg-[#4b55e8]"
						onClick={handleCopy}
						aria-label={copied ? "Copied" : "Copy to clipboard"}
						disabled={copied}
					>
						<div className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
							<CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
						</div>
						<div className={cn("absolute transition-all flex gap-2 text-center", copied ? "scale-0 opacity-0" : "scale-100 opacity-100")}>
							{children}
							<CopyIcon size={16} aria-hidden="true" />
						</div>
					</Button>
				</TooltipTrigger>
				<TooltipContent className="px-2 py-1 text-xs">Click to copy</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
