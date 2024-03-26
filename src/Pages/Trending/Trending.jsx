import { useEffect, useRef } from "react";
import TrendingData from "./TrendingData";

const Trending = () => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   console.log(sectionRef.current.offsetLeftn);
  // }, [])

  return (
    <section className="container ml-[20px]" ref={sectionRef}>
      <h3 className="font-bold text-[18px]">Trending</h3>
      <div className="flex gap-3">
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
