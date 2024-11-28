import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarItems = [
    { name: "About Us", path: "/UpComing" },
    { name: "Pricing", path: "/UpComing" },
    { name: "Customers", path: "/UpComing" },
    { name: "Solutions", path: "/UpComing" },
  ];

  return (
    <Navbar
      isBlurred={true}
      className="w-full bg-transparent"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* NavbarLogo */}
      <NavbarBrand justify="start">
        <img src="/Logo.png" alt="logo" />
      </NavbarBrand>

      {/* NavbarList */}
      <NavbarContent className="text-white hidden md:flex cursor-pointer">
        {NavbarItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link to={item.path} className="text-white">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
      </NavbarContent>

      {/* NavbarButton */}
      <NavbarContent justify="end">
        {/* Toggle button  */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white md:hidden"
        />
        {/* Toggle button  */}

        <NavbarItem className="md:flex hidden">
          <Button
            className="bg-Aqua text-dark_teal font-medium md:flex hidden rounded-[100px]  shadow-glow"
          >
            Book a Demo
          </Button>
        </NavbarItem>

        <NavbarItem className="md:flex hidden">
          <Button
        
            variant="bordered"
            className="rounded-[100px] shadow-glow text-white font-medium"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/*MenuBar*/}
      <NavbarMenu className='bg-[#063740]'>
        {NavbarItems.map((item, index) => (
          <NavbarMenuItem key={index} className="text-white">{item}</NavbarMenuItem>
        ))}
        <NavbarMenuItem className="space-x-4 pt-2">
          <Button
            variant="bordered"
            className="rounded-[100px] shadow-glow font-medium text-white"
          >
            Contact Us
          </Button>
          <Button
            className="bg-Aqua text-dark_teal font-medium rounded-[100px]  shadow-glow"
          >
            Book a Demo
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarArea;
