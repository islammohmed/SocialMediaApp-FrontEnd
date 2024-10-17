import toast from "react-hot-toast";
import AxiosHandler from "./../utils/AxiosHandler";
export const SignUp = async (formData) => {
	try {
		const { data } = await AxiosHandler.post("/auth/signup", formData);
		return { data };
	} catch (error) {
		toast.error(
			error.response.data.error || "error in signUp try again later."
		);
		return error.response.data || "error in signUp try again later.";
	}
};
export const SignIn = async (formData) => {
	try {
		const { data } = await AxiosHandler.post("/auth/signin", formData);
		return { data };
	} catch (error) {
		toast.error(
			error.response.data.error || "error in signUp try again later."
		);
		return error.response.data || "error in signUp try again later.";
	}
};
