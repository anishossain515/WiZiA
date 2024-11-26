import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
function NavbarArea() {
  const [isMenuOpen,setIsMenuOpen] = React.useState(false)

  const NavbarItems =['About Us','Pricing','Customers','Solutions']

  return (
    <Navbar isBlurred={true}  className="w-full bg-transparent" maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>


      {/* NavbarLogo */}
      <NavbarBrand justify="start">
        <img src="/Logo.png" alt="logo" />
      </NavbarBrand>

      {/* NavbarList */}
      <NavbarContent className="text-white hidden md:flex">
     
          {NavbarItems.map((item,index)=>(
            <NavbarItem key={index}>{item}</NavbarItem>
          ))}

      </NavbarContent>

      {/* NavbarButton */}
      <NavbarContent justify="end">
         
        {/* Toggle button  */}
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="text-white md:hidden" />
         {/* Toggle button  */}

        <NavbarItem className="md:flex hidden">
          <Button as={Link} className="bg-Aqua text-dark_teal font-medium md:flex hidden rounded-[100px]  shadow-glow" >Book a Demo</Button>
        </NavbarItem>

        <NavbarItem  className="md:flex hidden">
          <Button as={Link} variant="bordered" className="rounded-[100px] shadow-glow text-white font-medium">
            Contact Us
          </Button>
        </NavbarItem>

      </NavbarContent>
     
     {/*MenuBar*/}
      <NavbarMenu>
         {NavbarItems.map((item,index)=>(
          <NavbarMenuItem key={index}>
             {item}
          </NavbarMenuItem>
         ))}
         <NavbarMenuItem className="space-x-4 pt-2">
         <Button as={Link} variant="bordered" className="rounded-[100px] shadow-glow text-white font-medium">Contact Us</Button>
         <Button as={Link} className="bg-Aqua text-dark_teal font-medium rounded-[100px]  shadow-glow" >Book a Demo</Button>
        </NavbarMenuItem>
      </NavbarMenu>

    </Navbar>
  );
}

export default NavbarArea;



