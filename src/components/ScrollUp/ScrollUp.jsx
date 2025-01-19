import "./ScrollUp.css"

import { useEffect, useState } from 'react';

export default function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 350) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a
            href="#"
            className={`scrollup ${isVisible ? 'show-scroll' : ''}`}
            id="scroll-up"
        >
            <i className="bx bx-chevrons-up"></i>
        </a>
    );
}