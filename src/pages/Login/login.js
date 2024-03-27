import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useState } from "react";

//import { loginUser } from "../libs/apis/login";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

 
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [loggedIn, setLoggedIn] = useState(false);
    // const onSave=async(data)=>{
    //     try{
    //         const res=await loginUser(data);
    //         if (res.data.status === 'success') {
    //             setLoggedIn(true);
    //           }else {
    //             toast.error(res.data.message);
    //           }
    //         console.log('Performance data:', data);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/', { email, password });
            const { user, token } = response.data;
            // Save token to local storage or session storage
            localStorage.setItem('token', token);
            // Optionally, redirect to dashboard or display a success message
            toast.success('Login successful');
            //setLoggedIn(true);
            window.location.href = '/connect';
            // Redirect to dashboard or other page
            // history.push('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle signup failure
            toast.error('Signup failed. Please try again.');
            setEmail("");
            setPassword("");
        }
    };
    // if (loggedIn) {
    //     return <Redirect to='/connect' />;
    // }
    return(
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
           <div className='form_container 50-w p-5 rounded bg-white'> 
                <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Login to your account</h3>
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
                <div className='d-grid'>
                    <button className='btn btn-primary'>Log In</button>
                </div>
                <ToastContainer />
                <p className='text-center mt-2'>
                    New to my App? <Link to="/signup" className="mt-2"> Sign up</Link>
                </p>
                </form>
            </div>
        </div>
    )
}
 export default Login