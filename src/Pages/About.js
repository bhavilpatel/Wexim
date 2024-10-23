import React, { useEffect } from 'react'
import rigthImg from '../Assets/Images/half-block1.jpg'
import '../Assets/KeyFrames.css'
import './About.css'
import Counter from '../Component/Counter'

function About() {
  const feture = [
    {
      animationName: "fade-in-left",
      id: '01',
      head: "Website Design",
      dis: "Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      animationName: "fade-in-up",

      id: '02',
      head: "Website Development",
      dis: "Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      animationName: "fade-in-right",
      id: '03',
      head: "Project Management",
      dis: "Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing."
    },
  ]

  const processBar = [
    {
      rangeName: "Project Management",
      rangeNumber: 90,
      rangeColor: "range-color-one"
    },
    {
      rangeName: "Project Management",
      rangeNumber: 75,
      rangeColor: "range-color-two"
    },
    {
      rangeName: "Project Management",
      rangeNumber: 75,
      rangeColor: "range-color-two"
    },
  ]

  return (
    <div className='container'>
      <section className='page-link' id='about'>
        <div className='container-sec'>
          <div className='about-section'>
            <div className='left'>
              <div className='left-sec'>
                <h6 className="about-head">ALWAYS BEHIND THE BRANDS</h6>
                <h2 className="about-main-head">A Studio Helping Web 2.0 Gain Some Momentum.</h2>
                <p className='about-dis'>The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs. yesterday.</p>
                <div className='process-bar'>
                  {processBar.map(item => (
                    <div>
                      <div className='range-head'>
                        <div className='range-name'>{item.rangeName}</div>
                        <div className='range-number' id='range-number'><Counter targetCount={item.rangeNumber} />%</div>
                      </div>
                      <div className='range'>
                        <span className={item.rangeColor} ></span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className='get-started'>Get Started</button>
              </div>
            </div>
            <div className='right'>
              <img src={rigthImg} className='rigth-img' alt="image" />
            </div>
          </div>
          <div className='our-services'>
            <div className='our-servise-box fade-in'>
              <h6 className="our-services-head">Basic info about componay</h6>
              <h2 className="our-services-head-main gradient-color">Our Services</h2>
              <p className='our-service-dis'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
            </div>
            <div className='feture flex-center'>
              {feture?.map(item => (
                <div className={`feture-card ${item.animationName}`}>
                  <h2 className='card-number gradient-color'>{item.id}.</h2>
                  <h6 className='card-head'>{item.head}</h6>
                  <p className='card-dis'>{item.dis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='digital-services'>
          <div className='digital-services-box'>
            <h6 className="digital-service-head">Unleash your creative potential with Wexim</h6>
            <h2 className="digital-service-head-main">Looking For Exclusive Digital Services?</h2>
            <button className='banner-btn banner-btn-one'>Learn More</button>
          </div>
        </div>
      </section >
    </div >
  )
}

export default About
