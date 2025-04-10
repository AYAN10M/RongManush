import { useEffect, useRef, useState } from "react";
import {
  FaYoutube,
  FaArrowRight,
  FaBook,
  FaBoxOpen,
  FaBookmark,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Typewriter effect state
  const [displayText, setDisplayText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Welcome to RongManush";

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Blink cursor a few times before showing subtitle
        const blinkInterval = setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, 400);

        setTimeout(() => {
          clearInterval(blinkInterval);
          setCursorVisible(false);
          setShowSubtitle(true);
        }, 2000);
      }
    }, 100); // Faster typing speed

    return () => clearInterval(typingInterval);
  }, []);

  // Profile animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Close menu when clicking on a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-20">
      {/* Fixed Navbar with Mobile Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-2xl font-serif font-bold text-black">
            Stylo Mrinal
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="relative group text-black hover:text-blue-800 font-medium transition-colors"
            >
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group text-black hover:text-blue-800 font-medium transition-colors"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group text-black hover:text-blue-800 font-medium transition-colors"
            >
              Saved
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-black hover:text-blue-800 font-medium transition-colors">
              Login
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-3 space-y-4 bg-white border-t border-gray-200">
                <a
                  href="#"
                  className="block py-2 text-black hover:text-blue-800 font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Articles
                </a>
                <a
                  href="#"
                  className="block py-2 text-black hover:text-blue-800 font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block py-2 text-black hover:text-blue-800 font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Saved
                </a>
                <div className="pt-4 space-y-3">
                  <button className="w-full text-black hover:text-blue-800 font-medium py-2 transition-colors">
                    Login
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded font-medium transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Animations */}
      <div className="text-center mb-16 pt-8 min-h-[120px] flex flex-col items-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4 h-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText}
          <span
            className={`inline-block w-1 h-8 bg-indigo-600 align-middle ml-1 transition-opacity duration-300 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </motion.h1>

        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Your premium destination for men's fashion, grooming & lifestyle
          </motion.p>
        )}
      </div>

      {/* Animated Profile Card */}
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
              wardrobes. Featured in{" "}
              <span className="font-semibold">GQ India</span> and collaborated
              with premium brands like{" "}
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-2 md:col-span-1"
            >
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors"
              >
                <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
                <span>Visit Channel</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Horizontal Scrolling Sections */}

      {/* 1. Recent Activity */}
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

      {/* 2. New Articles */}
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

      {/* 3. YouTube Videos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-12 px-4 md:px-0"
      >
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            className="text-2xl font-bold text-gray-900 flex items-center"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <FaYoutube className="text-indigo-600 mr-3" />
            Featured Videos
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
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-600 bg-opacity-90 rounded-full flex items-center justify-center">
                        <FaYoutube className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-lg md:text-xl mb-2">
                      Video Title {item}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      Published 1 week ago • 15K views
                    </p>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                      Watch Now <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Products */}
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

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
