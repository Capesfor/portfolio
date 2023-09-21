import { useState } from "react"
import  sections  from '@/div/enum.json'

export default function CircleAnimation() {
   return (
   <>
      <div className="absolute fixed transtition duration-150 w-36 hover:w-40 h-36 hover:h-40 bg-red-600 rounded-full relative"></div>
   </>
   )  
}