import { NewRefundForm } from "../contexts/refunds/components/NewRefundForm";

export function NewRefund() {
	return (
		<main className="flex items-center justify-center p-10">
			<div className="bg-white rounded-2xl p-10 w-full max-w-lg flex flex-col gap-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold text-gray-100">
						Nova solicitação de reembolso
					</h1>
					<p className="text-sm text-gray-200">
						Dados da despesa para solicitar reembolso.
					</p>
				</div>

				<NewRefundForm />
			</div>
		</main>
	);
}
