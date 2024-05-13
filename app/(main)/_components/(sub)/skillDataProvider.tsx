"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillDataProviderProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animateIcon = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: index * 0.3 } },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animateIcon}
      whileHover="hover"
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillDataProvider;
