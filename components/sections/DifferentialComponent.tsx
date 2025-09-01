"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export function DifferentialComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center snap-start snap-always bg-sidebar-foreground"
    >
      <h2 className="text-xl text-center font-bold text-primary">
        Por Que Dietas Tradicionais Falham?
      </h2>

      <div className="w-full p-4 text-center">
        <div className="bg-destructive p-4 rounded-2xl text-chart-5">
          <h3 className="font-bold text-sm">Dietas Restritivas</h3>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <X className="w-5 h-5 text-sidebar-primary-foreground" />
            Foco apenas na balança
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <X className="w-5 h-5 text-sidebar-primary-foreground" />
            Restrições extremas
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <X className="w-5 h-5 text-sidebar-primary-foreground" />
            Efeito sanfona garantido
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <X className="w-5 h-5 text-sidebar-primary-foreground" />
            Prejudica metabolismo
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <X className="w-5 h-5 text-sidebar-primary-foreground" />
            Acelera metabolismo
          </p>
        </div>
      </div>

      <div className="w-full p-4 text-center">
        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold text-sm">Método Ana Vitale</h3>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Foco na composição corporal
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Alimentação equilibrada
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Resultados duradouros
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Acelera metabolismo
          </p>
          <p className="flex justify-center text-sm items-center gap-4 shrink-0 leading-tight">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Estilo de vida sustentável
          </p>
        </div>
      </div>
    </motion.section>
  );
}
