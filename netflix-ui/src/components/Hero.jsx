import React from 'react'
import Identicon from "react-identicons";
import { setGlobalState } from '../store/config';
const imgHero = "https://i.ibb.co/d57mRn2/14f0ba032e62cc601e7a1685d5886f50.jpg" 

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/5 justify-between  items-center
    mx-auto py-10'>
        <div className='md:w-3/6 w-full '>
            <div>
                <h1 className='text-white text-4xl font-bold'>
                    
                    <span className='text-gradient'>UNLIMITED</span> 
                    <br/> Movies TV Shows <br/> and more
                </h1>
                <p className='text-gray-500 font-semibold text-sm mt-3'>Display the best movies around the world</p>
            </div>

            <div className='flex mt-5'>
                <button className='shadow-xl shadow-black text-white
                bg-[#e32970] hover:bg-[#bd255f]  p-2 rounded-full'
                onClick={() =>setGlobalState('modal','scale-100')}
                >
                Chat with Bot
                </button>
            </div>
            <div className='w-3/4 flex justify-between items-center mt-5'>
                <div className='text-white'>
                    <p className="font-bold">123k</p>
                    <small className="text=gray-300">Users</small>
                </div>
                <div className='text-white'>
                    <p className="font-bold">92k</p>
                    <small className="text=gray-300">Likes</small>
                </div>
                <div className='text-white'>
                    <p className="font-bold">15k</p>
                    <small className="text=gray-300">Shares</small>
                </div>
            </div>
        </div>

        <div className='shadow-xl shadow-black md:w-2/5 w-full mt-10
        md:mt-0 rounded-md overflow-hidden bg-gray-800'>
            <img className="h-60 w-full object-cover"src={imgHero} alt="Hero"/>
            <div className='flex justify-start items-center p-3'>
                <Identicon className="h-10 w-10 object-contain rounded-full mr-3
                "string={'0x21....786a'} size ={50}/>
                <div>
                    <p className='text-white font-semibold'>Nguyễn Nhật Anh</p>
                    <small className='text-pink-800 font-bold'>@you</small>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Hero
