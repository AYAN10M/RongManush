import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaArrowRight } from "react-icons/fa";

export default function FeaturedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/videos/")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos", err));
  }, []);

  return (
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

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-4 md:space-x-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow">
                  {Math.floor(video.duration_seconds / 60)}:
                  {String(video.duration_seconds % 60).padStart(2, "0")}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="font-bold text-lg md:text-xl mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  {new Date(video.uploaded_date).toLocaleDateString()} •{" "}
                  {video.view_count.toLocaleString()} views
                </p>
                <a
                  href={video.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Watch Now <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
