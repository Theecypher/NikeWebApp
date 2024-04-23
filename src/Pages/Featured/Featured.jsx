import Button from "../../Components/Button";
import FeaturedData from "./FeaturedData";

const Featured = () => {
  return (
    <section className="">
      <h3 className="font-bold m-5 text-[18px]">Featured</h3>
      <div className="flex flex-col px-5 center gap-2 justify-center">
        {FeaturedData.map((item, index) => (
          <div className="card border w-full border-orange-500 flex flex-col justify-center px-4" key={index}>
            <img className="w-[150px]" src={item.img} alt="" />
            <h4 className="text-white my-6">{item.details}</h4>
            <Button text="shop" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
