import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="h-full w-64 px-3 flex items-center justify-between">
          <NavLink to="/">
            <h1 className="navbar-brand">Brand</h1>
          </NavLink>

          {/* <button className="p-3">
            <HiOutlineMenu className="text-xl" />
          </button> */}
        </div>

        <div className="px-5">
          <button className="flex gap-3 items-center">
            <div className="bg-slate-500 rounded-full p-2">
              <FaUser className="text-white" />
            </div>
            <h1 className="text-lg">Bana Khusnan</h1>
            <IoMdArrowDropdown />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
