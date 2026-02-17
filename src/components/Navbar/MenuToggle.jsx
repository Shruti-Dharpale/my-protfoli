import React from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const MenuToggle = ({ menu, showMenu, openMenu, setShowmenu }) => {
  return showMenu ? (
    <RiMenu2Line
      size={30}
      className="md:hidden absolute right-10 top-6 transition-all duration-300"
      onClick={() => {
        openMenu(!menu);
        setShowmenu(!showMenu);
      }}
    />
  ) : (
    <RiCloseLine
      size={30}
      className="md:hidden absolute right-10 top-6 transition-all duration-300"
    />
  );
};

export default MenuToggle;
