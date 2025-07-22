"use client"

import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all'
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import { Button } from '../ui/button'
import UseAnimations from "react-useanimations";
import download from 'react-useanimations/lib/download';
import { CoolMode } from '../magicui/cool-mode'

const socials = [{
    id: 1,
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/pelluru-gowtham"
},
{
    id: 2,
    icon: <FaGithub size={28} />,
    url: "https://github.com/Gautam1998gk"

},
{
    id: 3,
    icon: <IoMail size={28} />,
    url: "mailto:gowthampelluru@gmail.com"
},
{
    id: 4,
    icon: <FaWhatsapp size={28} />,
    url: "https://wa.me/6281689526"
},
]
const Hero = () => {

    const handleClick = () => {
        const pdfUrl = "/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useGSAP(() => {
        const split = new SplitText(".title", { type: "words, chars" });
        const role = new SplitText(".role", { type: " chars" });
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top center",
            }
        })
        scrollTimeline.fromTo(split.chars, {
            y: 50,
            opacity: 0,
            rotateX: 90,
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            rotateX: 0,
            ease: "back.out(1.7)",
            stagger: 0.05,
        }).fromTo(role.chars, {
            x: 50,
            opacity: 0,
            rotateX: 90,
        }, {
            duration: 2,
            x: 0,
            opacity: 1,
            rotateX: 0,
            ease: "elastic",
            stagger: 0.05,
            repeat: -5,
        }, "-=0.5")
        gsap.fromTo(".socials li", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            rotate: 360,
            duration: 1,
            stagger: 0.05
        });
    }, []);


    return (
        <section id="hero">
            <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-10 w-full hero">
                <div className='w-full flex flex-col items-center gap-10 justify-center max-sm:pl-4'>
                    <h3 className='title font-bold text-indigo-500 dark:text-white text-5xl'>Hello! , I&apos;m Gowtham</h3>
                    <p className='text-xl role font-semibold'>Full Stack Developer</p>
                    <ul className="flex gap-4 socials">
                        {socials.map(so => <li key={so.id}>
                            <Link target='_blank' href={so.url}>{so.icon}</Link></li>)}
                        <li><CoolMode>
                            <Button className=' bg-gradient-to-r from-blue-500 to-pink-500 flex gap-2 '  onClick={handleClick}>Resume  <span className='animate-bounce'><UseAnimations className='cursor-pointer' animation={download} size={25} strokeColor='blue' /></span></Button>
                       </CoolMode> </li>
                    </ul>
                </div>
                <div className='w-full flex justify-center'>
                    <ProfileCard
                        name="Gowtham "
                        title="Software Engineer"
                        handle="javicodes"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/photo.png"
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero