import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/40 shadow-sm transition-all duration-300">
            <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                    Sakib<span className="text-gray-800 dark:text-white">Mark</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Download CV */}
                <div className="hidden lg:block">
                    <a
                        href="/Blue and White Modern Professional Resume.pdf"
                        download
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center gap-2 shadow-lg transition-all"
                    >
                        <Download className="w-4 h-4" /> Download CV
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

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ul className="flex flex-col py-5 text-center space-y-4 text-gray-700 dark:text-gray-200 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="/Blue and White Modern Professional Resume.pdf"
                                    download
                                    onClick={() => setIsOpen(false)}
                                    className="mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all w-max mx-auto"
                                >
                                    <Download className="w-4 h-4" /> Download CV
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
