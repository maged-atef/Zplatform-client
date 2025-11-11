import React from 'react'
import zlogo from "../../assets/imgs/zapp-features.jpg"
import emailApp from "../../assets/svg/emailSender.svg"
import jobApp from "../../assets/svg/jobApp.svg"
import resumeBuilder from "../../assets/svg/resumeBuilder.svg"
import socialApp from "../../assets/svg/socialApp.svg"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Features = () => {
    const featuresNow = [
        { img: emailApp, name: "Bulk Email Sender", target:"/zFeatures/BulkyEmail", des: "Send personalized bulk emails easily with smart automation and tracking." },
        { img: jobApp, name: "Job Managment", target:"/zFeatures/JobManage", des:"Track, organize, and manage all your job applications effortlessly." },
        { img: socialApp, name: "Z connect" , target:"/zFeatures/ZConnect", des:"Connect, share, and grow your professional network within Z Platform."},
        { img: resumeBuilder, name: "Resume Builder" , target:"/zFeatures/Resume", des:"Create professional, ATS-friendly resumes in minutes with smart templates."},
    ]
    return <>
    
    <Navbar /> 
    <div >
        <div className="logo w-full mt-10  md:w-2/6 mx-auto">
            <img src={zlogo} alt="" className='w-full  rounded-xl' />
        </div>
        <p className='text-xl font-semibold text-center border-b border-slate-300  ms-auto me-auto my-4 '>Newly Added Features </p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 '>
            {featuresNow.map((item, index) => {
                return <div key={index} className={`features flex flex-col rounded-full   px-10 mx-auto my-3 py-3  ${(index %2) <1? "bg-green-100 hover:bg-blue-200":"bg-blue-100 hover:bg-green-200"} ` }>
                    <Link to={item.target} className='flex items-center gap-2 font-semibold'>
                        <img src={item.img} alt="" className='w-1/4' />
                       <div className="info flex flex-col">
                         <span>{item.name}</span>
                        <span className='text-sm font-light'>{item.des}</span>
                       </div>
                    </Link>
                    
                </div>
            })}
        </div>
    </div>
    </>
}

export default Features