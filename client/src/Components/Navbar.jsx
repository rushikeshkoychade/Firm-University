import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-rose-800 shadow shadow-gray-300 w-100 px-24 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-white md:order-1 font-serif">
                        <h1 className='uppercase text-3xl'>Firm</h1>
                        <h2 className='text-xs uppercase px-1'>University</h2>
                    </div>
                    <div className="text-white order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            {/* Active Link = text-indigo-500
                            Inactive Link = hover:text-indigo-500 */}
                            <li className="md:px-4 md:py-2 text-white"><a href="/">Home</a></li>
                            <li className="md:px-4 md:py-2"><Link to="/about">About</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/administration">Administration</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/admission">Admission</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/course">Course</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/programs">Programs</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/placements">Placements</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/career">Career</Link></li>
                            <li className="md:px-4 md:py-2"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                   
                    <div className="order-2 md:order-3">
                        <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg" alt="pp" 
                        className='rounded-full w-14'/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
