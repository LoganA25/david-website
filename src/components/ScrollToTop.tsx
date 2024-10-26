'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
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
        <>
            {isVisible && (
                <a href="#start" className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 lg:bottom-4 lg:right-6 p-4 bg-black text-white rounded-full hover:bg-white hover:text-black text-sm sm:text-xl md:text-xllg:text-xl">
                    <FaArrowUp />
                </a>
            )}
        </>
    );
}
