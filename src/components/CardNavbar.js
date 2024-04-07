
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CardNavbar = () => {
  return (
    <div className="flex justify-between w-9/12 mx-auto mt-12">
      {/* Left section */}
      <div className="flex flex-col">
        <div className="flex justify-between">
            <p className="flex flex-col m-2 bg-yellow-300 p-2 rounded-full">All article</p>
            <p className="flex flex-col m-2 hover:bg-yellow-300 p-2 rounded-full">Company</p>
            <p className="flex flex-col m-2 hover:bg-yellow-300 p-2 rounded-full">Engineering</p>
            <p className="flex flex-col m-2 hover:bg-yellow-300 p-2 rounded-full">Growth</p>
        </div>
      </div>
      
      {/* Right section */}
      <div className="flex items-center">
        <p className="mr-2">Follow for updates</p>
        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
        <FontAwesomeIcon icon={faWifi} />
      </div>
    </div>
  );
};
