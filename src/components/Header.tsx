import { useState } from "react"
import MenuOutline from "./menu-outline"

export default function Header(){

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    console.log(screen.width)
    console.log(screen.height)
    
    return(
        <>
            <header className={"bg-header-bg text-header-text text-2xl flex justify-between items-center pr-3 fixed top-0 w-full z-10"}>
                <a className="flex items-center" href="./">
                    <img className="w-16 drop-shadow-xs drop-shadow-black" src="image.png" alt="" />
                    <span>Jspow</span>
                </a>
                <button className="sm:hidden hover:cursor-pointer w-8 h-8" onClick={()=>{menuIsOpen?setMenuIsOpen(false):setMenuIsOpen(true)}} type="button">
                    <MenuOutline menuIsOpen={menuIsOpen}/>
                </button>
                <ul className={"flex items-center gap-3 "+(menuIsOpen?'fixed top-16 bg-header-bg w-full h-screen flex-col items-end pr-3':'max-sm:hidden')}>
                    <li>
                        <a onClick={()=>{menuIsOpen || screen.width >=640 ?setMenuIsOpen(false):setMenuIsOpen(true)}} href="./">Home</a>
                    </li>
                    {/* <li className="bg-header-bg">
                        <a href="./">What i learned</a>
                    </li> */}
                    <li>
                        <a onClick={()=>{menuIsOpen  || screen.width >=640 ?setMenuIsOpen(false):setMenuIsOpen(true)}} href="./#/AboutMe">Sobre mim</a>
                    </li>
                    {/* <li className="bg-header-bg">
                        <a href="./">My projects</a>
                    </li> */}
                </ul>
            </header>
        </>
    )
}