import React from "react";
import bgimg from "../assets/navdeep3.jpeg";

export const SubscribeUs = () => {
  return (
    <div
      className="px-3 py-8 bg-gray w-9/12"
      style={{ backgroundImage: `url(${bgimg})`,margin:'50px auto'}}
    >
      <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
        <div className="sm:w-7/12">
          <div className="text-3xl font-bold">
            Subscribe to our monthly newsletter
          </div>
        </div>
        <div className="w-full sm:w-5/12">
          <form className="flex rounded-full  px-4 py-2 ring-2 ring-cyan-600">
            <input
              className="w-full appearance-none  focus:outline-none"
              placeholder="Your email address..."
            />
            <button
              className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
