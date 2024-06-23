"use client"

import { HeroAgus } from "@/components/heroAgus/heroAgus";
import { AnimatePresence, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis' 
import Preloader from "@/components/Preloader";
import { BentoGridThirdDemo } from "@/demos/BentoGridThirdDemo";

export default function Home() {

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
            
            <div className=" bg-neutral-900 flex flex-col gap-20">
                  <h2 className="text-7xl md:text-[180px] md:leading-[186px] md:tracking-[-6px] lg:text-[280px] uppercase lg:leading-[286px] lg:tracking-[-12px] text-zinc-50 font-[1000]">
                  ¿Por qué entrar?
                  </h2>

                  <div className="">
                    <BentoGridThirdDemo />
                 </div>

            </div>

        </>
    );
}