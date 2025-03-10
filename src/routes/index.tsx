import type { PropsWithChildren } from "react";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = ({}: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<PublicRoutes />
		</BrowserRouter>
	);
};

export default AppRoutes;
