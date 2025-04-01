import React, { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [details, setDetails] = useState({ name: '', email: '', password: '' });
    let navigate=useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(details),
            });

            if (!response.ok) throw new Error("Server Error");

            const data = await response.json();
            console.log("Response:", data);

            if (data.success) {
                alert("Signup Successful!");
                navigate("/login");
            } else {
                alert("Signup Failed. Check your details.");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Something went wrong! Please try again.");
        }
    };

    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" name='name' value={details.name} onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='form-label'>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={details.email} onChange={onchange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='form-label' >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={onchange} value={details.password} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>


    );
};

export default Signup;
