import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./search.css"


const SearchIcon = () => {
  const searchBox =  useRef(null);
  const searchIcon =  useRef(null);
  const [isActive, setIsActive] = useState(false);


    setTimeout(() => {
      setIsActive(true)
    })



  return (
    // <div ref={searchBox} className="flex searchBox border border-red-500 py-[5px] justify-center items-center gap-4">
    //   <div className="border-3 w-[80%] rounded-3xl bg-[#eceaea] py-[5px] px-[1.2px] flex gap-1 items-center">
    //     <div className="bg-[#ccc] p-2 rounded-full">
    //       <BsSearch ref={searchIcon} className="flex-none" />
    //     </div>
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className="outline-none border-none bg-transparent"
    //     />
    //   </div>
    // </div>

     <div  className={isActive ? "search-box relative h-[40px] w-[80%] rounded-[50%] active" : "search-box relative h-[40px] w-[60px] rounded-[50%]"}>
          <input className={isActive ? "w-full h-full rounded-[50px] bg-[#eeebeb] outline-none pl-[50px] py-0 pr-[20px] text-xl opacity-0 input active" : "w-full h-full border-none rounded-[50px] bg-[#fff] outline-none pl-[50px] py-0 pr-[20px] text-xl opacity-0 input"} type="text" placeholder="Search" />
    
          {/* <div className={isActive ? "search-icon absolute left-[20px] top-1/2 h-[60px] w-[60px] bg-[#fff] rounded-[50%] text-center leading-[60px] text-xl text-[#664aff] cursor-pointer z-10 active" : "search-icon absolute left-0 top-1/2 h-[60px] w-[60px] bg-[#fff] rounded-[50%] text-center leading-[60px] text-xl text-[#664aff] cursor-pointer z-10"}> */}
          <div className="absolute bg-[#ccc] h-9 w-10 rounded-full flex items-center justify-center left-[3px] top-[2px] z-10">
            {/* <BsSearch ref={searchIcon} /> */}
            <BsSearch className="font-bold" />
          </div>
       </div>

  );
};

export default SearchIcon;