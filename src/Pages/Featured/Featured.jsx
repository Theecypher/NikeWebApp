import Button from "../../Components/Button";
import FeaturedData from "./FeaturedData";
import "./featured.css"

const Featured = () => {
  return (
    <section className="">
      <h3 className="font-bold m-5 text-[18px]">Featured</h3>
      <div className="flex flex-col center justify-center">
        {FeaturedData.map((item, index) => (
          <div className="card py-[150px] w-full flex flex-col justify-center px-4" key={index}>
            {/* <img className="w-[150px]" src={item.img} alt="" /> */}
            <h4 className="text-white my-6">{item.details}</h4>
            <Button text="shop" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
