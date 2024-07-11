import React, { useState, useRef, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: '2024',
    title: 'Internship at Tech Company',
    description: 'Completed a summer internship focusing on web development.'
  },
{
    date: '2023',
    title: 'Freelance Developer',
    description: 'Started working as a freelance developer, building websites for small businesses.'
  },
  {
    date: '2022',
    title: 'Started at Pamantasan ng Lungsod ng San Pablo',
    description: 'Began my studies in Information Technology.'
  },
    {
    date: '2021',
    title: 'High School Graduation',
    description: 'Graduated with honors from high school.'
  },
];

function Timeline() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const timelineRef = useRef(null);

  const toggleExpand = () => {
    setShouldScroll(isExpanded); // Only set shouldScroll to true when collapsing (show less)
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (shouldScroll && timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false); // Reset shouldScroll after scrolling
    }
  }, [shouldScroll]);

  const visibleEvents = isExpanded ? timelineData : timelineData.slice(0, 2);

  return (
    <section id="timeline" className="p-8 bg-gray-100 dark:bg-gray-900" ref={timelineRef}>
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Timeline
          </span>
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {visibleEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-col md:flex-row items-center w-full max-w-xl"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <div className="p-4 border-4 border-current rounded-full bg-gray-200 dark:bg-gray-800 text-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {event.date}
                </span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {event.title}
              </h3>
              <p className="text-md text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
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

export default Timeline;
