

export default function HeaderContainer({ title }: { title: string }) {
    return (
            <div className=' border-t border-black text-center '>
            <text className="font-bold text-sm text-center text-black relative bottom-3 h-1 bg-white px-1">
                {title}
            </text>
            </div>
    )
}
