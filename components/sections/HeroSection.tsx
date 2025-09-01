"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col gap-4 lg:gap-10 p-4 justify-evenly lg:justify-end items-center snap-start snap-always relative text-center"
    >
      <Image
        className="w-screen h-screen absolute inset-0 z-[-10] lg:max-w-7xl mx-auto"
        src="/profile.webp"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <Card className="justify-around bg-card-none border-0 p-0 shadow-none w-full text-card-none pt-76 md:pt-72 lg:pt-0">
        <CardHeader>
          <CardTitle
            className="font-bold
            text-2xl md:text-4xl lg:text-8xl
            text-primary text-shadow-lg/50 !text-shadow-black"
          >
            Emagreça Definitivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-lg md:text-2xl lg:text-4xl
            !text-shadow-lg !text-shadow-black"
          >
            Método científico que transforma sua relação com a comida
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row justify-center md:justify-centergap-2 gap-2 lg:gap-4">
        <Card className="bg-card-none border-none py-2">
          <CardContent
            className="text-sm md:text-lg lg:text-2xl
            text-primary font-bold text-center bg-secondary-foreground rounded-2xl p-2"
          >
            <p>Sem dietas malucas</p>
          </CardContent>
        </Card>

        <Card className="bg-card-none border-none py-2">
          <CardContent
            className="text-sm md:text-lg lg:text-2xl
            text-primary font-bold text-center bg-secondary-foreground rounded-2xl p-2"
          >
            <p>Método cientificamente comprovado</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
