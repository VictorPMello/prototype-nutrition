"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ResultsComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center snap-start snap-always bg-background lg:gap-6"
    >
      <h2
        className="text-xl md:text-2xl lg:text-6xl
        text-center text-primary font-bold"
      >
        Resultados Reais de Pacientes Reais
      </h2>
    <p
        className="font-bold text-sm md:text-xl lg:text-4xl text-primary">    Mais de 800 vidas transformadas
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full p-4 text-center gap-4 lg:gap-6">
        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm md:text-lg lg:text-4xl lg:mb-8">
            Marina
          </h3>
          <h4 className="font-bold text-lg md:text-xl lg:text-3xl mb-1">
            12kg em 4 meses
          </h4>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Reduziu 15% de gordura corporal
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Normalizou exames de colesterol
          </p>
        </div>

        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm md:text-lg lg:text-4xl lg:mb-8">
            Carlos
          </h3>
          <h4 className="font-bold text-lg md:text-xl lg:text-3xl mb-1">
            18kg em 6 meses
          </h4>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Eliminou resistência à insulina
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Recuperou disposição e energia
          </p>
        </div>

        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm md:text-lg lg:text-4xl lg:mb-8">
            Juliana
          </h3>
          <h4 className="font-bold text-lg md:text-xl lg:text-3xl mb-1">
            8kg em 2 meses
          </h4>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Controlou ansiedade alimentar
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4">
            <Check className="w-5 h-5 md:w-8 md:h-8 text-sidebar-primary-foreground" />
            Melhorou qualidade do sono
          </p>
        </div>
      </div>

      <div className="flex w-full p-4 text-center gap-2 lg:max-w-1/2">
        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            800+
          </h4>
          <p className="text-lg">Pacientes Atendidos</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            94%
          </h4>
          <p className="text-lg">Taxa de Sucesso</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            12kg
          </h4>
          <p className="text-lg">Média de Perda de Peso</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg lg:text-2xl mb-2">3</h4>
          <p className="text-lg">Meses Tempo Médio</p>
        </div>
      </div>
    </motion.section>
  );
}
