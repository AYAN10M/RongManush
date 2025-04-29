import { motion } from "framer-motion";
import { FaBoxOpen, FaArrowRight } from "react-icons/fa";

export default function LatestArticles() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mb-12 px-4 md:px-0"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          className="text-2xl font-bold text-gray-900 flex items-center"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <FaBoxOpen className="text-indigo-600 mr-3" />
          Latest Publications
        </motion.h2>
        <motion.button
          whileHover={{ x: 5 }}
          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
        >
          View All <FaArrowRight className="ml-2" />
        </motion.button>
      </div>
      <div className="relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-4 md:space-x-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <FaBoxOpen className="text-indigo-600 text-4xl opacity-50" />
                </div>
                <h3 className="font-bold text-lg mb-1">New Article {item}</h3>
                <p className="text-gray-500 text-sm">Latest fashion trends</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
