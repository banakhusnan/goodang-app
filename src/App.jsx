import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah-produk" element={<AddProduct />} />
          <Route path="/update-produk" element={<UpdateProduct />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
