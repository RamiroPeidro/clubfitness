import React from 'react'
import Agus from "../../../public/formas3d.svg"
import Image from 'next/image'
import { OrbitingCirclesDemo } from '@/demos/OrbitingCirclesDemo'
import WordRotate from '../magicui/word-rotate'
import ShimmerButton from '../magicui/shimmer-button'
import { TextRevealDemo } from '@/demos/TextRevealDemo'
import { DockDemo } from '@/demos/DockDemo'

// import OrbitingCircleDemo from '../../demos/OrbitingCircleDemo'

export const HeroAgus = () => {
  return (
    <>

<div className="h-screen bg-neutral-900 flex-col md:flex-row px-4 flex justify-center items-center relative" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover'}}>
{/* <div className="h-screen bg-neutral-900 flex-col md:flex-row px-4 flex justify-center items-center relative"> */}

      <div className=''>
              <h1 className='font-bold text-zinc-50 text-6xl md:text-[10rem] xl::text-[10rem] tracking-tighter'>
                  El club del<br/> Fitness.
              </h1>
              <p className='text-2xl font-[500] text-zinc-300 mt-2 tracking-tight'>
                  Tu mejor aliado fitness. Recibí todos los meses
              </p>
              <WordRotate
                  className="text-4xl font-bold text-zinc-50 mt-2"
                  words={[
                    "Snacks Protéicos.",
                    "Proteínas en polvo.",
                    "Pre workouts.",
                    "Indumentaria.",
                  ]}
                />
                  <div className='flex gap-2 mt-5'>
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Suscribirme
                      </span>
                    </ShimmerButton>

                    <ShimmerButton className="shadow-2xl" background='#e4e4e7' shimmerColor='black'>
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-zinc-900 from-white to-slate-900/10 lg:text-lg">
                        Conocer mas
                      </span>
                    </ShimmerButton>

                  </div>

                  <div className=''>
                    <DockDemo />
                  </div>
                  
            </div>
            {/* <OrbitingCirclesDemo /> */}
            {/* <div className='mb-10 hidden md:flex opacity-0'>
              <Image src={Agus} alt="Agustina Tazón Bogado" width={600} height={600} />
            </div> */}
                        <div className='mb-10 hidden md:flex' style={{width: '600px', height: '600px'}}></div>

        </div>
        <TextRevealDemo />
    </>
  )
}
