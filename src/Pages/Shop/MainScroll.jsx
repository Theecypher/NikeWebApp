import "./Scroll.css"

const list = ["sweatpants", "t-shirts", "Jersey", "shorts", "pants", "shoes", "Sport Bras", "Tights & Leggings"];

const MainScroll = () => {
  return (
    <div className="mx-auto flex flex-col justify-center max-w-sm">

      <div>
        <ul className="flex flex-row gap-4 scroll overflow-y-auto font-semibold text-[12px] leadind-[1rem]">
            {list.map((item) => (
                // <li className="px-5 py-1 bg-gray-800 text-white rounded-full bg">
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
