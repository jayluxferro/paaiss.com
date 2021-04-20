import React,{Fragment,useState} from 'react';
import { Link } from 'react-router-dom'


const HeaderComponent = ({menu}) => {
  const [showMenu, setShowMenu] = useState(false)
    return (
        <Fragment>
            {/* <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
--> */}
<div className="relative bg-white overflow-hidden">
  <div className="hidden lg:block lg:absolute lg:inset-0">
    <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
      <defs>
        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
    </svg>
  </div>
  <div className="relative pt-6 pb-0 md:pb-0 lg:pb-0 xl:pb-0">
    <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to={"/"} aria-label="Home">
            <img className="h-8 w-auto sm:h-10" src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" />
          </Link>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={()=>setShowMenu(true)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block md:ml-10">
          <Link to="/" className="font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
          <Link to="/papers" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Call for Papers</Link>
          <Link to="/workshops" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Call for Workshops</Link>
          <Link to="/program-committees" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Technical Program Committee</Link>
          <Link to="/conference-officers" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Organizing Committees</Link>
          <Link to="/keynotes-and-tutorials" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Keynotes</Link>
      {/*
          <Link to="#" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Registration</Link>
          <Link to="#" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Technical Program</Link>
          <Link to="#" className="ml-10 font-light text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Mini Workshop Program</Link>
          */}
        </div>
      </div>
      <div className="hidden md:block text-right">
        <span className="inline-flex rounded-md shadow-md">
          <span className="inline-flex rounded-md shadow-xs">
            {/* <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out">
              Log in
            </a> */}
          </span>
        </span>
      </div>
    </nav>

    {/* <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
    {
      showMenu && (
        <Fragment>
 <div className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-md">
        <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src={`${process.env.PUBLIC_URL}/logo512.png`} alt="" />
            </div>
            <div className="-mr-2">
              <button onClick={()=>setShowMenu(false)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home</Link>
          <Link to="/papers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Call for Papers</Link>
          <Link to="/workshops" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Call for Workshops</Link>
          <Link to="/program-committees" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Technical Program Committee</Link>
          <Link to="/conference-officers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Organizing Committees</Link>
          <Link to="/keynotes-and-tutorials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Keynotes</Link>
    
            {/* <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product</a> */}
            {/* <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a> */}
            {/* <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace</a> */}
            {/* <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company</a> */}
          </div>
          {/* <div>
            <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
              Log in
            </a>
          </div> */}
        </div>
      </div>
    </div> 
        </Fragment>
      )
    }
    
   
    <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div data-aos="fade-down" className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              {menu}
            </div>
            <h2 data-aos="zoom-in" className="mt-1 text-2xl tracking-tight leading-10 font-bold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl">
              <br className="hidden md:inline" />
  <span className="text-indigo-600">{" "}Pan-African Artificial Intelligence and Smart Systems </span> Conference
            </h2>
            <p data-aos="zoom-in"  className="mt-3 text-base text-gray-500 sm:mt-5 font-light sm:text-xl lg:text-lg xl:text-xl">
            (PAN-AFRICAN AIS 2021), to be held October 7-9, 2021, University of Namibia, Windhoek, Namibia.
            </p>
            <p data-aos="zoom-in" className="text-base text-gray-500 font-light"> (The conference will be held online if COVID-19 situation does not improve)</p>
            <div data-aos="zoom-in" className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base font-medium text-gray-900">
              Conference Theme: <span className="text-indigo-600">Advancing AI research in Africa</span>
              </p>
              <p className="blinking text-base font-medium text-gray-500" style={{ marginTop: 10 }}>Due to the COVID-19, the submission deadline has been extended to May 31, 2021.</p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div data-aos="zoom-in" className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                <img className="w-full" src={require('../assets/images/namibia.jpg')} alt="" />
              </button>
            </div>
          </div>
        </div>
      </main> 
  </div>
</div>
        
        </Fragment>
    )
}

export default HeaderComponent
