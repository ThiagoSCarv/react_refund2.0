import { Link, Outlet, useNavigate } from "react-router";
import Logo from "../../public/Logo.svg";

import { Button } from "../components/Button";
import { NavLink } from "../components/NavLink";

function Header() {
	const navigate = useNavigate();

	return (
		<header className="flex items-center justify-between bg-gray-400 py-10 px-[5.7rem]">
			<Link to="/">
				<img src={Logo} alt="refund" />
			</Link>

			<nav className="flex items-center gap-8">
				<NavLink to="/" className="font-bold">
					Solicitações de reembolso
				</NavLink>
				<Button className="w-auto" onClick={() => navigate("/new-refund")}>
					Nova solicitação
				</Button>
			</nav>
		</header>
	);
}

export function LayoutMain() {
	return (
		<div className="min-h-screen">
			<Header />
			<Outlet />
		</div>
	);
}
