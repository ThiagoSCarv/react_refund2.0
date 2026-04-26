import type { ComponentProps } from "react";
import { CircleNotch, type Icon } from "@phosphor-icons/react";
import { tv, type VariantProps } from "tailwind-variants";

const iconButtonStyles = tv({
	base: [
		"inline-flex items-center justify-center cursor-pointer",
		"rounded-xl w-12 h-12",
		"text-white transition-all duration-150",
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

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;

interface IconButtonProps extends ComponentProps<"button">, IconButtonVariants {
	icon: Icon;
	isLoading?: boolean;
	iconSize?: number;
}

export function IconButton({
	icon: IconComponent,
	variant,
	isLoading = false,
	disabled,
	iconSize = 20,
	className,
	...props
}: IconButtonProps) {
	return (
		<button
			disabled={disabled || isLoading}
			className={iconButtonStyles({ variant, isLoading, className })}
			{...props}
		>
			{isLoading ? (
				<CircleNotch className="animate-spin" size={iconSize} />
			) : (
				<IconComponent size={iconSize} />
			)}
		</button>
	);
}
