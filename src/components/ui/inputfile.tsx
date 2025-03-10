import { Input } from "@/components/ui/input";
import { useId } from "react";

export default function InputFile({ handleFileChange }: { handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
	const id = useId();
	return (
		<div className="*:not-first:mt-2">
			<Input id={id} className="p-0 pe-3 file:me-3 file:border-0 file:border-e bg-gray-100" type="file" onChange={handleFileChange} />
		</div>
	);
}
