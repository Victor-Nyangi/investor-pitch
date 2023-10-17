import React from 'react'
import { LandingTop } from '../components/LandingTop'
import MidBlock from '../components/MidBlock'
import MidCTA from '../components/MidCTA'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Landing = () => {
    return (
        <>
            <LandingTop />
            <MidCTA />
            <MidBlock />
            <section className="px-4 py-24 mx-auto max-w-7xl">
                <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
                    <div className="col-auto text-center md:col-span-7 lg:text-left">
                        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl md:leading-none tracking-none md:tracking-tight">Ready to start your journey?</h1>
                        <p className="mb-10 text-lg font-light text-gray-500 md:text-xl md:tracking-relaxed md:mb-4">
                            A financial tracking tool for private and public financial investors
                        </p>
                    </div>
                    <div className="col-auto md:col-span-4">
                        <Link to="register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-900 hover:text-gray-300 focus:ring-4 focus:ring-green-300 ">
                            Sign Up
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link to="/login" className="inline-flex items-center justify-center px-7 py-3 text-base font-medium text-center text-white bg-black border border-black rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-100 ">
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Landing