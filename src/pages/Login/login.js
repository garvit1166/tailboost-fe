import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useUser from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserLoggedIn, setUserName } = useUser();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/', {
        email,
        password,
      });
      const { user } = response.data;
      toast.success('Login successful');
      const expirationTime=new Date(new Date().getTime()+60000);
      Cookies.set('auth',JSON.stringify(user),{expires:expirationTime});
      //setUserLoggedIn(true);
      setUserName(user.name);

      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Signup failed. Please try again.');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 login bg-primary">
      <div className="form_container 50-w p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login to your account</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            ></input>
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-dark">Log In</button>
          </div>
          <ToastContainer />
          <p className="text-center mt-2">
            New to my App?{' '}
            <Link to="/signup" className="mt-2">
              {' '}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
