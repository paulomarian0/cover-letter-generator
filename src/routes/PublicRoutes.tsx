import LandingPage from "@/components/LandingPage";
import PDFReader from "@/components/PDFReader";
import { Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/*" element={<LandingPage />} />
			<Route path="/generate-cover-letter" element={<PDFReader />} />
		</Routes>
	);
};

export default PublicRoutes;
