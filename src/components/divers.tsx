import React, { useState } from 'react'

export default function Divers({ data }: { data: any }) {
    const [divName] = useState(Object.keys(data))

    return (
        

        <div className='grid grid-cols-3 px-2 relative bottom-4 text-xs text-black '>
            {divName.map((comp: string, index: number) => {
                return (
                    <div key={index} className='m-1 px-2 rounded-lg '>
                        <p className='font-bold'>{comp} :</p>
                        <ul>
                            {data[comp].map((item: any, index: number) => {
                                if (typeof item === 'string') {
                                    return (
                                        <li key={index} className="ml-2  font-thin text-xs">• {item}</li>
                                    )
                                }
                                return (
                                    
                                    <li key={index} className="ml-2 mt-1 text-xs font-thin">• {" "}
                                            {item.description}
                                    </li>

)
})}
                        </ul>
                    </div >
                )
            })}
        </div >
    )
}