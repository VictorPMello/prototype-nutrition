"use client";

import { useRef } from "react";
import { motion } from "motion/react";

export function MethodComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center snap-start snap-always"
    >
      <h2 className="text-3xl font-bold text-primary text-shadow-lg/50 text-shadow-black">
        Como Funciona o Método Ana Vitale
      </h2>
      <p className="text-2xl font-bold text-primary text-shadow-lg/50 text-shadow-black mb-10">
        4 etapas para sua transformação definitiva
      </p>
      <div className="flex flex-col w-full p-4 text-center gap-4 backdrop-blur-sm">
        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-3xl
              rounded-full h-18 w-18 
              flex items-center justify-center m-auto"
          >
            1
          </span>
          <h3 className="font-bold">Diagnóstico Completo</h3>
          <p>
            Análise detalhada do seu perfil metabólico, histórico e objetivos
            pessoais.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-3xl
              rounded-full h-18 w-18 
              flex items-center justify-center m-auto"
          >
            2
          </span>
          <h3 className="font-bold">Plano Personalizado</h3>
          <p>
            Criação do seu protocolo alimentar único, baseado em evidências
            científicas.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-3xl
              rounded-full h-18 w-18 
              flex items-center justify-center m-auto"
          >
            3
          </span>
          <h3 className="font-bold">Acompanhamento Semanal</h3>
          <p>
            Monitoramento constante com ajustes precisos para garantir
            resultados.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-3xl
              rounded-full h-18 w-18 
              flex items-center justify-center m-auto"
          >
            4
          </span>
          <h3 className="font-bold">Manutenção Sustentável</h3>
          <p>
            Estratégias para manter seu peso ideal sem esforço pelo resto da
            vida.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
