import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function ScrollToTop() {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [showGoToTop, setshowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setshowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <>
            {showGoToTop && (
                < button onClick={scrollToTop} className='go_to_top'>
                    <KeyboardArrowUpIcon />
                </button>
            )}
        </>
    );
}