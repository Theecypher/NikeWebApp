import { useState } from "react";
import { ShopData } from "../../Pages/Shop/ShopData";

const PueSearch = () => {
  const [Error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(ShopData);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  //   return items.filter((item) => {
  //     return searchParam.some((newItem) => {
  //       return item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
  //     });
  //   });

  const Search = (e) => {
    // setQ(e.target.value);
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
        );
      });
    });
}


  return (
    <div>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input outline-none border border-green-500"
        placeholder="Search for..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        // onChange={(e) => handleSearch(e)}
      />
      <ul>
        <div>
          {Search(ShopData).map((item, index) => (
            <div className="">
              <img src={item.img} className="w-[200px] h-[200px]" alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default PueSearch;
