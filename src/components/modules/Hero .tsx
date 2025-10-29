import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-24  from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
            {/* Background Gradient Circles */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            {/* Left Section */}
            <motion.div
                className="flex-1 text-center lg:text-left space-y-6 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                    Elevate Your Brand with{" "}
                    <span className="text-indigo-600">Smart Digital Strategy</span>
                </h1>

                <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
                    I'm <strong>Nazmus Sakib</strong>, a digital marketing specialist focused on
                    helping businesses grow through data-driven campaigns, SEO, and performance ads.
                </p>

                <div className="flex justify-center lg:justify-start gap-4 pt-4 flex-wrap">
                    <motion.a
                        href="#portfolio"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-2xl flex items-center gap-2 shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        View My Work <ArrowRight className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium py-3 px-6 rounded-2xl transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        Let’s Connect
                    </motion.a>

                    {/* Download CV Button */}
                    <motion.a
                        href="/mazus-sakib-pdf.pdf"
                        download
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-2xl flex items-center gap-2 shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        Download CV <Download className="w-5 h-5" />
                    </motion.a>
                </div>
            </motion.div>

            {/* Right Section (Image + Glow) */}
            <motion.div
                className="flex-1 flex justify-center mb-10 lg:mb-0 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative">
                    <div className="absolute inset-0 w-full h-full from-indigo-200/40 via-transparent to-transparent dark:from-indigo-800/30 rounded-3xl blur-2xl -z-10"></div>

                    <img
                        src="/nazmus-sakib.jpg"
                        alt="Nazmus Sakib"
                        className="w-72 lg:w-96 rounded-3xl shadow-2xl object-cover border border-gray-200 dark:border-gray-800"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
