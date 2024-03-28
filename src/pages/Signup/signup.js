import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import useValue from "../../context/userContext";

function Signup(){
    const {setUserLoggedIn}=useValue();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signup', { name, email, password });
            const { user, token } = response.data;
            // Save token to local storage or session storage
            localStorage.setItem('token', token);
            // Optionally, redirect to dashboard or display a success message
            toast.success('Signup successful');
            setUserLoggedIn(true);
            //setLoggedIn(true);
            window.location.href = '/dashboard';
            // Redirect to dashboard or other page
            // history.push('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle signup failure
            toast.error('Signup failed. Please try again.');
        }
    };
    return(
        <div className='signup template d-flex justify-content-center align-items-center vh-100 signupp'>
           <div className='form_container 50-w p-5 rounded bg-white'> 
                <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Create Account</h3>
                <div className='mb-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check"></input>
                    <label htmlFor="check" className='custom-input-label ms-2'>Remember Me</label>
                </div>
                <div className='d-grid mt-2'>
                    <button className='btn btn-dark'>Sign Up</button>
                </div>
                <p className='text-center mt-2'>
                    Already have an account? <Link to="/" className="mt-2"> Login</Link>
                </p>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}
 export default Signup