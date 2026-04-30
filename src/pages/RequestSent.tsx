import { CheckCircleIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

import { Button } from "../components/Button";

export function RequestSent() {
	const navigate = useNavigate();

	return (
		<main className="flex items-center justify-center p-10">
			<div className="bg-white rounded-2xl p-10 w-full max-w-lg flex flex-col items-center gap-6 text-center">
				<h1 className="text-2xl font-bold text-green-200">
					Solicitação enviada!
				</h1>

				<CheckCircleIcon
					size={96}
					weight="light"
					className="text-green-200"
				/>

				<p className="text-sm text-gray-200">
					Agora é apenas aguardar! Sua solicitação será analisada e, em breve,
					o setor financeiro irá entrar em contato com você.
				</p>

				<Button className="w-full" onClick={() => navigate("/new-refund")}>
					Nova solicitação
				</Button>
			</div>
		</main>
	);
}
