import Dashboard from "@/components/Dashboard";
import { Button, Flex } from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-white rounded-md p-8 flex flex-col gap-10">
      <Dashboard/>
      <Flex className="w-full items-center justify-center gap-6 flex-wrap">
        <Button className="rounded-full px-6 py-1 flex items-center gap-2"><IoMdArrowDropright className="text-[#05ADFF] text-2xl font-bold"/> Watch Demo</Button>
        <Button className="rounded-full px-6 py-1 flex items-center gap-2"><div className="relative"><IoChatbubbleSharp className="text-[#05ADFF] text-xl font-bold"/><div className="absolute text-white top-1 left-1 text-[.65rem]">Ai</div></div> Help Ai Chat Bot</Button>
      </Flex>
      <Flex className="w-full items-center justify-center">
        <Button className="rounded-full px-6 py-1 bg-[#05ADFF] text-white" >Add leads</Button>
      </Flex>
    </div>
  );
}
