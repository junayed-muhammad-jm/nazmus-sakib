import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/40 shadow-sm">
            <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
                >
                    Sakib<span className="text-gray-800 dark:text-white">Mark</span>
                </a>

                {/* Desktop Download CV */}
                <div className="hidden lg:block">
                    <a
                        href="/nazmus-sakib-cv.pdf"
                        download
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 shadow transition-all"
                    >
                        Download CV <Download className="w-4 h-4" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul className="flex flex-col py-4 text-center">
                            <li>
                                <a
                                    href="/nazmus-sakib-cv.pdf"
                                    download
                                    onClick={() => setIsOpen(false)}
                                    className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-xl flex items-center justify-center gap-2 shadow transition-all"
                                >
                                    Download CV <Download className="w-4 h-4" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
