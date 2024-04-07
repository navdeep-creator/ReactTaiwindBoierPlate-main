import React from "react";
import nvdp2 from "../assets/navdeep2.jpg";

export const BigCard = () => {
  return (
    <div
      style={{ margin: "auto" }}
      className="flex flex-col md:flex-row justify-center  w-9/12"
    >
      {/* Image */}
      <div className="w-1/2 lg:me-10">
        <img
          src={nvdp2}
          alt="digital book"
          className="heroimgstyle rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="mt-4 ">
        <span
          style={{ width: "fit-content", padding: "6px" }}
          className="text-green-500 rounded-full border-2 border-green-500 mt-5"
        >
          Engineering
        </span>
        <p className="mt-3 font-bold text-3xl">
          Introducing our Firebase Extension
        </p>
        <p>
          Firebase developers get plug and play in-app purchase infrastructure
        </p>
        <div className="flex items-center mt-12">
          <div className="flex items-center">
            <img
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
            />
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-inherit">
            Francie Fernandes
            <br />
            May 11, 2022
          </p>
        </div>
      </div>
    </div>
  );
};
