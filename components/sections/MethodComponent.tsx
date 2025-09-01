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
      <h2
        className="font-bold text-lg md:text-2xl lg:text-6xl
        text-center text-primary text-shadow-lg/50 text-shadow-black"
      >
        Como Funciona o Método Ana Vitale
      </h2>
      <p
        className="font-bold mb-2 md:mb-8 lg:mb-10 text-sm md:text-lg lg:text-4xl
        text-primary text-shadow-lg/50 text-shadow-black"
      >
        4 etapas para sua transformação definitiva
      </p>

      <div className="flex flex-col w-full lg:max-w-1/3 p-4 text-center gap-4 backdrop-blur-sm">
        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-lg md:text-xl lg:text-3xl
              rounded-full h-10 w-10 lg:h-16 lg:w-16 
              flex items-center justify-center m-auto"
          >
            1
          </span>
          <h3 className="font-bold text-xl lg:text-2xl">
            Diagnóstico Completo
          </h3>
          <p className="text-xs md:text-lg lg:text-xl">
            Análise detalhada do seu perfil metabólico, histórico e objetivos
            pessoais.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-lg md:text-xl lg:text-3xl
              rounded-full h-10 w-10 lg:h-16 lg:w-16 
              flex items-center justify-center m-auto"
          >
            2
          </span>
          <h3 className="font-bold text-xl lg:text-2xl">Plano Personalizado</h3>
          <p className="text-xs md:text-lg lg:text-xl">
            Criação do seu protocolo alimentar único, baseado em evidências
            científicas.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-lg md:text-xl lg:text-3xl
              rounded-full h-10 w-10 lg:h-16 lg:w-16 
              flex items-center justify-center m-auto"
          >
            3
          </span>
          <h3 className="font-bold text-xl lg:text-2xl">
            Acompanhamento Semanal
          </h3>
          <p className="text-xs md:text-lg lg:text-xl">
            Monitoramento constante com ajustes precisos para garantir
            resultados.
          </p>
        </div>

        <div>
          <span
            className="bg-primary-foreground 
              text-primary text-lg md:text-xl lg:text-3xl
              rounded-full h-10 w-10 lg:h-16 lg:w-16 
              flex items-center justify-center m-auto"
          >
            4
          </span>
          <h3 className="font-bold text-xl lg:text-2xl">
            Manutenção Sustentável
          </h3>
          <p className="text-xs md:text-lg lg:text-xl">
            Estratégias para manter seu peso ideal sem esforço pelo resto da
            vida.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
