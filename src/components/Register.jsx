import React, {  useState } from "react";
import { toast } from "react-toastify";
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        profession: "",
        password: "",
        password2: "",
    });

    const { name, email, profession, password, password2 } = formData;




    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                name,
                email,
                profession,
                password,
            };
            console.log('Success')
        }
    };


    return (
        <>
            <div className="col-auto md:col-span-4">
                <p className="pt-2 pb-4 font-bold text-green-600">Join us now</p>

                <p className="text-xs text-center text-gray-600">By signing up you agree to our <a href="!#" className="text-primary">Terms of Service</a></p>
            </div>
        </>
    )
}

export default Register