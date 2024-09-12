import classes from "./Sidebar.module.css"

export default function Sidebar({onShow}){
    return (
        <div className={`${classes.sideBg} ${classes.sideMax} h-full w-1/3`}>
            <h1 className={` uppercase text-white text-2xl font-bold pt-14 ps-7`}>Your projects</h1>
            <button onClick={onShow} className="px-4 py-2 mt-7 ms-7 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">&#43; Add Project</button>
        </div>
    )

}