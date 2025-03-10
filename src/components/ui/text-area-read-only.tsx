import { Textarea } from "@/components/ui/textarea";

export default function TextAreaReadOnly({ value }: { value: string }) {
	return (
		<div className="*:not-first:mt-2">
			<Textarea
				placeholder="Leave a comment"
				defaultValue={
					"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				}
				value={value}
				className="field-sizing-content h-fit min-h-[29.5px] resize-none py-1.75 read-only:bg-muted"
			/>
		</div>
	);
}
