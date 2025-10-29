import { motion } from "framer-motion";

interface Project {
    client: string;
    objective: string;
    strategy: string;
    results: string;
    media: string; // image or video link
    link: string;  // full case study link
}

// Example projects
const projects: Project[] = [
    {
        client: "TechCorp Inc.",
        objective: "Increase website traffic & lead generation",
        strategy: "SEO optimization, Google Ads campaigns, social media strategy",
        results: "CTR ↑ 35%, ROI ↑ 50%",
        media: "https://cdn.pixabay.com/photo/2017/08/10/03/52/business-2616527_960_720.jpg",
        link: "#",
    },
    {
        client: "Brandify Ltd.",
        objective: "Boost brand awareness and engagement",
        strategy: "Content marketing, Instagram & Facebook campaigns",
        results: "Social engagement ↑ 60%, followers ↑ 45%",
        media: "https://cdn.pixabay.com/photo/2016/03/31/19/40/office-1295128_960_720.jpg",
        link: "#",
    },
    {
        client: "ShopEase",
        objective: "Increase online sales & conversion",
        strategy: "Email marketing, retargeting ads, product landing pages",
        results: "Conversion rate ↑ 40%, Revenue ↑ 30%",
        media: "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1868015_960_720.jpg",
        link: "#",
    },
];

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="px-6 lg:px-16 py-24 bg-gray-100 dark:bg-gray-900"
        >
            <motion.div
                className="max-w-6xl mx-auto space-y-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    Portfolio / Case Studies
                </h2>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.client}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Media */}
                            <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                                <img
                                    src={project.media}
                                    alt={project.client}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                        {project.client}
                                    </h3>
                                    <p>
                                        <strong>Objective:</strong> {project.objective}
                                    </p>
                                    <p>
                                        <strong>Strategy:</strong> {project.strategy}
                                    </p>
                                    <p>
                                        <strong>Results:</strong> {project.results}
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href={project.link}
                                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-2xl shadow-lg transition-all"
                                    >
                                        See Full Case Study
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
