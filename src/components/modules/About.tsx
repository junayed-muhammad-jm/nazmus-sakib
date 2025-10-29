import { motion } from "framer-motion";

// Online skill icon links (free sources)
const skills = [
    {
        name: "Digital Marketing",
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
        name: "SEO",
        src: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
        name: "Google Ads",
        src: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    },
    {
        name: "Social Media",
        src: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
    },
    {
        name: "Content Strategy",
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135745.png",
    },
    {
        name: "Analytics",
        src: "https://cdn-icons-png.flaticon.com/512/3417/3417407.png",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative px-6 lg:px-16 py-24 bg-gray-50 dark:bg-gray-900"
        >
            <motion.div
                className="max-w-6xl mx-auto text-center lg:text-left space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                    I'm <strong>Nazmus Sakib</strong>, a digital marketing specialist helping
                    brands grow online with creative strategies, SEO optimization, performance
                    ads, and social media campaigns. My goal is to deliver measurable results
                    and build strong brand presence.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 pt-6 justify-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <img
                                    src={skill.src}
                                    alt={skill.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                />
                            </div>
                            <span className="mt-2 text-gray-700 dark:text-gray-200 text-sm sm:text-base font-medium text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="pt-10 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        href="#contact"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-7 rounded-2xl shadow-lg transition-all"
                    >
                        Hire Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
