import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useContext } from "react";
import { MobileHandlerContext } from "../Context/mobileHandler";
import NavBar from "../components/NavBar";
import { useNavigationLinks } from "../Context/LinksProvider";
import NavigationLink from "../components/NavigationLink";

// const NavigationsLinks = [
// 	{ id: 1, title: "Overview", link: "/" },
// 	{ id: 2, title: "Facebook", link: "/facebook" },
// 	{ id: 3, title: "Twitter", link: "/twitter" },
// 	{ id: 4, title: "Instagram", link: "/instagram" },
// ];

function Layout() {
	const { isMobile } = useContext(MobileHandlerContext);
	const { navigationLinks } = useNavigationLinks();
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<main className="container mx-auto md:p-4 p-2 overflow-x-scroll">
				<div className="flex max-w-full">
					{!isMobile && <SideBar />}
					<div className="flex-1 flex flex-col gap-4 max-w-full">
						{/* Navigation */}
						<nav className="bg-white shadow-md md:p-4 p-2 rounded-md max-w-full relative">
							<div className=" mx-auto flex space-x-6 overflow-x-auto">
								{navigationLinks.map((link) => (
									<NavigationLink
										key={link.id}
										link={link.link}
										title={link.title}
									/>
								))}
							</div>
						</nav>

						{/* Main Content */}
						<NavBar />
						<div className="bg-white shadow-sm rounded-md md:p-6 p-3 mt-4">
							<Outlet />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Layout;
