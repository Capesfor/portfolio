
export default function CircleAnimation({toPDF} : {toPDF: any}) {

   return (
   <div>
      <div className="items-center z-20 fixed bottom-5 left-5 lg:invisible transition-opacity duration-1000 opacity-90 lg:opacity-0 transform ">
      <div className=" flex justify-center items-center  w-24 h-24 bg-zinc-900 rounded-full transition-transform duration-300 transform hover:scale-110 active:scale-125">
      <div className=" flex justify-center items-center  w-20 h-20 bg-black rounded-full transition-transform duration-300 transform hover:scale-100 active:scale-110">
      <div className=" flex justify-center items-center  w-16 h-16 bg-sky-900 rounded-full transition-transform duration-300 transform hover:scale-100 active:scale-100">
      <div className=" text-black flex justify-center items-center w-14 h-14 bg-zinc-900 rounded-full transition-transform duration-300 transform hover:scale-75 active:scale-100 ">
      <div className=" text-white flex justify-center items-center w-12 h-12 bg-sky-950 rounded-full transition-transform duration-300 transform hover:scale-90 active:scale-50">
         <p className="text-xs select-none">preview</p>
         </div>
         </div>
         </div>
         </div>
         </div>
      </div>
   </div>
   )}
   