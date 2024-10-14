import { createContext, useState } from "react";

export const NavBarContext = createContext(false);
function NavBarProvide({ children }) {
	const [openNav, setOpenNav] = useState(false);
	return (
		<NavBarContext.Provider value={{ openNav, setOpenNav }}>
			{children}
		</NavBarContext.Provider>
	);
}

export default NavBarProvide;
