import React, { useState, useEffect, useCallback } from 'react';

const Hero = () => {
    const [scaleFactor, setScaleFactor] = useState(1);

    const SCROLL_THRESHOLD = 400;

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;

        const scrollProgress = Math.min(1, scrollY / SCROLL_THRESHOLD);

        const newScale = 1 - scrollProgress;

        setScaleFactor(Math.max(0, newScale));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    const scaleStyle = {
        transform: `scale(${scaleFactor})`,
        opacity: scaleFactor,
        lineHeight: '0.55',
        position: scaleFactor > 0.01 ? 'fixed' : 'relative',
        top: scaleFactor > 0.01 ? '50%' : 'auto',
        left: scaleFactor > 0.01 ? '50%' : 'auto',
        transform: `translate(-50%, -50%) scale(${scaleFactor})`,
    };

    return (
        <div className="mt-8 overflow-hidden py-5 h-[100vh] flex items-center justify-center">
            <div className="flex justify-center w-full">
                <h1
                    className="text-center 
                        text-5xl xs:text-6xl sm:text-8xl md:text-8xl lg:text-9xl 
                        xl:text-[13rem] 2xl:text-[18rem] 
                        font-extrabold tracking-tight leading-none text-black      
                        select-none whitespace-nowrap 
                        transition-none"
                    style={scaleStyle}
                >
                    <span className="inline-block text-black">
                        FULL STACK
                    </span>
                    <span className="inline-block text-zinc-700">
                        &nbsp;DEVELOPER
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Hero;