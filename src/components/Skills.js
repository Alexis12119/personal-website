import React, { useState, useRef, useEffect } from 'react';
import { FaPython, FaReact, FaJava, FaHtml5, FaArrowDown, FaArrowUp, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiFlutter, SiTailwindcss, SiCss3, SiGo, SiGnubash, SiLua } from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { icon: <FaPython />, name: 'Python', level: 'Advanced' },
    { icon: <FaReact />, name: 'ReactJS', level: 'Intermediate' },
    { icon: <SiC />, name: 'C', level: 'Advanced' },
    { icon: <SiCplusplus />, name: 'C++', level: 'Advanced' },
    { icon: <SiCsharp />, name: 'C#', level: 'Beginner' },
    { icon: <FaJava />, name: 'Java', level: 'Intermediate' },
    { icon: <SiFlutter />, name: 'Flutter', level: 'Intermediate' },
    { icon: <FaHtml5 />, name: 'HTML', level: 'Advanced' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS', level: 'Intermediate' },
    { icon: <SiCss3 />, name: 'CSS', level: 'Advanced' },
    { icon: <SiGo />, name: 'Go', level: 'Beginner' },
    { icon: <SiLua />, name: 'Lua', level: 'Advanced' },
    { icon: <FaGitAlt />, name: 'Git', level: 'Advanced' },
    { icon: <FaLinux />, name: 'Linux', level: 'Advanced' },
    { icon: <SiGnubash />, name: 'Bash', level: 'Advanced' },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const skillsRef = useRef(null);

  const toggleExpand = () => {
    setShouldScroll(isExpanded); // Only set shouldScroll to true when collapsing (show less)
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (shouldScroll && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false); // Reset shouldScroll after scrolling
    }
  }, [shouldScroll]);

  const visibleSkills = isExpanded ? skills : skills.slice(0, 3);

  return (
    <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-900" ref={skillsRef}>
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Skills
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl text-blue-500 mb-2">{skill.icon}</div>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleExpand}
          className="flex items-center text-blue-500 dark:text-blue-400 focus:outline-none transition-transform transform hover:scale-110"
        >
          {isExpanded ? <FaArrowUp size={24} /> : <FaArrowDown size={24} />}
          <span className="ml-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
        </button>
      </div>
    </section>
  );
}

export default Skills;
