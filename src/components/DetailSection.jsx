import classes from "./DetailSection.module.css"

export default function DetailSection ({projectDetail}) {
    const dateStr = projectDetail.date
    const date = new Date(dateStr)

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    });

    

    return (
        <div className="pt-10 px-24 flex-grow">
            <h2 className="text-5xl font-bold text-stone-700 my-4">{projectDetail.title}</h2>
            <p className="text-stone-600 mb-4">{formattedDate}</p>
            <p className="mb-4">{projectDetail.description}</p>

            <hr className="border rounded bg-stone-300 h-1" />


            <h2 className="text-3xl font-bold text-stone-700 my-4">Tasks</h2>

        </div>
    )
}