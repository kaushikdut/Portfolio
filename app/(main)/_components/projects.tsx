"use client";
import { Project } from "@/constant";
import ProjectCard from "./(sub)/project-card";
import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [projects, setProjects] = useState(Project);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleReorder = (newValue: any) => {
    setProjects([...newValue]);
  };
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center mt-[150px] gap-5 z-[25] mb-11 py-[60px]"
      id="projects"
    >
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromTop}
      >
        <h1 className="text-5xl font-sans font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
          My Projects
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <Reorder.Group
          values={projects}
          onReorder={handleReorder}
          className="w-full flex flex-col items-center justify-center gap-[40px] px-5 "
          axis="y"
          dragElastic={0.3}
        >
          {projects.map((data) => (
            <Reorder.Item key={data.id} value={data}>
              <ProjectCard
                src={data.src}
                width={data.width}
                height={data.height}
                url={data.url}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </motion.div>
    </div>
  );
};

export default Projects;
