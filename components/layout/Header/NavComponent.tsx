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
        className="z-60 size-10 lg:hidden text-background"
        onClick={toggleMenu}
      >
        {isMobileMenuOpen ? (
          <X className="size-10 text-destructive" />
        ) : (
          <Menu className="size-10" />
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
            className="lg:hidden fixed z-50 top-0 left-0 w-full text-center p-4 py-16 bg-background"
          >
            <div className="flex flex-col justify-start items-center gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="w-full max-w-[80%] gap-4 flex justify-between h-32"
              >
                <Button className="w-[calc(50%-8px)] h-full font-bold text-3xl rounded-2xl">
                  Método
                </Button>
                <Button className="w-[calc(50%-8px)] h-full font-bold text-3xl rounded-2xl">
                  Resultados
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-full max-w-[80%] gap-4 flex justify-between h-32"
              >
                <Button className="w-[calc(50%-8px)] h-full font-bold text-3xl rounded-2xl">
                  Sobre
                </Button>
                <Button className="w-[calc(50%-8px)] h-full font-bold text-3xl rounded-2xl">
                  FAQ
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="w-full max-w-[80%] flex justify-center h-32"
              >
                <Button className="w-full h-full font-bold text-3xl rounded-2xl">
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
