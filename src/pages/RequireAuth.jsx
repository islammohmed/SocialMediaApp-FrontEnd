import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Fixed the import (it's not a named import)

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { auth, setAuth } = useAuth();
	const [loading, setLoading] = useState(true); // Add a loading state

	// Utility to verify token
	const verifyToken = () => {
		try {
			const token = localStorage?.getItem("token");
			if (!token) return;

			const decodedToken = jwtDecode(token);
			const tokenLifetimeInMinutes =
				(decodedToken.exp - decodedToken.iat) / 60 / 60 / 24;
			console.log(`Token lifetime: ${tokenLifetimeInMinutes} days`);
		} catch (error) {
			console.error("Failed to verify token:", error);
		}
	};

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

	// Verify token on mount
	useEffect(() => {
		verifyToken();
	}, []);

	// Check JWT cookie and logout if missing
	useEffect(() => {
		const jwt = Cookies.get("jwt");
		if (!jwt) {
			handleLogout();
		} else {
			console.log("JWT Cookie exists:", jwt);
		}
	}, []);

	// Set auth state based on localStorage on mount
	useEffect(() => {
		const user = localStorage.getItem("user");
		const token = localStorage.getItem("token");

		if (user && token) {
			const parsedUser = JSON.parse(user);
			setAuth({
				user: parsedUser,
				token: token,
			});
		}
		setLoading(false); // Loading complete after auth state is set
	}, [setAuth]);

	// Debug auth state updates
	useEffect(() => {
		console.log("Updated auth state:", auth);
	}, [auth]);

	// Show loading state while checking auth
	if (loading) {
		return <div>Loading...</div>; // Render a loading state or spinner while checking auth
	}

	// If user is authenticated, allow access to the route
	if (auth?.user) {
		return children;
	}

	// If user is not authenticated, navigate to the login page
	return <Navigate to="/sign" state={{ from: location }} replace />;
};

export default RequireAuth;
