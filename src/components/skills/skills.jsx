import React from "react";
import { useTheme } from "../../Theme";

import {
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiBootstrap,
  DiGit,
  DiGithubBadge,
  DiVisualstudio,
  DiDjango,
} from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiZod,
  SiRecoil,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";

const skills = [
  { name: "JavaScript", icon: <DiJavascript1 className="w-12 h-12" /> },
  { name: "Python", icon: <DiPython className="w-12 h-12" /> },
  { name: "HTML", icon: <DiHtml5 className="w-12 h-12" /> },
  { name: "CSS", icon: <DiCss3 className="w-12 h-12" /> },
  { name: "ReactJS", icon: <DiReact className="w-12 h-12" /> },
  { name: "Node.js", icon: <DiNodejsSmall className="w-12 h-12" /> },
  { name: "MongoDB", icon: <DiMongodb className="w-12 h-12" /> },
  { name: "SQL", icon: <FiDatabase className="w-12 h-12" /> },
  { name: "ExpressJS", icon: <SiExpress className="w-12 h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: "Django", icon: <DiDjango className="w-12 h-12" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="w-12 h-12" /> },
  { name: "Mantine", icon: <DiReact className="w-12 h-12" /> },
  { name: "Zod", icon: <SiZod className="w-12 h-12" /> },
  { name: "React-hook-form", icon: <DiReact className="w-12 h-12" /> },
  { name: "Recoil", icon: <SiRecoil className="w-12 h-12" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
  { name: "VS Code", icon: <DiVisualstudio className="w-12 h-12" /> },
  { name: "Git", icon: <DiGit className="w-12 h-12" /> },
  { name: "GitHub", icon: <DiGithubBadge className="w-12 h-12" /> },
  { name: "Prisma", icon: <SiPrisma className="w-12 h-12" /> },
];

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white text-gray-700 m-4 p-4 rounded-lg shadow-md flex flex-col items-center w-48`}
            >
              {skill.icon}
              <span className="mt-4">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
