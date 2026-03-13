"use client";

import React, { forwardRef, useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
   const jsIconRef = useRef<HTMLSpanElement>(null);
  const tsIconRef = useRef<HTMLSpanElement>(null);
 useGSAP(
  () => {
    const circle = div4Ref.current;
    const jsEl = jsIconRef.current;
    const tsEl = tsIconRef.current;
    if (!circle || !jsEl || !tsEl) return;

    const HOLD = 2;      // seconds each icon stays visible
    const FLIP = 0.5;    // seconds for the 180° flip
    const SWAP_AT = "<" + FLIP / 2; // start crossfade halfway through flip

    // base state
    gsap.set(circle, { rotationY: 0, transformOrigin: "50% 50%" });
    gsap.set(jsEl, { autoAlpha: 1 });
    gsap.set(tsEl, { autoAlpha: 0 });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
    });

    // --- JS visible ---
    tl.to({}, { duration: HOLD }); // hold JS

    // flip to TS
    tl.to(circle, { rotationY: "+=360", duration: FLIP }, ">");
    tl.to(jsEl, { autoAlpha: 0, duration: 0.1, ease: "none" }, SWAP_AT);
    tl.to(tsEl, { autoAlpha: 1, duration: 0.1, ease: "none" }, "<");

    // --- TS visible ---
    tl.to({}, { duration: HOLD }); // hold TS

    // flip back to JS
    tl.to(circle, { rotationY: "+=180", duration: FLIP }, ">");
    tl.to(tsEl, { autoAlpha: 0, duration: 0.1, ease: "none" }, SWAP_AT);
    tl.to(jsEl, { autoAlpha: 1, duration: 0.1, ease: "none" }, "<");

    // reset rotation each loop so it doesn't stack endlessly
    // (This runs at the start of each repeat cycle.)
    tl.add(() => {
      gsap.set(circle, { rotationY: 0 });
    });
  },
  { scope: containerRef, dependencies: [] }
);

  
  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.node />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.next />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
           <span
              ref={jsIconRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Icons.javascript />
            </span>
            <span
              ref={tsIconRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Icons.typescript />
            </span>
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.express />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.tailwind />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.mysql />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  react: () => (
    <Image src="/skills/react.svg" alt="react" width={50} height={50} />
  ),
  typescript: () => (
    <Image src="/skills/typescript.svg" alt="type" width={50} height={50} />
  ),
  javascript: () => (
    <IoLogoJavascript color="yellow" size={32} />
  ),
  next: () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_950_641)"><path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="black" /></g><defs><clipPath id="clip0_950_641"><rect fill="white" height="24" width="24" /></clipPath></defs></svg>
  ),
  tailwind: () => (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg>),
  node: () => (
    <Image src="/skills/node.png" alt="node" width={50} height={50} />
  ),
  mysql: () => (
    <Image src="/skills/mysql.png" alt="mysql" width={50} height={50} />
  ),
  express: () => (
      <Image src="/skills/express.svg" alt="express" width={50} height={50} />
  ),
};
