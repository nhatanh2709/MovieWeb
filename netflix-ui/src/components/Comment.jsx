import React from 'react'
import { BiTransfer } from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'
const Comment = () => {
  return (
    <div className='bg-[#151c25]'>
      <div className='w-4/5 py-10 mx-auto'>
        <h4 className='text-white text-3xl font-bold uppercase
        text-gradient'>Latest Comment</h4>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
        gap-6 md:gap-4 lg:gap-2 py-2.5'>
            {
            Array(4).fill().map((movie,i) =>(
                <Transaction key={i} tx={i+1} movie={i+1}/>
            ))}
        </div>
        <div className='text-center my-5'>
        <button className='shadow-lg shadow-black text-sm
         bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>
            Load More
        </button>
        </div>
      </div>
    </div>
  )
}
const Transaction = ({movie,tx}) => (
    <div className='flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl
     shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3 '>
        <div className="rounded-md shadow-sm shadow-pink-500 p-2">
            <BiTransfer />
        </div>
        <div>
        <h4 className="text-sm text-white">{tx.title} Movie #{movie}</h4>
            <small className="flex justify-start items-center">
                <span className="mr-1">Comment By</span>
                <a href="#" className="text-pink-500 mr-2" target='_blank'>
                    Person #{movie}
                </a>
                <a href="#">
                    <MdOpenInNew />
                </a>
            </small>  
              
         </div>
         
    </div>

    
)

export default Comment
