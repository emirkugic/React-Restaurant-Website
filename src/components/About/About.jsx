import React from 'react'
import "./About.css"

const About = () => {
    const knife=require("../../assets/knife.png")
    const spoon=require("../../../src/assets/spoon.png")
  return (
    <div className="about">
        <div className="left-about">
            <h1>About Us</h1>
            <img src={spoon} alt="no img" />
            <p className='left'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
            <button>Know More</button>
        </div>
        <div className="mid-about">
            <img src={knife} alt="No image" />
        </div>
        <div className="right-about">
            <h1>Our History</h1>
            <img src={spoon} alt="no img" />
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
            <button>Know More</button>
        </div>
    </div>
  )
}

export default About