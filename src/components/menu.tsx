

export default function MenuChoices() {
    const choices = [
        {"title" : "projets", "content" : "projets"},
        {"title" : "competences", "content" : "competences"},
        {"title" : "experiences", "content" : "experiences"},
        {"title" : "contacts", "content" : "contacts"},
        {"title" : "hobies", "content" : "hobies"}
        ]

    return (
        <>
        <div className="space-y-5">
            {
                choices.map((choice,i) => {
                
               return (
                 <div className=" rounded-lg border-b bg-white/30 bg-gradient-to-b from-zinc-200 pb-6 pt-8   backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
                    <h1 key={i}> {choice.title} </h1>
                    <p key={i}> {choice.content}</p>
                </div>)
            })}
        </div>
        </>
    )
}
