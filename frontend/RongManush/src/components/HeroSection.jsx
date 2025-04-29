import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const fullText = "Welcome to RongManush";
  const [displayText, setDisplayText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        const blinkInterval = setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, 400);
        setTimeout(() => {
          clearInterval(blinkInterval);
          setCursorVisible(false);
          setShowSubtitle(true);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
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
  );
}
