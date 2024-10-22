import React from 'react'
import './Work.css'
import workImg1 from '../Assets/Images/portfolio-1.jpg'
import workImg2 from '../Assets/Images/portfolio-2.jpg'
import workImg3 from '../Assets/Images/portfolio-3.jpg'
import workImg4 from '../Assets/Images/portfolio-4.jpg'

function Work() {
    return (
        <div className='container'>
            <section className='work-section' id='work'>
                <div className='work-section-wrapper'>
                    <div className='work-section-left'>
                        <div className='work-section-img-wrapper'>
                            <img src={workImg1} className='work-section-img' alt="WorkImg1" />
                            <div className="work-section-img-overlay">
                                <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                <h4 className="overlay-head">Latest Work</h4>
                                <p className='overlay-dis'>See Our Amazing Work</p>
                            </div>
                        </div>
                        <div className='right-hide'>
                            <div className='our-servise-box app-service about-work-section'>
                                <h6 className="our-services-head work-section-head">Basic info about componay</h6>
                                <h2 className="our-services-head-main gradient-color">Creative Portfolio</h2>
                                <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
                            </div>
                        </div>

                        <div className='right-hide'>
                            <div className='work-section-img-wrapper'>
                                <img src={workImg2} className='work-section-img' alt="WorkImg2" />
                                <div className="work-section-img-overlay">
                                    <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                    <h4 className="overlay-head">Latest Work</h4>
                                    <p className='overlay-dis'>See Our Amazing Work</p>
                                </div>
                            </div>
                        </div>
                        <div className='work-section-img-wrapper'>
                            <img src={workImg3} className='work-section-img' alt="WorkImg3" />
                            <div className="work-section-img-overlay">
                                <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                <h4 className="overlay-head">Latest Work</h4>
                                <p className='overlay-dis'>See Our Amazing Work</p>
                            </div>
                        </div>
                        <div className='right-hide'>
                            <div className='work-section-img-wrapper'>
                                <img src={workImg4} className='work-section-img' alt="WorkImg4" />
                                <div className="work-section-img-overlay">
                                    <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                    <h4 className="overlay-head">Latest Work</h4>
                                    <p className='overlay-dis'>See Our Amazing Work</p>
                                </div>
                            </div>
                        </div>

                        <div className='work-section-our-work'>
                            <div className='work-section-our-work-left'>
                                <p className="our-work-dis">We’ve Completed More Than </p>
                                <h2 className="our-work-number">682</h2>
                                <p className='our-work-dis'>projects for our amazing clients,</p>
                            </div>
                            <div className='work-section-our-work-rigth'>
                                <button className='blog-learn-more-btn'>View All Work</button>
                            </div>
                        </div>
                    </div>
                    <div className='work-section-right'>
                        <div className='our-servise-box app-service about-work-section'>
                            <h6 className="our-services-head work-section-head">Basic info about componay</h6>
                            <h2 className="our-services-head-main gradient-color">Creative Portfolio</h2>
                            <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
                        </div>

                        <div className='work-section-img-wrapper'>
                            <img src={workImg2} className='work-section-img' alt="WorkImg2" />
                            <div className="work-section-img-overlay">
                                <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                <h4 className="overlay-head">Latest Work</h4>
                                <p className='overlay-dis'>See Our Amazing Work</p>
                            </div>
                        </div>

                        <div className='work-section-img-wrapper'>
                            <img src={workImg4} className='work-section-img' alt="WorkImg4" />
                            <div className="work-section-img-overlay">
                                <a className="overlay-plus"><i className="fa-solid fa-plus"></i></a>
                                <h4 className="overlay-head">Latest Work</h4>
                                <p className='overlay-dis'>See Our Amazing Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work
