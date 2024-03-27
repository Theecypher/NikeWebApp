import { useRef, useState } from "react";
import spotlightData from "./spotlightData";

const Spotlight = () => {
    const spotRef = useRef(null);
    const imageRef = useRef(null);
    const [toggle, setToggle] = useState(false)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(null)
    const [scrollLeft, setScrollLeft] = useState(0)

    const tabsH = spotRef.current;
    
    const handleMouseDown = (e) => {
      setIsDown(true)
      setToggle((prev) => !prev)
      setStartX(e.pageX - tabsH.offsetLeft)
      setScrollLeft(tabsH.scrollLeft)
    }

    const handleMouseLeave = (e) => {
      setIsDown(false)
      setToggle(false)
      console.count(true);
    }

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault()
      const x = e.pageX - tabsH.offsetLeft
      const walk = (x - startX) * 3
      tabsH.scrollLeft = scrollLeft - walk
    }

  return (
    <section className="container ml-[20px]" ref={spotRef}>
    <h3 className="font-bold text-[18px]">Classics Spotlight</h3>
    <div
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    onMouseDown={handleMouseDown}
     className="flex gap-4">
      {spotlightData.map((item, key) => (
        <img key={key} ref={imageRef} src={item.img} className="w-[300px] h-[300px] object-contain" alt="" />
      ))}
    </div>
  </section>
  );
};

export default Spotlight;
