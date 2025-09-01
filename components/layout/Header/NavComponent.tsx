"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function NavComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = (): void => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="z-60 lg:hidden text-background"
        onClick={toggleMenu}
      >
        {isMobileMenuOpen ? (
          <X className="size-7 text-destructive" />
        ) : (
          <Menu className="size-7" />
        )}
      </Button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="lg:hidden fixed z-50 top-0 left-0 w-full text-center p-4 bg-background"
          >
            <div className="flex flex-col justify-start items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="w-full max-w-[70%] gap-4 flex justify-between h-16"
              >
                <Button className="w-[calc(50%-8px)] h-full font-bold rounded-2xl">
                  Método
                </Button>
                <Button className="w-[calc(50%-8px)] h-full font-bold rounded-2xl">
                  Resultados
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-full max-w-[70%] gap-4 flex justify-between h-16"
              >
                <Button className="w-[calc(50%-8px)] h-full font-bold rounded-2xl">
                  Sobre
                </Button>
                <Button className="w-[calc(50%-8px)] h-full font-bold rounded-2xl">
                  FAQ
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="w-full max-w-[70%] flex justify-center"
              >
                <Button className="w-full h-12 font-bold rounded-2xl">
                  Contato
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
