import { motion } from "framer-motion";
import { Download, Facebook, Twitter } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-28 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
            {/* Background floating lights */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>

            {/* Left Section */}
            <motion.div
                className="z-10 flex-1 text-center lg:text-left space-y-6 text-white"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Nazmus Sakib
                    </span>
                </h1>
                <h2 className="text-xl lg:text-2xl font-medium text-slate-300">
                    Meta & Digital Marketing Specialist
                </h2>

                <p className="text-slate-400 max-w-lg mx-auto lg:mx-0">
                    A passionate digital marketer helping brands grow with creativity,
                    strategy, and innovation. Expert in Meta Marketing & Facebook Ads.
                </p>

                <div className="flex justify-center lg:justify-start gap-5 pt-4 flex-wrap items-center">
                    <motion.a
                        href="/Blue and White Modern Professional Resume.pdf"
                        download
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 shadow-xl transition-all"
                        whileHover={{ scale: 1.07 }}
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </motion.a>

                    <div className="flex items-center gap-4">
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=61581543764226"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-blue-500/80 hover:text-white backdrop-blur-md border border-white/10 transition-all"
                            whileHover={{ scale: 1.15 }}
                        >
                            <Facebook className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="https://twitter.com/nazmussakib1912"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-sky-400/80 hover:text-white backdrop-blur-md border border-white/10 transition-all"
                            whileHover={{ scale: 1.15 }}
                        >
                            <Twitter className="w-5 h-5" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Right Section - Full Rectangle Image with rotating aura */}
            <motion.div
                className="flex-1 flex justify-center relative mt-10 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="relative w-[18rem] h-[24rem] lg:w-[24rem] lg:h-[30rem] rounded-3xl overflow-hidden shadow-2xl">
                    {/* Animated Gradient Border */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl border-[3px] border-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                            borderImage:
                                "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4) 1",
                            borderImageSlice: 1,
                        }}
                    ></motion.div>

                    {/* Second aura layer */}
                    <motion.div
                        className="absolute -inset-4 rounded-3xl border border-transparent opacity-30 blur-lg"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        style={{
                            borderImage:
                                "linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4) 1",
                            borderImageSlice: 1,
                        }}
                    ></motion.div>

                    {/* Image */}
                    <img
                        src="/nazmus-sakib-2.jpg"
                        alt="Nazmus Sakib"
                        className="relative z-10 w-full h-full object-cover rounded-3xl"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
