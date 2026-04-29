import { FileTextIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useParams } from "react-router";

import { Button } from "../components/Button";
import { InputSelect } from "../components/InputSelect";
import { InputText } from "../components/InputText";
import { Modal } from "../components/Modal";
import { Skeleton } from "../components/Skeleton";
import type { Refund } from "../contexts/refunds/types";
import { categoryOptions } from "../utils/selectItems";

const MOCK_REFUND: Refund = {
	id: "1",
	title: "Rodrigo",
	category: "food",
	value: 34.78,
	receipt: {
		id: "r1",
		originalFilename: "rodas-pintadas",
		filename: "rodas-pintadas-u3nd3Eiipi",
		path: "uploads/rodas-pintadas-u3nd3Eiipi.jpeg",
		extname: "jpeg",
		refundId: "1",
	},
};

export function RefundDetails() {
	const { id } = useParams<{ id: string }>();
	const refund = { ...MOCK_REFUND, id: id ?? MOCK_REFUND.id };

	const [isLoading, setIsLoading] = useState(false);

	return (
		<main className="flex items-center justify-center p-10">
			<div className="bg-white rounded-2xl p-10 w-full max-w-[32rem] flex flex-col gap-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold text-gray-100">
						Solicitação de reembolso
					</h1>
					<p className="text-sm text-gray-200">
						Dados da despesa para solicitar reembolso.
					</p>
				</div>

				{isLoading ? (
					<Skeleton className="h-12" />
				) : (
					<InputText
						label="Nome da solicitação"
						value={refund.title}
						readOnly
					/>
				)}

				<div className="flex gap-4">
					{isLoading ? (
						<>
							<Skeleton className="h-12 flex-1" />
							<Skeleton className="h-12 flex-1" />
						</>
					) : (
						<>
							<InputSelect
								label="Categoria"
								options={categoryOptions}
								value={refund.category}
								readOnly
							/>
							<InputText
								label="Valor"
								value={String(refund.value).replace(".", ",")}
								readOnly
							/>
						</>
					)}
				</div>

				{isLoading ? (
					<Skeleton className="h-5 w-40 mx-auto" />
				) : (
					<a
						href={refund.receipt.path}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center gap-2 text-sm font-medium text-green-200 hover:text-green-100 transition-colors duration-150"
					>
						<FileTextIcon size={18} weight="fill" />
						Abrir comprovante
					</a>
				)}

				{isLoading ? (
					<Skeleton className="h-12" />
				) : (
					<Modal
						title="Excluir solicitação"
						description="Tem certeza que deseja excluir essa solicitação? Essa ação é irreversível."
						onConfirm={() => console.log("excluir", refund.id)}
					>
						<Button>Excluir</Button>
					</Modal>
				)}
			</div>
		</main>
	);
}
