

export default function Description({description} : {description: string}) {
    return (
        <div className='text-black text-xs font-thin relative text-center bottom-3'>
            {description}
        </div>
    )
}