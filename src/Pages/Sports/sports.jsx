import SportData from "./sportData";

const Sports = () => {
  return (
    <div className="container flex flex-col gap-4 justify-center ml-[20px]">
      <h1 className="text-black font-medium text-[20px]">Shop by sport</h1>
      <div className="flex">
        <div className="flex gap-4"> 
          {SportData.map((item, key) => (
            <div className="flex-none" key={key}>
              <img
                src={item.img}
                className="w-[300px] border border-red-500 h-[260px]"
                alt=""
              />
              <h3 className="text-[#b7b6b6] my-1">{item.title}</h3>
              <p className="">{item.description}</p>
            </div >
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
