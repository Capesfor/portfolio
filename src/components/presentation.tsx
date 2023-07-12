import React from "react";
import Image from 'next/image'


export default function Presentations() {
    return (
        <div className=" rounded-lg border-b bg-white/30 bg-gradient-to-b from-zinc-200 pb-6 pt-8   backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
            <Image
              src="/my_head.png"
              alt="Vercel Logo"
              className="rounded-full"
              width={100}
              height={24}
              priority
            />
            <h1> Presentations </h1>
            <h2> 2021 egrsgert etgetrg et etg etg etge etg </h2>
            <h2> 2020 </h2>
            <h2> 2019 </h2>
            <h2> 2018 </h2>
            <h2> 2017 </h2>

        </div>
    )
}