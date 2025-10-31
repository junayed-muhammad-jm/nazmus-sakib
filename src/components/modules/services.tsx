import { motion } from "framer-motion";

const services = [
    {
        name: "Facebook Ads Management",
        tagline: "Launch & manage high-converting campaigns",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
        name: "Audience Targeting",
        tagline: "Reach the right people at the right time",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1041/1041384.png",
    },
    {
        name: "Campaign Optimization",
        tagline: "Maximize ROI & improve ad performance",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    },
    {
        name: "Ad Creative & Copy",
        tagline: "Engaging visuals & persuasive copywriting",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
        name: "Analytics & Reporting",
        tagline: "Track results and make data-driven decisions",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
        name: "Social Media Strategy",
        tagline: "Plan content & grow audience organically",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="px-6 lg:px-16 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900"
        >
            <motion.div
                className="max-w-6xl mx-auto text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                    My Services
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-lg lg:text-xl max-w-3xl mx-auto">
                    I provide end-to-end Meta marketing solutions to help brands grow, reach the right audience, and achieve measurable results.
                </p>

                <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            className="bg-white/60 dark:bg-gray-800/70 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={service.imgSrc}
                                alt={service.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
                                {service.name}
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm lg:text-base text-center">
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
