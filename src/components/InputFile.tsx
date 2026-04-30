import { CloudArrowUpIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { useRef, useState } from "react";
import { tv } from "tailwind-variants";

import { Icon } from "./Icon";

const inputFileStyles = tv({
	slots: {
		wrapper: "flex flex-col gap-1 w-full",
		label: "text-xs font-semibold uppercase tracking-wider text-gray-200",
		container: [
			"flex items-center h-12 overflow-hidden",
			"rounded-xl border-2 border-gray-300",
			"transition-colors duration-150",
		],
		filename: "flex-1 px-4 text-sm text-gray-300",
	},
	variants: {},
});

interface InputFileProps extends Omit<ComponentProps<"input">, "type"> {
	label?: string;
}

export function InputFile({
	label,
	className,
	onChange,
	...props
}: InputFileProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState("");

	const styles = inputFileStyles();

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		setFileName(file?.name ?? "");
		onChange?.(e);
	}

	return (
		<div className={styles.wrapper({ class: className })}>
			{label && <span className={styles.label()}>{label}</span>}

			<div className={styles.container()}>
				<span className={styles.filename()}>
					{fileName || "Nome do arquivo.pdf"}
				</span>

				<button
					type="button"
					onClick={() => inputRef.current?.click()}
					className="shrink-0 cursor-pointer"
				>
					<Icon icon={CloudArrowUpIcon} variant="inputFile" size={25} />
				</button>

				<input
					ref={inputRef}
					type="file"
					className="hidden"
					onChange={handleChange}
					{...props}
				/>
			</div>
		</div>
	);
}
