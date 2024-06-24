"use client"

import { HeroAgus } from "@/components/heroAgus/heroAgus";
import { AnimatePresence, useSpring } from "framer-motion";
import { useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import Lenis from '@studio-freight/lenis' 
import Preloader from "@/components/Preloader";
import { BentoGridThirdDemo } from "@/demos/BentoGridThirdDemo";
import { Component } from "@/components/component/component";
import Card from '@/components/Card';
export default function Home() {

  const projects = [
    {
      title: "Matthias Leidinger",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF"
    },
    {
      title: "Clément Chapillon",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D"
    },
    {
      title: "Zissou",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D"
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "house.jpg",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#B62429"
    },
    {
      title: "Mark Rammers",
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "cactus.jpg",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#88A28D"
    }
  ]

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

    const [isLoading, setIsLoading] = useState(true);

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }
    
      const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
      }
    
      useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
      }, [])
    
      useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
    
              setTimeout( () => {
                setIsLoading(false);
                document.body.style.cursor = 'default'
                window.scrollTo(0,0);
              }, 2000)
          }
        )()
      }, [])
    
    return (
        <>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
            <HeroAgus />
            
            <div className="bg-neutral-900 flex flex-col gap-20">
                  <h2 className="text-7xl md:text-[180px] md:leading-[186px] md:tracking-[-6px] lg:text-[280px] uppercase lg:leading-[286px] lg:tracking-[-12px] text-zinc-50 font-[1000]">
                  ¿Cómo funciona?
                  </h2>
{/* 
                  <div className="">
                    <BentoGridThirdDemo />
                 </div> */}

            </div>

                <main ref={container} className="relative">
                    {
                      projects.map( (project, i) => {
                        const targetScale = 1 - ( (projects.length - i) * 0.05);
                        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                      })
                    }
                </main>

        </>
    );
}