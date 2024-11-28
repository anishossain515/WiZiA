import React from "react";
import { useNavigate } from "react-router-dom";

function UpComing() {
  const Navigate = useNavigate();

  const BackPage = () => {
    Navigate("/");
  };
  return (
    <div className="text-center py-4 text-white flex sm:flex-row flex-col items-center justify-center gap-10">
      <h2 className=" sm:text-5xl text-4xl"> Coming Soon...</h2>
      <button
        onClick={BackPage}
        className="bg-Aqua mt-2 py-3 px-[25px] rounded-lg text-dark_teal "
      >
        Go Back
      </button>
    </div>
  );
}

export default UpComing;
