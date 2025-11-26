import React, { useState, useEffect } from 'react';

const FullText = "Bridging design and functionality, I'm Fadyl, a full stack developer. \n\nI build robust web applications by combining strong front-end engineering with reliable backend logic.";

const TypingText = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const TYPING_SPEED = 30;

    useEffect(() => {
        if (currentIndex < FullText.length) {
            const timeout = setTimeout(() => {
                const nextChar = FullText[currentIndex] === '\n'
                    ? '\n'
                    : FullText[currentIndex];

                setTypedText(prev => prev + nextChar);

                setCurrentIndex(prev => prev + 1);
            }, TYPING_SPEED);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    const displayText = typedText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < typedText.split('\n').length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <h2 className="inter text-2xl md:text-4xl font-semibold leading-snug">
            {displayText}
            <span className="animate-blink">|</span>
        </h2>
    );
};

export default TypingText;