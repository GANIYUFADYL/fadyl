import React from "react";
import useRevealAnimation from "../revealAnimation";

function Contact() {
    useRevealAnimation('.reveal-up')
    return (
        <section id='contact' className="w-full min-h-screen text-black mt-8 md:mt-16 flex flex-col justify-center px-6 md:px-16">
            <div className="max-w-4xl">
                <h2 className="inter text-3xl md:text-5xl font-semibold leading-tight">
                    Currently I’m open to new
                    opportunities and projects.<br className="hidden md:block" />
                    Feel free to reach out.
                </h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mt-5 md:mt-36">
                <div className="space-y-3 text-sm md:text-base order-2 md:order-1 mt-24 md:mt-0">
                    <a href="https://github.com/GANIYUFADYL" className="flex items-center inter gap-2 hover:opacity-80">
                        <span className="text-2xl">↗</span> Github
                    </a>
                    <a href="https://www.linkedin.com/in/fadillulahi-ganiyu-856944194/" className="flex items-center inter gap-2 hover:opacity-80">
                        <span className="text-2xl">↗</span> LinkedIn
                    </a>
                    <a href="https://wa.me/qr/N3RSQW5HPGEUB1" className="flex items-center inter gap-2 hover:opacity-80">
                        <span className="text-2xl">↗</span> Whatsapp
                    </a>
                    <a href="https://x.com/__fadyl" className="flex items-center inter gap-2 hover:opacity-80">
                        <span className="text-2xl">↗</span> X
                    </a>
                </div>

                <div className="md:text-right text-left order-1 md:order-2">
                    <p className="text-2xl md:text-4xl font-semibold">
                        ganiyufadi@gmail.com
                    </p>
                    <p className="text-xl md:text-3xl font-semibold">
                        +234 81 2502 5165
                    </p>
                </div>
            </div>
            <footer className="w-full mt-16 py-6 border-t bg-neutral-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center">
                    <p className="text-sm text-neutral-600 font-sans tracking-wide">
                        Copyright &copy; {new Date().getFullYear()} fadyl. All rights reserved.
                    </p>
                </div>
            </footer>

        </section>
    );
}

export default Contact;