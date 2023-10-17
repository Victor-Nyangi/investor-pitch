import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register, reset } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup'

const Register = () => {
    const [isDisabled, setIsdisabled] = useState(false)
    const registerSchema = object().shape({
        name: string().required('please enter your emai')
            .max(15, 'your name must be 15 characters or less')
            .min(4, 'your name must be 4 characters or more'),
        email: string().email('invalid email').required('please enter your email'),
        profession: string().required('please enter your profession')
            .min(4, 'your profession must be 4 characters or more'),
        password: string().required('please enter your password')
            .min(8, 'your password must be 8 characters or more')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Min 8 characters, please include a capital letter, a number and a special character'),
        password2: string().required('please confirm password')
            .min(8, 'your password must be 8 characters or more')
            .oneOf([ref('password')], 'password must match with previous'),
    })

    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );


    if (isLoading) {
        return <Spinner />;
    }
    return (
        <>
            <section className="my-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="Fine FInance logo" />
                        FineFinance
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Register
                            </h1>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    profession: "",
                                    password: "",
                                    password2: ""
                                }}
                                validationSchema={registerSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    setIsdisabled(true)
                                    dispatch(register({ ...values }));
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your full names</label>
                                            <Field name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="Full Names" />
                                            {errors.name && touched.name ? (
                                                <small className="text-red-600">{errors.name}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                            <Field name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="name@company.com" />
                                            {errors.email && touched.email ? (
                                                <small className="text-red-600">{errors.email}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900">Profession</label>
                                            <Field name="profession" type="text" id="profession" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="Your Profession" />
                                            {errors.profession && touched.profession ? (
                                                <small className="text-red-600">{errors.profession}</small>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <Field name="password" type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" autoComplete="false" />
                                            {errors.password && touched.password ? <small className="text-red-600">{errors.password}</small>
                                                : null}
                                        </div>
                                        <div>
                                            <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                            <Field name="password2" type="password" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" autoComplete="false" />
                                            {errors.password2 && touched.password2 ? <small className="text-red-600">{errors.password2}</small>
                                                : null}
                                        </div>

                                        <button type="button" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={isDisabled}>Register</button>
                                        <div className="relative my-4">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 text-neutral-600 bg-white"> Or continue with </span>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                <div className="flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                                        <defs>
                                                            <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlinkHref="#a" overflow="visible" />
                                                        </clipPath>
                                                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                                        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                                        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                                    </svg>
                                                    <span className="ml-4"> Log in with Google</span>
                                                </div>
                                            </button>
                                        </div>

                                        <p className="text-sm font-light text-gray-500">
                                            Already have an account? <Link to="/login" className="font-medium text-green-600 hover:underline">Sign In here</Link>
                                        </p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Register