import { CircleNotch } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
	base: [
		"inline-flex items-center justify-center gap-2 cursor-pointer",
		"rounded-xl px-5 h-12 w-full",
		"font-semibold text-sm text-white",
		"transition-all duration-150",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		"disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed",
	],
	variants: {
		variant: {
			primary:
				"bg-green-100 hover:bg-green-200 active:scale-[0.98] focus-visible:ring-green-100",
			secondary:
				"bg-green-200 hover:brightness-110 active:scale-[0.98] focus-visible:ring-green-200",
		},
		isLoading: {
			true: "opacity-75 cursor-wait pointer-events-none",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ComponentProps<"button">, ButtonVariants {
	isLoading?: boolean;
}

export function Button({
	children,
	variant,
	isLoading = false,
	disabled,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled || isLoading}
			className={buttonStyles({ variant, isLoading, className })}
			{...props}
		>
			{isLoading && <CircleNotch className="animate-spin" size={16} />}
			{children}
		</button>
	);
}
