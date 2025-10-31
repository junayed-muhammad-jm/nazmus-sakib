import { motion } from "framer-motion";
import { BookOpen, School } from "lucide-react";

const educationData = [
    {
        degree: "B.Sc. in Computer Science",
        institution: "National University, Bangladesh",
        year: "2018 - 2022",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
    },
    {
        degree: "HSC - Science",
        institution: "Dhaka College",
        year: "2016 - 2018",
        icon: <School className="w-8 h-8 text-indigo-500" />,
    },
    {
        degree: "SSC",
        institution: "St. Gregory's High School",
        year: "2014 - 2016",
        icon: <School className="w-8 h-8 text-indigo-500" />,
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="px-6 lg:px-16 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900"
        >
            <motion.div
                className="max-w-6xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                    Education
                </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="flex-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all flex flex-col items-start text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="mb-4">{edu.icon}</div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                            {edu.degree}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">
                            {edu.institution}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                            {edu.year}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
