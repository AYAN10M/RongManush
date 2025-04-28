import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <Home />
      </motion.main>

      <Footer />
    </div>
  );
}
