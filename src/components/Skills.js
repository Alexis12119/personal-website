import React from 'react';
import { FaPython, FaReact, FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaReact />, name: 'ReactJS' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <FaJava />, name: 'Java' },
  ];

  return (
    <section id="skills" className="p-8 bg-gray-200 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-5xl text-blue-500 mb-2">{skill.icon}</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
