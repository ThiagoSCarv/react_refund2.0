import { BrowserRouter, Route, Routes } from "react-router";

import { LayoutMain } from "./pages/LayoutMain";
import { NewRefund } from "./pages/NewRefund";
import { PageHome } from "./pages/PageHome";
import { RefundDetails } from "./pages/RefundDetails";
import { RequestSent } from "./pages/RequestSent";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/refunds/:id" element={<RefundDetails />} />
					<Route path="/new-refund" element={<NewRefund />} />
					<Route path="/request-sent" element={<RequestSent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
	}

export default App;
