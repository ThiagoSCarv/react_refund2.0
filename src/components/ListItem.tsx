import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

import { Icon } from "./Icon";

const listItemStyles = tv({
	base: "flex items-center justify-between w-full h-12 gap-3",
});

interface ListItemProps extends ComponentProps<"li"> {
	icon: PhosphorIcon;
	name: string;
	category: string;
	amount: number;
}

export function ListItem({
	icon,
	name,
	category,
	amount,
	className,
	...props
}: ListItemProps) {
	const formatted = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(amount);

	return (
		<li className={listItemStyles({ className })} {...props}>
			<div className="flex items-center gap-3">
				<Icon icon={icon} />
				<div className="flex flex-col">
					<span className="text-sm text-gray-100 font-bold">{name}</span>
					<span className="text-xs text-gray-200">{category}</span>
				</div>
			</div>

			<span className="text-sm text-gray-200 font-bold">{formatted}</span>
		</li>
	);
}
