import { motion } from "framer-motion";

// Meta Marketing Skills
const skills = [
    {
        name: "Facebook Ads",
        src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
        name: "Meta Business",
        src: "https://cdn-icons-png.flaticon.com/512/174/174848.png",
    },
    {
        name: "Audience Targeting",
        src: "https://cdn-icons-png.flaticon.com/512/1041/1041384.png",
    },
    {
        name: "Ad Copywriting",
        src: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
        name: "Analytics",
        src: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
        name: "A/B Testing",
        src: "https://cdn-icons-png.flaticon.com/512/2839/2839021.png",
    },
    {
        name: "Content Strategy",
        src: "https://cdn-icons-png.flaticon.com/512/2921/2921220.png",
    },
    {
        name: "Creative Design",
        src: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative px-6 lg:px-16 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900"
        >
            <motion.div
                className="max-w-6xl mx-auto text-center lg:text-left space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                    About Me
                </h2>

                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    I'm <strong>Nazmus Sakib</strong>, a <strong>Meta Marketing Expert</strong> specializing in
                    Facebook Ads and audience growth.
                    I learned everything from home — through passion, patience, and practice.
                    I help brands reach the right audience and grow faster with smart digital strategy.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 pt-6 justify-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-indigo-400/30 transition-all duration-300">
                                <img
                                    src={skill.src}
                                    alt={skill.name}
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />
                            </div>
                            <span className="mt-2 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="pt-8 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2.5 px-7 rounded-2xl shadow-lg transition-all text-sm sm:text-base"
                    >
                        Hire Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
