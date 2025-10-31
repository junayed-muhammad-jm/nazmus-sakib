import { motion } from "framer-motion";

const socialLinks = [

    {
        name: "Twitter",
        href: "https://twitter.com/@NazmusS41244666",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/nazmussakib1912",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    },
    {
        name: "GitHub",
        href: "https://github.com/junayed-muhammad-jm",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61581543764226",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/019998982100 ", // উদাহরণ: "https://wa.me/8801234567890"
        icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    },
];
const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900 px-6 lg:px-16 py-10">
            <motion.div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Brand + Tagline */}
                <div className="text-center md:text-left space-y-2">
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Sakib<span className="text-gray-800 dark:text-white">Mark</span>
                    </h1>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                        Empowering brands with Meta Marketing
                    </p>
                    <p className="text-xs text-gray-500">
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

                {/* Social Icons */}
                <div className="flex gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-gray-800/60 hover:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg transition-all"
                        >
                            <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" />
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Nazmus Sakib. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
