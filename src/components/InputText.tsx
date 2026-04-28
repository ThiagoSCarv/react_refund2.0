import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputTextStyles = tv({
	slots: {
		wrapper: "group flex flex-col gap-1 w-full",
		label: [
			"text-xs font-semibold uppercase tracking-wider",
			"text-gray-200 transition-colors duration-150",
			"group-focus-within:text-green-200",
			"group-has-[input:disabled]:text-gray-300",
		],
		input: [
			"w-full h-12 px-4 rounded-xl",
			"border-2 border-gray-300 bg-transparent",
			"text-sm text-gray-100 placeholder:text-gray-300",
			"outline-none transition-colors duration-150",
			"focus:border-green-200",
			"disabled:opacity-40 disabled:cursor-not-allowed",
			"read-only:cursor-default read-only:text-gray-200 read-only:focus:border-gray-300",
		],
	},
	variants: {},
});

type InputTextVariants = VariantProps<typeof inputTextStyles>;

interface InputTextProps extends ComponentProps<"input">, InputTextVariants {
	label?: string;
}

export function InputText({
	label,
	id,
	disabled,
	className,
	...props
}: InputTextProps) {
	const { wrapper, label: labelStyles, input } = inputTextStyles();

	return (
		<div className={wrapper()}>
			{label && (
				<label htmlFor={id} className={labelStyles()}>
					{label}
				</label>
			)}
			<input
				id={id}
				disabled={disabled}
				className={input({ className })}
				{...props}
			/>
		</div>
	);
}
