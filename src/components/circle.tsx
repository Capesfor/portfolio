import { useState } from "react"
import  sections  from '@/div/enum.json'

export default function CircleAnimation() {


   return (
   <div>
      <div className=" items-center z-20 fixed bottom-5 rigth-0 lg:invisible">
      <div className=" flex justify-center items-center  w-32 h-32 bg-white rounded-full transition-transform duration-300 transform hover:scale-110 active:scale-110">
      <div className=" flex justify-center items-center  w-28 h-28 bg-black rounded-full transition-transform duration-300 transform hover:scale-100 active:scale-110">
      <div className=" flex justify-center items-center  w-24 h-24 bg-blue-500 rounded-full transition-transform duration-300 transform hover:scale-100 active:scale-100">
      <div className=" text-black flex justify-center items-center w-20 h-20 bg-white rounded-full transition-transform duration-300 transform hover:scale-75 active:scale-100 ">
      <div className=" text-white flex justify-center items-center w-16 h-16 bg-black rounded-full transition-transform duration-300 transform hover:scale-90 active:scale-50">
         <p className="text-sm">preview</p>
         </div>
         </div>
         </div>
         </div>
         </div>
      </div>
   </div>
   )}
   