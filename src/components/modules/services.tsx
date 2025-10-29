import { motion } from "framer-motion";

const services = [
    {
        name: "SEO Optimization",
        tagline: "Boost your website ranking & visibility",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
        name: "Paid Advertising",
        tagline: "Drive targeted traffic with precision campaigns",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/3145/3145411.png",
    },
    {
        name: "Social Media Strategy",
        tagline: "Engage & grow your audience organically",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
    },
    {
        name: "Branding Campaigns",
        tagline: "Create memorable brand experiences",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
];

const Services = () => {
    return (
        <section id="services" className="px-6 lg:px-16 py-24 bg-gray-50 dark:bg-gray-900">
            <motion.div
                className="max-w-6xl mx-auto text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    My Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto">
                    I offer a wide range of digital marketing services designed to help businesses grow online and achieve measurable results.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* ইমেজ */}
                            <img
                                src={service.imgSrc}
                                alt={service.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
                            />

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm lg:text-base text-center">
                                {service.tagline}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
