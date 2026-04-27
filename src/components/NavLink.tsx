import { NavLink as RouterNavLink, type NavLinkProps } from "react-router";
import { tv, type VariantProps } from "tailwind-variants";

const navLinkStyles = tv({
	base: [
		"text-sm font-medium",
		"text-gray-200 transition-colors duration-150",
		"hover:text-green-200",
	],
	variants: {
		isActive: {
			true: "text-green-200",
		},
	},
});

type NavLinkVariants = VariantProps<typeof navLinkStyles>;

type CustomNavLinkProps = Omit<NavLinkProps, "className"> &
	NavLinkVariants & {
		className?: string;
	};

export function NavLink({ children, className, ...props }: CustomNavLinkProps) {
	return (
		<RouterNavLink
			className={({ isActive }) => navLinkStyles({ isActive, className })}
			{...props}
		>
			{children}
		</RouterNavLink>
	);
}
