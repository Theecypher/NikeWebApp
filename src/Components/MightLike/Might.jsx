// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import { data } from '../Images/data';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MightLikeData } from "./MightData";

function Scroll() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className="px-5 py-4">
      <div className="flex gap-2 items-end my-2 justify-end">
        <MdChevronLeft
          className="bg-[#ccc] flex items-center justify-center rounded-full p-2 w-10 h-10 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <MdChevronRight
          className="bg-[#ccc] flex items-center justify-center rounded-full p-2 w-10 h-10 opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll flex gap-3 scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {MightLikeData.map((item, i) => (
              <div className="flex-none" key={i}>
              <img
                key={i}
                className="border shadow-md w-[250px] border-red-00"
                src={item.img}
                alt=""
              />
    
              <div className="my-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="opacity-40">{item.description}</p>
                <h5 className="font-semibold my-2 text text-[15px]">{item.price}</h5>
              </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scroll;
