import React from 'react'
import './Blog.css'
import '../Assets/KeyFrames.css'
import blogImg from '../Assets/Images/blog-half1.jpg'

function Blog() {
    return (
        <div className='container'>
            <section className='blog page-link' id='blog'>
                <div className='blog-sec-left'>
                    <h6 className='blog-head'>January 14, 2019</h6>
                    <h2 className='blog-head-main'>Living Your Dreams</h2>
                    <p className='blog-dis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>
                    <button className='blog-learn-more-btn'>Learn More</button>
                </div>
                <div className='blog-sec-right fade-in-right'>
                    <img src={blogImg} alt="Blog Img " className='blog-img' />
                </div>
            </section>
        </div>
    )
}

export default Blog
