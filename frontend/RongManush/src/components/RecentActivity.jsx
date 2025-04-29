import { motion } from "framer-motion";
import { FaBook, FaArrowRight } from "react-icons/fa";

export default function RecentActivity() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-12 px-4 md:px-0"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          className="text-2xl font-bold text-gray-900 flex items-center"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <FaBook className="text-indigo-600 mr-3" />
          Recently Viewed
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
                  <FaBook className="text-indigo-600 text-4xl opacity-50" />
                </div>
                <h3 className="font-bold text-lg mb-1">
                  Recent Activity {item}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  2 days ago • 5 min read
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                  Continue <FaArrowRight className="ml-1 text-xs" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
