import { FaUser } from "react-icons/fa";
import { IoIosLogOut, IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");
  const name = sessionStorage.getItem("name");

  const logout = async () => {
    const res = await fetch("http://test-server.test/api/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
  };

  const handleLogout = async () => {
    await logout();

    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");

    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="h-full w-64 px-3 flex items-center justify-between">
          <NavLink to="/">
            <h1 className="navbar-brand">Goodang</h1>
          </NavLink>
        </div>

        <div className="px-5">
          {accessToken ? (
            <Dropdown
              text={
                <div className="flex items-center gap-3">
                  <div className="bg-slate-500 rounded-full p-2">
                    <FaUser className="text-white" />
                  </div>
                  <h1 className="text-lg">{name}</h1>
                  <IoMdArrowDropdown />
                </div>
              }
            >
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <IoIosLogOut /> <span>Logout</span>
              </a>
            </Dropdown>
          ) : (
            <div>
              <button
                onClick={() => navigate("/login")}
                className="btn-blue-md"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn-blue-md"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
