
import "../Trending/Trending.css";
import { useEffect, useRef, useState } from "react";
import SportData from "./sportData";

const ShopbySport = () => {
  const divRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const active = "bg-black grabbing cursor-grabbing scale";


  const tabsH = divRef.current;

  // const handleMouseMove = (e) => {
  //   setTimeout(() => {}, 100);
  // };

  const handleMouseDown = (e) => {
    setIsDown(true);
    setToggle((prev) => !prev);
    setStartX(e.pageX - tabsH.offsetLeft);
    setScrollLeft(tabsH.scrollLeft);
    // console.log({ startX, scrollLeft });
  };

  const handleMouseLeave = (e) => {
    setIsDown(false);
    setToggle(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsH.offsetLeft;
    const walk = (x - startX) * 3;
    tabsH.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="container ml-3">
      <h3 className="font-bold text-[18px]">Shop by Sport</h3>
      <div className="slider">
        <div
          className={
            toggle
              ? "flex gap-4 w-full overflow-y-hidden webkit pers select-none relative will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
              : "flex gap-4 active w-full overflow-y-hidden webkit pers select-none relati will-change-transform cursor-pointer transition-all duration-[0.2s] scale-100"
          }
        >
          {SportData.map((item, key) => (
            <div className="my-6" key={key}>
              <img className="w-[300px] h-[260px] mb-5" src={item.img} alt="" />
              <h3 className="text-[#b7b6b6] my-1">{item.title}</h3>
              <h4 className="text-base leading-5 w-[220px]">
                {item.description}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ShopbySport;
