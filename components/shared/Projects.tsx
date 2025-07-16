"use client"
import { useGSAP } from "@gsap/react"
import ChromaGrid from "../ChromaGrid/ChromaGrid"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(SplitText, ScrollTrigger)
const Projects = () => {
  useGSAP(()=>{
    const text = new SplitText("#projects h1",{type:"chars"})
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#projects",
        start:"top 80%"
      }
    })
    tl.from(text.chars,{
      duration:1,
      stagger:0.05,
      y:50,
      opacity:0
    })
  },[])
  return (
    <section id="projects">
    <div className={`w-full my-10`}>
        <h1 className="text-center my-10 text-4xl font-semibold  py-6">PROJECTS</h1>
        <ChromaGrid />
        {/* personal project implement the https://animata.design/docs/carousel/expandable */}
    </div>
    </section>
  )
}

export default Projects