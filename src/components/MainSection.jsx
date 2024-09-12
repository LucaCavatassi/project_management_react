import classes from "./MainSection.module.css"
import logo from "../assets/no-projects.png"
import { useState } from "react";

export default function MainSection({showForm, onShow}){
    function LoadScreen() {
        return (
            <div className="flex-grow text-gray-700 mt-24 items-center flex flex-col">
                <img className={`${classes.imgSize}`} src={logo} alt="" />
                <h1 className="text-3xl font-bold mt-3">No Project Selected</h1>
                <p className="text-gray-500 text-lg mt-3">Select a project or get started with a new one!</p>
                <button onClick={onShow} className="px-4 py-2 mt-7 ms-7 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create New Project</button>
            </div>
        )
    }

    function FormScreen() {
        return (
            <div className="flex-grow text-gray-700 mt-28 ps-20 pe-36 flex flex-col">
                <form>
                    <h2 className="mb-1 font-bold uppercase md:text-xl text-stone-500">title</h2>
                    <input type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />

                    <h2 className="mb-1 mt-7 font-bold uppercase md:text-xl text-stone-500">description</h2>
                    <textarea className="w-full h-24 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />

                    <h2 className="mb-1 mt-6 font-bold uppercase md:text-xl text-stone-500">date</h2>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </form>
            </div>
        )
    }

    function ScreenHandler() {
        if(showForm) {
            return (
                <FormScreen/>
            )
        } else {
            return (
                <LoadScreen/>
            )
        }
    }

    return (
        <ScreenHandler/>
    )
}