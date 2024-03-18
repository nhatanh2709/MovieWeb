import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import { useGlobalState, setGlobalState } from '../store/config';
const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg" 

const ChatWithBot = () => {
    const [modal] = useGlobalState('modal')
    const closeModal = () => {
        setGlobalState('modal','scale-0')
    }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-50 transform transition-transform
    duaration-300 ${modal}`}>
        <div 
        className="bg-[#151c25] shadow-xl shadow-[#e32970]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
        >
            <form className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold ">Find Movie</p>
                    <button
                    type="button" 
                    onClick={closeModal}
                    className="border-0 bg-transparent focus:outline-none"
                    >
                    <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20 '>
                        <img className='h-full w-full object-cover cursor-pointer'
                        src={imgHero} 
                        alt="NFT"/>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-gray-800
                rounded-xl mt-5'>
                    <label className='block'>
                        <span className='sr-only'>Choosen Profile Photo</span>
                        <input type="file"
                        accept='image/png, image/gif, image/jpeg, image/jpg, image/webp'
                        className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 
                        file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                        hover:file:bg-[#1d2631] foucs:outline-none cursor-pointer focus:ring-0' 
                        required
                        >

                        </input>
                    </label>
                </div>

                

                <div className='flex justify-between items-center bg-gray-800
                rounded-xl mt-7 my-15'>  
                    <textarea type="text"
                    className='block w-full text-sm text-slate-500 
                    foucs:outline-none cursor-pointer focus:ring-0 bg-transparent
                    border-0'
                    placeholder='Description'
                    name='description' 
                    required
                    >
                    </textarea>    
                </div>

                <button className='flex justify-center items-center
                shadow-lg shadow-black text-white w-full text-md p-2 mt-5
                bg-[#e32970] hover:bg-[#bd255f] rounded-full 
            '>
                    FIND NOW
                </button>

            </form>
        </div>
    </div>
  )
}

export default ChatWithBot
