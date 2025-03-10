export default function TextAreaReadOnly({ value }: { value: string }) {
	return (
		<div className="flex flex-1 min-h-0">
			<div className="flex-1 h-[430px] overflow-auto p-2 border rounded-md bg-muted whitespace-pre-wrap">{value}</div>
		</div>
	);
}
