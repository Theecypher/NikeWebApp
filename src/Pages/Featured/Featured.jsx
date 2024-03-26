import Button from "../../Components/Button";
import FeaturedData from "./FeaturedData";

const Featured = () => {
  return (
    <section className="container ">
      <h3 className="font-bold ml-[32px] my-5 text-[18px]">Featured</h3>
      <div className=" flex flex-col gap-2 justify-center items-center">
        {FeaturedData.map((item, index) => (
          <div className="card mx-5 flex flex-col justify-center px-4" key={index}>
            <img className="w-[220px]" src={item.img} alt="" />
            <h4 className="text-white w-[170px] my-6">{item.details}</h4>
            <Button text="shop" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
