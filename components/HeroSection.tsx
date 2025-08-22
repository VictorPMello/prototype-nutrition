"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex justify-center items-center relative snap-start snap-always"
    >
      <Image
        className="w-screen h-screen"
        src="/profile.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </motion.section>
  );
}
