import React from 'react';
import { FaPython, FaReact, FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaPython />, name: 'Python', level: 'Advanced' },
    { icon: <FaReact />, name: 'ReactJS', level: 'Intermediate' },
    { icon: <SiC />, name: 'C', level: 'Intermediate' },
    { icon: <SiCplusplus />, name: 'C++', level: 'Intermediate' },
    { icon: <SiCsharp />, name: 'C#', level: 'Beginner' },
    { icon: <FaJava />, name: 'Java', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="p-8 bg-gray-200 dark:bg-gray-800">
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Skills
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-5xl text-blue-500 mb-2">{skill.icon}</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
