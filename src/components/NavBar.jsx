import React from 'react'
import logoPic from '../assets/images/BgSub_LogoPic3.png'
import logoName from '../assets/images/BgSub_LogoCaptureX3.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const ActiveLinkHighlight = ({isActive}) => 
      isActive ? 'bg-cyan-500 text-black hover:bg-slate-200 hover:text-black rounded-md px-3 py-2' 
               : 'text-black hover:bg-cyan-500 hover:text-black rounded-md px-3 py-2';
  
  return (
     <nav className="bg-greywhite-700 border-b border-greywhite-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-11 w-auto"
                src={logoPic}
                alt="M&F Logo"
              />
            </NavLink>
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logoName}
                alt="Meet&Flick"
              />
            </NavLink>
            {/* Movie and Event Tab */}
            <div className="md:ml-auto">
              <div className="flex  font-medium">
            <  NavLink
                  to="/MoviePage"
                  className={ActiveLinkHighlight}
                  >See a Movie</NavLink>
                <NavLink
                  to="/login-register"
                  className={ActiveLinkHighlight}
                  >Join an Event </NavLink>
              </div>
            </div>
            {/* Search Bar */}
            <div className="flex-1 mx-4 hidden md:block">
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 rounded-md text-black"
                style={{ maxWidth: '400px' }} 
            />
            </div>
            {/* Login and Signup */}
            <div className="md:ml-auto">
              <div className="flex space-x-2 font-medium">
                <NavLink
                  to="/login"
                  className={ActiveLinkHighlight}
                  >LOGIN</NavLink>
                <NavLink
                  to="/login-register"
                  className={ActiveLinkHighlight}
                  >SIGN UP </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar