import React from 'react';
import login from './../assets/login.svg'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center">
            <span>
        <img src={login} className='w-44' />
        </span>
      <div className="bg-white p-8  w-full">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <button
          type="button"
          className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:shadow-outline"
        >
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Icon" className="mr-2" />
          Continue with Google
        </button>
        <div className="mt-4 text-center">
          <Link to={'/auth/login'} className="text-sm text-purple-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
