import { CaretDown, Check } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputSelectStyles = tv({
	slots: {
		wrapper: "relative flex flex-col gap-1 w-full",
		label: "text-xs font-semibold uppercase tracking-wider transition-colors duration-150",
		trigger: [
			"flex items-center justify-between",
			"w-full h-12 px-4 rounded-xl",
			"border-2 bg-transparent",
			"text-sm transition-all duration-150 cursor-pointer",
			"outline-none select-none",
			"disabled:opacity-40 disabled:cursor-not-allowed",
		],
		dropdown: [
			"absolute top-[calc(100%+4px)] left-0 right-0 z-10",
			"bg-white rounded-xl border border-gray-300",
			"shadow-lg overflow-hidden py-1",
		],
		option: [
			"flex w-full items-center justify-between",
			"px-4 py-3 text-sm text-gray-100",
			"cursor-pointer transition-colors duration-100",
			"hover:bg-gray-400",
		],
	},
	variants: {
		isOpen: {
			true: {
				label: "text-green-200",
				trigger: "border-green-200",
			},
			false: {
				label: "text-gray-200",
				trigger: "border-gray-300",
			},
		},
		readOnly: {
			true: {
				trigger: "cursor-default pointer-events-none border-gray-300",
			},
		},
	},
	defaultVariants: {
		isOpen: false,
		readOnly: false,
	},
});

type InputSelectVariants = Omit<VariantProps<typeof inputSelectStyles>, "isOpen">;

export interface SelectOption {
	value: string;
	label: string;
}

interface InputSelectProps extends InputSelectVariants {
	label?: string;
	options: SelectOption[];
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	className?: string;
}

export function InputSelect({
	label,
	options,
	placeholder = "Selecione",
	value,
	onChange,
	disabled = false,
	readOnly = false,
	className,
}: InputSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const selectedOption = options.find((opt) => opt.value === value);
	const styles = inputSelectStyles({ isOpen, readOnly });

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	function handleSelect(optValue: string) {
		onChange?.(optValue);
		setIsOpen(false);
	}

	return (
		<div ref={wrapperRef} className={styles.wrapper({ class: className })}>
			{label && <span className={styles.label()}>{label}</span>}

			<button
				type="button"
				disabled={disabled}
				className={styles.trigger()}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span className={selectedOption ? "text-gray-200" : "text-gray-300"}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<CaretDown
					size={16}
					className={`text-gray-200 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>

			{isOpen && (
				<div className={styles.dropdown()}>
					{options.map((opt) => (
						<button
							key={opt.value}
							type="button"
							className={styles.option()}
							onClick={() => handleSelect(opt.value)}
						>
							<span className={opt.value === value ? "font-semibold" : "font-normal"}>
								{opt.label}
							</span>
							{opt.value === value && <Check size={16} className="text-green-200" />}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
