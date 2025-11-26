import React from "react";

function ToolEntry({ tool }) {
    return (
        <div className="flex flex-col items-center p-3 sm:p-4 
                        bg-neutral-300 backdrop-blur-md rounded-xl 
                        border border-white/20 
                        transition-all duration-300 
                        hover:bg-neutral-300 hover:shadow-xl
                        cursor-pointer 
                        ">

            <div className="w-12 h-12 sm:w-14 sm:h-14 
                            flex items-center justify-center 
                            rounded-full 
                            bg-white/20 border border-white/40 
                            mb-1 sm:mb-2 flex-shrink-0">
                <img
                    src={tool.image}
                    alt={`${tool.title} Logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
            </div>

            <div className="text-center w-full overflow-hidden">
                <p className="text-[0.6rem] sm:text-xs font-medium text-black tracking-wider uppercase truncate">
                    {tool.title}
                </p>
            </div>
        </div>
    );
}

export default ToolEntry;