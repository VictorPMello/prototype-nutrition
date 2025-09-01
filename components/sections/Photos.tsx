"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export function Photos() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const firstImageWidth = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["33vw", "33vw", "107vw", "107vw"],
  );

  const otherImagesX = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9, 1],
    [0, 0, 4000, 4000],
  );

  return (
    <motion.section
      ref={ref}
      className="min-h-[200vh] flex snap-start snap-always"
    >
      <motion.div className="flex w-full h-screen sticky top-0 overflow-hidden">
        <motion.div
          style={{ width: firstImageWidth }}
          className="w-1/3 h-screen overflow-hidden flex-shrink-0"
        >
          <Image
            className="w-full h-screen"
            src="/photo01.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </motion.div>

        <motion.div
          style={{ x: otherImagesX }}
          className="w-1/3 h-screen overflow-hidden flex-shrink-0"
        >
          <Image
            className="w-full h-screen object-cover"
            src="/photo02.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </motion.div>
        <motion.div
          style={{ x: otherImagesX }}
          className="w-1/3 h-screen overflow-hidden flex-shrink-0"
        >
          <Image
            className="w-full h-screen object-cover"
            src="/photo03.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
