import React from 'react';

export default function Education({ data }: { data: any }) {
    if (!data) {
        return <div>loading...</div>
    }
    return (
        <div className="text-left text-black px-4 relative bottom-6">
            {data.map((item: any, index: any) => {
                return (
                    <div key={index} className="font-serif text-base text-black relative p-1">
                        {item.title}
                        <div className="text-xs text-black text-left">
                            <p className='text-xs font-thin'>{item.year} - {item.school} - {item.localisation}</p>
                            <p className='mt-2 font-thin text-xs'>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}