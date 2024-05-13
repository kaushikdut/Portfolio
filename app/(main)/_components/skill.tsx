"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constant";
import SkillDataProvider from "./(sub)/skillDataProvider";
import SkillInfo from "./(sub)/skillInfo";

const Skill = () => {
  return (
    <section
      className="h-full w-full flex flex-col items-center justify-center mt-[350px] z-20 py-20 px-5"
      id="skill"
    >
      <div>
        <SkillInfo />
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 p-5  z-50 ">
        {Skill_data.map((data, index) => (
          <SkillDataProvider
            key={index}
            src={data.Image}
            width={data.width}
            height={data.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 p-5 z-50 ">
        {Frontend_skill.map((data, index) => (
          <SkillDataProvider
            key={index}
            src={data.Image}
            width={data.width}
            height={data.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 p-5 z-50 ">
        {Backend_skill.map((data, index) => (
          <SkillDataProvider
            key={index}
            src={data.Image}
            width={data.width}
            height={data.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 p-5 z-50 ">
        {Full_stack.map((data, index) => (
          <SkillDataProvider
            key={index}
            src={data.Image}
            width={data.width}
            height={data.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full flex items-center justify-center absolute z-[-1] ">
        <div className="absolute top-[1] ">
          <video
            src="/skill.mp4"
            className="w-full h-auto object-cover opacity-[30%] "
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
