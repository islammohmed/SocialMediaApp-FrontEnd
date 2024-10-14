import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { SignIn, SignUp } from "../Api/AuthEndPoints";
import useAuth from "./../hooks/useAuth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignInSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().min(6, "Too Short!").required("Required"),
});

const SignUpSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().min(6, "Too Short!").required("Required"),
	rePassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
});

export default function Sign() {
	const { setAuth } = useAuth();
	const [isSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate(); // Create a navigate instance

	const {
		data: signUpData,
		error: signUpError,
		mutate: mutateFnSignUp,
	} = useMutation({
		mutationKey: ["signUp"],
		mutationFn: async (data) => {
			const res = await SignUp(data);
			return res.data;
		},
		onSuccess: (res) => {
			localStorage.setItem("user", JSON.stringify(res.checkEmail));
			localStorage.setItem("token", res.token);
			Cookies.set("jwt", res.token);
			setAuth(res);
			navigate("/"); // Use navigate for redirection
		},
	});

	const {
		data: signinData,
		error: signInError,
		mutate: mutateFnSignIn,
	} = useMutation({
		mutationKey: ["signin"],
		mutationFn: async (data) => {
			const res = await SignIn(data);
			return res.data;
		},
		onSuccess: (res) => {
			localStorage.setItem("user", JSON.stringify(res.checkEmail));
			localStorage.setItem("token", res.token);
			Cookies.set("jwt", res.token);
			setAuth(res);
			navigate("/"); // Use navigate for redirection
		},
	});

	const handleSubmit = (values, { setSubmitting }) => {
		isSignUp ? mutateFnSignUp(values) : mutateFnSignIn(values);
		setSubmitting(false);
	};

	const formik = useFormik({
		initialValues: isSignUp
			? { name: "", email: "", password: "", rePassword: "" }
			: { email: "", password: "" },
		validationSchema: isSignUp ? SignUpSchema : SignInSchema,
		onSubmit: handleSubmit,
	});

	const toggleMode = () => setIsSignUp(!isSignUp);

	useEffect(() => {
		formik.resetForm();
	}, [isSignUp]);

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					{isSignUp ? "Create your account" : "Sign in to your account"}
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<Formik
						initialValues={formik.initialValues}
						validationSchema={formik.validationSchema}
						onSubmit={handleSubmit}
					>
						{({ isSubmitting }) => (
							<Form className="space-y-6">
								{isSignUp && (
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Name
										</label>
										<div className="mt-1">
											<Field
												id="name"
												name="name"
												type="text"
												autoComplete="name"
												required
												className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											/>
											<ErrorMessage
												name="name"
												component="div"
												className="mt-1 text-red-600 text-xs"
											/>
										</div>
									</div>
								)}

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email address
									</label>
									<div className="mt-1">
										<Field
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
										<ErrorMessage
											name="email"
											component="div"
											className="mt-1 text-red-600 text-xs"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700"
									>
										Password
									</label>
									<div className="mt-1">
										<Field
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
										<ErrorMessage
											name="password"
											component="div"
											className="mt-1 text-red-600 text-xs"
										/>
									</div>
								</div>

								{isSignUp && (
									<div>
										<label
											htmlFor="rePassword"
											className="block text-sm font-medium text-gray-700"
										>
											Confirm Password
										</label>
										<div className="mt-1">
											<Field
												id="rePassword"
												name="rePassword"
												type="password"
												autoComplete="new-password"
												required
												className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											/>
											<ErrorMessage
												name="rePassword"
												component="div"
												className="mt-1 text-red-600 text-xs"
											/>
										</div>
									</div>
								)}

								<div>
									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										{isSignUp ? "Sign Up" : "Sign In"}
									</button>
								</div>
							</Form>
						)}
					</Formik>

					<div className="mt-6">
						<button
							onClick={toggleMode}
							className="text-sm text-indigo-600 hover:text-indigo-500"
						>
							{isSignUp
								? "Already have an account? Sign In"
								: "Don't have an account? Sign Up"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
