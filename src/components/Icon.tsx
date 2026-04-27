import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { tv, type VariantProps } from "tailwind-variants";

const iconStyles = tv({
	base: "inline-flex items-center justify-center rounded-full w-9 h-9",
	variants: {
		variant: {
			default: "bg-gray-400 text-green-100 ",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type IconVariants = VariantProps<typeof iconStyles>;

import type { IconWeight } from "@phosphor-icons/react";

interface IconProps extends IconVariants {
	icon: PhosphorIcon;
	size?: number;
	weight?: IconWeight;
	className?: string;
}

export function Icon({
	icon: IconComponent,
	variant,
	size = 18,
	weight = "fill",
	className,
}: IconProps) {
	return (
		<div className={iconStyles({ variant, className })}>
			<IconComponent size={size} weight={weight} />
		</div>
	);
}
