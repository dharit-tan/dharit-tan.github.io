import React from "react";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import Experience from "./Experience.js";
import {BrowserRouter} from "react-router-dom";

export default function Parent() {
    return (<>
    <BrowserRouter>
    <div className="bg-zinc-800 h-full">
        <NavBar />
        <section id="home">
            <Home />
        </section>
        <section className="bg-stone-800" id="experience">
            <Experience />
        </section>
    </div>
    </BrowserRouter>
    </>);
}