"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  description?: string;
  index?: number;
  width: number;
  height: number;
}
const ProjectCard = ({
  src,
  description,
  index,
  width,
  height,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      className="bg-gradient-to-r from-purple-600 to-cyan-600 p-[2px] rounded-md "
    >
      <Image
        src={src}
        alt="project"
        width={width}
        height={height}
        draggable={false}
      />
    </motion.div>
  );
};

export default ProjectCard;
