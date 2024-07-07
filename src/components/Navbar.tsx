'use client'
import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { GoBell, GoSun } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMoonOutline } from 'react-icons/io5'
import Profile from "@/assets/profile.jpeg"

const Navbar = () => {
  const [mode,setMode] = useState(true);
  const [notifications,] = useState(1)
  const [profileData,setProfileData] = useState({
    name:"Mahfuzul Nabil",
    image:Profile.src,
  })
  return (
    <Flex className='justify-between items-center w-full bg-white p-4 rounded-md text-black'>
      <Flex className='items-center gap-2'>
        <div><CiSearch className='text-xl lg:text-3xl'/></div>
        <div className='font-semibold lg:text-lg md:text-sm text-gray-600'>Search here...</div>
      </Flex>
      <Flex className='items-center md:gap-3 lg:gap-6'>
        <div className='items-center gap-1 md:gap-2 lg:gap-4 hidden md:flex'>
          <GoSun className='text-xl lg:text-3xl'/>
          <div className={`w-12 h-6 rounded-full cursor-pointer flex  items-center  ${mode? "justify-start bg-gray-400" : "justify-end bg-[#05ADFF]"}`} onClick={()=>setMode(!mode)}>
            <div className={`w-7 h-7 rounded-full flex justify-start  border-2 ${mode?"bg-[#05ADFF] border-white":"bg-white border-gray-400"}`}></div>
          </div>
          <IoMoonOutline className='text-xl lg:text-3xl'/>
        </div>
        <div className='w-[1.5px] h-[40px] bg-gray-500 rounded-full hidden md:flex'></div>
        <div className='items-center gap-1 md:gap-2 lg:gap-4 hidden md:flex'>
          <div className='relative'>
          <GoBell className='text-xl lg:text-3xl'/>
          <div className='absolute bg-[#05ADFF] text-white lg:top-[-.5rem] lg:right-[-.5rem] top-[-.4rem] right-[-.25rem] rounded-full lg:w-5 lg:h-5 w-4 h-4 text-[.6rem] sm:text-[.8rem] flex justify-center items-center'>{notifications}</div>
          </div>
          <AiOutlineMail className='text-xl lg:text-3xl'/>
        </div>
        <div className='w-[1.5px] h-[40px] bg-gray-500 rounded-full hidden md:flex'></div>
        <Flex className='items-center gap-1 md:gap-2 lg:gap-4 rounded-full bg-gray-100 p-2'>
          <Flex><img src={profileData.image} className='w-[40px] h-[40px] rounded-full'/></Flex>
          <Flex>{profileData.name}</Flex>
          <Flex><IoMdArrowDropdown className='text-xl lg:text-3xl'/></Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
