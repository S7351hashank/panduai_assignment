'use client'
import routes from '@/routes'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from "@/assets/logo.png"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const pathName = usePathname();
    const [inboxChat,] = useState(215);
    console.log("pathname ",pathName);
    return (
        <div className="flex min-h-[calc(100vh-2rem)] w-fit md:w-[30%] lg:w-[27%] flex-col rounded-md bg-white py-6 px-4 text-black gap-4 shadow-md">
            <div className='flex items-center gap-2'>
                <img src={Logo.src} alt='logo' width={'full'} />
                <div className='text-[#05ADFF] font-bold text-2xl hidden md:flex'>Techstack</div>
            </div>
            <hr />
            <div className='flex flex-col gap-2'>
                {
                    routes.map((route: any, index: any) =>
                        <Link href={route.path} key={index}>
                            <Flex w="100%" alignItems="center" justifyContent="start" gap={'1rem'}  className={`${pathName === route.path ? "bg-[#FCD970]" : ""} p-2 rounded-md`}>
                                <Box >
                                    {route.icon}
                                </Box>
                                <Box className='hidden md:flex'>
                                    <Text className="flex items-center justify-center w-full text-[1.2rem] font-semibold pb-[.33rem]" >{route.name}</Text>
                                </Box>
                                <div className='w-full justify-end hidden md:flex'>
                                    {
                                        route.name === "Inbox" && <span className='text-[#05ADFF] font-semibold bg-[#D7F2FF] rounded-full px-2'>{inboxChat}</span>
                                    }
                                </div>
                            </Flex>
                        </Link>
                    )
                }
            </div>
            <div className='hidden md:flex'><Button width={'full'} className='bg-[#05ADFF] text-white'>Upgrade</Button></div>
        </div>
    )
}

export default Sidebar
