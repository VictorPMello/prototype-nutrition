"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ResultsComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center snap-start snap-always bg-background"
    >
      <h2 className="text-xl text-center font-bold text-primary">
        Resultados Reais de Pacientes Reais
      </h2>
      <p className="text-sm font-bold text-primary">
        Mais de 800 vidas transformadas
      </p>

      <div className="flex flex-col w-full p-4 text-center gap-4">
        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm">Marina</h3>
          <h4 className="font-bold text-lg mb-1">12kg em 4 meses</h4>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Reduziu 15% de gordura corporal
          </p>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Normalizou exames de colesterol
          </p>
        </div>

        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm">Carlos</h3>
          <h4 className="font-bold text-lg mb-1">18kg em 6 meses</h4>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Eliminou resistência à insulina
          </p>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Recuperou disposição e energia
          </p>
        </div>

        <div className="bg-sidebar-primary p-4 rounded-2xl text-sidebar-foreground">
          <h3 className="font-bold mb-2 text-sm">Juliana</h3>
          <h4 className="font-bold text-lg mb-1">8kg em 2 meses</h4>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Controlou ansiedade alimentar
          </p>
          <p className="flex justify-center text-sm items-center gap-4">
            <Check className="w-5 h-5 text-sidebar-primary-foreground" />
            Melhorou qualidade do sono
          </p>
        </div>
      </div>

      <div className="flex w-full p-4 text-center gap-2">
        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg mb-2">800+</h4>
          <p className="text-xs">Pacientes Atendidos</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg mb-2">94%</h4>
          <p className="text-xs">Taxa de Sucesso</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg mb-2">12kg</h4>
          <p className="text-xs">Média de Perda de Peso</p>
        </div>

        <div className="text-sidebar-foreground w-1/4">
          <h4 className="text-primary font-bold text-lg mb-2">3</h4>
          <p className="text-xs">Meses Tempo Médio</p>
        </div>
      </div>
    </motion.section>
  );
}
