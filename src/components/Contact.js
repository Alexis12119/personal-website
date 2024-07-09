import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Contact</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="p-2 border rounded dark:bg-gray-800 dark:text-gray-100" />
        <input type="email" placeholder="Email" className="p-2 border rounded dark:bg-gray-800 dark:text-gray-100" />
        <textarea placeholder="Message" className="p-2 border rounded dark:bg-gray-800 dark:text-gray-100"></textarea>
        <button type="submit" className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 transition duration-300">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
