import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import useValue from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import useUser from '../../context/userContext';

function Signup() {
  let navigate = useNavigate();
  const { setUserLoggedIn } = useValue();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { setUserName } = useUser();

  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tailboost-be-1.onrender.com/signup', {
        name,
        email,
        password,
      });
      const { user } = response.data;
      toast.success('Signup successful');
      setUserLoggedIn(true);
      setUserName(user.name);
      const expirationTime = new Date(new Date().getTime() + 60000);
      Cookies.set("auth", JSON.stringify(user), { expires: expirationTime });

      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Signup failed. Please try again.');
    }
  };
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 signupp">
      <div className="form_container 50-w p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Create Account</h3>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            ></input>
          </div>
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
          <div className="d-grid mt-2">
            <button className="btn btn-dark">Sign Up</button>
          </div>
          <p className="text-center mt-2">
            Already have an account?{' '}
            <Link to="/" className="mt-2">
              {' '}
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
export default Signup;
