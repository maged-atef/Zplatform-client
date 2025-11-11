import React from "react";
import Navbar from "./Navbar";
const Docs = () => {
    const [openIndex, setOpenIndex] = React.useState(null)
 const faqsData = [
  {
    question: 'What makes Z Platform unique?',
    answer: 'Z Platform combines a social hub, ATS resume builder, job management system, and email sender — all in one place for professionals.'
  },
  {
    question: 'Can I build my resume easily?',
    answer: 'Yes! Our AI-powered ATS Resume Builder helps you create recruiter-ready resumes in minutes with smart formatting and keyword optimization.'
  },
  {
    question: 'How does the job management system work?',
    answer: 'You can track all your job applications, interviews, and offers in one dashboard — stay organized and focused during your career journey.'
  },
  {
    question: 'Is there a social platform for professionals?',
    answer: 'Absolutely. Connect with others, share updates, and grow your professional network directly inside Z Platform.'
  },
  {
    question: 'Can I send bulk emails for outreach?',
    answer: 'Yes. The built-in Bulk Email Sender lets you send personalized job or business emails fast and efficiently.'
  }
];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <Navbar /> 
            <div className='flex flex-col my-10 items-center text-center text-slate-800 px-3'>
                <p className='text-base font-medium text-slate-600'>FAQ</p>
                <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>
                <p className='text-sm text-slate-500 mt-4 max-w-sm'>
                    Proactively answering FAQs boosts user confidence and cuts down on support tickets.
                </p>
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Docs