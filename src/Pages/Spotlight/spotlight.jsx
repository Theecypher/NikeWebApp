import { useEffect, useRef, useState } from "react";
import spotlightData from "./spotlightData";
import img1 from "./assets/nike-blazer.jpg"
import img2 from "./assets/nike-dunk.jpg"
import img3 from "./assets/nike-jordan.jpg"
import img4 from "./assets/nike1.jpg"
import img5 from "./assets/nike2.jpg"

const Spotlight = () => {
    const spotRef = useRef(null);
    const imagesRef = useRef(null);
    const [maxScrollLeft, setMaxScrollLeft] = useState(false)

    useEffect(() => {
      const imageList = imagesRef.current;

      // if (!imageList) return;

      console.log(imageList);
    }, [])
  

  return (
    <section className="container ml-[20px]" ref={spotRef}>
    <h3 className="font-bold text-[18px]">Classics Spotlight</h3>
    <div className="flex gap-4 ref={imagesRef}">
      {/* {spotlightData.map((item, key) => (
        <img key={key} src={item.img} className="w-[300px] h-[300px] object-contain" alt="" />
      ))} */}
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      <img src={img5} />
    </div>
  </section>
  );
};

export default Spotlight;
