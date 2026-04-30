import { Controller, useForm } from "react-hook-form";

import { Button } from "../../../components/Button";
import { InputFile } from "../../../components/InputFile";
import { InputSelect } from "../../../components/InputSelect";
import { InputText } from "../../../components/InputText";
import { categoryOptions } from "../../../utils/selectItems";

interface NewRefundFormData {
	title: string;
	category: string;
	value: string;
	file: FileList;
}

export function NewRefundForm() {
	const {
		register,
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<NewRefundFormData>();

	function onSubmit(data: NewRefundFormData) {
		console.log("POST /receipts →", { file: data.file[0] });

		console.log("POST /refunds →", {
			title: data.title,
			category: data.category,
			value: Number(data.value.replace(",", ".")),
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
			<InputText
				label="Nome da solicitação"
				placeholder=""
				disabled={isSubmitting}
				{...register("title", { required: true })}
			/>

			<div className="flex gap-4">
				<Controller
					name="category"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<InputSelect
							label="Categoria"
							options={categoryOptions}
							value={field.value}
							onChange={field.onChange}
							disabled={isSubmitting}
						/>
					)}
				/>

				<InputText
					label="Valor"
					placeholder="0,00"
					disabled={isSubmitting}
					{...register("value", { required: true })}
				/>
			</div>

			<Controller
				name="file"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<InputFile
						label="Comprovante"
						accept=".pdf,.jpg,.jpeg,.png"
						disabled={isSubmitting}
						onChange={(e) => field.onChange(e.target.files)}
					/>
				)}
			/>

			<Button type="submit" isLoading={isSubmitting}>
				Enviar
			</Button>
		</form>
	);
}
