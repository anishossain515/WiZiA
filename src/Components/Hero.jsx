import { Button } from "@nextui-org/react";
import React from "react";
import { BtnArrow } from "./Utilities/Icons";

function Hero() {
  return (
    <section className="bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat">
      <div className="md:py-[110px] sm:py-20 py-12 md:pl-[120px] sm:px-20 px-5">

        <div className="sm:space-y-2 space-y-3 text-center md:text-start px-6 md:px-0">
          <h5 className="font-Montserrat text-base sm:text-xl md:text-2xl text-Aqua tracking-wide">
            AI SDRs (aiDRs)
          </h5>

          <h1 className="max-w-[600px] md:max-w-[400px] mx-auto md:mx-0 text-white font-bold text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[78.02px] font-Montserrat ">
            More leads, less people.
          </h1>

          <p className="font-light text-sm sm:text-base md:text-lg md:max-w-[300px] max-w-[500px] text-white pt-2 md:pt-0">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>

          <Button
            className=" bg-Aqua text-dark_teal font-medium rounded-[100px] py-6 px-8"
            endContent={<BtnArrow />}
          >
            Sign Up for the Beta
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
