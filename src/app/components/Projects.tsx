"use client";

import "../globals.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiSupabase, SiFlutter } from "react-icons/si";
import {
  FaReact,
  FaDocker,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Inventory Management System",
    description: "ReactJS & Supabase. Fun and efficient inventory control.",
    techIcons: [<FaReact key="react" />, <SiSupabase key="supabase" />],
    github: "https://github.com/Alexis12119",
  },
  {
    title: "Bakerpass Appointment System",
    description: "NextJS, TypeScript, MySQL, Fastify, Flutter, Docker & more.",
    techIcons: [
      <FaReact key="react" />,
      <FaDocker key="docker" />,
      <SiFlutter key="flutter" />,
      <FaDatabase key="mysql" />,
      <FaNodeJs key="nodejs" />,
      <FaGitAlt key="git" />,
    ],
    github: "https://github.com/Alexis12119",
  },
  {
    title: "Sali-Seek Attendance & Performance",
    description: "Flutter & Supabase based attendance and performance system.",
    techIcons: [<SiFlutter key="flutter" />, <SiSupabase key="supabase" />],
    github: "https://github.com/Alexis12119",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="projects"
      className="relative py-24 px-6 max-w-6xl mx-auto"
      style={{ perspective: 800 }}
    >
      {/* Background Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-20 grid-rows-20 opacity-10"
      >
        {[...Array(400)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-300 dark:border-gray-700"
            style={{
              animation: `pulseGrid 6s ease-in-out infinite`,
              animationDelay: `${(i % 20) * 0.15}s`,
            }}
          />
        ))}
      </div>

      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects Gallery
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, techIcons, github }, i) => (
          <motion.a
            key={title}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl bg-white dark:bg-zinc-900 p-6 shadow-md transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 15px 5px rgba(99, 102, 241, 0.5), 0 0 30px 10px rgba(99, 102, 241, 0.3)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileInView={{
              filter:
                "drop-shadow(0 0 5px rgba(99, 102, 241, 0.4)) drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))",
            }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-500">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
            <div className="flex gap-3 text-indigo-500 text-2xl">
              {techIcons.map((icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
