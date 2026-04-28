import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { IconButton } from "../components/IconButton";
import { InputText } from "../components/InputText";
import { RefundsList } from "../contexts/refunds/components/RefundsList";
import type { Refund } from "../contexts/refunds/types";

const ALL_REFUNDS: Refund[] = [
	{
		id: "1",
		title: "Rodrigo",
		category: "food",
		value: 34.78,
		receipt: {
			id: "r1",
			originalFilename: "nota",
			filename: "nota-1",
			path: "uploads/nota-1.jpeg",
			extname: "jpeg",
			refundId: "1",
		},
	},
	{
		id: "2",
		title: "Tamires",
		category: "lodging",
		value: 1200.0,
		receipt: {
			id: "r2",
			originalFilename: "nota",
			filename: "nota-2",
			path: "uploads/nota-2.jpeg",
			extname: "jpeg",
			refundId: "2",
		},
	},
	{
		id: "3",
		title: "Lara",
		category: "food",
		value: 12.35,
		receipt: {
			id: "r3",
			originalFilename: "nota",
			filename: "nota-3",
			path: "uploads/nota-3.jpeg",
			extname: "jpeg",
			refundId: "3",
		},
	},
	{
		id: "4",
		title: "Elias",
		category: "transport",
		value: 47.65,
		receipt: {
			id: "r4",
			originalFilename: "nota",
			filename: "nota-4",
			path: "uploads/nota-4.jpeg",
			extname: "jpeg",
			refundId: "4",
		},
	},
	{
		id: "5",
		title: "Thiago",
		category: "services",
		value: 99.9,
		receipt: {
			id: "r5",
			originalFilename: "nota",
			filename: "nota-5",
			path: "uploads/nota-5.jpeg",
			extname: "jpeg",
			refundId: "5",
		},
	},
	{
		id: "6",
		title: "Vinicius",
		category: "other",
		value: 25.89,
		receipt: {
			id: "r6",
			originalFilename: "nota",
			filename: "nota-6",
			path: "uploads/nota-6.jpeg",
			extname: "jpeg",
			refundId: "6",
		},
	},
	{
		id: "7",
		title: "Ana",
		category: "food",
		value: 58.4,
		receipt: {
			id: "r7",
			originalFilename: "nota",
			filename: "nota-7",
			path: "uploads/nota-7.jpeg",
			extname: "jpeg",
			refundId: "7",
		},
	},
	{
		id: "8",
		title: "Carlos",
		category: "lodging",
		value: 870.0,
		receipt: {
			id: "r8",
			originalFilename: "nota",
			filename: "nota-8",
			path: "uploads/nota-8.jpeg",
			extname: "jpeg",
			refundId: "8",
		},
	},
	{
		id: "9",
		title: "Beatriz",
		category: "transport",
		value: 33.0,
		receipt: {
			id: "r9",
			originalFilename: "nota",
			filename: "nota-9",
			path: "uploads/nota-9.jpeg",
			extname: "jpeg",
			refundId: "9",
		},
	},
	{
		id: "10",
		title: "Fernando",
		category: "services",
		value: 210.5,
		receipt: {
			id: "r10",
			originalFilename: "nota",
			filename: "nota-10",
			path: "uploads/nota-10.jpeg",
			extname: "jpeg",
			refundId: "10",
		},
	},
	{
		id: "11",
		title: "Julia",
		category: "other",
		value: 19.99,
		receipt: {
			id: "r11",
			originalFilename: "nota",
			filename: "nota-11",
			path: "uploads/nota-11.jpeg",
			extname: "jpeg",
			refundId: "11",
		},
	},
	{
		id: "12",
		title: "Marcos",
		category: "food",
		value: 76.3,
		receipt: {
			id: "r12",
			originalFilename: "nota",
			filename: "nota-12",
			path: "uploads/nota-12.jpeg",
			extname: "jpeg",
			refundId: "12",
		},
	},
	{
		id: "13",
		title: "Patricia",
		category: "transport",
		value: 91.0,
		receipt: {
			id: "r13",
			originalFilename: "nota",
			filename: "nota-13",
			path: "uploads/nota-13.jpeg",
			extname: "jpeg",
			refundId: "13",
		},
	},
	{
		id: "14",
		title: "Ricardo",
		category: "lodging",
		value: 450.0,
		receipt: {
			id: "r14",
			originalFilename: "nota",
			filename: "nota-14",
			path: "uploads/nota-14.jpeg",
			extname: "jpeg",
			refundId: "14",
		},
	},
	{
		id: "15",
		title: "Camila",
		category: "services",
		value: 130.75,
		receipt: {
			id: "r15",
			originalFilename: "nota",
			filename: "nota-15",
			path: "uploads/nota-15.jpeg",
			extname: "jpeg",
			refundId: "15",
		},
	},
	{
		id: "16",
		title: "Eduardo",
		category: "food",
		value: 44.2,
		receipt: {
			id: "r16",
			originalFilename: "nota",
			filename: "nota-16",
			path: "uploads/nota-16.jpeg",
			extname: "jpeg",
			refundId: "16",
		},
	},
	{
		id: "17",
		title: "Simone",
		category: "other",
		value: 310.0,
		receipt: {
			id: "r17",
			originalFilename: "nota",
			filename: "nota-17",
			path: "uploads/nota-17.jpeg",
			extname: "jpeg",
			refundId: "17",
		},
	},
	{
		id: "18",
		title: "Leonardo",
		category: "transport",
		value: 62.5,
		receipt: {
			id: "r18",
			originalFilename: "nota",
			filename: "nota-18",
			path: "uploads/nota-18.jpeg",
			extname: "jpeg",
			refundId: "18",
		},
	},
];

const PAGE_SIZE = 6;

export function PageHome() {
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	const filtered = ALL_REFUNDS.filter((r) =>
		r.title.toLowerCase().includes(search.toLowerCase()),
	);

	const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
	const refunds = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	function handleSearch(value: string) {
		setSearch(value);
		setPage(1);
	}

	return (
		<main className="flex items-center justify-center p-10">
			<div className="bg-white rounded-2xl p-10 w-full max-w-272 flex flex-col gap-8">
				<h1 className="text-2xl font-bold text-gray-100">Solicitações</h1>

				<div className="flex gap-3">
					<div className="flex-1">
						<InputText
							placeholder="Pesquisar pelo nome"
							value={search}
							onChange={(e) => handleSearch(e.target.value)}
						/>
					</div>
					<IconButton icon={MagnifyingGlassIcon} />
				</div>

				<RefundsList
					refunds={refunds}
					page={page}
					totalPages={totalPages}
					onPrevPage={() => setPage((p) => Math.max(1, p - 1))}
					onNextPage={() => setPage((p) => Math.min(totalPages, p + 1))}
					onSelectRefund={(id) => navigate(`/refunds/${id}`)}
				/>
			</div>
		</main>
	);
}
