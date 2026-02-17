import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuToggle from "./menutoggle";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-black bg-opacity-70 z-50">
      <Logo />
      <NavLinks menu={menu} />
      <MenuToggle
        menu={menu}
        showMenu={showMenu}
        openMenu={openMenu}
        setShowmenu={setShowmenu}
      />
    </nav>
  );
};

export default Navbar;
