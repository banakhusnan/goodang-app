import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const handleRupiah = (number) => {
  const numberConvert = number.toLocaleString("id-ID");
  return `Rp. ${numberConvert}`;
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await fetch("http://test-server.test/api/product");
    const data = await response.json();
    setProducts(data.data);
  };

  const deleteProduct = async (code) => {
    const response = await fetch(
      "http://test-server.test/api/product/" + code,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  };

  const handleDeleteProduct = async (code) => {
    try {
      deleteProduct(code);
    } catch (error) {
      toast.error("Gagal menghapus produk");
      console.error(error);
    }

    setProducts(products.filter((product) => product.code !== code));
    toast.success("Berhasil menghapus produk");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <section id="home">
        <div className="px-16 py-8">
          <button
            className="btn-blue-md mb-3"
            onClick={() => navigate("/tambah-produk")}
          >
            Tambah Produk
          </button>

          <div className="card">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>No</th>
                  <th>Nama Product</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {products.length == 0 ? (
                  <tr key={1432}>
                    <td colSpan={5}>
                      <ReactLoading
                        className="mx-auto"
                        type="spin"
                        color="#000"
                      />
                    </td>
                  </tr>
                ) : (
                  products.map((product, i) => {
                    return (
                      <tr key={i + 1}>
                        <td className="text-center">{i + 1}</td>
                        <td className="text-center">{product.name}</td>
                        <td className="text-center">
                          {handleRupiah(product.price)}
                        </td>
                        <td className="text-center">
                          {product.stock} {product.unit}
                        </td>
                        <td>
                          <div className="flex gap-2 justify-center">
                            <button
                              type="button"
                              onClick={() =>
                                navigate("/update-produk", {
                                  state: { code: product.code },
                                })
                              }
                              className="btn-yellow-md flex w-fit"
                            >
                              <CiEdit />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDeleteProduct(product.code)}
                              className="btn-red-md flex w-fit"
                            >
                              <FaRegTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
