import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import { Content, Resources, Socials, footerBottom } from "./FooterData";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";
import { MdCopyright, MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black py-8 px-3 text-white">
      <div className="border-b-[0.2px]">
        {Resources.map((element, index) => (
          <ul key={index} className="pb-5 ">
            <li className="py-[5px]">
              <Link>{element.name}</Link>
            </li>
          </ul>
        ))}
      </div>
      <Accordion />

      <div className="flex gap-5 my-4">
        {Socials.map((social, i) => (
          <ul key={i}>
            <li className={social.class}>{social.link}</li>
          </ul>
        ))}
      </div>

      <div className="my-8">
        <div className="flex pr-4 gap-2 my-2 items-center font-[600]">
          <FaLocationDot />
          <p>United States</p>
        </div>
        <div className="flex mt-2 mb-9 items-center font-[600]">
          <MdOutlineCopyright className="text-[#747373]" />
          <p className="text-[#747373] text-sm">
            2024 Nike, Inc. All Rights Reserved
          </p>
        </div>

          {footerBottom.map((item, index) => (
            <ul key={index}>
              <li className="py-5 text-[#acabab]">{item.name}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Footer;
