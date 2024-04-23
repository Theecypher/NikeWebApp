import "./Trending.css";
import { useEffect, useRef, useState } from "react";
import TrendingData from "./TrendingData";

const Trending = () => {
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
      <h3 className="font-bold text-[18px]">Trending</h3>
      <div className="slider">
        <div
          className={
            toggle
              ? "flex gap-2 w-full overflow-y-hidden webkit pers select-none relative will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
              : "flex gap-2 active w-full overflow-y-hidden webkit pers select-none relati will-change-transform cursor-pointer transition-all duration-[0.2s] scale-100"
          }
        >
          {TrendingData.map((item, key) => (
            <div className="my-6" key={key}>
              <img className="w-[280px] mb-5" src={item.img} alt="" />
              <p className="text-[#b1b0b0]">{item.title}</p>
              <h4 className="font-[600] text-base leading-5 w-[220px]">
                {item.desc}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trending;
