import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Team.css'

import img1 from '../Assets/Images/team-img6.jpg'
import img2 from '../Assets/Images/team-img7.jpg'
import img3 from '../Assets/Images/team-img4.jpg'
import img4 from '../Assets/Images/team-img5.jpg'

function Team() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                }
            }
        ]
    };

    const appendChield = document.getElementsByClassName('slick-slide')
    var appendDiv = document.createElement("div");
    appendDiv.className = "flex";

    const profileUpperCard = [
        {
            img: img1,
            name: "Alex Walkin",
            position: "Developer",
            dis: "Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.",
            class: "team-profile-card"
        },
        {
            img: img3,
            name: "Alex Walkin",
            position: "Designer",
            dis: "Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.",
            class: 'team-profile-card reverse'
        },

    ]
    const profileLowerCard = [
        {
            img: img2,
            name: "Alex Walkin",
            position: "Developer",
            dis: "Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.",
            class: 'team-profile-card'
        },
        {
            img: img4,
            name: "Alex Walkin",
            position: "Designer",
            dis: "Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.",
            class: 'team-profile-card reverse'

        },
    ]

    const icon = [
        {
            className: "facebook-text-hvr",
            icon: "fa-facebook-f"
        },
        {
            className: "twitter-text-hvr",
            icon: "fa-twitter"
        },
        {
            className: "pinterest-text-hvr",
            icon: "fa-pinterest"
        },
        {
            className: "instagram-text-hvr",
            icon: "fa-instagram"
        },
    ]

    return (
        <div className='container'>
            <section className='team-sec' id='team'>
                <div className='our-servise-box fade-in'>
                    <h6 className="our-services-head">Basic info about componay</h6>
                    <h2 className="our-services-head-main gradient-color">Creative Heads</h2>
                    <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                </div>
                <div className='team-card fade-in-up'>
                    <Slider {...settings}>
                        {profileUpperCard.map(item => (
                            <div>
                                <div className={item.class}>
                                    <div className='team-profile-left'>
                                        <img src={item.img} className='team-profile-img' alt="profile-img" />
                                    </div>
                                    <div className='team-profile-right'>
                                        <div className='team-profile-card-content'>
                                            <h2 className='team-profile-card-name'>{item.name}</h2>
                                            <div className='team-profile-card-position gradient-color'>{item.position}</div>
                                            <p className='team-profile-card-dis'>{item.dis}</p>
                                            <div className="team-profile-card-icon">
                                                {icon.map(item => (
                                                    <a className={`${item.className} team-profile-card-icon-hvr`} href="javascript:void(0);"><i className={`fa-brands ${item.icon}`}></i></a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {profileLowerCard.map(item => (
                            <div>
                                <div className={item.class}>
                                    <div className='team-profile-left'>
                                        <img src={item.img} className='team-profile-img' alt="profile-img" />
                                    </div>
                                    <div className='team-profile-right'>
                                        <div className='team-profile-card-content'>
                                            <h2 className='team-profile-card-name'>{item.name}</h2>
                                            <div className='team-profile-card-position gradient-color'>{item.position}</div>
                                            <p className='team-profile-card-dis'>{item.dis}</p>
                                            <div className="team-profile-card-icon">
                                                {icon.map(item => (
                                                    <a className={`${item.className} team-profile-card-icon-hvr`} href="javascript:void(0);"><i className={`fa-brands ${item.icon}`}></i></a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section >
        </div >
    )
}

export default Team
