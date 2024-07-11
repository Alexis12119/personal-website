import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setTimeout(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });

        // Clear status message after 5 seconds
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      }, 1000);
    } else {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });

      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="p-8 bg-gray-200 dark:bg-gray-800">
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            Contact
          </span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full pl-10 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full pl-10 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 transition duration-300 flex items-center justify-center space-x-2"
        >
          <FaPaperPlane />
          <span>Submit</span>
        </button>
        {status && (
          <p className={`text-center ${status.type === 'error' ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
