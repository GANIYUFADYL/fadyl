import React from "react";
import * as motion from "motion/react-client"
import dp from "../images/dp.jpg";
import TypingText from "../typingtext";

export default function About() {
    return (
        <section id="about" className="w-full text-black mt-24 flex justify-center px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:space-x-12 max-w-7xl w-full items-start">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <TypingText />
                    <a
                        href="/GANIYU FADILLULAHI WEB DEV CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block w-full sm:w-auto"
                    >
                        <button className="bg-black text-white p-3 rounded-lg hover:bg-neutral-600 flex items-center justify-center space-x-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                            <span>View Resume</span>
                        </button>
                    </a>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md group cursor-pointer">

                        <div className="absolute inset-0 
                rounded-xl border border-white/20 
                transform translate-x-4 translate-y-4 
                bg-black/10 backdrop-blur-sm 
                transition-all duration-300">
                        </div>

                        <div className="absolute inset-0 
                rounded-xl border border-white/30 
                transform translate-x-2 translate-y-2 
                bg-black/20 backdrop-blur-sm 
                transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-75">
                        </div>

                        <img
                            src={dp}
                            className="relative z-10 
                    w-full h-48 md:h-80 object-cover rounded-xl 
                    border border-white/60 
                    bg-black/30 backdrop-blur-md 
                    shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01] group-hover:border-white/90"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
