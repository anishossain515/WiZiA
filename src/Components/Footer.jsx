import React from "react";

function Footer() {
  return (
    <footer className="bg-[#07292F]">
      <div className="pt-10 pb-6 md:px-[120px] sm:px-20 px-10 flex sm:flex-row flex-col gap-6 justify-between items-center">
        <img src="/footerLogo.png" alt="footerLogo" />
        <p className="text-[#96ACAF] sm:text-base text-sm font-light">
          Copyright © 2023 Wizia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
