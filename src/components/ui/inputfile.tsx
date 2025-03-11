import { Input } from "@/components/ui/input";

export default function InputFile({ handleFileChange }: { handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
	return (
		<div className="*:not-first:mt-2">
			<Input className="p-0 pe-3 file:me-3 file:border-0 file:border-e bg-gray-100" type="file" accept="application/pdf" onChange={handleFileChange} />
		</div>
	);
}
