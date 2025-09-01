"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const ref = useRef(null);

  return (
    <motion.footer
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-4 gap-4 snap-start snap-always bg-background"
    >
      <div className="flex flex-col lg:flex-1 lg:flex-row justify-center lg:justify-around items-center w-full p-4 text-center gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-2xl text-center font-bold text-primary">
            Dra. Ana Vitale - Nutricionista
          </h2>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            CRN-3 45678/P
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            <Phone className="w-5 h-5 md:w-8 md:h-8 text-primary" />
            (11) 98765-4321
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            <Mail className="w-5 h-5 md:w-8 md:h-8 text-primary" />
            contato@anavitale.com.br
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-xl text-center font-bold text-primary">
            Atendimento
          </h2>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            Segunda a Sexta: 8h às 18h
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            Sábado: 8h às 12h
          </p>
          <p className="flex justify-center text-base md:text-xl items-center gap-4 text-primary">
            Presencial e Online
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-xl text-center font-bold text-primary">
            Legal
          </h2>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            Política de Privacidade
          </p>
          <p className="flex justify-center text-sm md:text-lg lg:text-2xl items-center gap-4 text-popover-foreground">
            CRN-3 45678/P
          </p>
        </div>
      </div>

      <Separator />
      <span className="text-popover-foreground text-lg text-center lg:my-6">
        © 2025 Ana Vitale. Todos os direitos reservados.
      </span>
    </motion.footer>
  );
}
