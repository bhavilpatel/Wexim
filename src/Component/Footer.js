import React from 'react'
import '../Assets/KeyFrames.css'
import './Footer.css'

function Footer() {

    const icons = [
        {
            animationName: "fade-in-up",
            iconName: "fa-brands fa-facebook-f"
        },
        {
            animationName: "fade-in-down",
            iconName: "fa-brands fa-twitter"
        },
        {
            animationName: "fade-in-up",
            iconName: "fa-brands fa-google-plus"
        },
        {
            animationName: "fade-in-down",
            iconName: "fa-brands fa-linkedin"
        },
        {
            animationName: "fade-in-up",
            iconName: "fa-brands fa-instagram"
        },
        {
            animationName: "fade-in-down",
            iconName: "fa-solid fa-envelope"
        },
    ]

    return (
        <div className='container'>
            <footer className='footer'>
                <ul className="list-unstyled">
                    {icons.map(item => (
                        <li><a className={`wow ${item.animationName}`} href="javascript:void(0);" ><i className={item.iconName}></i></a></li>
                    ))}
                </ul>
                <p className='copy-right'>© 2019 Wexim. Made With Love By <a href="javascript:void(0);" className='footer-company-name'>Themesindustry</a></p>
            </footer>
        </div>
    )
}

export default Footer
