import React from 'react'
import Slider from "react-slick";
import slide1 from '../Assets/Images/iphone-slide1.jpg'
import slide2 from '../Assets/Images/iphone-slide2.jpg'
import slide3 from '../Assets/Images/iphone-slide3.jpg'
import mobile from '../Assets/Images/iphone-img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AppSec.css'

function AppSec() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderImg = [
        { src: slide1 },
        { src: slide2 },
        { src: slide3 },
    ]

    const leftContent = [
        {
            icon: "fa-regular fa-gem app-sec-card-icon",
            heading: "Theme Options",
            dis: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
        },
        {
            icon: "fa fa-edit app-sec-card-icon",
            heading: "Customization",
            dis: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
        },
    ]

    const rigthContent = [
        {
            icon: "fa fa-code app-sec-card-icon",
            heading: "Powerful Code",
            dis: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
        },
        {
            icon: "fa fa-folder-open app-sec-card-icon",
            heading: "Documentation",
            dis: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh."
        },
    ]
    return (
        <div className='container'>
            <section className='mobile-apps' id='app-sec'>
                <div className='our-servise-box app-service fade-in'>
                    <h6 className="our-services-head">Most reliable application</h6>
                    <h2 className="our-services-head-main gradient-color">Mobile App Design</h2>
                    <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                </div>
                <div className='app-section'>
                    <div className='app-section-left fade-in-left'>
                        {leftContent.map(item => (
                            <div className='app-sec-card'>
                                <i className={item.icon} />
                                <h2 className='app-sec-card-head'>{item.heading}</h2>
                                <p className='app-sec-card-dis'>{item.dis}</p>
                            </div>
                        ))}
                    </div>
                    <div className='app-section-middle fade-in-up'>
                        <img src={mobile} className='mobile' alt="Mobile" />
                        <div className='slider'>
                            <Slider {...settings}>
                                {sliderImg.map(item => (
                                    <div><img src={item.src} className='slider-img' alt="" /></div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='app-section-right fade-in-right'>
                        {rigthContent.map(item => (
                            <div className='app-sec-card'>
                                <i className={item.icon} />
                                <h2 className='app-sec-card-head'>{item.heading}</h2>
                                <p className='app-sec-card-dis'>{item.dis}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div>

    )
}

export default AppSec
