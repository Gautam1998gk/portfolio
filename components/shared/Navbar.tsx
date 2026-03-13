"use client"
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    {
        id: "hero",
        title: "Home",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "about",
        title: "About Me",
    },
];

// const Navbar = () => {
//   return ( 
//     <nav className="fixed left-1/2 top-0 z-50 w-full">
//         <div className="max-w-7xl mx-auto py-5  flex justify-between ">
//              <Link href="#hero" className="flex items-center gap-2">
//                     {/* <img alt="logo" src={"/images/logo.png"} />  */}   <p>Gowtham</p>
//                 </Link>
//                 <ul className="flex gap-4">
//                     {navLinks.map(link => <li key={link.id}><a href={`#${link.id}`} >
//                         {link.title}</a></li>)}
//                 </ul>
//         </div>
//     </nav>
//   )
// }
import React, { useState } from 'react'
import { Button } from "../ui/button";
import { ModeToggle } from "../select-module";
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed left-1/2 top-0 z-50 mt-5 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center md:rounded-full rounded-4xl bg-background/15  p-3 md:px-10 backdrop-blur-lg"
        >
            <div className="flex w-full items-center justify-between">
                <div className="flex  items-center gap-2 justify-between flex-grow">
                        <Link href="/">
                            <Image
                                src="/logo2.png"
                                alt="Orc Dev"
                                width={50}
                                height={50}
                            />
                        </Link>
                    <div className="hidden gap-4 md:flex font-semibold">
                        {navLinks.map((item) => (
                            <Link key={item.id} href={`#${item.id}`}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="md:hidden">
                    <Button className="bg-indigo-500"  onClick={() => setIsOpen(!isOpen)}>
                      <UseAnimations animation={menu2} /> 
                    </Button>
                </div>
                <ModeToggle />

            </div>

            {isOpen && (
                <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 md:hidden">
                    {navLinks.map((item) => (
                        <Link key={item.id} href={item.title} onClick={() => setIsOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}

        </nav>
    )
}

export default Navbar