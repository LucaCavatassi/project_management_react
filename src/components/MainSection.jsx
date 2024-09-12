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
                <div className="ms-auto mb-2">
                    <button className="text-stone-700 hover:text-red-500 me-4">Cancel</button>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </div>

                <form>
                    <label for="title" className="text-lg font-bold uppercase text-stone-500">title</label>
                    <input name="title" type="text" className="w-full p-1 mb-6 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />

                    <label for="description" className="mb-1 mt-8 text-lg font-bold uppercase text-stone-500">description</label>
                    <textarea name="description" className="w-full h-24 p-1 mb-5 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />

                    <label for="date" className="mb-1 mt-6 text-lg font-bold uppercase text-stone-500">date</label>
                    <input name="date" type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
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