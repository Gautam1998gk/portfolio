"use client"
import { useGSAP } from "@gsap/react"
import ChromaGrid from "../ChromaGrid/ChromaGrid"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Expandable from "../carousel/expandable"
import { AuroraText } from "../magicui/aurora-text"

gsap.registerPlugin(SplitText, ScrollTrigger)
const Projects = () => {
  useGSAP(() => {
    const text = new SplitText("#projects h1", { type: "chars" })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 90%"
      }
    })
    tl.from(text.chars, {
      duration: 1,
      stagger: 0.05,
      y: 50,
      opacity: 0
    })
  }, [])
  return (
    <section id="projects">
      <div className={`w-full my-10`}>
        <h1 className="text-center my-10 text-4xl font-semibold ">PROJECTS</h1>
        <ChromaGrid />
        <div className="max-w-7xl text-center  space-y-10 mx-auto mt-10">
           <AuroraText className="text-4xl  font-bold  md:text-5xl">SELF PROJECTS</AuroraText>
          <Expandable />
        </div>
      </div>
    </section>
  )
}

export default Projects