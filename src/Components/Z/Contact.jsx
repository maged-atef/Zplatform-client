import React from 'react'
import Navbar from './Navbar'
import zview from "../../assets/imgs/devTeam.jpg"
import devimg from "../../assets/imgs/logo.png"
import { Link } from 'react-router-dom'
const Contact = () => {
  return    <>
    <Navbar /> 
    <img src={zview} alt="" className='w-full md:w-2/6 mx-auto mt-10 rounded' />
    <div className='flex mt-10 flex-col items-center px-2 mb-2 w-full justify-center text-center md:w-3/4 mx-auto xl:w-[80%]'>
        <h1 className='text-center text-2xl font-bold  border-slate-300 mb-4'> <span className='bg-violet-500 px-2 rounded-xl text-white'>Z</span> <span className='border-b '>platform</span></h1>
        <span className='block text-xl font-semibold text-center'>Your <span className='bg-orange-200 rounded py-1 inline-block px-2 mb-4'>career</span>  <span className='bg-green-200 rounded py-1 inline-block px-2 mb-4'>connections</span>  <span className='bg-violet-200 rounded py-1 inline-block px-2 mb-4'> z platform</span></span>

        <p className='w-full md:w-1/2 xl:w-[35%] mx-auto 
        leading-8 text-justify  px-2 border border-slate-300 rounded'>
            <span className='font-semibold text-violet-600'>Z Platform</span> is your all-in-one career companion.  <span className='text-blue-500'>Build ATS-friendly resumes</span>, <span className='text-red-500'>send bulk emails</span>, <span className='text-green-700'>connect with professionals</span>,
            and <span className='text-orange-500'>manage job applications</span>  all in one place. <br /> <span className='bg-amber-200 p-1 rounded '>New tools and features are added regularly</span>
            <br /> to help you grow your career smarter and faster.</p>

        <h1 className='text-center my-4 text-2xl font-bold  border-slate-300 '> <span className='bg-violet-500 px-2 rounded-xl text-white'>Dev</span> <span className='border-b '>Team</span></h1>
        <div className="devInfo  grid w-3/4 p-2 bg-red-100 rounded  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">

            <div className="developer border  rounded bg-gray-50 border-slate-200 mt-3">

                <div className="img flex items-center ">
                    <img src={devimg} alt="" className='my-4 mx-3 size-20 bg-white rounded-full ' />
                    <div className="details">
                        <span className='font-semibold'>Maged Tanious</span>
                        <p className='text-sm bg-green-300 rounded w-fit px-1'>MERN Stack</p>
                    </div>
                </div>

                <div className="contact text-2xl flex justify-center gap-3">
                    <Link to={""} className='text-blue-500'><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to={""} className='text-black-500'><i class="fa-brands fa-github"></i></Link>
                    <Link to={""} className='text-red-500'><i class="fa-solid fa-envelope"></i></Link>
                </div>
            </div>

            <div className="developer border rounded bg-gray-50 border-slate-200 mt-3">

                <div className="img flex items-center ">
                    <img src={devimg} alt="" className='my-4 mx-3 size-20 bg-white rounded-full ' />
                    <div className="details">
                        <span className='font-semibold'>Mark Nader</span>
                        <p className='text-sm bg-red-300 rounded w-fit px-1'>Cyper Security</p>
                    </div>
                </div>

                <div className="contact text-2xl flex justify-center gap-3">
                    <Link to={""} className='text-blue-500'><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to={""} className='text-black-500'><i class="fa-brands fa-github"></i></Link>
                    <Link to={""} className='text-red-500'><i class="fa-solid fa-envelope"></i></Link>
                </div>
            </div>

             <div className="developer border rounded bg-gray-50 border-slate-200 mt-3">

                <div className="img flex items-center ">
                    <img src={devimg} alt="" className='my-4 mx-3 size-20 bg-white rounded-full ' />
                    <div className="details">
                        <span className='font-semibold'>Bahaa Adel</span>
                        <p className='text-sm bg-blue-300 rounded w-fit px-1'>UX Tester</p>
                    </div>
                </div>

                <div className="contact text-2xl flex justify-center gap-3">
                    <Link to={""} className='text-blue-500'><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to={""} className='text-black-500'><i class="fa-brands fa-github"></i></Link>
                    <Link to={""} className='text-red-500'><i class="fa-solid fa-envelope"></i></Link>
                </div>
            </div>

               <div className="developer border rounded bg-gray-50 border-slate-200 mt-3">

                <div className="img flex items-center ">
                    <img src={devimg} alt="" className='my-4 mx-3 size-20 bg-white rounded-full ' />
                    <div className="details">
                        <span className='font-semibold'>Andro Nader</span>
                        <p className='text-sm bg-orange-300 rounded w-fit px-1'>JS Developer</p>
                    </div>
                </div>

                <div className="contact text-2xl flex justify-center gap-3">
                    <Link to={""} className='text-blue-500'><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to={""} className='text-black-500'><i class="fa-brands fa-github"></i></Link>
                    <Link to={""} className='text-red-500'><i class="fa-solid fa-envelope"></i></Link>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Contact