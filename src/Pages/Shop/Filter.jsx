import { FaSort } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Joinus from "../../Onboarding/Joinus";

const Filter = () => {
  return (
    <div className="flex justify-between items-center">
      <h3>218 Results</h3>

      <Joinus to="/" 
    //   handleClick={vkk} 
      title="Filter" isTrue={true} icon={<FaSort />} />
    </div>
  );
};

export default Filter;
