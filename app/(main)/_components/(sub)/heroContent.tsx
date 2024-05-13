"use client";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="absolute top-[100px] flex items-center justify-between  h-[150px] w-full md:h-[350px] lg:h-[450px] text-white px-6 z-20"
    >
      <div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span className=" ">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>{" "}
            <br />
            project exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-base lg:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website
          development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-sm md:text-base lg:text-lg text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
