import React, { useState } from "react";
import { UserData } from "../Utilities/Data";
import UserInfo from "./UserInfo";

function Client() {
  const [currentIndx, setCurrentIndex] = useState(0);

  const preIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? UserData.length - 1 : prevIndex - 1));
  };

  const nextIndex = () => {
    setCurrentIndex((nextIndex) => (nextIndex === UserData.length - 1 ? 0 : nextIndex + 1));
  };

  const { des, name, position } = UserData[currentIndx];

  return (
    <section>
      <div className="py-24 2xl:px-[120px] px-8 flex items-center gap-24">
        <button
          onClick={preIndex}
          className="p-3 bg-[#1e3e43] rounded-[8px] cursor-pointer xl:block hidden"
        >
          <img src="/Vector1.png" alt="Previous" />
        </button>

        <div className="max-w-[950px] mx-auto">
          <UserInfo
            des={des}
            name={name}
            position={position}
            currentIndx={currentIndx}
            setCurrentIndex={setCurrentIndex}
            totalUsers={UserData.length}
          />
        </div>

        <button
          onClick={nextIndex}
          className="p-3 bg-[#1e3e43] rounded-[8px] cursor-pointer  xl:block hidden"
        >
          <img src="/Vector2.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}

export default Client;
