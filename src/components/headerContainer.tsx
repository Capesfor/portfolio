

export default function HeaderContainer({ title } : { title : string }) {
    return (
        <div className='text-black border-t-2 border-black text-center mt-8 '>
            <text className="relative bottom-4 bg-white p-2">
            {title}
            </text>
        </div>
    )
}