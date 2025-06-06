"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Sparkles } from "lucide-react";

const funFacts = [
  {
    icon: <Brain size={24} />,
    title: "Fast Learner",
    description:
      "Throw me into the deep end, and I'll come back swimming with solutions.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Code-First Mindset",
    description: "I write more lines of code than tweets.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Fail Fast, Learn Faster",
    description: "I’ll mess it up once, but never twice.",
  },
];

// Container variants for staggering children
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

// Child variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Icon pulse animation variant
const iconPulse = {
  animate: {
    scale: [1, 1.15, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm Alexis — a curious full-stack developer who enjoys crafting things
        that live on the internet. I build fast, fun, and functional digital
        experiences, with an eye for artistic design and a passion for code.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {funFacts.map((fact, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow transition duration-300"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 30px rgba(99, 102, 241, 0.3)", // Indigo glow
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              className="flex items-center gap-3 mb-2 text-indigo-500"
              variants={iconPulse}
              animate="animate"
            >
              {fact.icon}
              <span className="font-semibold">{fact.title}</span>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {fact.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
