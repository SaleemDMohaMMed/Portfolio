import React from 'react';
import './intro.css'
import photo from './imgb.png'
import { Link } from 'react-scroll';
import btnimg from './hire icon.png'

const Intro = () => {
    return (
       <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Mohammed Saleem</span><br/>Web Developer</span>
            <p className='intoPara'> I am a skilled web designer with experince in creating <br/>visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img className='btnimg' src={btnimg} alt='Hire me'/>Hire me</button></Link>
        </div>
        <img src={photo} alt='' className='bg'></img>
       </section>
    );
};

export default Intro;