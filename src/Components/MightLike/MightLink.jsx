import {
  FaChevronCircleLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MightLikeData } from "./MightData";

const MightLike = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-2xl">You Might Also Like</h1>

      <div className="flex gap-2 items-end justify-end">
        <FaChevronLeft className="bg-[#ccc] rounded-full p-2 w-8 h-8" />
        <FaChevronRight className="bg-[#ccc] rounded-full p-2 w-8 h-8" />
      </div>
      <div className="flex">
        {MightLikeData.map((item, i) => (
          // <div className="" key={i}>
          <img key={i} src={item.img} alt="" />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default MightLike;
