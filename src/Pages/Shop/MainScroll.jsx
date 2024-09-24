import "./Scroll.css"

const list = ["sweatpants", "Tshirts", "Jersey", "shorts", "pants", "shoes", "Sport Bras", "Tights & Leggings"];

const MainScroll = () => {
  return (
    <div className="mx-auto flex flex-col justify-center max-w-sm">

      <div>
        <ul className="flex flex-row gap-4 overflow-y-auto font-semibold text-[14px] leading-[1rem] tracking-tight">
            {list.map((item) => (
                // <li className="px-5 py-1 flex items-center bg-gray-800 text-white rounded-full bg">
                <li>
                    {item}
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MainScroll;
