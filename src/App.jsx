import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import SocialDashboard from "./pages/SocialDashboard";

import Sign from "./pages/Sign";
import RequireAuth from "./pages/RequireAuth";
import SocialMediaAppDashboard from "./pages/SocialMediaAppDashboard";

function App() {
	// const x = window.location.pathname;
	// console.log(x.split("/")[x.split("/").length - 1]);
	const routes = createBrowserRouter([
		{
			path: "/",
			element: (
				<RequireAuth>
					<Layout />
				</RequireAuth>
			),
			children: [
				{
					index: true,
					element: <SocialDashboard />,
				},
				{
					path: "/socialmedia/*",
					element: <SocialMediaAppDashboard />,
					// loader:,
				},
			],
		},
		{
			path: "/sign",
			element: <Sign />,
		},
	]);

	return <RouterProvider router={routes} />;
}

export default App;
