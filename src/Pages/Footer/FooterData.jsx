import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaSquareYoutube, FaYoutube } from "react-icons/fa6";

export const Resources = [
  {
    name: "RESOURCES"
  },
  {
    name: "GIFT CARDS",
  },
  {
    name: "FIND A STORE",
   
  },
  {
    name: "BECOME A MEMBER",
   
  },
  {
    name: "NIKE X NBA",

  },
  {
    name: "Nike JOURNAL Racer",
  },
  {
    name: "Site Feedback",
  },
];

export const Content = [
  {
    name: "Help",
    id: 0,
    links: [
      { name: "Get Help", link: "/" },
      { name: "Order  Status", link: "/" },
      { name: "Shipping and Delivery", link: "/" },
      { name: "Returns", link: "/" },
      { name: "Order Cancellation", link: "/" },
      { name: "Payment Options", link: "/" },
      { name: "Gift Card Balanace", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },

  {
    name: "COMPANY",
    id: 1,
    links: [
      { name: "About Nike", link: "" },
      { name: "News", link: "" },
      { name: "Careers", link: "" },
      { name: "Investors", link: "" },
      { name: "Purpose", link: "" },
      { name: "Sustainability", link: "" },
    ],
  },
  {
    name: "PROMOTIONS AND DISCOUNTS",
    id: 2,
    links: [
      { name: "Student", link: "" },
      { name: "Military", link: "" },
      { name: "Teacher", link: "" },
      { name: "First Responders & Medical", link: "" },
      { name: "Professionals", link: "" },
      { name: "Birthday", link: "" },
    ],
  },
  // {
  //   name: "PROMOTIONS AND DISCOUNTS",
  //   links: [
  //     "<AiFillFacebook />",
  //     ""<AiFillInstagram />"
  //     "<AiFillYoutube />"
  //   ],
  // },
];

export const Socials = [
  {link: <FaInstagramSquare className="w-9 text-[#6f6e6e] rounded-full h-9" />},
  {link: <FaSquareYoutube className="rounded-full h-9 w-9 text-[#6f6e6e]" />},
  {link: <AiFillTwitterCircle className="w-9 text-[#6f6e6e] rounded-full h-9" />},
  {link: <FaFacebook className="w-9 text-[#6f6e6e] rounded-full h-9" />}
]

// export default { Content, Resources };
