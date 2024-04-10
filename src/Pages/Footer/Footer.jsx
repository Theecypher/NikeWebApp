import { Link } from "react-router-dom";
import Contet from "./footereData";
import { AiFillPlusSquare, AiOutlinePlus } from "react-icons/ai";

const Footer = () => {
    const { Content, Resources } = Contet
  return (
    <div className="container flex flex-col gap-10 px-3 bg-black text-white">
      <div className="flex flex-col md:flex-row  gap-10">
        {Content.map((item, index) => (
          <div className="" key={index}>
            <div className="flex items-center justify-between border-b-[1px]">
              <p className="uppercase">{item.name}</p>
              <AiOutlinePlus />
            </div>
            {/* {item.links.map((item, index) => (
              <ul className="hidden md:flex" key={index}>
                <li>
                  <Link>{item.link}</Link>
                </li>
              </ul>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
