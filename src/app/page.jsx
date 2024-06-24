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
      title: "Te suscribís",
      description: "Elige tu plan de suscripción y regístrate fácilmente en nuestra plataforma. Completa tu perfil para que podamos conocerte mejor y adaptar nuestros productos a tus necesidades.",
      src: "subscribe.jpg",
      link: "#subscribe",
      color: "#171717"
    },
    {
      title: "Elegimos los Mejores Productos",
      description: "Cada mes, nuestros expertos en fitness seleccionan una variedad de productos de alta calidad, incluyendo suplementos, ropa deportiva, y accesorios esenciales, para que puedas alcanzar tus metas de bienestar.",
      src: "selection.jpg",
      link: "#selection",
      color: "#171717"
    },
    {
      title: "Empaquetamos con Cuidado",
      description: "Nos aseguramos de que cada caja esté cuidadosamente empaquetada, protegiendo todos los productos para que lleguen en perfectas condiciones. Nuestro objetivo es sorprenderte cada mes.",
      src: "packing.jpg",
      link: "#packing",
      color: "#171717"
    },
    {
      title: "Te lo Enviamos",
      description: "Enviamos tu caja de fitness directamente a tu puerta. No tienes que preocuparte por nada, simplemente espera tu paquete y comienza a disfrutar de los productos seleccionados.",
      src: "shipping.jpg",
      link: "#shipping",
      color: "#171717"
    },
    {
      title: "Disfruta y Mejora",
      description: "Abre tu caja y descubre nuevos productos cada mes. Úsalos para mejorar tu entrenamiento, nutrición y bienestar. Además, accede a contenido exclusivo y promociones especiales para nuestros suscriptores.",
      src: "enjoy.jpg",
      link: "#enjoy",
      color: "#171717"
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
                  <h2 className="text-6xl md:text-[180px] md:leading-[186px] md:tracking-[-6px] lg:text-[250px] uppercase lg:leading-[286px] lg:tracking-[-12px] text-zinc-50 font-[1000]">
                  ¿Cómo funciona?
                  </h2>
{/* 
                  <div className="">
                    <BentoGridThirdDemo />
                 </div> */}

            </div>

                <main ref={container} className="relative bg-neutral-900">
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