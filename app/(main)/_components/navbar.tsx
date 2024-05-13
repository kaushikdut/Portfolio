"use client";
import { Socials } from "@/constant";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-white z-[50]">
      <div className="w-full h-full flex flex-row items-center justify-between px-6">
        <div>
          <a href="#about-me">
            <Home className="text-muted-foreground hover:text-muted hover:scale-[50px]" />
          </a>
        </div>
        <div className="w-[500px] flex items-center justify-between border border-[#5833c761] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] gap-3 rounded-full text-gray-200">
          <motion.a
            href="#about-me"
            whileHover={{ scale: 1.2 }}
            className="hover:text-cyan-400"
          >
            About me
          </motion.a>
          <motion.a
            href="#skill"
            whileHover={{ scale: 1.2 }}
            className="hover:text-cyan-400"
          >
            Skill
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.2 }}
            className="hover:text-cyan-400"
          >
            Projects
          </motion.a>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-5">
          {Socials.map((social) => (
            <motion.div whileHover={{ scale: 1.2 }} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
