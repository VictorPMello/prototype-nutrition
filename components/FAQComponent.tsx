"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQComponent() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center snap-start snap-always bg-sidebar-foreground"
    >
      <h2 className="mb-10 text-3xl font-bold text-primary">
        Dúvidas Frequentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-2/3 text-popover"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="font-bold text-2xl cursor-pointer hover:bg-sidebar/5 p-4
            [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-popover"
          >
            Como funciona o atendimento online?
          </AccordionTrigger>
          <AccordionContent className="text-xl p-4">
            <p>
              Utilizamos plataforma própria com videoconferência, chat e envio
              de materiais. Você tem todo suporte necessário à distância.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger
            className="font-bold text-2xl cursor-pointer hover:bg-sidebar/5 p-4
            [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-popover"
          >
            Quanto tempo para ver resultados?
          </AccordionTrigger>
          <AccordionContent className="text-xl p-4">
            <p>
              Primeiros resultados aparecem em 15 dias. Resultados consistentes
              em 30 dias com acompanhamento adequado.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger
            className="font-bold text-2xl cursor-pointer hover:bg-sidebar/5 p-4
            [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-popover"
          >
            O método funciona para homens e mulheres?
          </AccordionTrigger>
          <AccordionContent className="text-xl p-4">
            <p>
              Sim! Adaptamos o protocolo para cada perfil metabólico,
              independente do gênero ou idade.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger
            className="font-bold text-2xl cursor-pointer hover:bg-sidebar/5 p-4
            [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-popover"
          >
            Preciso tomar suplementos?
          </AccordionTrigger>
          <AccordionContent className="text-xl p-4">
            <p>
              Apenas quando necessário. Priorizamos resultados através da
              alimentação, suplementando apenas deficiências identificadas.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}
