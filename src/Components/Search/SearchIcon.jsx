import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./search.css";
import { ShopData } from "../../Pages/Shop/ShopData";
// import motion/

const SearchIcon = () => {
  const searchBox = useRef(null);
  const searchIcon = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [Error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(ShopData);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  setTimeout(() => {
    setIsActive(true);
  });

  const Search = (e) => {
    // setQ(e.target.value);
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <div
      className={
        isActive
          ? "search-box relative h-[40px] w-[80%] rounded-[50%] active"
          : "search-box relative h-[40px] w-[60px] rounded-[50%]"
      }
    >
      <input
        name="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className={
          isActive
            ? "w-full h-full rounded-[50px] bg-[#eeebeb] outline-none pl-[50px] py-0 pr-[20px] text-xl opacity-0 input active"
            : "w-full h-full border-none rounded-[50px] bg-[#fff] outline-none pl-[50px] py-0 pr-[20px] text-xl opacity-0 input"
        }
        type="text"
        placeholder="Search"
      />

      {/* <div className={isActive ? "search-icon absolute left-[20px] top-1/2 h-[60px] w-[60px] bg-[#fff] rounded-[50%] text-center leading-[60px] text-xl text-[#664aff] cursor-pointer z-10 active" : "search-icon absolute left-0 top-1/2 h-[60px] w-[60px] bg-[#fff] rounded-[50%] text-center leading-[60px] text-xl text-[#664aff] cursor-pointer z-10"}> */}
      <div className="absolute bg-[#ccc] h-9 w-10 rounded-full flex items-center justify-center left-[3px] top-[2px] z-10">
        {/* <BsSearch ref={searchIcon} /> */}
        <BsSearch className="font-bold" />
      </div>

      {/* <ul className="relative  bottom-0">
        <div>
          {Search(ShopData).map((item, index) => (
            <div className="">
              <img src={item.img} className="w-[200px] h-[200px]" alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </ul> */}
    </div>
  );
};

export default SearchIcon;
