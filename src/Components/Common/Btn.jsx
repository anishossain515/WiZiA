import React from "react";
import { BtnArrow } from "../Utilities/Icons";
import { Button } from "@nextui-org/react";

function Btn() {
  return (
    <Button
      className=" bg-Aqua text-dark_teal font-medium rounded-[100px] py-6 px-8 mt-[23px]"
      endContent={<BtnArrow />}
    >
      Sign Up for the Beta
    </Button>
  );
}

export default Btn;
