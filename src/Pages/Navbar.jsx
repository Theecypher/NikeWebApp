import { SiNike } from "react-icons/si";
import { RxPerson, RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import Sidebar from "../Components/sidebar";
import { useState } from "react";

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false)
  return (
    <div >
      <div className="flex items-center gap-5 justify-between px-5">
        <SiNike className="text-[60px]" />

        <div className="flex gap-[14px]">
          <IoMdSearch className="text-[20px]" />
          <AiOutlineShopping className="text-[20px]" />
          <RxPerson className="text-[20px]" />
          <RxHamburgerMenu className="text-[20px]"
          onClick={() => setOpenSide(true)}
           />
           {openSide && <Sidebar setOpenSide={setOpenSide} openSide={openSide} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
