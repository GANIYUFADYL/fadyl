import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ProjectHeader from "./ProjectHeader";
import Hero from "./Hero";
import About from "./About";
import Tools from "./Tools"

function Home() {
    return (
        <div className="bg-neutral-300 min-h-screen" >
            <div>
                <Navbar />
                <Hero />
                <About />
                <Tools />
                <ProjectHeader />
                <Contact />
            </div>
        </div>
    )
}

export default Home;