import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBarProvide from "./Context/NavBarProvide.jsx";
import { MobileHandlerProvider } from "./Context/mobileHandler.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";
import Modal from "./components/Modal.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LinksProvider } from "./Context/LinksProvider.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<MobileHandlerProvider>
			<LinksProvider>
				<ModalProvider>
					<AuthProvider>
						<NavBarProvide>
							<App />
							<Modal />
						</NavBarProvide>
					</AuthProvider>
				</ModalProvider>
			</LinksProvider>
		</MobileHandlerProvider>
	</QueryClientProvider>
);
