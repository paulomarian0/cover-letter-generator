import type { PropsWithChildren } from "react";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppRoutes = ({}: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<section className="flex flex-col min-h-screen pb-4 bg-gray-50">
				<Header />
				<PublicRoutes />
				<Footer />
			</section>
		</BrowserRouter>
	);
};

export default AppRoutes;
