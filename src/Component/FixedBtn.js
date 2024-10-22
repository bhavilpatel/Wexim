import React, { useState, useEffect } from 'react'
import './FixedBtn.css'

function FixedBtn() {
    const [fixedBtn, setFixedBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight) {
                setFixedBtn(true);
            } else {
                setFixedBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <a href='#' className={`fixed-btn ${fixedBtn ? 'show' : 'hide'}`} >
                <i className="fa fa-angle-up"></i>
            </a>
        </div>
    )
}

export default FixedBtn
