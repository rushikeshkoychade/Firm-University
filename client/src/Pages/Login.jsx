import React from 'react';
import { Helmet } from 'react-helmet';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <nav className=" bg-gray-100 text-gray-900 flex justify-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>FIRM - Login</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-2 flex flex-col items-center">
              <h1 className='text-violet-950 text-3xl'>Login Now</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email" placeholder="Email" />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" placeholder="Password" />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-violet-700 text-white-500 w-full py-4 rounded-lg hover:bg-violet-950 text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <SiGnuprivacyguard />
                    <span className="ms-2">
                      Login Now
                    </span>
                  </button>

                  <p className='mt-2 text-center text-slate-700'>You dont't have an Account <Link className='text-blue-700' to='/register'>Register Now</Link> </p>
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
            <div className=" w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?t=st=1715943544~exp=1715947144~hmac=82b29ec58d8e3999366eff80de4bfc9ced40d8459461ffd3533a7461cb010da2&w=740')" }}>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Login;
