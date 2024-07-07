'use client'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti';

const Dashboard = () => {
    const [name, setName] = useState("Jackson");
    const [tillStepDone, setTillStepDone] = useState(1);
    const [data, setData] = useState([
        {
            id: 1,
            title: "Add leads",
            desc: "Leads are people interested",
        },
        {
            id: 2,
            title: "Create a sequence",
            desc: "Leads are people interested",
        },
        {
            id: 3,
            title: "Summarize launch",
            desc: "Leads are people interested",
        },

    ])
    return (
        <div className='w-full rounded-md bg-[#EFFAFF] px-6 py-8 flex flex-col items-start gap-4 '>
            <Flex className='flex-col items-start gap-1'>
                <Text className='text-xl font-bold text-gray-700'>Hii {name}, Welcome to Dashboard</Text>
                <Text className='text-md  text-gray-500'>Just few more step and ready to set Go!</Text>
            </Flex>
            <SimpleGrid className='w-full gap-6' minChildWidth={'150px'}>
                {
                    data.map((step, index) => (
                        <Flex className='items-start gap-2' key={index}>
                            <Flex>
                                {step.id <= tillStepDone ? <div className='bg-[#17C291] text-white rounded-full mt-1 p-[.1rem]'><TiTick /></div> : <div className='bg-white flex items-center justify-center font-semibold text-black rounded-full mt-1 p-[.1rem] aspect-square w-6 h-6'>{step.id}</div>}
                            </Flex>
                            <Flex className='flex-col items-start'>
                                <Flex className='text-xl font-bold text-gray-700'>{step.title}</Flex>
                                <Flex className='text-md  text-gray-500 text-wrap'>{step.desc}</Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </div>
    )
}

export default Dashboard
