import { Bed, Car, CaretLeft, CaretRight, ForkKnife, Receipt, Wrench } from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

import { IconButton } from "../../../components/IconButton";
import { ListItem } from "../../../components/ListItem";
import { Skeleton } from "../../../components/Skeleton";
import type { Refund } from "../types";

const categoryConfig: Record<string, { label: string; icon: PhosphorIcon }> = {
	food: { label: "Alimentação", icon: ForkKnife },
	lodging: { label: "Hospedagem", icon: Bed },
	hosting: { label: "Hospedagem", icon: Bed },
	transport: { label: "Transporte", icon: Car },
	services: { label: "Serviços", icon: Wrench },
	other: { label: "Outros", icon: Receipt },
};

const defaultCategory = { label: "Outros", icon: Receipt };

interface RefundsListProps {
	refunds: Refund[];
	page: number;
	totalPages: number;
	onPrevPage: () => void;
	onNextPage: () => void;
	isLoading?: boolean;
}

export function RefundsList({
	refunds,
	page,
	totalPages,
	onPrevPage,
	onNextPage,
	isLoading = false,
}: RefundsListProps) {
	return (
		<div className="flex flex-col gap-6">
			<ul className="flex flex-col">
				{isLoading
					? Array.from({ length: 8 }).map((_, i) => (
							<Skeleton key={i} className="w-full h-12" />
						))
					: refunds.map((refund) => {
							const config = categoryConfig[refund.category] ?? defaultCategory;

							return (
								<ListItem
									key={refund.id}
									icon={config.icon}
									name={refund.title}
									category={config.label}
									amount={refund.value}
								/>
							);
						})}
			</ul>

			<div className="flex items-center justify-center gap-4">
				<IconButton
					icon={CaretLeft}
					onClick={onPrevPage}
					disabled={page <= 1}
				/>
				<span className="text-sm font-medium text-gray-200">
					{page}/{totalPages}
				</span>
				<IconButton
					icon={CaretRight}
					onClick={onNextPage}
					disabled={page >= totalPages}
				/>
			</div>
		</div>
	);
}
