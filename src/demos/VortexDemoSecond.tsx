import { Vortex } from "@/components/ui/vortex";
import React from "react";


export function VortexDemoSecond() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor=""
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-8xl font-bold text-center tracking-tighter">
          Se parte ahora.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
           El club del fitness tiene cupos limitados, no te quedes sin el tuyo.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Suscribirse
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
