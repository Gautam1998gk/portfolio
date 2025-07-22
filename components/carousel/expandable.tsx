"use client"
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageReveal from "../shared/Experience";
import Image from "next/image";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
    item: { image: string; title: string,url:string };
    index: number;
    activeItem: number;
}

interface ExpandableProps {
    list?: { image: string; title: string,url:string }[];
    autoPlay?: boolean;
    className?: string;
}


gsap.registerPlugin(ScrollTrigger, SplitText);

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (index === activeItem) {
            const title = containerRef.current?.querySelector(".item-title");
            if (title) {
                const split = new SplitText(title, { type: "chars" });
                gsap.from(split.chars, {
                    onStart: () => {
                        split.chars.forEach(char => {
                            char.classList.add(
                                "bg-gradient-to-r",
                                "from-red-600",
                                "to-indigo-700",
                                "text-transparent",
                                "bg-clip-text"
                            );
                        });
                    },
                    opacity: 0,
                    y: 50,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power3.out",
                    
                });
            }
        }
    }, [index, activeItem]);

    return (
        <div  onClick={() => window.open(item.url, '_blank')}
            ref={containerRef}
            className={cn(
                "relative flex h-full lg:w-32 w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
                {
                    "flex-grow": index === activeItem,
                },
                className
            )}
            {...props}
        >
            {index !== activeItem ? <Image
                src={item.image}
                alt={item.title} width={400} height={400}
                className={cn("h-full w-full object-cover", {
                    "blur-[2px]": index !== activeItem,
                })}
            /> :
                <ImageReveal IMAGE_URL={item.image} index={index} activeItem={activeItem} />}
            {index === activeItem && (
                <div className="absolute bottom-4 left-[10%] min-w-fit text-white md:bottom-8 md:left-8 ">
                    <h1 className="item-title text-xl sm:text-2xl md:text-4xl  font-semibold">{item.title}</h1>
                </div>
            )}
        </div>
    );
};



const items = [
    {
        image:
            "/projects/self/Mocktails.jpg",
        title: "Mocktails GSAP Application",
        url: "https://drinks-dusky.vercel.app/"
    },
    {
        image:
            "/projects/self/pricewise.jpg",
        title: "Price Track of Amazon Products",
        url: "https://pricewise-next-js.vercel.app/"
    },
    {
        image:
            "/projects/self/evently.jpg",
        title: "Events Connect",
        url: "https://next-courses-snowy.vercel.app/"
    },
];

export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
    const [activeItem, setActiveItem] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!autoPlay) {
            return;
        }

        const interval = setInterval(() => {
            if (!isHovering) {
                setActiveItem((prev) => (prev + 1) % list.length);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [autoPlay, list.length, isHovering]);

    return (
        <div className={cn("flex h-[500px]  gap-1", className)}>
            {list.map((item, index) => (
                <List
                    key={item.title}
                    item={item}
                    index={index}
                    activeItem={activeItem}
                    onMouseEnter={() => {
                        setActiveItem(index);
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovering(false);
                    }}
                />
            ))}
        </div>
    );
}
