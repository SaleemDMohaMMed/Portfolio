import React from 'react';
import Nav from './components/Nav';
import Intro from './intro/Intro';
import Skills from './Skills/skills'
import Project from './project/project'
import Contact from './contact/contact'
import Footer from './footer/footer';
const App = () => {
    return (
        <div id='container'>
            <Nav/>
            <Intro/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;