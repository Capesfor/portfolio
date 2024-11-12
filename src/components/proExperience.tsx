import React from 'react';

export default function ProExperience({data} : any) {
    return (
        <div className="text-left text-black relative bottom-6 px-4">
        {data.map((item: any, index: any) => {
            return (
                <div key={index} className="font-serif text-base text-black relative p-1">
                    {item.title}
                    <div className="text-xs text-black text-left">
                        <p className='text-xs font-thin'>{item.year} - {item.company} - {item.localisation}</p>
                        <p className='mt-2 font-thin text-xs'>{item.description}</p>
                    </div>
                </div>
            )
        })}
    </div>
    )
}