import classes from "./Sidebar.module.css"

export default function Sidebar(){
    return (
        <div className={`${classes.sideBg} ${classes.sideMax} h-screen w-1/3`}>
            <h1 className={` uppercase text-white text-2xl font-bold pt-14 ps-7`}>Your projects</h1>
        </div>
    )

}