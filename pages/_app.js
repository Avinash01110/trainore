import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });

  const [key, setKey] = useState(0);

  const router = useRouter();
  

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    }
    setKey(Math.random());
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setKey(Math.random());
    setUser({ value: null });
    router.push("/home");
    toast.success("Successfully logged out.")
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        transition={Flip}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar user={user} logOut={logOut}/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
