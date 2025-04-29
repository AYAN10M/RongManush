import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProfileCard() {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={profileRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg mb-16 mx-4 md:mx-0"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md relative"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt="Mrinal Kanti Roy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white font-medium">
            Founder & Style Expert
          </span>
        </div>
      </motion.div>

      <div className="flex-1 space-y-4 md:space-y-6 mt-6 md:mt-0">
        <div className="space-y-2">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mrinal Kanti Roy
          </motion.h2>
          <motion.p
            className="text-indigo-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Founder & Style Expert
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-indigo-200 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </div>

        <div className="prose text-gray-600 space-y-3 md:space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Award-winning men's style influencer with 5+ years transforming
            wardrobes. Featured in <span className="font-semibold">GQ India</span>{" "}
            and collaborated with premium brands like{" "}
            <span className="font-semibold">Peter England</span> and{" "}
            <span className="font-semibold">The Man Company</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            My YouTube channel helps men develop signature styles that boost
            confidence in professional and personal spaces.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-3 md:pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-indigo-50 p-3 md:p-4 rounded-lg text-center"
          >
            <p className="text-xl md:text-2xl font-bold text-indigo-700">
              250K+
            </p>
            <p className="text-xs md:text-sm text-gray-600">Subscribers</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-indigo-50 p-3 md:p-4 rounded-lg text-center"
          >
            <p className="text-xl md:text-2xl font-bold text-indigo-700">
              50K+
            </p>
            <p className="text-xs md:text-sm text-gray-600">Community</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors"
            >
              <span>Visit Channel</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
