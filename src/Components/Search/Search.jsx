import { Link } from "react-router-dom";
import { TrendingShoes } from "../../Pages/Spotlight/spotlightData";
import SearchIcon from "./SearchIcon";

const Search = () => {
  return (
    <div>
      <div className="flex py-[5px] justify-center items-center gap-4">
        <SearchIcon />

        <Link className="font-[600]" to="/">
          Cancel
        </Link>
        {/* <h4 >Cancel</h4> */}
      </div>

      <div className="py-8 px-3">
        <h3 className="text-[#747373]">Popular Search Terms</h3>
        {TrendingShoes.map((item, key) => (
          <ul key={key}>
            <li className="py-2 font-semibold">{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;
