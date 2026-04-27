import { Outlet } from "react-router";

export function LayoutMain() {
	return (
		<div className="min-h-screen bg-gray-500">
			<Outlet />
		</div>
	);
}
