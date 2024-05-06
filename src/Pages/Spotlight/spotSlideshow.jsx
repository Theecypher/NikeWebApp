// import "./Trending.css";
import { useEffect, useRef, useState } from "react";
import TrendingData from "../Trending/TrendingData";
import "../Trending/Trending.css";
import spotlightData from "./spotlightData";

const SpotLight = () => {
  const divRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const active = "bg-black grabbing cursor-grabbing scale";

  const tabsH = divRef.current;

  const handleMouseDown = (e) => {
    setIsDown(true);
    setToggle((prev) => !prev);
    setStartX(e.pageX - tabsH.offsetLeft);
    setScrollLeft(tabsH.scrollLeft);
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
      <h3 className="font-bold text-[18px]">Spotlight</h3>
      <div className="slider">
        <div
          className
          ={
          toggle
          ? "flex gap-2 w-full overflow-y-hidden webkit pers select-none relative will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
          : "flex gap-2 active w-full overflow-y-hidden webkit pers select-none relati will-change-transform cursor-pointer transition-all duration-[0.2s] scale-100"
          }
        >
          {spotlightData.map((item, key) => (
            <img key={key} className="w-[350px] h-[300px] mb-5" src={item.img} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotLight;
