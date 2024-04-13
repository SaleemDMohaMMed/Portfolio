import React from 'react'
import './skills.css'
import Webdev from  './webdev.jpg'
import Webdes from './webdesign.jpg'
import appdev from './appdev.png'
const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle"> What I do</span>
      <span className='skillDesc'> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites,I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator. </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Webdev} alt='Web Development' className='skillBarImg'></img>
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p> Passionate web developer with expertise in creating dynamic and responsive websites. Proficient in frontend technologies such as HTML, CSS, and JavaScript, with a strong backend foundation using Node.js and Express. Excels in crafting seamless user experiences and has a portfolio featuring diverse projects, from interactive web applications to robust e-commerce platforms.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={Webdes} alt='Web Design' className='skillBarImg'></img>
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>Creative web designer with a keen eye for aesthetics and a passion for crafting visually appealing and user-centric websites. Proficient in using design tools such as Adobe XD and Figma to bring ideas to life. Specializes in creating modern, responsive designs that elevate the overall user experience. Explore my portfolio for a glimpse into the art and functionality of my web design projects.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={appdev} alt='App development' className='skillBarImg'></img>
          <div className='skillBarText'>
            <h2>App Development</h2>
            <p>Innovative app developer with expertise in crafting intuitive and feature-rich mobile applications. Proficient in both iOS and Android development using Swift, Kotlin, and Flutter. Passionate about delivering seamless user experiences through elegant and efficient code. Explore my portfolio to witness the diverse range of applications I've brought to life.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills