import { useState } from "react";
import { MightLikeData } from "./MightData";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const MightLike = () => {
  const [buttonState, setButtoneState] = useState({
    activeObject: null,
    objects: [
      { id: 0, img: <RxChevronLeft /> },
      { id: 1, img: <RxChevronRight /> },
    ],
  });

  const toggleActive = (index) => {
    setButtoneState({
      ...buttonState,
      activeObject: buttonState.objects[index],
    });
  };

  const toggleActivveStyles = (index) => {
    if (buttonState.objects[index] === buttonState.activeObject) {
      return "bg-[#ccc] flex items-center justify-center rounded-full p-2 w-10 h-10 border-2 border-blue-700";
    } else {
      return "bg-[#ccc]  flex items-center justify-center rounded-full p-2 w-10 h-10 ";
    }
  };

  return (
    <div className="px-5 py-4">
      <h1 className="font-semibold text-2xl">You Might Also Like</h1>

      <div className="flex gap-2 items-end my-2 justify-end">
        {buttonState.objects.map((item, index) => (
          <div
          onClick={() => {
            toggleActive(index)
          }}
           key={index} className={toggleActivveStyles(index)}>
            {item.img}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
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
  );
};

export default MightLike;
