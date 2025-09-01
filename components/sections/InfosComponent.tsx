"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Award, Minus } from "lucide-react";

export function InfosComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-4 gap-4 snap-start snap-always bg-background"
    >
      <h2 className="text-3xl font-bold text-primary">Dra. Ana Vitale</h2>
      <p className="text-2xl font-bold text-primary">
        Sua parceira na transformação definitiva
      </p>

      <p className="text-xl font-bold text-secondary w-2/3 text-justify">
        Nutricionista há 8 anos, especializada em emagrecimento saudável e
        metabolismo. Mestre em Nutrição Clínica pela USP e pós-graduada em
        Nutrição Esportiva.
      </p>

      <div className="flex flex-col w-full p-4 text-center gap-6">
        <p className="flex justify-center items-center gap-4 text-popover-foreground">
          <Award size={46} className="text-primary" />
          CRN-3 45678/P
        </p>
        <p className="flex justify-center items-center gap-4 text-popover-foreground">
          <Award size={46} className="text-primary" />
          Mestre em Nutrição Clínica - USP
        </p>
        <p className="flex justify-center items-center gap-4 text-popover-foreground">
          <Award size={46} className="text-primary" />
          Pós-graduação em Nutrição Esportiva
        </p>
        <p className="flex justify-center items-center gap-4 text-popover-foreground">
          <Award size={46} className="text-primary" />
          Especialização em Transtornos Alimentares
        </p>
        <p className="flex justify-center items-center gap-4 text-popover-foreground">
          <Award size={46} className="text-primary" />
          Membro da ASBRAN
        </p>
      </div>

      <div className="flex items-center w-full mt-14 p-4 text-center gap-4 text-primary">
        <span>800+ pacientes atendidos</span>

        <Minus size={46} className="text-primary" />
        <span>8 anos de experiência</span>

        <Minus size={46} className="text-primary" />
        <span>94% taxa de sucesso</span>
      </div>
    </motion.section>
  );
}
