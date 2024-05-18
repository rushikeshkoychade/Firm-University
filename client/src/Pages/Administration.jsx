import React from 'react'
import { Helmet } from 'react-helmet'

const Administration = () => {
  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>FIRM - Administration</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        {/* ORGANIZATIONAL STRUCTURE  */}
        <section className='mx-40'>
          <h1 className='text-rose-700 my-8 text-center text-4xl font-serif font-bold'>ORGANIZATIONAL STRUCTURE</h1>
          <img src='Image/Administration_Chart.png' alt="aaaaaa" />
          <hr className='border-violet-950 mx-14 mb-5' />
        </section>

        {/* EXECUTIVE COMMITTEE FIRM UNIVERSITY */}

        <section className='mx-46 my-10'>
          <div className='flex mb-5 justify-center text-4xl font-serif font-bold'>
            <h1 className='text-rose-700'>EXECUTIVE COMMITTEE</h1> &nbsp;
            <h1 className='text-violet-950'>FIRM UNIVERSITY</h1>
          </div>
          <div className="relative mx-48 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <hr className='border-violet-950 mx-14 mb-5' />

        {/* ADMINISTRATIVE OFFICE  */}
        <section className='mx-40'>
          <h1 className='text-rose-700 my-8 text-center text-4xl font-serif font-bold'>ADMINISTRATIVE OFFICE</h1>

          <div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>

          </div>
        </section>
        <hr className='border-violet-950 mx-14 mb-5' />




      </main>
    </>
  )
}

export default Administration