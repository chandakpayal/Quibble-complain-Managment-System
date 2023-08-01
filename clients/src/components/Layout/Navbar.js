import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
<div className="bg-white lg:pb-12">
  <div className="max-w-screen-fit    mx-auto">
    <header className="flex justify-between items-center  py-4 md:py-8 bg-indigo-900">
      <Link to='/' className="inline-flex items-center text-black-800 text-2xl text-white md:text-3xl font-bold gap-2.5 ml-9 " aria-label="logo">
        <svg width={80} height={80} viewBox="0 0 95 94" className="w-6 h-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M588.73,387.19A133.8,133.8,0,0,1,694.37,599h68.27a213.84,213.84,0,0,0,13.17-74.14c0-118.39-96-214.37-214.36-214.37A212.5,212.5,0,0,0,438.36,349.7a188,188,0,0,1,150.37,37.49"/>
        </svg>
        Quibble
      </Link>
      <nav className="hidden lg:flex gap-12">
        <Link to='/' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Home</Link>
        <Link to='/feature' className="inline-flex items-center hover:text-black text-white text-lg font-semibold gap-1">
          Features
          
        </Link>
        <Link to='/apply' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Apply</Link>
        <Link to='/about' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">About</Link>
      </nav>
      <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
        <Link to='/login' className="inline-block focus-visible:ring ring-indigo-300 text-white hover:text-black active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3  ">Sign in</Link>
        <Link to='/register' className="inline-block bg-blue-300 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring mr-5  hover:text-black ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-7  py-3">Sign up</Link>
      </div>
     
    </header>
  </div>
</div>







    
    </>
  )
}

export default Navbar