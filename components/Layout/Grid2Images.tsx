import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
function Grid2Images() {
  return (
    <div className='grid grid-cols-2 gap-3 p-0 px-2 h-[100px] md:h-[200px]'>

        {/* FIRST IMAGE SECTION  */}
      <div className='relative group flex cursor-pointer justify-center items-center rounded-lg overflow-hidden '>
            <Image src={"/a.jpg"} height={300} width={600} alt='Slide Images' className='size-full object-cover' /> 
            {/* // Overlay  */}
        <div className='size-full absolute   bg-linear-to-t from-black to-transparent to-60%  z-10 right-0 transition-all duration-300  opacity-0 group-hover:opacity-100  top-100 group-hover:top-0  flex justify-center items-end font-montserrat '>

         <h1 className='text-white md:text-2xl font-montserrat flex items-center gap-1'>SPECIAL OFFERS <IoIosArrowRoundUp className="size-4 md:size-6 text-white animate-bounce" /> </h1>
        </div>
        </div>

        {/* SECOND IMAGE SECTION  */}
        <div className='relative group flex cursor-pointer justify-center items-center rounded-lg overflow-hidden '>
            <Image src={"/b.jpg"} height={300} width={600} alt='Slide Images' className='size-full object-cover' /> 
            {/* // Overlay  */}
        <div className='size-full absolute   bg-linear-to-t from-black to-transparent to-60%  z-10 right-0 transition-all duration-300  opacity-0 group-hover:opacity-100  top-100 group-hover:top-0  flex justify-center items-end font-montserrat '>

         <h1 className='text-white md:text-2xl font-montserrat flex items-center gap-1'>SPECIAL OFFERS <IoIosArrowRoundUp className="size-4 md:size-6 text-white animate-bounce" /> </h1>
        </div>
        </div>

        
    </div> 
  )
}

export default Grid2Images