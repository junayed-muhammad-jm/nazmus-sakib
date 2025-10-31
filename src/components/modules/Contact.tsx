import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // EmailJS Template ID
        form.current,          // Form reference
        "YOUR_PUBLIC_KEY"      // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("ERROR:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 lg:px-16 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900"
    >
      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center">
          Contact Me
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-center text-lg">
          Send me a message directly. I’ll get back to you as soon as possible.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 flex flex-col"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            className="w-full p-4 rounded-xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          ></textarea>

          {/* Submit */}
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
