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
        <div className="pt-10 px-24 flex-grow h-full">
            <h2 className="text-5xl font-bold text-stone-700 my-4">{projectDetail.title}</h2>
            <p className="text-stone-600 mb-4">{formattedDate}</p>
            <p className="mb-4">{projectDetail.description}</p>

            <hr className="border rounded bg-stone-300 h-1" />


            <div>
                <label htmlFor="tasks" className="text-3xl font-bold text-stone-700 my-4 mb-5 mt6 block">Tasks</label>
                <input id="tasks" className="w-3/4 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <button className="text-stone-700 hover:text-green-500 hover:cursor-pointer ms-6">&#43; Add Task</button>
            </div>

            <div className="mt-8 bg-stone-100 w-full h-64 overflow-auto rounded">
                <div className="flex justify-between">
                    <p className="text-stone-800 text-lg my-4 ms-4">{formattedDate}</p>
                    <button className="text-stone-700 hover:text-red-500 me-8">Clear</button>
                </div>
            </div>

        </div>
    )
}