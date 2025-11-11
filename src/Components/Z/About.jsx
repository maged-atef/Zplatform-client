
import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import aboutpng from "../../assets/imgs/About.png"




export default function About() {
    return <>
         <Navbar /> 
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto mt-10" >About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
               Powerful tools to simplify your career journey — all in one place.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src={aboutpng}
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                        Components.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Smart ATS Resume Builder</h3>
                                <p className="text-sm text-slate-500">Create polished, recruiter-friendly resumes in minutes with AI-powered suggestions.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Job Management System</h3>
                                <p className="text-sm text-slate-500">Track applications, interviews, and job offers effortlessly with real-time updates.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Social Connection Hub</h3>
                                <p className="text-sm text-slate-500">Connect with professionals, share ideas, and grow your career network instantly.</p>
                            </div>
                            
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Bulk Email Sender</h3>
                                <p className="text-sm text-slate-500">Send personalized job applications or professional emails fast and efficiently..</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
</>
}
    
