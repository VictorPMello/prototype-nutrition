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
      <div className="flex flex-col justify-center items-center w-full p-4 text-center gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-primary">
            Dra. Ana Vitale - Nutricionista
          </h2>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            CRN-3 45678/P
          </p>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            <Phone size={46} className="text-primary" />
            (11) 98765-4321
          </p>
          <p className="flex justify-center w-full items-center gap-4 text-popover-foreground">
            <Mail size={46} className="text-primary" />
            contato@anavitale.com.br
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-primary">Atendimento</h2>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            Segunda a Sexta: 8h às 18h
          </p>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            Sábado: 8h às 12h
          </p>
          <p className="flex justify-center items-center gap-4 text-primary">
            Presencial e Online
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-primary">Legal</h2>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            Política de Privacidade
          </p>
          <p className="flex justify-center items-center gap-4 text-popover-foreground">
            CRN-3 45678/P
          </p>
        </div>
      </div>

      <Separator />
      <span className="text-popover-foreground">
        © 2025 Ana Vitale. Todos os direitos reservados.
      </span>
    </motion.footer>
  );
}
