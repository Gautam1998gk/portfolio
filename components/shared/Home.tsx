import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Skills from './skills'
import AboutMe from './AboutMe'

gsap.registerPlugin(SplitText, ScrollTrigger)
const HomeSections = () => {
    return (
        <div className='w-full'>
            <Hero />
            <Projects />
            <Skills/>
            <AboutMe/>
            {/* 
            companies,
            contact, 
            self projects,about me
            download resume
            */}
        </div>
    )
}

export default HomeSections