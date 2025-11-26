import { useEffect } from 'react';

const useRevealAnimation = (className = '.reveal-up', threshold = 0.1) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        document.querySelectorAll(className).forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [className, threshold]);
};

export default useRevealAnimation;