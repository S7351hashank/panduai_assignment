
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import AppWrappers from "./AppWrappers";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen bg-[#FAFBFD]">
        <NextTopLoader
          color="#165799"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
          showSpinner={false}
        />
        <AppWrappers>
          <Flex className="gap-4 p-4 w-full">
            <Sidebar />
            <Flex className="flex-col gap-4 w-full">
              <Navbar  />
              {children}
              <Toaster />
            </Flex>
          </Flex>
        </AppWrappers>
      </body>
    </html>
  );
}
