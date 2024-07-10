import React from 'react';
import Slider from 'react-slick';
import { FaPython, FaReact, FaJava, FaHtml5 } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiFlutter, SiTailwindcss, SiCss3, SiGo } from 'react-icons/si';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Skills() {
  const skills = [
    { icon: <FaPython />, name: 'Python', level: 'Advanced' },
    { icon: <FaReact />, name: 'ReactJS', level: 'Intermediate' },
    { icon: <SiC />, name: 'C', level: 'Intermediate' },
    { icon: <SiCplusplus />, name: 'C++', level: 'Intermediate' },
    { icon: <SiCsharp />, name: 'C#', level: 'Beginner' },
    { icon: <FaJava />, name: 'Java', level: 'Intermediate' },
    { icon: <SiFlutter />, name: 'Flutter', level: 'Intermediate' },
    { icon: <FaHtml5 />, name: 'HTML', level: 'Advanced' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS', level: 'Intermediate' },
    { icon: <SiCss3 />, name: 'CSS', level: 'Advanced' },
    { icon: <SiGo />, name: 'Go', level: 'Beginner' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="p-8 bg-gray-200 dark:bg-gray-800">
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Skills
          </span>
        </h2>
      </div>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl text-blue-500 mb-2">{skill.icon}</div>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Skills;
