import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-10 text-center text-gray-600 relative">
      {/* Subtle separation line - only addition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Navigation Links - unchanged */}
      <div className="flex justify-center space-x-6 mb-6 text-sm font-medium">
        <a href="#" className="hover:text-gray-900">
          About
        </a>
        <a href="#" className="hover:text-gray-900">
          Blog
        </a>
        <a href="#" className="hover:text-gray-900">
          Jobs
        </a>
        <a href="#" className="hover:text-gray-900">
          Press
        </a>
        <a href="#" className="hover:text-gray-900">
          Accessibility
        </a>
        <a href="#" className="hover:text-gray-900">
          Partners
        </a>
      </div>

      {/* Social Icons - unchanged */}
      <div className="flex justify-center space-x-6 text-xl mb-6">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright - unchanged */}
      <p className="text-sm text-gray-500">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
