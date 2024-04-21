import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/Input/Input";
import SelectInput from "../components/Input/SelectInput";

function AddProduct() {
  const accessToken = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { err },
  } = useForm();
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState([]);

  const storeProduct = async (request) => {
    const response = await fetch("http://test-server.test/api/product", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });

    if (!response.ok) {
      const res = await response.json();
      setErrors(res.errors);
      throw new Error(response.statusText);
    }
  };

  const getCategories = async () => {
    const response = await fetch("http://test-server.test/api/get-categories", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
    const data = await response.json();
    setCategories(data.data);
  };

  const onSubmit = async (data) => {
    try {
      const res = await storeProduct(data);
      navigate("/");
      toast.success("Berhasil menambahkan produk.");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <section id="addProduct">
        <div className="px-16 py-8">
          <h1 className="text-2xl font-semibold mb-3">Tambah Produk</h1>

          <div className="grid grid-cols-2 gap-3">
            <div className="card">
              <div className="p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="nama_produk">
                      <span className="block">Nama Produk</span>
                      <Input
                        id="nama_produk"
                        name="name"
                        error={errors.name}
                        {...register("name")}
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="kategori">
                      <span className="block">Kategori</span>
                      <SelectInput
                        id="kategori"
                        name="category_id"
                        error={errors.category_id}
                        {...register("category_id")}
                      >
                        <SelectInput.Option value="">Pilih</SelectInput.Option>
                        {categories.map((category, i) => {
                          return (
                            <SelectInput.Option key={i + 1} value={category.id}>
                              {category.category_name}
                            </SelectInput.Option>
                          );
                        })}
                      </SelectInput>
                    </label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="harga">
                      <span className="block">Harga</span>
                      <Input
                        id="harga"
                        name="price"
                        error={errors.price}
                        {...register("price")}
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="stok">
                      <span className="block">Stok</span>
                      <Input
                        id="stok"
                        name="stock"
                        error={errors.stock}
                        {...register("stock")}
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="satuan">
                      <span className="block">Satuan</span>
                      <Input
                        id="satuan"
                        name="unit"
                        error={errors.unit}
                        {...register("unit")}
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tgl_kedaluwarsa">
                      <span className="block">Tanggal Kedaluwarsa</span>
                      <Input
                        type="date"
                        id="tgl_kedaluwarsa"
                        name="expired_date"
                        error={errors.expired_date}
                        {...register("expired_date")}
                      />
                    </label>
                  </div>

                  <button type="submit" className="btn-blue-md">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
