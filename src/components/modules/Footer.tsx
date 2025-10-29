import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/yourprofile",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/yourprofile",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/yourprofile",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    },
    {
        name: "GitHub",
        href: "https://github.com/yourprofile",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
];

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-900 text-gray-300 px-6 lg:px-16 py-8">
            <motion.div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Brand tagline + Web Developer */}
                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm font-semibold text-white">© 2025 Nazmus Sakib</p>
                    <p className="text-xs text-gray-400">
                        Empowering brands with digital excellence
                    </p>
                    <p className="text-xs text-gray-400">
                        Developed by{" "}
                        <a
                            href="https://portfolio-bvoj.vercel.app/"
                            target="_blank"
                            className="underline hover:text-indigo-500"
                        >
                            Junayed Muhammad
                        </a>
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" />
                        </a>
                    ))}
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
