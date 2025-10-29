import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 lg:px-16 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl">
          Interested in working together? Reach out via email, LinkedIn, WhatsApp, or simply fill the form below.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a
            href="mailto:your.email@example.com"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl shadow-md transition-all"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow-md transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl shadow-md transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form className="pt-8 space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white h-32"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-7 rounded-2xl shadow-lg transition-all"
            >
              Let&apos;s Collaborate
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
