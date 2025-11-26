import { useState } from "react";
import NavList from "./Navlist";
import NavItems from "../Navitems"
import logo from "../images/fadyl.png"

function addItem(Item) {
    return (
        <NavList
            link={Item.link}
            text={Item.text}
        />
    )
}

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur px-6 py-4 flex items-center justify-between">
            <div className="flex items-center md:mx-10">
                <img src={logo} className="h-16" />
            </div>
            <ul className="hidden md:flex space-x-6 items-center">
                {NavItems.map(addItem)}
            </ul>

            <div className="hidden md:block">
                <a href="#contact">
                    <button className="border border-black font-[500] rounded-full px-4 py-1 hover:bg-black hover:text-white transition md:mx-8">
                    Let's Talk
                </button></a>

            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full 
                    bg-neutral-300/90
                    backdrop-blur-xl 
                    border-b border-white/40 
                    shadow-xl 
                    md:hidden 
                    z-[9999] 
                    overflow-hidden">
                    <ul className="flex flex-col items-center py-6 space-y-4">
                        {NavItems.map(addItem)}
                        <li>
                            <a href="#contact">
                                <button className="border border-black font-medium rounded-full px-5 py-2 
                                   bg-black text-white hover:bg-white hover:text-black transition 
                                   duration-300 transform hover:scale-105">
                                    Let's Talk
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
