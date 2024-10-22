import React, { useEffect } from 'react'
import './SideBar.css'

function SideBar() {
    function sidebarCloser() {
        document.getElementById("sidebar").classList.remove("active");
        document.querySelector('#sidebar-body-overlay').classList.remove("sidebar-body-overlay")
    }

    useEffect(() => {
        document.getElementById('sidebar-list').addEventListener('click', function () {
            document.getElementById("sidebar").classList.remove("active");
            document.querySelector('#sidebar-body-overlay').classList.remove("sidebar-body-overlay")
        })
        document.getElementById('sidebar-body-overlay').addEventListener('click', function () {
            document.getElementById("sidebar").classList.remove("active");
            document.querySelector('#sidebar-body-overlay').classList.remove("sidebar-body-overlay")
        })
    }, [])

    const links = [
        {
            href: '#home',
            name: 'Home'
        },
        {
            href: '#about',
            name: 'About'
        },
        {
            href: '#team',
            name: 'Team'
        },
        {
            href: '#work',
            name: 'Work'
        },
        {
            href: '#pricing',
            name: 'Pricing'
        },
        {
            href: '#blog',
            name: 'Blog'
        },
        {
            href: '#contact',
            name: 'Contact'
        },
    ]

    const icons = [{
        aTagClass: "facebook-text-hvr",
        iconClass: "fa-facebook-f"
    },
    {
        aTagClass: "instagram-text-hvr",
        iconClass: "fa-instagram"
    },
    {
        aTagClass: "twitter-text-hvr",
        iconClass: "fa-twitter"
    },
    ]


    return (
        <div className='container'>
            <div className='sidebar' id='sidebar'>
                <div className='sidebar-inner'>
                    <button className='sidebar-closer' id='sidebar-closer' onClick={sidebarCloser}><i className="fa-solid fa-xmark"></i></button>
                    <ul className='sidebar-ul'>
                        {links.map(item => (
                            <a href={item.href} className='sidebar-list' id='sidebar-list'><li>{item.name}</li></a>

                        ))}
                    </ul>
                    <ul className="social-icons-simple">
                        {icons.map(item => (
                            <a className={`${item.aTagClass} sidebar-icon`} href="javascript:void(0);"><li><i className={`fa-brands ${item.iconClass}`}></i></li></a>
                        ))}

                    </ul>
                    <p className="sidebar-company-name">© 2019 <a href="javascript:void(0);" className='sidebar-company-name-a'>Wexim</a>. Made With Love by Themesindustry</p>
                </div>
            </div>

            <div className='' id='sidebar-body-overlay'></div>
        </div>
    )
}

export default SideBar

