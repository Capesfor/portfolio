'use client';

import Image from 'next/image'
import Navbar from '@/components/Navbar';
import MenuChoices from '@/components/menu';
import CircleAnimation from '@/components/circle';
import { useEffect,useState } from 'react';
import CvPreview from '@/components/cv-preview';


export default function Home() {
    // this is function that will scroll to the top of the page when the button is clicked
    const scrollToTop = (sections: number | undefined) => {
      window.scrollTo({
        top: sections,
        behavior: 'smooth',
      });
    };
      const [windowWidth, setWindowWidth] = useState(0);
      const [showDiv, setShowDiv] = useState(false);

      useEffect(() => {
        // Function to update the window width state
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial window width
        setWindowWidth(window.innerWidth);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      useEffect(() => {
        // Set the showDiv state based on the window width
        setShowDiv(windowWidth < 768); // Change 768 to your desired threshold
      }, [windowWidth]);
    
    return (
      <main className=" static flex min-h-screen flex-col  justify-between p-24" 
      style={{
        backgroundColor: "black",
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

      <div className="font-mono font-bold ">
        <h1>
          JOEL JOKA's Portfolio <br/><br/>
        </h1>
      <div className="lg:grid lg:grid-cols-2 ">
        <MenuChoices />
        <div className='invisible'>
        <CvPreview/>
        </div>
        </div>
        <CircleAnimation /> 
      </div>
     
    </main>
  )
}


