import { BsQuestionCircle } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";
import { PiBagSimpleLight } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";

export const SidebarIcons = [
  {
    icon: <PiBagSimpleLight className="font-bold" />,
    name: "Bag",
  },
  {
    icon: <RiShoppingCartLine className="font-bold" />,
    name: "Orders",
  },
  {
    icon: <FaStore className="font-bold" />,
    name: "Find a Store",
  },
  {
    icon: <BsQuestionCircle className="font-[900] text-[15px]" />,
    name: "Help",
  },
];

// export default { Content, Resources };
