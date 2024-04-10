import { useEffect, useRef, useState } from "react";
import TrendingData from "./TrendingData";
import "./Trending.css"

const Trending = () => {
  const sectionRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const tabsH = sectionRef.current;

  const handleMouseDown = (e) => {
    setIsDown(true);
    setToggle((prev) => !prev);
    setStartX(e.pageX - sectionRef.current.offsetLeft);
    setScrollLeft(sectionRef.current.scrollLeft);
    console.log({ startX, scrollLeft });
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setToggle(false);
  };

  const handleMouseMove = (e) => {
    if (isDown) return;
    e.preventDefault();
    const x = e.pageX - sectionRef.current.offsetLeft
    const walk = (x - startX) * 2;
    sectionRef.current = scrollLeft - walk;
  };


  return (
    <section className="container ml-[20px]">
      <h3 className="font-bold text-[18px]">Trending</h3>
      <div
        // className="flex gap-3 white-nowrap overflow-x-scroll pers w-full select-none relative"
        className
        ={
          toggle
            ? "flex gap-3 border-white webkit pers select-none will-change-transform cursor-pointer transition-all duration-[0.2s]"
            : "flex gap-3 active border-white webkit pers select-none relative will-change-transform cursor-pointer transition-all duration-[0.2s]"
        }
        ref={sectionRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
    </section>
  );
};

export default Trending;
