import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaReact, FaNodeJs, FaCss3Alt, FaPython, FaHtml5, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      image: 'project1.jpg',
      link: '',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      image: 'project2.jpg',
      link: '',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Django', icon: <DiDjango /> },
        { name: 'HTML', icon: <FaHtml5 /> },
      ],
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: 'project3.jpg',
      link: '',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Project 4',
      description: 'Description for project 4',
      image: 'project4.jpg',
      link: '',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Django', icon: <DiDjango /> },
        { name: 'HTML', icon: <FaHtml5 /> },
      ],
    },
    {
      title: 'Project 5',
      description: 'Description for project 5',
      image: 'project5.jpg',
      link: '',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Project 6',
      description: 'Description for project 6',
      image: 'project6.jpg',
      link: '',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Django', icon: <DiDjango /> },
        { name: 'HTML', icon: <FaHtml5 /> },
      ],
    },
    {
      title: 'Project 7',
      description: 'Description for project 7',
      image: 'project7.jpg',
      link: '',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Project 8',
      description: 'Description for project 8',
      image: 'project8.jpg',
      link: '',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Django', icon: <DiDjango /> },
        { name: 'HTML', icon: <FaHtml5 /> },
      ],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const projectsRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isExpanded]);

  const visibleProjects = isExpanded ? projectList : projectList.slice(0, 2);

  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900" ref={projectsRef}>
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Projects
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <LazyLoadImage
              src={project.image}
              alt={project.title}
              effect="blur"
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-900 dark:text-gray-100 mb-4">{project.description}</p>
            <div className="flex items-center space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-1 text-gray-900 dark:text-gray-100">
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleExpand}
          className="flex items-center text-blue-500 dark:text-blue-400 focus:outline-none"
        >
          {isExpanded ? <FaArrowUp size={24} /> : <FaArrowDown size={24} />}
          <span className="ml-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
        </button>
      </div>
    </section>
  );
}

export default Projects;
