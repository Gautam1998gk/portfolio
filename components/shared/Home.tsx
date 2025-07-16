import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import ImageReveal from './Experience'

gsap.registerPlugin(SplitText, ScrollTrigger)
const HomeSections = () => {
    return (
        <div className='w-full'>
            <Hero />
            <Projects />
            <ImageReveal/>
            {/* 
            companies,
            contact, 
            self projects,
            download resume
            */}
        </div>
    )
}

export default HomeSections