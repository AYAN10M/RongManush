import { motion } from "framer-motion";
import { FaBookmark, FaArrowRight } from "react-icons/fa";

export default function RecommendedProducts() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="px-4 md:px-0"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          className="text-2xl font-bold text-gray-900 flex items-center"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <FaBookmark className="text-indigo-600 mr-3" />
          Recommended Products
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
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
                  <FaBookmark className="text-indigo-600 text-3xl opacity-50" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1">
                  Product {item}
                </h3>
                <p className="text-indigo-600 font-medium text-sm md:text-base mb-2 md:mb-3">
                  ₹1,299
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-1 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
