import { ShopData } from "./ShopData";

const ShopContent = () => {
  return (
    <div>
      <div  className="grid gap-3 grid-cols-2 my-2">
        {ShopData.map((item, key) => (
          <div key={key}>
            <div>
              <img className="w-[200px] shadow-sm h-[200px] object-fill" src={item.img} alt="" />
              <div className="text-[13px]">
                <h2 className="text-orange-500 text-[14px] font-semibold">{item.name}</h2>
                <h3 className="font-[400]">{item.category}</h3>
                <h4 className="opacity-70">{item.description}</h4>
                <h6 className="opacity-70">{item.nColor}</h6>
                <h5 className="font-semibold">{item.Price}</h5>
                <h5 className="text-green-500 font-bold">{item.ifNoPrice}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
