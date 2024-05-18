import React from 'react'
import Carousel from '../Components/Carousel'
import Announcement from '../Components/Announcement';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <main>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>FIRM - Home</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Announcement />

                {/* Carousel  */}
                <div className='flex md:min-h-[400px] bg-pink-300'>
                    <div></div>
                    <Carousel />
                </div>

                {/* Information  */}
                <div className='flex mx-28'>
                    <div className='w-1/2 p-5 m-3 ms-8 flex justify-center items-center'>
                        <img className='rounded-lg' src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_" alt="universityImage" />
                    </div>
                    <div className='w-1/2 p-5 m-3 me-8 '>
                        <div className='flex mb-5 text-4xl font-serif font-bold'>
                            <h1 className='text-rose-700'>FIRM  UNIVERSITY</h1>&nbsp;&nbsp;
                            <h1 className='text-violet-950'>PUNE</h1>
                        </div>
                        <p align='justify'>
                            FIRM is not only the name, but a philosophy which relates with society and education. FIRM is an acronym, which stands for Attitude, Leadership, Alertness, Readiness and Dedication. Established in 1999, under the dynamic leadership of Dr. L.R. Yadav with a vision to plough knowledge and skills in the mind of the students and cultivate entrepreneurship which will enhance the career and jobs for youth and become a transformative force for individual and society. FIRM is a dream journey of Dr. L.R. Yadav. His academic journey to excellence, began from a farmer’s son to Chancellor of FIRM University Pune. In the ongoing journey of 30 Years, he gained initial experience of industrial engineering which led him to go on an expedition of his education path to setup first institution. His instrumental mind led to the growth of FIRM University Pune towards the achievement of societal goals. AUP is a beacon of quality education, dedicated to empowering features and shaping the careers of professionals of tomorrow, who can lead the nation from the front. Driven by the vision of Dr. L.R. Yadav, this education institute has overcome numerous challenges to become one of the Pune’s Prestigious University.
                        </p>
                    </div>
                </div>
                <hr className='border-violet-950 mx-14' />

                {/* // why university  */}
                <div className='flex mx-28'>
                    <div className='w-1/2 p-5 m-3 me-8 '>
                        <div className=' mb-4 text-4xl font-serif font-bold'>
                            <h1 className='text-rose-700'>WHY FIRM  UNIVERSITY</h1>
                            <h1 className='text-violet-950 mt-2'>PUNE ?</h1>
                        </div>
                        <p align='justify'>
                            FIRM University Pune stands as a beacon of excellence in higher education, striving to excel as one of the best private universities in India. AUP stands out with its innovative approach to experiential learning, actively involving students in industry projects, pioneering research endeavours and immersive internships. This enhances their portfolios and bolsters confidence for success in their respective fields. Additionally, the university’s strong industry ties provide students seamless access to professionals, mentors, and employment opportunities, positioning FIRM as the premier choice for ambitious professionals seeking exclusive internships, placements, and networking prospects. FIRM University Pune is committed to promoting education, entrepreneurship and creating job opportunities for all. The university comprises schools viz Engineering and Technology, Business Management, Design, Health & Bio-sciences, Law, and Interdisciplinary Research, offering diverse academic pathways along with attractive and comprehensive scholarship provisions.                    </p>
                    </div>
                    <div className='w-1/2 p-5 m-3 ms-8 flex justify-center items-center'>
                        <ul className='text-2xl list-disc text-rose-700 font-sans'>
                            <li className='mt-5'> Project Based Learning</li>
                            <li className='mt-5'> Excellent Academic Culture</li>
                            <li className='mt-5'> Global Standard</li>
                            <li className='mt-5'> Research for Inovations</li>
                            <li className='mt-5'> Value Added Certifications</li>
                            <li className='mt-5'> Excellent Placements</li>
                            <li className='mt-5'> Located in one of the most advanced IT Hub, of the world, Hinjewadi.</li>
                        </ul>
                    </div>
                </div >
                <hr className='border-violet-950 mx-14' />

                {/* Info box  */}
                <div className="mx-28">
                    <div className='grid grid-cols-4'>
                        <div className='bg-violet-950 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>8800 +</h1>
                                <h2 className='text-xl '>Students</h2>
                            </div>
                        </div>
                        <div className='bg-rose-600 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>50 LPA</h1>
                                <h2 className='text-xl '>Highest Package</h2>
                            </div>
                        </div>
                        <div className='bg-rose-600 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>6 LPA</h1>
                                <h2 className='text-xl '>Average Package</h2>
                            </div>
                        </div>
                        <div className='bg-violet-950 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>500 +</h1>
                                <h2 className='text-xl '>Internship</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-28">
                    <div className='grid grid-cols-4 '>
                        <div className='bg-violet-950 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>15 </h1>
                                <h2 className='text-xl '>Acres Futuristic Campus</h2>
                            </div>
                        </div>

                        <div className='bg-rose-600 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>20 +</h1>
                                <h2 className='text-xl '>Startups Launched</h2>
                            </div>
                        </div>
                        <div className='bg-rose-600 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'> 35 +</h1>
                                <h2 className='text-xl '>Programs</h2>
                            </div>
                        </div>
                        <div className='bg-violet-950 text-white h-28 rounded-2xl m-5 flex justify-center items-center'>
                            <div className='text-center '>
                                <h1 className='text-3xl font-bold'>200 +</h1>
                                <h2 className='text-xl '>Placements</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-violet-950 mx-14 my-10' />
            </main>
        </>
    )
}

export default Home