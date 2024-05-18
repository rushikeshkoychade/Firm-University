import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='bg-gray-300 flex p-6 px-16 ' style={{ backgroundImage: "url('https://intranet.birmingham.ac.uk/staff/images/brand/download/Aston-Webb.jpg')", backgroundRepeat: 'no-repeat' }}>
                <div className='bg-white rounded-md sm:w-0 md:w-[400px] border border-blue-950'>
                    <div className="rounded-xl text-rose-700 p-2 flex">
                        <img className='h-36 rounded-xl' src="https://r2.erweima.ai/imgcompressed/compressed_de11c9c1ac8aeebf41bc099af65e3237.webp" alt="clgLogo" />
                        <div className='ps-2 ms-3 text-center '>
                            <h1 className='font-serif text-7xl'>FIRM</h1>
                            <h2 className='font-serif text-3xl'>UNIVERSITY</h2>
                            <h3 className='font-serif text-3xl'>-----PUNE-----</h3>
                        </div>
                    </div>
                    <hr className='border border-blue-950' />
                    <div className='italic text-center m-2 text-2xl text-blue-800'>
                        Legacy in Education Since 1999
                    </div>
                </div>

                <div className='ms-[37%]  bg-violet-950 text-pink-400 border border-white rounded-xl p-4'>
                    <div className='flex justify-center'>
                        <div className='flex items-center'>
                            |
                            <span className='mx-2 mt-1 '><BiMessageAltDetail /> </span>
                            <span className='me-2 mt-1 '> firmuniversity@gmail.com</span>|
                        </div>
                        <div className='flex items-center '>
                            <span className='mx-2 mt-1 '><IoCallOutline /></span>
                            <span className='me-2 mt-1 '>+91 98745 12365</span>|
                        </div>
                    </div>
                    <hr className='border-white my-3' />
                    <div className='mt-4'>
                        <p className='underline font-semibold text-center mt-2 text-3xl text-white'>Being the Part of Firm University</p>
                        <div className='flex mt-3 justify-center'>
                            <Link to='/register' className='p-2 mt-4 m-2 border rounded-md w-20 flex justify-center text-white bg-pink-600 font-semibold hover:opacity-80'>Register</Link>
                            <Link to='/login' className='p-2 mt-4 m-2 border rounded-md w-20 flex justify-center text-white bg-pink-600 font-semibold hover:opacity-80'>Login</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header