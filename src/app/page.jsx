"use client"

import { HeroAgus } from "@/components/heroAgus/heroAgus";
import { AnimatePresence, useSpring } from "framer-motion";
import { useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import Lenis from '@studio-freight/lenis' 
import Preloader from "@/components/Preloader";
import { BentoGridThirdDemo } from "@/demos/BentoGridThirdDemo";
import Card from '@/components/Card';
import Prueba from '../../public/sub.svg'
export default function Home() {
  

  const projects = [
    {
      title: "Te suscribís.",
      description: "Elige tu plan de suscripción y regístrate fácilmente en nuestra plataforma. Completa tu perfil para que podamos conocerte mejor y adaptar nuestros productos a tus necesidades.",
      src: "/sub.svg",
      link: "#subscribe",
      color: "#171717"
    },
    {
      title: "Elegimos los productos.",
      description: "Cada mes, seleccionamos una variedad de productos de alta calidad, incluyendo suplementos, ropa deportiva, y accesorios esenciales, para que puedas alcanzar tus metas de bienestar.",
      src: "/comida.svg",
      link: "#selection",
      color: "#171717"
    },
    {
      title: "Te los enviamos.",
      description: "Enviamos tu caja de fitness directamente a tu puerta. No tienes que preocuparte por nada, simplemente espera tu paquete y comienza a disfrutar de los productos seleccionados.",
      src: "/shipping.svg",
      link: "#shipping",
      color: "#171717"
    },
    {
      title: "Disfrutás y Mejorás.",
      description: "Abrí tu caja y descubrí nuevos productos cada mes. Usalos para mejorar tu entrenamiento, nutrición y bienestar. Además, accede a contenido exclusivo y promociones especiales para nuestros suscriptores.",
      src: "/training2.svg",
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
                  <h2 className="text-6xl lg:text-[180px] lg:leading-[186px] lg:tracking-[-6px] xl:text-[250px] uppercase xl:leading-[286px] xl:tracking-[-12px] text-zinc-50 font-[1000] pl-4">
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


         <section className="bg-neutral-900 h-screen w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-10">
                <h2 className="text-6xl text-zinc-50 font-bold tracking-tighter sm:text-7xl">Algunos de nuestros productos</h2>
                <p className="max-w-[900px] text-zinc-50 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cada mes, tu caja de El Club del Fitness incluirá una variedad de productos de fitness premium para ayudarte a alcanzar tus metas.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Protein Powder"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-50 font-medium">Proteína en polvo</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Pre-Workout"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm  text-zinc-50 font-medium">Pre-Workouts</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Apparel"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-50 font-medium">Oversized Tees</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Accessories"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-50 font-medium">Accessorios</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Supplements"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-50 font-medium">Asesorías</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Supplements"
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-50 font-medium">Sorpresas</p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        </>
    );
}