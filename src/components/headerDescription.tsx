

export default function HeaderDescription({description} : {description: string}) {
    return (
        <div className='text-black font-thin text-xs text-center mb-4'>
            {description}
        </div>
    )
}   