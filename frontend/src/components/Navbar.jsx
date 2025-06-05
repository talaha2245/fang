import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-800 to-emerald-500 h-20 flex items-center justify-between px-8 shadow-xl border-b border-white/20 sticky top-0 z-50">
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center space-x-3 group">
        <h1 className="text-2xl font-sans font-bold text-white group-hover:text-pink-200 transition-colors duration-300 tracking-wide drop-shadow">
          FAANG Predictor
        </h1>
      </NavLink>

      {/* Navigation Links */}

      <div className="flex gap-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-white text-lg font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-300 shadow-sm ${
              isActive
                ? "bg-red bg-opacity-20 text-indigo-800 scale-105"
                : "hover:bg-white hover:bg-opacity-15 hover:text-pink-100 hover:scale-105"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-300 shadow-sm ${
              isActive
                ? "bg-red bg-opacity-20 text-indigo-800 scale-105"
                : "hover:bg-white hover:bg-opacity-15 hover:text-pink-100 hover:scale-105"
            }`
          }
        >
          Know score
        </NavLink>
        <NavLink
          to="/ranking"
          className={({ isActive }) =>
            `text-white text-lg font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-300 shadow-sm ${
              isActive
                ? "bg-red bg-opacity-20 text-indigo-800 scale-105"
                : "hover:bg-white hover:bg-opacity-15 hover:text-pink-100 hover:scale-105"
            }`
          }
        >
          Rankings
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;