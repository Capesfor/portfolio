'use client';

import Image from 'next/image'
import Link from 'next/link'
import  sections  from '@/div/enum.json'
import Presentations from '@/components/presentation';
import Navbar from '@/components/Navbar';

export default function Home() {
    // this is function that will scroll to the top of the page when the button is clicked
    const scrollToTop = (sections: number | undefined) => {
      window.scrollTo({
        top: sections,
        behavior: 'smooth',
      });
    };
    
    return (
      <main className=" flex min-h-screen flex-col  justify-between p-24" 
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Navbar  />
      
      <div className="  w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" z-10 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            By Joel Joka
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
              />
          </a>
        </div>
      </div>

      <div className="font-mono font-bold">
        <h1>
          JOEL JOKA's Portfolio
        </h1>
      </div>
      <div className="grid grid-cols-2 space-x-20">
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
        <Presentations />
      </div>
     
    </main>
  )
}
