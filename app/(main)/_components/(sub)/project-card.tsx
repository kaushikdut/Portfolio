"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  src: string;
  description?: string;
  index?: number;
  width: number;
  height: number;
  url: string;
}
const ProjectCard = ({
  src,
  description,
  index,
  width,
  height,
  url,
}: ProjectCardProps) => {
  return (
    <div>
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

        <button className="w-full text-fuchsia-100">
          <Link href={url} target="_blank">
            {" "}
            Visit{" "}
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
