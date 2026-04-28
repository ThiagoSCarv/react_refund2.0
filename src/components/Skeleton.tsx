import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const skeletonStyles = tv({
	base: "animate-pulse bg-gray-300 pointer-events-none",
	variants: {
		rounded: {
			sm: "rounded-sm",
			lg: "rounded-lg",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		rounded: "lg",
	},
});

interface SkeletonProps
	extends VariantProps<typeof skeletonStyles>,
		ComponentProps<"div"> {}

export function Skeleton({ rounded, className, ...props }: SkeletonProps) {
	return <div className={skeletonStyles({ rounded, className })} {...props} />;
}
