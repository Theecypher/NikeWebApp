import { Link } from "react-router-dom";
import Contet from "./FooterData";
import { AiFillPlusSquare, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Accordion from "./Accordion";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Footer = () => {
  const { Content, Resources } = Contet;
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="container flex flex-col gap-10 px-3 bg-black text-white">
      {Resources.map((item, key) => (
        <div key={key} className="pt-[30px]">
          <h1 className="py-2">{item.name}</h1>
          <div className="">
            {item.links.map((item, index) => (
              <ul key={index} className="py-2">
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col border-t md:flex-row  gap-10">
        {/* {Content.map((item, index) => (
          <div className="" key={index}>
            <div className="border-b-[1px]">
            </div>

              <Accordion item={item} index={index} />
          </div>
        ))} */}

        <Accordion />
      </div>
    </div>
  );
};

export default Footer;
