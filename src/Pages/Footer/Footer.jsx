import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import { Content, Resources, Socials } from "./FooterData";

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
          <ul key={i} >
            <li className={social.class}>{social.link}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
