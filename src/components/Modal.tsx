import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

import { Button } from "./Button";

interface ModalProps {
	title: string;
	description?: string;
	onConfirm?: () => void;
	children: ReactNode;
}

export function Modal({ title, description, onConfirm, children }: ModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-100/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

				<Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl p-10 flex flex-col gap-6 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
					<div className="flex flex-col gap-2">
						<Dialog.Title className="text-xl font-bold text-gray-100">
							{title}
						</Dialog.Title>

						{description && (
							<Dialog.Description className="text-sm text-gray-200">
								{description}
							</Dialog.Description>
						)}
					</div>

					<div className="flex items-center justify-end gap-6">
						<Dialog.Close asChild>
							<button
								type="button"
								className="text-sm font-semibold text-green-200 hover:text-green-100 transition-colors duration-150 cursor-pointer"
							>
								Cancelar
							</button>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Button className="w-auto" onClick={onConfirm}>
								Confirmar
							</Button>
						</Dialog.Close>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
