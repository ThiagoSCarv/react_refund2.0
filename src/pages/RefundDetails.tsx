import { useParams } from "react-router";

export function RefundDetails() {
	const { id } = useParams<{ id: string }>();

	return (
		<main>
			<h1>Refund Details</h1>
			<p>ID: {id}</p>
		</main>
	);
}
