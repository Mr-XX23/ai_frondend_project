import React from 'react'
import Navbar from './Navbar';


const land = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar />
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-[5rem] lg:py-[5rem]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Join the AI revolution today and experience the future. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="tracking-tight head_text"><span className="misx_gradient">Unlock AI-Powered </span>Success for Your Business</h1>
            <p className="desc">Experience a revolutionary suite of AI tools designed to transform your business. From AI-powered text summarization to creative image generation, we're here to redefine what's possible. </p>
            <div className="mt-10 flex items-center justify-center gap-x-[1.6rem]">
              <a href="#" className="bg-black text-white py-2 px-4 rounded-full border border-black hover:bg-white hover:text-black">Let's Go</a>
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-black transition-all">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}


export default land;