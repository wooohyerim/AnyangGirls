import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import Navigator from "./Navigator";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row justify-between items-center min-w-[480px] h-[100px] border border-b-gray mb-4  lg:w-full bg-pink-100 ">
      <h1 className="font-DancingScript text-[48px] font-bold">Anyang Girls</h1>
      <CiMenuBurger
        size={36}
        className="transition cursor-pointer lg:hidden"
        onClick={handleClickNav}
      />
      {isOpen && <Navigator />}
    </header>
  );
};

export default Header;
