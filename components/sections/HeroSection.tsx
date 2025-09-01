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
      className="min-h-screen flex flex-col gap-4 p-4 justify-evenly items-center snap-start snap-always relative text-center"
    >
      <Image
        className="w-screen h-screen absolute inset-0 z-[-10]"
        src="/profile.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <Card className="justify-around bg-card-none border-0 p-0 shadow-none w-full text-card-none pt-36">
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-chart-1 text-shadow-lg/50 !text-shadow-black">
            Emagreça Definitivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg !text-shadow-lg !text-shadow-black">
            Método científico que transforma sua relação com a comida
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row justify-center md:justify-centergap-2 gap-2">
        <Card className="bg-card-none border-none py-2">
          <CardContent className="text-sm text-primary font-bold text-center bg-card-foreground rounded-2xl p-2">
            <p>Sem dietas malucas</p>
          </CardContent>
        </Card>

        <Card className="bg-card-none border-none py-2">
          <CardContent className="text-sm text-primary font-bold text-center bg-card-foreground rounded-2xl p-2">
            <p>Método cientificamente comprovado</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
