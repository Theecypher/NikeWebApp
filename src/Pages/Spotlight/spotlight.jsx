import { useEffect, useRef, useState } from "react";
import spotlightData from "./spotlightData";
import img1 from "./assets/nike-blazer.jpg";
import img2 from "./assets/nike-dunk.jpg";
import img3 from "./assets/nike-jordan.jpg";
import img4 from "./assets/nike1.jpg";
import img5 from "./assets/nike2.jpg";

const Spotlight = () => {
  const spotRef = useRef(null);
  const imagesRef = useRef(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(false);
  
  return (
    <section className="container flex flex-col gap-4 justify-center ml-[20px]" ref={spotRef}>
      <h3 className="font-medium text-[20px]">Classics Spotlight</h3>
      <div className="flex gap-4 ref={imagesRef}">
        {spotlightData.map((item, key) => (
          <img
            key={key}
            src={item.img}
            className="w-[300px] h-[300px] object-contain"
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
