import spotlightData from "./spotlightData";

const Spotlight = () => {
  return (
    <section className="container ml-[20px]">
    <h3 className="font-bold text-[18px]">Classics Spotlight</h3>
    <div className="flex gap-4">
      {spotlightData.map((item, key) => (
        <img src={item.img} className="w-[300px] h-[300px] object-contain" alt="" />
      ))}
    </div>
  </section>
  );
};

export default Spotlight;
