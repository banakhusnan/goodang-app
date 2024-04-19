import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();

  const loginProcess = async (request) => {
    const res = await fetch("http://test-server.test/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    Object.keys(data.data).forEach((key) =>
      sessionStorage.setItem(key, data.data[key])
    );
  };

  const onSubmit = async (request) => {
    try {
      await loginProcess(request);
    } catch (error) {
      console.error(error);
    }

    navigate("/");
  };

  return (
    <div>
      <section id="login">
        <div className="px-16 py-8">
          <div className="card w-1/2">
            <div className="p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold mb-4">Masukan akun</h1>

                <div className="mb-3">
                  <label htmlFor="email">
                    <span className="block">Email</span>
                    <Input id="email" name="email" {...register("email")} />
                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="password">
                    <span className="block">Password</span>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      {...register("password")}
                    />
                  </label>
                </div>

                <button type="submit" className="btn-blue-md">
                  Masuk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
