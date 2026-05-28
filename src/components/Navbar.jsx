

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md shadow-lg">
      <h1 className="text-xl font-bold">🌤 Weather App</h1>

      <div className="flex gap-4">
        <Link className="hover:text-yellow-300" to="/">Home</Link>
        <Link className="hover:text-yellow-300" to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;