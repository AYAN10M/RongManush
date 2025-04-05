const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-serif font-bold text-black">
          Stylo Mrinal
        </span>
      </div>

      {/* Navigation with animated hover effects */}
      <div className="hidden md:flex space-x-8">
        {["Articles", "Products", "Saved"].map((item) => (
          <a
            href="#"
            key={item}
            className="relative text-black hover:text-blue-800 font-medium group"
          >
            {item}
            {/* Animated bottom line */}
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-800 w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </a>
        ))}
      </div>

      {/* Auth */}
      <div className="flex space-x-4">
        <button className="text-black hover:text-blue-800 font-medium">
          Login
        </button>
        <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded font-medium transition-colors duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
