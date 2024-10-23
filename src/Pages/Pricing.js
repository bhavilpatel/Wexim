import React from 'react'
import "./pricing.css"
import Slider from "react-slick";
import Counter from '../Component/Counter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg1 from "../Assets/Images/testimonial-img1.jpg"
import testimonialImg2 from "../Assets/Images/testimonial-img2.jpg"
import testimonialImg3 from "../Assets/Images/testimonial-img3.jpg"
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

function Pricing() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const planeCards = [
        {
            cardNumber: "plane-card-1",
            palneName: "Starter Plan",
            planeDis: "If you are a small business and you are interested in small rebranding then this is a perfect plan for you",
            planePrize: "29.99",
        },
        {
            cardNumber: "plane-card-2",
            palneName: "Business Plan",
            planeDis: "If you are a small business and you are interested in small rebranding then this is a perfect plan for you",
            planePrize: "29.99",
        },
    ]

    const benefit = [
        {
            sign: " fa fa-check",
            access: "Full access",
        },
        {
            sign: " fa fa-check",
            access: "Unlimited Bandwidth",
        }
        ,
        {
            sign: " fa fa-check",
            access: "Unlimited Bandwidth",
        }
        ,
        {
            sign: " fa fa-check",
            access: "Powerful Admin Panel",
        }
        ,
        {
            sign: " fa fa-times",
            access: "Email Accounts",
        }
        ,
        {
            sign: " fa fa-times",
            access: "Email Accounts",
        }
        ,
        {
            sign: " fa fa-times",
            access: "8 Free Forks Every Months"
        }
    ]

    const testimonial = [
        {
            dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum. ",
            img: testimonialImg1,
            name: "Sara WIlliamson",
            post: "Project Manager, The Company Inc."
        },
        {
            dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum. ",
            img: testimonialImg2,
            name: "Jhon Amstrong",
            post: "Company CEO, The Abacus Inc."
        },
        {
            dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. Nunc aliquet lacus vel posuere volutpat. Fusce ultrices sollicitudin nisl nec elementum. ",
            img: testimonialImg3,
            name: "Stephine Jhon",
            post: "General Manager, The Company Inc."
        },
    ]

    const provided = [
        {
            number: 69,
            head: "Award Won"
        },
        {
            number: 780,
            head: "Employees"
        },
        {
            number: 456,
            head: "Happy Clients"
        },
        {
            number: 599,
            head: "Finished Projects"
        },
    ]

    return (
        <div className='container'>
            <section className='page-link' id='pricing'>
                <div className='container-sec'>
                    <div className='pricing-upper-section'>
                        <div className='our-servise-box app-service fade-in'>
                            <h6 className="our-services-head">Most flexible pricing</h6>
                            <h2 className="our-services-head-main gradient-color">Easy Pricing</h2>
                            <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                        </div>

                        <div className='planes'>
                            {planeCards.map(item => (
                                <div className={item.cardNumber}>
                                    <h4 className='plane-card-head'>{item.palneName}</h4>
                                    <p className='plane-card-detail'>{item.planeDis}</p>
                                    <div className='plane-card-price'><h3 className='amount'><span className='doller'>$</span>{item.planePrize}</h3><span className='duration'>Month</span></div>
                                    <div className='plane-card-benefit'>
                                        {benefit.map(item => (
                                            <div className='plane-benefit'>
                                                <i className={item.sign} />
                                                <h4 className='plane-benefit-main'>{item.access}</h4>
                                            </div>
                                        ))}
                                    </div>
                                    <button className='plane-start'>Get Started</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pricing-lower-part'>
                    <div className='pricing-lower-part-left'>
                        <div className='testimonial-slider'>
                            <Slider {...settings}>
                                {testimonial.map(item => (
                                    <div className='testimonial-card'>
                                        <i className="fa fa-quote-right testimonial-icon"></i>
                                        <p className='testimonial-dis'>{item.dis}</p>
                                        <img src={item.img} className='testimonial-img' alt="client-img" />
                                        <h4 className='testimonial-author-name'>{item.name}</h4>
                                        <h4 className='testimonial-author-post'>{item.post}</h4>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='pricing-lower-part-rigth'>
                        <div className='pricing-lower-part-rigth-img'>
                            <div className='pricing-lower-part-rigth-overlay'>
                                <div className='counter-card'>
                                    {provided.map(item => (
                                        <div className='counter'>
                                            <h2 className='counter-number'><Counter targetCount={item.number} /></h2>
                                            <div className='counter-head'>{item.head}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
