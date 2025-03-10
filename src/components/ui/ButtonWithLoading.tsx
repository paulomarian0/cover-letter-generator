import { Button } from "@/components/ui/button";
import { LoaderCircleIcon, Sparkles } from "lucide-react";

interface ButtonWithLoadingProps {
	children: React.ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
}

export default function ButtonWithLoading({ children, onClick, disabled, loading }: ButtonWithLoadingProps) {
	return (
		<Button onClick={onClick} disabled={disabled || loading} className="mt-4 bg-[#5664f5] hover:bg-[#4b55e8] text-white font-bold">
			{loading ? <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" /> : <Sparkles />}
			{children}
		</Button>
	);
}
