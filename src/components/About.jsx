import React from 'react'
import aboutimage from '../images/hero.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-model">
        <img src={aboutimage} alt="about-image" />
      </div>
      <div className="about-text">
        <h2>We Are The Best <br />Real Estate Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore totam, sequi saepe ducimus eveniet, consectetur mollitia corporis ratione voluptates cumque numquam adipisci. Non laboriosam quis, facilis, molestias repudiandae fugit voluptatum commodi accusantium libero quidem necessitatibus voluptates aliquam quisquam perferendis.</p>
        <button>View More Details</button>
      </div>
    </div>
  )
}

export default About
