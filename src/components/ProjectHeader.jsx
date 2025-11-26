import React from 'react';
import ProjectCard from "./ProjectCard";

function ProjectHeader() {
    return (
        <section id='projects'> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between 
                items-center              
                mb-10 space-y-2 sm:space-y-0">

                <div className="flex items-center space-x-2 order-1">
                    <span className="h-2 w-2 bg-black rounded-full"></span>
                    <p className="text-lg font-sans tracking-widest uppercase">
                        MY PROJECTS
                    </p>
                </div>
                <a
                    href="#"
                    className="text-md font-sans border-b border-black hover:border-transparent transition duration-300 pb-1 order-2 sm:order-3">
                    Featured Projects &rarr;
                </a>
            </div>

            <ProjectCard />
        </div></section>

    );
};

export default ProjectHeader;