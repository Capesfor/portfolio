import { useState } from "react"
import  sections  from '@/div/enum.json'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const scrollToTop = (sections: number | undefined) => {
        window.scrollTo({
          top: sections,
          behavior: 'smooth',
        });
      };
    
        return (
            <div className="z-20 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
            <ul className="flex items-center gap-10">
              <li className="flex items-center gap-2">
              <button onClick={() => scrollToTop(sections.top)}> main  </button>
              </li>
              <li className="flex items-center gap-2">
              <button onClick={() => scrollToTop(sections.competence)}> competences </button>
              </li>
              <li className="flex items-center gap-2">
              <button onClick={() => scrollToTop(sections.experience)}> Experiences </button>
              </li>
            </ul>
          </div>
        )
    }