import React from 'react'
import timelessLogo from '../assets/logo.png'
import { useGlobalState } from '../store'
import { useState } from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
const HeaderInteractive = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);
  return (
    
    <nav className="w-full flex md:justify-center justify-between items-center p-4 mx-auto">
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='w-32 cursor-auto' src={timelessLogo} alt="Logo"/>

        </div>

        <ul className='md:flex-[0.3] text-white md:flex hidden list-none 
        justify-between items-center'>
        </ul>

        
        <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] 
        md:text-xs p-4 py-4 px-10 rounded-full'onClick={() => {}}
        >
            HOME
        </button>
        
        <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["HOME", "MOVIES", "TV SERIES", "SEARCH"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default HeaderInteractive
