import React from 'react';
import { Helmet } from 'react-helmet';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <nav className=" bg-gray-100 text-gray-900 flex justify-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>FIRM - Register</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-2 flex flex-col items-center">
              <h1 className='text-violet-950 text-3xl'>Register Now</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text" placeholder="Username" />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email" placeholder="Email" />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" placeholder="Password" />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-violet-700 text-white-500 w-full py-4 rounded-lg hover:bg-violet-950 text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <FaSignInAlt />
                    <span className="ms-2">
                      Register Now
                    </span>
                  </button>

                  <p className='mt-2 text-center text-slate-700'>Already have an Account <Link className='text-blue-700' to='/login'>Login Now</Link> </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Cartesian Kinetics
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white text-center hidden lg:flex">
            <div className="  w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg?w=740&t=st=1715942563~exp=1715943163~hmac=c21c25abd8fff4775ed10108dafb5c73e0ba3acbb306e6a766adcc36d0cc66e3')" }}>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Register;
