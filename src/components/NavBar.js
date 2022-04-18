import React, {useState} from "react";
import {Switch, Route, NavLink} from "react-router-dom";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(prev => !prev);
    }

    function MobileMenu() {
        return (<>
        <div className="flex flex-col w-screen absolute items-center justify-between bg-white gap-4 py-5 opacity-80">
            <NavLink className="text-xl font-medium" to="#experience">Experience</NavLink>
            <NavLink className="text-xl font-medium" to="#education">Education</NavLink>
            <NavLink className="text-xl font-medium" to="#resume">Resume</NavLink>
            <NavLink className="text-xl font-medium" to="#contact">Contact</NavLink>
        </div> 
        </>);
    }

    return (<>
    <nav>
    <div className="px-10 py-6 w-full bg-white">
    <div className="flex justify-between items-center lg:mr-20">
        <div>
            <h3 className="text-sm font-semibold md:text-xl ml-20 text-blue-500">Dharit (Reed) Tantiviramanond</h3>
        </div>
        <div className="hidden space-x-8 lg:flex">
            <NavLink className="text-md font-medium" to="#experience">Experience</NavLink>
            <NavLink className="text-md font-medium" to="#education">Education</NavLink>
            <NavLink className="text-md font-medium" to="#resume">Resume</NavLink>
            <NavLink className="text-md font-medium" to="#contact">Contact</NavLink>
        </div>
        <div className="flex lg:hidden" onClick={handleMenuClick}>
            <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            </div>
        </div>
    </div>
    </div>
    {menuOpen && <MobileMenu />}
    </nav>
    </>);
}