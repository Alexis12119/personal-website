"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextArea";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const EMAIL = process.env.NEXT_PUBLIC_EMAIL!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: EMAIL,
          message: form.message,
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log("SUCCESS!", result.status, result.text);
      setSuccess(true);
      setForm({ name: "", message: "" });
    } catch (err) {
      console.error("FAILED...", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          Let’s Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Have a question, project idea, or just want to say hello?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FloatingInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <FloatingTextarea
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 font-medium">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 font-medium">
            Failed to send message. Try again later.
          </p>
        )}
      </form>

      <div className="flex justify-center gap-6 pt-8 text-2xl text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/Alexis12119"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexis-corporal-a5b048361"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:corporalalexis222@gmail.com"
          className="hover:text-indigo-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.section>
  );
}
