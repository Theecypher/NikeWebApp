
import { MightLikeData } from "./MightData";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const MightLike = () => {
  return (
    <div className="px-5 py-4">
      <h1 className="font-semibold text-2xl">You Might Also Like</h1>

      <div className="flex gap-2 items-end my-2 justify-end">
        <RxChevronLeft className="bg-[#ccc] rounded-full p-2 w-10 h-10" />
        <RxChevronRight className="bg-[#ccc] rounded-full p-2 w-10 h-10" />
        {/* <RxChevronLeft /> */}
      </div>

      <div className="flex border gap-3">
        {MightLikeData.map((item, i) => (
          // <div className="" key={i}>
          <img key={i} className="border shadow-xl w-[200px] border-red-00" src={item.img} alt="" />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default MightLike;
