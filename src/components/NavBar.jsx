import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MobileHandlerContext } from "../Context/mobileHandler";
import {
	CircleX,
	HelpCircle,
	Home,
	LockIcon,
	MessageCircleIcon,
	User,
} from "lucide-react";
import { NavBarContext } from "../Context/NavBarProvide";

function NavBar() {
	const { openNav, setOpenNav } = useContext(NavBarContext);
	const { isMobile } = useContext(MobileHandlerContext);
	const [currentPath, setCurrentPath] = useState(
		window.location.pathname.slice(1)
	);

	const navLinks = [
		{
			id: 0,
			name: "Home",
			link: "/",
			icon: <Home />,
		},
		{
			id: 1,
			name: "Messages",
			link: "/Products",
			icon: <MessageCircleIcon />,
		},
		{
			id: 2,
			name: "Account",
			link: "/ContactUs",
			icon: <User />,
		},
		{
			id: 3,
			name: "Privacy",
			link: "/ContactUs",
			icon: <LockIcon />,
		},
		{
			id: 4,
			name: "Help",
			link: "/ContactUs",
			icon: <HelpCircle />,
		},
	];

	const controls = useAnimation();
	const location = useLocation();

	useEffect(() => {
		setCurrentPath(location.pathname.slice(1));
	}, [location.pathname]);
	useEffect(() => {
		return setOpenNav(false);
	}, []);
	useEffect(() => {
		if (open) {
			controls.start({ x: 0, opacity: 1 });
		} else {
			controls.start({ x: -100, opacity: 0 });
		}
	}, [open, controls]);

	function handleClose() {
		setOpenNav(false);
	}

	return (
		<>
			{
				<AnimatePresence>
					{openNav && isMobile && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								onClick={handleClose}
								className="left-0 top-0 h-full z-20 fixed inset-0 overflow-hidden bg-black bg-opacity-50"
							></motion.div>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={openNav ? { opacity: 1, x: 0 } : {}}
								exit={{ x: -100, opacity: 0 }}
								transition={{ duration: 0.5 }}
								className={`fixed ${
									openNav ? "" : "hidden"
								} left-0 top-0 z-[999] w-[55%] lg:top-5`}
							>
								<ul
									className={`flex h-screen w-full flex-col items-start justify-start gap-10 bg-white p-3 backdrop-blur-lg lg:hidden`}
								>
									<button
										aria-label="clos sidebar"
										className="text-4xl text-black"
										onClick={() => handleClose()}
									>
										<CircleX />
									</button>
									{navLinks.map((item, index) => {
										return (
											<motion.li
												initial={{ opacity: 0, x: -100 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													delay: 0.2 * item.id,
													ease: [0.17, 0.55, 0.55, 1],
												}}
												className={`relative  text-lg before:absolute before:bottom-[-5px] before:left-0 before:h-[3px] before:w-0 before:bg-slate-950 before:transition-all before:duration-300 hover:before:w-full ${
													currentPath === item.name ||
													window.location.pathname === item.link
														? "before:w-full"
														: ""
												}`}
												key={index}
											>
												<NavLink
													to={`${item.link}`}
													onClick={() => {
														handleClose();
													}}
													className="cursor-pointer capitalize flex gap-2"
												>
													{item.icon}
													{item.name}
												</NavLink>
											</motion.li>
										);
									})}
								</ul>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			}
		</>
	);
}

export default NavBar;
