"use client";
import { Project } from "@/constant";
import ProjectCard from "./(sub)/project-card";
import { useState } from "react";
import { motion, Reorder } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(Project);

  const handleReorder = (newValue: any) => {
    setProjects([...newValue]);
  };
  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center mt-[150px] gap-5 z-[25] mb-11 py-[60px]"
      id="projects"
    >
      <h1 className="text-5xl font-sans font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
        My Projects
      </h1>

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
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Projects;
