import React from 'react'
import Portfolio1 from './ecommerce.jpg'
import Portfolio2 from './weather.jpeg'
import Portfolio3 from './countdown.jpeg'
import Portfolio4 from './count.jpeg'
import "./project.css"

const Project = () => {
  return (
  <section id='works'>
    <h2 className='worktitle'>My portfolio</h2>
    <span className='workdesc'> I take pride in paying to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help 
    businesses achieve thier goals and create a strong online presence. </span>
    <div className='worksimg'>
      <img src={Portfolio1} alt='' className='imgs'></img>
      <img src={Portfolio2} alt='' className='imgs'></img>
      <img src={Portfolio3} alt='' className='imgs'></img>
      <img src={Portfolio4} alt='' className='imgs'></img>
    </div>
  </section>
  )
}

export default Project;

