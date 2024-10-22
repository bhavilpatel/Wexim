import React from 'react'
import '../Assets/KeyFrames.css'
import './Home.css'

function Home() {
  return (
    <div className='container'>
      {/* Hero Section */}
      <section className='hero active' id='home'>
        <div className='banner'>
          <div className='banner-box'>
            <a data-fancybox="" href="https://www.youtube.com/watch?v=hpeYWdkUtcE" className="button-play"><i className='fa fa-play'></i></a>
            <h2 className="banner-head">Most Flexible One Page HTML5 Template</h2>
            <p className="banner-dis">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs. yesterday.</p>
            <div className='home-learn-btn'>
              <button className='banner-btn banner-btn-one'>Learn More</button>
              <button className='banner-btn banner-btn-two'>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

