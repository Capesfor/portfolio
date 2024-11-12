import { useState } from "react"

type CompetencesType = {
    [key: string]: [string],
}

export default function Competences({ data }: { data: any }) {
    const [compName] = useState(Object.keys(data))
    if (data.length === 0) {
        return (
            <div className='text-black text-center'>
                <p>Vous n'avez pas encore renseigné de compétences</p>
            </div>
        )
    }

    return (
        <div className='text-black text-xs/[0.2px] relative bottom-4 '>
            <div className='grid grid-cols-4 justify-center gap-4'>
                {compName.map((comp: string, index: number) => {
                    return (
                        <div key={index} className='m-1 p-2 rounded-lg '>
                            <p className='font-bold'>{comp} :</p>
                            <ul>
                                {data[comp].map((item: string, index: number) => {
                                    return (
                                        <li key={index} className="ml-2 mt-3 font-thin">• {item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}