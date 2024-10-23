import React from 'react'
import './Contact.css'

function Contact() {
    const icons = [
        {
            className: "facebook-text-hvr",
            icon: "fa-facebook-f"
        },
        {
            className: "twitter-text-hvr",
            icon: "fa-twitter"
        },
        {
            className: "google-text-hvr",
            icon: "fa-google-plus"
        },
        {
            className: "linkedin-text-hvr",
            icon: "fa-linkedin"
        },
        {
            className: "instagram-text-hvr",
            icon: "fa-instagram"
        },
    ]
    return (
        <div className='container'>
            <section className='page-link' id='contact'>
                <div className='location-and-form'>
                    <div className='location fade-in-left'>
                        <div className='location-overlay'>
                            <h6 className="location-head">Lorem ipsum dolor sit amet consectetur</h6>
                            <h2 className="location-head-main">Wexim Agency, Newyork</h2>
                            <p className="location-contact-details">123 Stree New York City , United States Of America. </p>
                            <p className="location-contact-details">Office Telephone : 001 01085379709<br />Mobile : 001 63165370895 </p>
                            <p className="location-contact-details">mail : admin@website.com<br />Inquiries : email@website.com</p>
                            <div className="address-social">
                                <ul className="list-unstyled">
                                    <li><a href='javascript:void(0);' className="location-social-icon facebook-text-hvr"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li><a href='javascript:void(0);' className="location-social-icon twitter-text-hvr"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href='javascript:void(0);' className="location-social-icon google-text-hvr"><i className="fa-brands fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href='javascript:void(0);' className="location-social-icon linkedin-text-hvr"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href='javascript:void(0);' className="location-social-icon instagram-text-hvr"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='form'>
                        <form>
                            <div className='all-inputs'>
                                <input type="text" placeholder='First Name:' className=' input firstName' required />
                                <input type="text" placeholder='Last Name:' className=' input lastName' required />
                            </div>
                            <div className='all-inputs'>
                                <input type="email" placeholder='Email:' className=' input email' required />
                                <input type="number" placeholder='Phone:' className=' input phone' required />
                            </div>
                            <textarea cols="30" rows="10" placeholder='Massage' className='input textarea' required></textarea>

                            <div className='submit-btn'>
                                <button className='contact-btn'>Contact Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918836657!2d72.41492987281738!3d23.02015808427636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729240548916!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}

export default Contact
