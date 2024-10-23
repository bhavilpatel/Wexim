import React, { useEffect } from 'react'
import '../Assets/KeyFrames.css'
import './Home.css'

function Home() {

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.getElementById('parallax');
      if (parallaxElement) {
        // Apply parallax effect by changing the background position
        parallaxElement.style.backgroundPositionY = -(window.scrollY * 0.3) + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='container'>
      {/* Hero Section */}
      <section className='page-link' id='home'>
        <div className='hero ' id='parallax'>
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
        </div>
      </section>
    </div>
  )
}

export default Home


// import React, { useEffect } from 'react';
// import '../Assets/KeyFrames.css';
// import './Home.css';

// function Home() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const parallaxElement = document.getElementById('parallax');
//       if (parallaxElement) {
//         // Apply parallax effect by changing the background position
//         parallaxElement.style.backgroundPositionY = -(window.scrollY * 0.4) + 'px';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container">
//       {/* Hero Section */}
//       <section className="page-link" id="home">
//         <div className="hero" id="parallax">
//           {/* Background image */}
//           <div className="banner">
//             <div className="banner-box">
//               <a
//                 data-fancybox=""
//                 href="https://www.youtube.com/watch?v=hpeYWdkUtcE"
//                 className="button-play"
//               >
//                 <i className="fa fa-play"></i>
//               </a>
//               <h2 className="banner-head">Most Flexible One Page HTML5 Template</h2>
//               <p className="banner-dis">
//                 The integration of web fonts has always been one of the largest
//                 contributing factors to diversity in the overall look and feel of websites
//                 today vs. yesterday.
//               </p>
//               <div className="home-learn-btn">
//                 <button className="banner-btn banner-btn-one">Learn More</button>
//                 <button className="banner-btn banner-btn-two">Learn More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
