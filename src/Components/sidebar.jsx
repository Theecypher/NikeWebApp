import { Link } from "react-router-dom";
import NavbarData from "../Data/nike";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { SiJordan } from "react-icons/si";
import { FaStarAndCrescent } from "react-icons/fa";
import Button from "./Button";
import sideBarData from "../Data/sidebarData"

const Sidebar = ({setOpenSide, openSide }) => {
  return (
    <aside className={openSide ?  "fixed z-50 top-0 right-0 ease-in-out duration-500 pt-2 md:hidden bg-gray-200" :
    "absolute top-0 right-[-300px] ease-in duration-500 pt-2 w-[95%] md:hidden bg-gray-200"
  }
   >
      <section className="flex gap-6 flex-col px-5">
        <IoMdClose className="self-end text-xl" onClick={() => setOpenSide(false)} />

        <div className="flex flex-col gap-3 text-black">
          {NavbarData.map((text, index) => (
            <ul key={index}>
              <li className="flex text-xl justify-between">
                <Link>{text}</Link>
                <IoIosArrowForward className="font-light" />
              </li>
            </ul>
          ))}
        </div>

        <div className="flex flex-col gap-3 py-3">
          <h3 className="flex items-center gap-4">
            <SiJordan />
            <p>Jordan</p>
          </h3>

          <h3 className="flex items-center gap-4">
            <FaStarAndCrescent />
            <p>Converse</p>
          </h3>
        </div>

        <div className="py-7">
          <p className="text-[#525050] text-base py-4">
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
          {sideBarData.map((item, index) => (
            <div key={index}>
              {item.icon}
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
