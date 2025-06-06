"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiSharp,
  SiCplusplus,
  SiFlutter,
  SiSupabase,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3c873a" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "PHP", icon: <FaPhp size={40} color="#777bb4" /> },
  { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
  { name: "C#", icon: <SiSharp size={40} color="#9b4f96" /> },
  { name: "C++", icon: <SiCplusplus size={40} color="#00599c" /> },
  { name: "Flutter", icon: <SiFlutter size={40} color="#02569B" /> },
  { name: "Supabase", icon: <SiSupabase size={40} color="#3ecf8e" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
  { name: "Docker", icon: <FaDocker size={40} color="#2496ed" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-md cursor-pointer hover:scale-110 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            title={name}
          >
            {icon}
            <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
