import { BsSearch } from "react-icons/bs";

const SearchIcon = () => {
  return (
    <div className="flex py-[5px] justify-center items-center gap-4">
      <div className="border-3 w-[80%] rounded-3xl bg-[#eceaea] py-[5px] px-[1.2px] flex gap-1 items-center">
        <div className="bg-[#ccc] p-2 rounded-full">
          <BsSearch className="flex-none" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default SearchIcon;
