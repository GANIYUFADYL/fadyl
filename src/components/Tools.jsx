import React from "react";
import Toolkit from "../ToolList";
import ToolEntry from "./ToolEntry";

function Tools() {

    return (
        <section id="tools"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between 
                items-center              
                mb-10 space-y-2 sm:space-y-0">

                <div className="flex items-center space-x-2 order-1">
                    <span className="h-2 w-2 bg-black rounded-full"></span>
                    <p className="text-lg font-sans tracking-widest uppercase">
                        My Toolkit
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-8">
                {Toolkit.map((categoryGroup) => (
                    <div key={categoryGroup.category}>
                        <h2 className="text-md text-black mb-4 border-b border-black/10 pb-2 font-sans tracking-widest uppercase">
                            {categoryGroup.category}
                        </h2>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                            {categoryGroup.tools.map((tool) => (
                                <ToolEntry
                                    key={tool.title}
                                    tool={tool}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div></section>

    );
}

export default Tools;