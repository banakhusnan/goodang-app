import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  const isLoggedIn = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={isLoggedIn() ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/tambah-produk"
            element={isLoggedIn() ? <AddProduct /> : <Navigate to="/login" />}
          />
          <Route
            path="/update-produk"
            element={
              isLoggedIn() ? <UpdateProduct /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
