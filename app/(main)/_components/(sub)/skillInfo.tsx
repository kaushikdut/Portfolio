"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SparkleIcon } from "lucide-react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillInfo = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="text-white flex flex-col items-center justify-center mb-10 gap-6">
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromTop}
      >
        <h1 className="text-4xl font-roboto font-semibold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            My Skills
          </span>
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.5)}
        className="flex Welcome-box border border-[#7042f88b] p-2 cursor-pointer "
      >
        <SparkleIcon className="text-[#b49bff] h-4 w-4" />
        <h2 className="text-sm Welcome-text">Think better with Next.js 14</h2>
      </motion.div>
      <motion.div
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromRight(0.8)}
      >
        <h1 className="text-3xl font-sans font-medium text-center">
          Making apps with modern technologies
        </h1>
      </motion.div>
    </div>
  );
};

export default SkillInfo;
