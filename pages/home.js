import React from "react";
import Image from "next/image";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";

const home = () => {
  return (
    <>
      <div>
        <Head>
          <title>Trainore(Home) - Make Yourself Channelize</title>
          <meta
            name="description"
            content="Trainore(Home) - Make Yourself Channelize"
          />
          <meta rel="icon" href="favicon.ico" />
        </Head>
      </div>
      <div className="text-gray-600 body-font">
        <Fade isvisible>
          <div className="xl:bg-white container mx-auto flex pt-48 xl:pt-16 sm:pt-48 xl:gap-x-36 xl:flex-row flex-col justify-center items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-start z-20">
              <h1 className="title-font sm:text-4xl text-31xl mb-4 font-medium text-gray-900 text-colour-main-blue-900 font-bold-26">
                <TypeAnimation
                  sequence={[
                    "Empower",
                    500,
                    "Empower Your", //  Continuing previous Text
                    500,
                    "Empower Your Team",
                    500,
                    "Empower Your Team with",
                    500,
                    "Empower Your Team with Comprehensive",
                    500,
                    "Empower Your Team with Comprehensive Training",
                    500,
                  ]}
                  repeat={Infinity}
                />
              </h1>
              <p className="mb-8 leading-relaxed">
                At Trainore, we understand that your organization's success is
                deeply intertwined with the skills and knowledge of your
                employees. That's why we offer comprehensive training solutions
                designed to empower your team at every level.
              </p>
              <div className="flex justify-center items-center gap-x-4">
                <button className="inline-flex text-white bg-colour-main-blue-800 border-0 w-40 h-8 focus:outline-nonetext-sm rounded-sm font-medium cursor-pointer justify-center items-center transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700">
                  Let's start
                </button>
                <button className="inline-flex border border-colour-main-blue-900 w-40 h-8 focus:outline-none text-sm rounded-sm font-medium cursor-pointer justify-center items-center text-colour-main-blue-900 transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-7/12 px-33 overflow-hidden xl:flex hidden">
              <Fade isvisible>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/designer-1.svg"
                  height={600}
                  width={720}
                />
              </Fade>
            </div>
          </div>
        </Fade>
        <div className="bg-brown h-auto pt-36 overflow-hidden w-full">
          <Fade isvisible>
            <h2 className="flex w-full justify-center text-center font-acme text-17xl text-colour-main-blue-800 font-poppins">
              What we provide?
            </h2>
          </Fade>

          <div className="flex flex-col gap-y-44 py-32">
            <Fade bottom isvisible>
              <div
                className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 
          2xl:px-44"
              >
                <div className="w-auto flex justify-center h-auto rounded-xl">
                  <Image
                    className="flex px-6 sm:px-16 md:px-28 lg:px-0 h-[15rem] w-[25rem] sm:h-[20rem] sm:w-[30rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                    src={"/undraw-happy-news-hxmt.svg"}
                    alt="error"
                    height={1024}
                    width={768}
                  ></Image>
                </div>
                <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <h2 className="md:w-[35rem] flex justify-center items-center font-poppins text-colour-main-blue-800 text-10xl">
                    Real-Time Progress Monitoring
                  </h2>

                  <div className="md:w-[35rem] flex flex-col gap-y-6 text-justify text-xl font-bold-26 text-colour-main-blue-700">
                    Real-Time Progress Monitoring is a vital feature of our
                    training platform that allows organizations to keep a close
                    eye on their employees' learning journeys. With this tool,
                    you can instantly gauge how each team member is advancing in
                    their training, ensuring that they are on the right path
                    towards mastery.
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom isvisible>
              <div className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 2xl:px-44">
                <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <h2 className="md:w-[35rem] flex justify-center items-center font-poppins text-colour-main-blue-800 text-10xl">
                    Mobile-Friendly Access
                  </h2>
                  <div className="md:w-[35rem] flex flex-wrap flex-col gap-y-6 text-justify text-xl font-bold-26 text-colour-main-blue-700">
                    Our platform offers Mobile-Friendly Access, ensuring that
                    learning is not bound by location or device. Employees can
                    seamlessly access training materials and resources from
                    their smartphones and tablets, enhancing convenience and
                    flexibility. Whether in the office, on the road, or at home,
                    your team can engage with training content at their
                    convenience.
                  </div>
                </div>

                <div className="w-auto flex justify-center h-auto rounded-xl">
                  <Image
                    className="flex px-6 sm:px-16 md:px-28 lg:px-0 h-[15rem] w-[25rem] sm:h-[20rem] sm:w-[30rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                    src={"/undraw-social-influencer-sgsv.svg"}
                    alt="error"
                    height={1024}
                    width={768}
                  ></Image>
                </div>
              </div>
            </Fade>
            <Fade bottom isvisible>
              <div
                className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 
          2xl:px-44"
              >
                <div className="w-auto flex justify-center h-auto rounded-xl">
                  <Image
                    className="flex px-6 sm:px-16 md:px-28 lg:px-0 h-[15rem] w-[25rem] sm:h-[20rem] sm:w-[30rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                    src={"/undraw-mention-6k5d.svg"}
                    alt="error"
                    height={1024}
                    width={768}
                  ></Image>
                </div>
                <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <h2 className="md:w-[35rem] flex justify-center items-center font-poppins text-colour-main-blue-800 text-10xl">
                    Compliance and Security
                  </h2>

                  <div className="md:w-[35rem] flex flex-col gap-y-6 text-justify text-xl font-bold-26 text-colour-main-blue-700">
                    Compliance and Security are paramount in our training
                    platform. We adhere to the highest industry standards to
                    safeguard your data and ensure regulatory compliance. Your
                    sensitive information is encrypted and protected, and our
                    platform is designed to meet data privacy regulations,
                    giving you peace of mind.
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade bottom isvisible>
          <div className="bg-[url('/rectangle.svg')] container px-5 py-32 mx-auto relative">
            <h1 className="flex justify-center text-center font-acme text-17xl text-colour-main-blue-800 font-poppins">
              Testimonials
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 justify-center items-center w-full py-10 z-20">
              <div className="w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-colour-main-blue-700 font-open-sans text-justify">
                    Since implementing Trainore Training Hub, our team's
                    productivity and skills have seen a remarkable boost. The
                    platform's user-friendly interface and customized training
                    content have made learning engaging and efficient. Real-time
                    progress tracking empowers managers to provide timely
                    support.and the 24/7 customer support has been exceptional.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/106x106"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium font-open-sans text-colour-main-blue-700 ">
                        Holden Caulfield
                      </span>
                      <span className="text-gray-500 text-sm text-colour-main-blue-700 font-open-sans">
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-colour-main-blue-700 font-open-sans text-justify">
                    Trainore Training Hub has transformed our training
                    initiatives. The mobile-friendly access has allowed our
                    employees to learn on the go, and the comprehensive
                    analytics provide insights that were previously
                    inaccessible. The compliance and security features give us
                    confidence in safeguarding sensitive data.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/107x107"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-colour-main-blue-700 font-open-sans">
                        Alper Kamu
                      </span>
                      <span className="text-gray-500 text-sm text-colour-main-blue-700 font-inter">
                        DESIGNER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default home;
