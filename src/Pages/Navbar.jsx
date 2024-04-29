import { SiNike } from "react-icons/si";
import { RxPerson, RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import Sidebar from "../Components/sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carts from "../Components/Carts/Carts";

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false);
  const [show, showButton] = useState(true);

  return (
    <div>
      <div className="flex items-center gap-5 justify-between px-5">
        <SiNike className="text-[60px]" />

        <div className="flex gap-[14px]">
          {show && (
            <Link to="/search">
              <IoMdSearch className="text-[22px]" />
            </Link>
          )}
          <Link to="/carts">
            <AiOutlineShopping className="text-[22px]" />
          </Link>
          <Link to="/signup">
            <RxPerson className="text-[22px]" />
          </Link>
          <RxHamburgerMenu
            className="text-[22px]"
            onClick={() => setOpenSide(true)}
          />
          {openSide && (
            <Sidebar setOpenSide={setOpenSide} openSide={openSide} />
          )}
        </div>

        {!show && <Carts />}
      </div>
    </div>
  );
};

export default Navbar;
