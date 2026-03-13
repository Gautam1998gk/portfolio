// "use client";
// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// gsap.registerPlugin(ScrollTrigger);

// const initialClipPaths = [
//     "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
//     "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
//     "polygon(66.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
//     "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
//     "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
//     "polygon(66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
//     "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
//     "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
//     "polygon(66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)"
// ];

// const finalClipPaths = [
//     "polygon(0% 0%, 33.33% 0%, 33.33% 33.33%, 0% 33.33%)",
//     "polygon(33.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 33.33%)",
//     "polygon(66.66% 0%, 100% 0%, 100% 33.33%, 66.66% 33.33%)",
//     "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
//     "polygon(33.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
//     "polygon(66.66% 33.33%, 100% 33.33%, 100% 66.66%, 66.66% 66.66%)",
//     "polygon(0% 66.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
//     "polygon(33.33% 66.66%, 66.66% 66.66%, 66.66% 100%, 33.33% 100%)",
//     "polygon(66.66% 66.66%, 100% 66.66%, 100% 100%, 66.66% 100%)"
// ];

// const animationOrder = [
//     [0],
//     [1, 2],
//     [3, 4, 5],
//     [6, 7],
//     [8]
// ];

// // const IMAGE_URL = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const ImageReveal = ({ IMAGE_URL, index, activeItem }: { IMAGE_URL: string, index: number, activeItem: number }) => {
//     const wrapperRef = useRef<HTMLDivElement>(null);
//     const maskRefs = useRef<HTMLDivElement[]>([]);


//     useGSAP(() => {
//                 maskRefs.current.forEach((mask, i) => {
//                     gsap.set(mask, { clipPath: initialClipPaths[i] });
//                 });

//                 const tl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: wrapperRef.current,
//                         start: "top 75%",
//                     }
//                 });
//                 animationOrder.forEach((indices, step) => {
//                     tl.to(
//                         indices.map(i => maskRefs.current[i]),
//                         {
//                             clipPath: (i, el) => finalClipPaths[maskRefs.current.indexOf(el)],
//                             duration: 0.5,
//                             ease: "power4.out",
//                         },
//                         step * .2
//                     );
//                 });
//     }, []);

//     return (
//         <div
//             ref={wrapperRef}
//             className="g_visual_wrap relative w-full h-full overflow-hidden my-4"
//         >
//             {Array.from({ length: 9 }).map((_, i) => (
//                 <div
//                     key={i}
//                     ref={el => {
//                         if (el) maskRefs.current[i] = el;
//                     }}

//                     className={`mask m-${i + 1}`}
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         backgroundImage: `url(${IMAGE_URL})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         zIndex: 0,
//                         pointerEvents: "none",
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageReveal;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initialClipPaths = [
  "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
  "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
  "polygon(66.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
  "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
  "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
  "polygon(66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
  "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
  "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
  "polygon(66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)",
];

const finalClipPaths = [
  "polygon(0% 0%, 33.33% 0%, 33.33% 33.33%, 0% 33.33%)",
  "polygon(33.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 33.33%)",
  "polygon(66.66% 0%, 100% 0%, 100% 33.33%, 66.66% 33.33%)",
  "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
  "polygon(33.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
  "polygon(66.66% 33.33%, 100% 33.33%, 100% 66.66%, 66.66% 66.66%)",
  "polygon(0% 66.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
  "polygon(33.33% 66.66%, 66.66% 66.66%, 66.66% 100%, 33.33% 100%)",
  "polygon(66.66% 66.66%, 100% 66.66%, 100% 100%, 66.66% 100%)",
];

const animationOrder = [[0], [1, 2], [3, 4, 5], [6, 7], [8]];

const ImageReveal = ({
  IMAGE_URL,
  index,
  activeItem,
}: {
  IMAGE_URL: string;
  index: number;
  activeItem: number;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const maskRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (index === activeItem) {
        // Reset initial state
        maskRefs.current.forEach((mask, i) => {
          gsap.set(mask, { clipPath: initialClipPaths[i] });
        });

        // Timeline for animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            once: true, // run only once
          },
        });

        animationOrder.forEach((indices, step) => {
          tl.to(
            indices.map((i) => maskRefs.current[i]),
            {
              clipPath: (i, el) =>
                finalClipPaths[maskRefs.current.indexOf(el)],
              duration: 0.5,
              ease: "power4.out",
              stagger: 0.1,
            },
            step * 0.2
          );
        });
      }
    },
    { dependencies: [activeItem] } // ✅ re-run when activeItem changes
  );

  return (
    <div
      ref={wrapperRef}
      className="g_visual_wrap relative w-full h-full overflow-hidden my-4"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) maskRefs.current[i] = el;
          }}
          className={`mask m-${i + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${IMAGE_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default ImageReveal;
