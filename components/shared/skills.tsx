import React from 'react'
import { AnimatedBeamSkills } from '../animated-beam/Skill'
import { WarpBackground } from '../magicui/warp-background'

const Skills = () => {
    return (
        <section id="skills" className='grid max-w-7xl mx-auto space-y-10 my-10'>
            <h1 className='text-center font-bold md:text-5xl text-4xl'>SKILLS</h1>
            <WarpBackground>
                <AnimatedBeamSkills />
            </WarpBackground>
        </section>
    )
}

export default Skills