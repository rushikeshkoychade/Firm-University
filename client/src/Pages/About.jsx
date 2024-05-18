import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>FIRM - About</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        {/* img section  */}
        <section className='flex justify-center mx-40'>
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            className='sm:h-0 w-full md:h-[500px]' />
        </section>

        {/* INFORMATION SECTION ABOUT  */}
        <section className='mx-40'>
          <div className='p-5 mt-3'>
            <div className='flex mb-5 justify-center text-4xl font-serif font-bold'>
              <h1 className='text-rose-700'>JOURNEY OF</h1> &nbsp;
              <h1 className='text-violet-950'>FIRM UNIVERSITY PUNE</h1>
            </div>
            <p align='justify'>
              The year 1999 was the starting point of our fine establishment – Alard University Pune, that is driven by the visionary leader Dr.L.R.Yadav. This initiative is also supported by the Alard Charitable Trust – a beacon of transformative change in the realm of education – which is registered under the Bombay Charitable Trust Act of 1950, significantly influencing the university’s strategic trajectory, allowing the university to embark on a mission to deliver high quality education and foster employment opportunities.
            </p>
            <p align='justify'>
              From its modest origins, Alard University Pune has evolved into a distinguished schools, renowned for its commitment to exceptional education and innovative approaches. Dr.Yadav’s visionary aspirations for the university were centred around fostering an educational environment characterized by trust, transparency and collaborative endeavour. This shared vision, along with the commitment of the Alard community, has made the university well-known and respected in Pune and beyond.
            </p>
            <p align='justify'>
              The growth of Alard University Pune demonstrates its unwavering commitment to academic excellence, innovation, and holistic education. With visionary leadership and a dedication to providing top-notch education, the university has emerged as a front-runner in higher education, continuously setting higher standards for excellence year after year.
            </p>
          </div>
          <hr className='border-violet-950 mx-14' />
        </section>

        {/* VISION AND MISSION  */}
        <section className='bg-violet-900 mt-5 font-serif flex justify-center items-center text-white p-10'>
          <div className='w-1/2 text-center text-3xl '>
            MISSION
          </div>
          <p align='justify' className='w-1/2 me-36 text-xl'>
            Alard University Pune to live upto its Vision of creating employers, will do by creating knowledge with a completely different learning delivery model and the only one in the country to have it, where all our learning will be “70% practical learning & 30% theory for 100% guaranteed internships”. As we say at Alard “Hum Alag Hai, Hum Alard Hai.
          </p>
        </section>

        {/* MESSAGE FROM FOUNDER AND CHANCELLOR */}

        <section className='mx-46 my-10'>
          <div className='flex mb-5 justify-center text-4xl font-serif font-bold'>
            <h1 className='text-rose-700'>MESSAGE FROM</h1> &nbsp;
            <h1 className='text-violet-950'>FOUNDER AND CHANCELLOR</h1>
          </div>
          <div className='grid grid-cols-2 gap-2 mx-40'>
            <div >
              <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1683120802557-1c2f3cff60a0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photoOfChancellor" />
            </div>
            <div>
              <p align='justify' className='px-7'>Imagine a place where knowledge isn’t confined by the limitation of a classroom, and learning knows no bounds, a place where passion and ambition is encouraged and given the safe space to bloom. This is the vision I endeavor to establish at Alard, where access  to education is cherished as a fundamental right and accomplishing employment empowers each individual. The hallways at Alard is the canvas, a place where your remarkable journeys commence and with the destiny to illuminate the world with your brilliance and significance. Bridging the gap between theoretical learning and practical skills academia, these corridors of Alard equip our students to flourish in the professional world.
                As the founder and chancellor, it is my utmost pleasure and unwavering commitment to walk alongside with you and motivate you to embark on this extraordinary journey with us. As we inspire you to evolve, know that we are not simply imparting knowledge but also sparking curiosity within you.</p>
            </div>
          </div>
        </section>
        <hr className='border-violet-950 mx-14' />

        {/* ACHIEVEMENTS  */}

        <section className='mb-5'>
          <h1 className='text-rose-700 my-8 text-center text-4xl font-serif font-bold'>ACHIEVEMENTS</h1>
          <div className="grid grid-cols-3 gap-5 mx-40 ">
            <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" alt="achievementImg1" />
            <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" alt="achievementImg1" />
            <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" alt="achievementImg1" />
          </div>
        </section>
        <hr className='border-violet-950 mx-14 mb-5' />
      </main>
    </>
  )
}

export default About