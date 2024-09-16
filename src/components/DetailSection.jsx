import { useState } from "react";
import classes from "./DetailSection.module.css"

export default function DetailSection ({projectDetail, onDelete}) {
    const dateStr = projectDetail.date
    const date = new Date(dateStr)

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    });

    const[singleTask, setSingleTask] = useState("");
    

    const [tasks, setTasks] = useState([]); 

    function addTask (data) {
        setTasks((prev) => [...prev, data]);
        setSingleTask('');
    }

    function deleteTask(index) {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    }
    

    return (
        <div className="pt-10 px-24 flex-grow h-full">
            <div className="flex justify-between items-center">
                <h2 className="text-5xl font-bold text-stone-700 my-4">{projectDetail.title}</h2>
                <button onClick={onDelete} className="text-stone-700 hover:text-red-500">Delete</button>
            </div>
                <p className="text-stone-600 mb-4">{formattedDate}</p>
                <p className="mb-4">{projectDetail.description}</p>


            <hr className="border rounded bg-stone-300 h-1" />


            <div>
                <label htmlFor="tasks" className="text-3xl font-bold text-stone-700 my-4 mb-5 mt6 block">Tasks</label>
                <input onChange={(e)=> setSingleTask(e.target.value)} value={singleTask} id="tasks" className="w-3/4 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <button onClick={()=> addTask(singleTask)} className="text-stone-700 hover:text-green-500 hover:cursor-pointer ms-6">&#43; Add Task</button>
            </div>

            <div className="mt-8 bg-stone-100 w-full h-64 overflow-auto rounded">
                    {tasks.map((data, index) => (
                        <div key={index} className="flex justify-between">
                            <p className="text-stone-800 text-lg my-4 ms-4 capitalize">{data}</p>
                            <button onClick={() => deleteTask(index)} className="text-stone-700 hover:text-red-500 me-8">Clear</button>
                        </div>
                    ))}             
            </div>
        </div>
    )
}