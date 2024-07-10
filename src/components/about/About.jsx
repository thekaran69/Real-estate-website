import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Our Agency! We are a dedicated team of real estate professionals committed to making your property journey seamless and successful. With years of experience and a passion for excellence, we pride ourselves on our deep market knowledge and personalized service. Our story is one of growth, integrity, and a relentless focus on client satisfaction.</p>
            <p>From helping first-time homebuyers to seasoned investors, we offer tailored solutions to meet diverse needs. Our mission is to build lasting relationships and guide you every step of the way. Discover the difference with our agency, where your goals become our goals.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
