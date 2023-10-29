import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <>
      <div>
        <Head>
          <title>Trainore - Make Yourself Channelize</title>
          <meta
            name="description"
            content="Trainore - Make Yourself Channelize"
          />
          <meta rel="icon" href="favicon.ico" />
        </Head>
      </div>
    </>
  );
}
