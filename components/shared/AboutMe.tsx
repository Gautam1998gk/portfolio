"use client";
import React, {  useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  role: string;
  company: string;
  start: string; // display text e.g. "Feb 2024"
  end: string;   // display text e.g. "Present"
  bullets: string[];
  link?: string;
}


interface ResumeData {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  education: string;
  experience: ExperienceItem[];
}

export const resumeData: ResumeData = {
  name: "Gowtham Pelluru",
  title: "Full Stack Developer",
  summary:
    "Full‑stack developer building e‑commerce, ERP software and API with React, Redux/RTK Query, Node.js/Express, and SQL. Former Data Analyst experienced with Excel/VBA dashboards.",
  skills: [
    "JavaScript / TypeAcript",
    "React.js",
    "Redux / RTK Query",
    "Next.js",
    "Node.js",
    "Express.js",
    "MS SQL",
  ],
  education: "B.Tech Mechanical Engineering, N.B.K.R Institute of Science & Technology (2020)",
  experience: [
    {
      role: "Full Stack Developer",
      company: "Onex9 Software",
      start: "Feb 2024",
      end: "Present",
      bullets: [
        "Developing e‑commerce & ERP software using React, Redux, RTK Query and shadcn ui.",
        "Building an API with Node.js, Express.js and SQL"
      ],
    },
    {
      role: "Full stack Development(Certification)",
      company: "E&ICT IIT Guwahati & Intellipaat",
      start: "Mar 2023",
      end: "Jan 2024",
      bullets: [
        "Advanced Certification in Full Stack Web Development",
      ],
    },
    {
      role: "Data Analyst",
      company: "Cyient Ltd",
      start: "Feb 2021",
      end: "Jun 2023",
      bullets: [
        "Analyzed consumer feedback data to surface product issues & business insights.",
        "Built & automated Advanced Excel dashboards with VBA.",
      ],
    },
  ]
};
export default function AboutMeSection() {
  const root = useRef<HTMLDivElement | null>(null);
  const aboutBox = useRef<HTMLDivElement | null>(null);
  const skillItems = useRef<HTMLLIElement[]>([]);
  const expCards = useRef<HTMLDivElement[]>([]);
  const timelineLine = useRef<HTMLDivElement | null>(null);

  const setSkillRef = (el: HTMLLIElement | null, i: number) => {
    if (el) skillItems.current[i] = el;
  };
  const setExpRef = (el: HTMLDivElement | null, i: number) => {
    if (el) expCards.current[i] = el;
  };


  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Respect prefers-reduced-motion
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const disabled = mq.matches;
      if (disabled) return; // bail: user prefers reduced motion

      // About box fade/slide in
      if (aboutBox.current) {
        gsap.from(aboutBox.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutBox.current,
            start: "top 80%",
          },
        });
      }

      // Stagger skills
      if (skillItems.current.length) {
        gsap.from(skillItems.current, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: aboutBox.current,
            start: "top 70%",
          },
        });
      }

      // Experience cards batch reveal
      if (expCards.current.length) {
        ScrollTrigger.batch(expCards.current, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { autoAlpha: 0, y: 60 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.15,
              }
            );
          },
        });
      }


      if (timelineLine.current && root.current) {
        const tlHeight = timelineLine.current.offsetHeight;
        gsap.fromTo(
          timelineLine.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top center",
              end: () => `+=${tlHeight}`,
              scrub: true,
            },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const {
    title,
    summary,
    skills,
    education,
    experience,
  } = resumeData;

  return (
    <section
      id="about"
      ref={root}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
    >
      {/* Grid: About (left) | Experience (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* ABOUT ----------------------------------------------------------------*/}
        <div className="lg:col-span-2 space-y-8" ref={aboutBox}>
          <header>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-2 text-lg text-muted-foreground">{title}</p>
          </header>

          <p className="text-base leading-relaxed text-foreground/90">{summary}</p>

          <div>
            <h3 className="font-semibold uppercase text-sm tracking-wider text-foreground/70 mb-2">
              Key Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <li
                  key={s}
                  ref={(el) => setSkillRef(el, i)}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold uppercase text-sm tracking-wider text-foreground/70 mb-1">
                Education
              </h3>
              <p className="text-sm text-foreground/90">{education}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 relative">
          {/* vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border origin-top" ref={timelineLine} />

          <ol className="relative ml-10 space-y-16">
            {experience.map((job, i) => (
              <li key={`${job.company}-${i}`} className="relative">
                <div
                  ref={(el) => setExpRef(el, i)}
                  className="relative pl-6 pr-4 py-4 rounded-lg border bg-card shadow-sm"
                >
                  {/* Dot */}
                  <span className="absolute -left-8 top-5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  <h4 className="text-xl font-semibold">
                    {job.role} <span className="text-primary">@ {job.company}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.start} – {job.end}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

          </ol>
        </div>
      </div>
    </section>
  );
}
