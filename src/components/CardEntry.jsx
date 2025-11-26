import React from "react";
import useRevealAnimation from "../revealAnimation";


function CardEntry(props) {
    useRevealAnimation('.reveal-up')
    return (
        <div className="mt-4">
            <div className="bg-neutral-400 bg-opacity-30 backdrop-filter backdrop-blur-lg border border-opacity-20 border-white p-6 sm:p-8 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 h-[500px]">
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="mb-4">
                        <img
                            src={props.imageUrl}
                            alt={props.alt}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {props.title}
                    </h3>
                    <p className="text-gray-700 text-sm font-normal mb-4">
                        {props.description}
                    </p>
                    <div className="mt-auto">
                        <a
                        href={props.linkUrl}
                    >
                        <button className="border border-black font-[400] rounded-full px-4 py-1 bg-black text-white transition">
                           Live ➚
                        </button>
                    </a></div>

                </div>
            </div>
        </div>
    )
}

export default CardEntry;