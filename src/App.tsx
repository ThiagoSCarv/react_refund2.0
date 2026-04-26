import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "./components/Button";
import { IconButton } from "./components/IconButton";
import { InputText } from "./components/InputText";

function App() {
	return (
		<>
			<div className="flex flex-col gap-2.5">
				<Button variant="primary">Label</Button>
				<Button disabled>Label</Button>
				<Button isLoading>Salvando...</Button>
			</div>
			<div className="flex flex-col gap-1.5">
				<IconButton icon={MagnifyingGlassIcon} />
				<IconButton icon={MagnifyingGlassIcon} disabled />
				<IconButton icon={MagnifyingGlassIcon} isLoading />
			</div>
			<div className="flex flex-col gap-1.5">
				<InputText label="Título" placeholder="Placeholder" id="campo" />
				<InputText
					label="Título"
					placeholder="Placeholder"
					id="campo"
					disabled
				/>
			</div>
		</>
	);
}

export default App;
