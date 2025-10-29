import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Marketing Manager, TechCorp",
    feedback:
      "Nazmus transformed our online presence! Our CTR increased by 40% and engagement skyrocketed.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png", // example client logo
  },
  {
    name: "Michael Lee",
    role: "CEO, Brandify Ltd.",
    feedback:
      "Amazing strategies! Social media growth was faster than expected, highly recommend.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    name: "Sofia Martinez",
    role: "Founder, ShopEase",
    feedback:
      "Professional, creative, and results-driven. ROI improved dramatically thanks to the campaigns.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
  },
  {
    name: "David Kim",
    role: "CMO, FinTech Solutions",
    feedback:
      "Highly skilled marketer! Analytics and strategy execution were top-notch.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="px-6 lg:px-16 py-24 bg-white dark:bg-gray-900"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Client Logo */}
              <img
                src={t.logo}
                alt={`${t.name} logo`}
                className="w-16 h-16 object-contain rounded-full mb-2"
              />

              {/* Client Image */}
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 object-cover rounded-full border-2 border-indigo-600"
              />

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h3>
              <p className="text-sm text-indigo-600">{t.role}</p>

              {/* Feedback */}
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm lg:text-base">
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
