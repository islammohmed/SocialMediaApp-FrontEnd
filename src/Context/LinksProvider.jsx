import { createContext, useContext, useState } from "react";

const NavigationLinks = createContext();
const useNavigationLinks = () => {
	const context = useContext(NavigationLinks);
	if (!context) {
		throw new Error(
			"useNavigationLinks must be used within NavigationLinksProvider"
		);
	}
	return context;
};
function LinksProvider({ children }) {
	const [navigationLinks, setNavigationLinks] = useState([
		{ id: 0, title: "Overview", link: "/" },
	]);
	console.log(navigationLinks);

	return (
		<NavigationLinks.Provider value={{ navigationLinks, setNavigationLinks }}>
			{children}
		</NavigationLinks.Provider>
	);
}

export { LinksProvider, useNavigationLinks };
