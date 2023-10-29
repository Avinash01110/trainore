import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Head from "next/head";


const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);

  const handleOnChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/login`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (!result.error) {
        localStorage.setItem("token", result.token);
        toast.success("Login successful", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("/user");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        toast.error("Invalid", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Some error has occured", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div>
        <Head>
          <title>Trainore(Login) - Make Yourself Channelize</title>
          <meta name="description" content="Trainore(Login) - Make Yourself Channelize" />
          <meta rel="icon" href="favicon.ico" />
        </Head>
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 pt-40 pb-16  lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 flex justify-center w-auto rounded-full border-solid border-2 border-colour-main-blue-800"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-colour-main-blue-700 font-bold-26">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleOnSubmit} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-colour-main-blue-800 font-poppins"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleOnChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-2 block w-full rounded-md border-solid border-2 border-colour-main-blue-800 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-colour-main-blue-800 font-poppins"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  minLength={5}
                  onChange={handleOnChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-2 block w-full rounded-md border-solid border-2 border-colour-main-blue-800 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center w-auto pl-2">
              <button
                type="submit"
                className="flex w-80 justify-center items-center rounded-md bg-colour-main-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-colour-main-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-colour-main-blue-700 cursor-pointer"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="flex gap-x-1 justify-center items-center mt-6 text-center text-sm text-gray-500">
            Not a member?
            <Link
              href={"/signup"}
              className="font-semibold leading-6 text-colour-main-blue-700 hover:colour-main-blue-500"
            >
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;