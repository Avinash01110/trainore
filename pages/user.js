import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Head from "next/head";

const user = () => {
  const router = useRouter();

  const [addForm, setaddForm] = useState("hidden");

  const [updateForm, setupdateForm] = useState("hidden");

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [startingDate, setstartingDate] = useState();
  const [endingDate, setendingDate] = useState();

  const [newName, setnewName] = useState();
  const [newPhone, setnewPhone] = useState();
  const [newAddress, setnewAddress] = useState();
  const [newStartingDate, setnewStartingDate] = useState();
  const [newEndingDate, setnewEndingDate] = useState();

  const [data, setdata] = useState({});

  const [_id, setid] = useState();

  const fetchData = async () => {
    const data = {
      token: localStorage.getItem("token"),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/getemployee`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    let result = await response.json();
    setdata(result.employees);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "startingDate") {
      setstartingDate(e.target.value);
    } else if (e.target.name == "endingDate") {
      setendingDate(e.target.value);
    }
  };

  const handleOnNewChange = async (e) => {
    setTimeout(() => {
      
      if (e.target.name == "newName") {
        setnewName(e.target.value);
    } else if (e.target.name == "newPhone") {
      setnewPhone(e.target.value);
    } else if (e.target.name == "newAddress") {
      setnewAddress(e.target.value);
    } else if (e.target.name == "newStartingDate") {
      setnewStartingDate(e.target.value);
    } else if (e.target.name == "newEndingDate") {
      setnewEndingDate(e.target.value);
    }
  }, 500);
  };

  const handleUserSubmit = async () => {
    const data = {
      token: localStorage.getItem("token"),
      name,
      phone,
      address,
      startingDate,
      endingDate,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/addemployee`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    let result = await response.json();
    if (result.success) {
      toast.success("Data Added Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.location.reload();
    } else {
      toast.error(result.error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const updateData = async () => {
    const data = {
      _id,
      token: localStorage.getItem("token"),
      newName,
      newPhone,
      newAddress,
      newStartingDate,
      newEndingDate
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/updateemployee`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let result = await response.json();
    if (result.success) {
      toast.success("Details are successfully updated", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.location.reload();
    } else {
      toast.error(result.error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const deleteData = async (_id) => {
    const data = {
      _id,
      token: localStorage.getItem("token")
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/deleteemployee`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let result = await response.json();
    if (result.success) {
      toast.success("Deleted Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.location.reload();
    } else {
      toast.error(result.error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const toggle_addForm = () => {
    if (addForm == "hidden") {
      setaddForm("");
    } else {
      setaddForm("hidden");
    }
  };

  const toggle_updateForm = (value) => {
    setid(value);
    if (updateForm == "hidden") {
      setupdateForm("");
    } else {
      setupdateForm("hidden");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);

  return (
    <>
    <div>
        <Head>
          <title>Trainore(User) - Make Yourself Channelize</title>
          <meta name="description" content="Trainore(User) - Make Yourself Channelize" />
          <meta rel="icon" href="favicon.ico" />
        </Head>
      </div>
      <div className="px-6 sm:px-10 lg:px-24 xl:px-28 py-24 bg-white min-h-screen">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-bold-26 text-colour-main-blue-700 font-semibold">
              Employee Details
            </h1>
            <h3 className="font-sans text-base font-medium text-colour-main-blue-500">
              Check the status of employees, manage training, and discover their
              progress.
            </h3>
            <button
              onClick={toggle_addForm}
              className="flex justify-center items-center font-bold text-sm w-40 bg-colour-main-blue-800 text-white px-4 py-1 rounded-sm cursor-pointer transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700"
            >
              Add an Employee
            </button>
          </div>

          {data && Object.keys(data).map((k) => {
            let startDate = new Date(data[k].startingDate);
            let endDate = new Date(data[k].endingDate);
            var differenceInTime = endDate.getTime() - startDate.getTime();
            var totalDays = differenceInTime / (1000 * 3600 * 24);
            let currentDate = new Date();
            let timeDifference = endDate.getTime() - currentDate.getTime();
            let daysLeft = timeDifference / (1000 * 3600 * 24);
            let trainingCompleted =
              parseInt(100 - parseFloat(daysLeft / totalDays).toFixed(2) * 100);
            let options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            return (
              <div
                key={data[k]._id}
                className="bg-blue-100 px-6 py-4 h-auto w-auto rounded-xl space-y-4 shadow-colour-main-blue-700 shadow-lg border-2 border-colour-main-blue-700"
              >
                <div className="flex flex-row items-center gap-x-16 gap-y-6 flex-wrap">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                      Name
                    </span>
                    <span className="font-poppins text-base font-medium opacity-50 text-colour-main-blue-700">
                      {data[k].name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                      Starting Date
                    </span>
                    <script></script>
                    <span className="font-poppins text-base font-medium opacity-50 text-colour-main-blue-700">
                      {startDate.toLocaleDateString("en-IN", options)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                      End Date
                    </span>
                    <span className="font-poppins text-base font-medium opacity-50 text-colour-main-blue-700">
                      {endDate.toLocaleDateString("en-IN", options)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                      Period of Training
                    </span>
                    <span className="font-poppins text-base font-medium opacity-50 text-colour-main-blue-700">
                      {totalDays}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                      Phone no.
                    </span>
                    <span className="font-poppins text-base font-medium opacity-50 text-colour-main-blue-700">
                      {data[k].phone}
                    </span>
                  </div>
                </div>
                <hr className="bg-colour-main-blue-800 h-1" />

                <div className="flex flex-col w-auto h-auto gap-y-2">
                  <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                    Status
                  </span>
                  <div className="h-1 w-full rounded-full">
                    <ProgressBar
                      className="h-1 w-full rounded-full"
                      bgColor="#111b47"
                      completed={trainingCompleted}
                      maxCompleted={100}
                      labelColor="#FFEFAE"
                      labelAlignment="center"
                      transitionTimingFunction="ease-in-out"
                      transitionDuration="2s"
                      animateOnRender={true}
                    />
                    
                  </div>
                </div>

                
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-row gap-x-6 w-full">
                    <div className="flex flex-row justify-between w-full gap-x-60">
                      <span className="text-base text-justify font-poppins font-medium text-colour-main-blue-700">
                      </span>
                      <span className="text-base font-sans font-semibold">
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end flex-wrap gap-y-8 gap-x-8">
                    <button
                      onClick={() => {
                        toggle_updateForm(data[k]._id);
                      }}
                      className="flex justify-center items-center font-bold text-sm bg-colour-main-blue-800 text-white px-4 py-1 rounded-sm cursor-pointer transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700"
                    >
                      Update Details
                    </button>
                    <button onClick={() => {
                        deleteData(data[k]._id);
                      }} className="flex justify-center items-center font-bold text-sm bg-colour-main-blue-800 text-white px-4 py-1 rounded-sm cursor-pointer transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={`${addForm} bg-blue-100 px-6 py-4 h-auto w-auto rounded-xl space-y-4 shadow-colour-main-blue-700 shadow-lg border-2 border-colour-main-blue-700`}
          >
            <div className="flex flex-row gap-x-16 flex-wrap">
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Name
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnChange}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Starting Date
                </span>
                <script></script>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnChange}
                    id="starting_date"
                    name="startingDate"
                    type="date"
                    autoComplete="startingDate"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  End Date
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnChange}
                    id="ending_date"
                    name="endingDate"
                    type="date"
                    autoComplete="endingDate"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Phone no.
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnChange}
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  address
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnChange}
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
            </div>
            <hr className="bg-colour-main-blue-800 h-1" />

          
            <div
              className="flex flex-col gap-y-6"
            >
              <div className="flex flex-row gap-x-6 w-full">
                <div className="flex flex-row justify-between w-full gap-x-60">
                  <span className="text-base text-justify font-poppins font-medium text-colour-main-blue-700">
                  </span>
                  <span className="text-base font-sans font-semibold">
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-x-8">
                <button
                  onClick={handleUserSubmit}
                  className="flex justify-center items-center font-bold text-sm bg-colour-main-blue-800 text-white px-4 py-1 rounded-sm cursor-pointer transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700"
                >
                  Add Details
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${updateForm} bg-blue-100 px-6 py-4 h-auto w-auto rounded-xl space-y-4 shadow-colour-main-blue-700 shadow-lg border-2 border-colour-main-blue-700`}
          >
            <div className="flex flex-row gap-x-16 flex-wrap">
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Name
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnNewChange}
                    id="newName"
                    name="newName"
                    type="text"
                    autoComplete="newName"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Starting Date
                </span>
                <script></script>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnNewChange}
                    id="newStarting_date"
                    name="newStartingDate"
                    type="date"
                    autoComplete="newStartingDate"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  End Date
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnNewChange}
                    id="newEnding_date"
                    name="newEndingDate"
                    type="date"
                    autoComplete="newEndingDate"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  Phone no.
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnNewChange}
                    id="newPhone"
                    name="newPhone"
                    type="text"
                    autoComplete="newPhone"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-poppins font-medium text-colour-main-blue-700">
                  address
                </span>
                <span className="font-poppins text-base font-medium text-colour-main-blue-700">
                  <input
                    onChange={handleOnNewChange}
                    id="newAddress"
                    name="newAddress"
                    type="text"
                    autoComplete="newAddress"
                    required
                    className="pl-2 block w-32 h-4 rounded-sm border-solid border border-colour-main-blue-700 py-1.5 text-colour-main-blue-700 shadow-sm ring-1 ring-inset ring-colour-main-blue-700 placeholder:text-colour-main-blue-700 font-poppins font-medium focus:ring-2 focus:ring-inset focus:ring-colour-main-blue-700 sm:text-sm sm:leading-6"
                  />
                </span>
              </div>
            </div>
            <hr className="bg-colour-main-blue-800 h-1" />

            {/* {Object.keys(orders[k].products).map((items)=>{return <div key={orders[k]._id+1}>{(orders[k].products)[items].name}</div>})} */}

            {/* {Object.keys(orders[k].products).map((items, number) => {
                  return ( */}
            <div
              // key={orders[k]._id + number}
              className="flex flex-col gap-y-6"
            >
              <div className="flex flex-row gap-x-6 w-full">
                <div className="flex flex-row justify-between w-full gap-x-60">
                  <span className="text-base text-justify font-poppins font-medium text-colour-main-blue-700">
                    {/* {number + 1}. {orders[k].products[items].name} */}
                  </span>
                  <span className="text-base font-sans font-semibold">
                    {/* ₹{orders[k].products[items].price} */}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-x-8">
                <button
                  onClick={updateData}
                  className="flex justify-center items-center font-bold text-sm bg-colour-main-blue-800 text-white px-4 py-1 rounded-sm cursor-pointer transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700"
                >
                  Save Details
                </button>
              </div>
            </div>
            {/* ); */}
            {/* })} */}
          </div>

        </div>
      </div>
    </>
  );
};

export default user;
