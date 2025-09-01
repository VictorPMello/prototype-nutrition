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
      className="min-h-screen flex flex-col gap-4 p-4 items-center snap-start snap-always relative text-center"
    >
      <Image
        className="w-screen h-screen absolute inset-0 z-[-10]"
        src="/profile.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <Card className="justify-end bg-card-none border-0 shadow-none w-full flex-1 text-card-none">
        <CardHeader>
          <CardTitle className="font-bold text-5xl text-chart-1 text-shadow-lg/50 !text-shadow-black">
            Emagreça de Forma Definitiva Sem Dietas Restritivas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="!text-shadow-lg !text-shadow-black">
            Método científico personalizado que elimina o efeito sanfona e
            transforma sua relação com a comida para sempre.
          </p>
        </CardContent>
      </Card>

      <div className="flex w-full h-80 gap-2">
        <Card className="w-1/3 bg-card-none border-none shadow-none backdrop-blur-xs">
          <CardContent className="flex flex-col h-full justify-between text-primary text-shadow-black text-shadow-lg text-center">
            <p>Resultados em 30 dias</p>
            <p>Sem dietas malucas</p>
          </CardContent>
        </Card>

        <div className="w-1/3 bg-transparent"></div>

        <Card className="w-1/3 bg-card-none border-none shadow-none backdrop-blur-xs">
          <CardContent className="flex flex-col h-full justify-between text-primary text-shadow-black text-shadow-lg text-center">
            <p>Acompanhamento personalizado</p>
            <p>Método cientificamente comprovado</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
