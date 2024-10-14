import AxiosHandler from "./../utils/AxiosHandler";
export const SignUp = async (formData) => {
	try {
		const { data } = await AxiosHandler.post("/auth/signup", formData);
		return { data };
	} catch (error) {
		return error.response.data || "error in signUp try again later.";
	}
};
export const SignIn = async (formData) => {
	try {
		const { data } = await AxiosHandler.post("/auth/signin", formData);
		return { data };
	} catch (error) {
		return error.response.data || "error in signUp try again later.";
	}
};
