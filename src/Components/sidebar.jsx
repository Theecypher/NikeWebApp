import { Link } from "react-router-dom";
import NavbarData from "../Data/nike";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { SiJordan } from "react-icons/si";
import { FaStarAndCrescent } from "react-icons/fa";
import Button from "./Button";
import { Socials } from "../Pages/Footer/FooterData";
import { SidebarIcons } from "../Data/sidebarData";
// import sideBarData from "../Data/sidebarData"

const Sidebar = ({setOpenSide, openSide }) => {
  return (
    <aside className={openSide ?  "absolute w-[90%] z-50 top-0 right-0 duration-300 pt-2 md:hidden bg-gray-200" :
    "absolute top-0 right-[-300px] ease-in duration-700 pt-2 w-[95%] md:hidden bg-gray-200"
  }
   >
      <section className="flex gap-6 flex-col px-8">
        <IoMdClose className="self-end text-xl" onClick={() => setOpenSide(false)} />

        <div className="flex border border-emerald-500 flex-col gap-3 text-black">
          {NavbarData.map((text, index) => (
            <ul key={index}>
              <li className="flex text-xl justify-between">
                <Link className="font-[600]">{text}</Link>
                <IoIosArrowForward className="font-light" />
              </li>
            </ul>
          ))}
        </div>

        <div className="flex flex-col gap-3 py-3">
          <h3 className="flex items-center gap-4">
            <SiJordan className="font-[600]"/>
            <p className="font-[600]" >Jordan</p>
          </h3>

          <h3 className="flex items-center gap-4">
            <FaStarAndCrescent className="font-[600]"/>
            <p className="font-[600]" >Converse</p>
          </h3>
        </div>

        <div className="py-7">
          <p className="text-[#7b7777] font-[600] text-[16px] py-4 w-[85%]">
            Become a Nike Member for the best products, inspiration and stories
            in sport
            <Link className="text-black"> Learn more</Link>
          </p>

          <div className="flex items-center gap-4">
            <Button text="Join us" blackButton="true" />
            <Button text="Sign in" />
          </div>
        </div>

        <div className="mb-14">
          {SidebarIcons.map((item, index) => (
            <div key={index} className="flex py-2 items-center gap-5">
              <p>{item.icon}</p>
              <h3 className="font-[600]">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
