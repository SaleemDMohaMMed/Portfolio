import React, { useRef } from 'react'
import  "./contact.css"
import linkedin from "./icons/linkedin.png"
import facebook from "./icons/facebook.png"
import insta from "./icons/instagram.png"
import twitter from "./icons/twitter.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k1i26nb', 'template_pzwv14g', form.current, 'FpEm5rJipHAoF5OOG')
          .then((result) => {
               console.log(result.text);
          }, (error) => {
               console.log(error.text);
          });
      };

    return (
        <section>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='your name' name='user-name'/>
                    <input type='email' className='email' placeholder='your email'name="user_email"/>
                    <textarea className='msg' name='messege' placeholder='your messege' ></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={facebook} alt='facebook' className='link'/>
                        <img src={insta} className='link' alt='instagram'/>
                        <img src={twitter} className='link' alt='twitter'/>
                        <img src={linkedin} className='link' alt='linkedin'/>


                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
