import { Bell, LogOut, Menu, Search, Settings } from "lucide-react";
import profile from "../assets/reed-profile-square 1.png";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MobileHandlerContext } from "../Context/mobileHandler";
import { NavBarContext } from "../Context/NavBarProvide";
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";

function Header() {
	const { isMobile } = useContext(MobileHandlerContext);
	const { setOpenNav } = useContext(NavBarContext);
	const user = JSON.parse(localStorage.getItem("user"));
	const { setAuth } = useAuth();
	// Utility to handle logout
	const handleLogout = () => {
		try {
			localStorage.removeItem("token");
			Cookies.remove("jwt");
			setAuth(null);
		} catch (error) {
			console.error("Failed to log out:", error);
		}
	};
	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:py-0 py-3 lg:px-8 flex items-center justify-between gap-3">
				{!isMobile && (
					<>
						<div className="flex items-center">
							<img
								src={logo}
								alt="Dashlytics Logo"
								className=" w-[216px] h-[80px]"
							/>
							{/* <span className="text-xl font-bold text-purple-600">Dashlytics</span> */}
						</div>
						<div className="flex-grow mx-4">
							<div className="relative">
								<input
									type="text"
									placeholder="Search..."
									className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								/>
								<div className="absolute left-3 top-2.5">
									<Search className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
					</>
				)}
				<div className="flex items-center space-x-4">
					{isMobile && (
						<button
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<Menu className="h-6 w-6 text-gray-500" />
						</button>
					)}
					<button>
						<Settings className="h-6 w-6 text-gray-500" />
					</button>
					<button>
						<Bell className="h-6 w-6 text-gray-500" />
					</button>
					<button onClick={handleLogout}>
						<LogOut className="h-6 w-6 text-gray-500" />
					</button>
				</div>
				<div className="flex items-center bg-yellow-400 rounded-full px-3 py-1">
					<img
						src={profile}
						alt="User Avatar"
						className="h-6 w-6 rounded-full mr-2"
					/>
					<span className="text-sm font-medium">{user.name}</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
