import { Link } from "react-router-dom";
import ListData from "./ListData";

const Lists = () => {
    return ( 
        <div className="flex mt-[120px] flex-col gap-4">
           {ListData.map((item, index) => (
            <ul className="" key={index}>
                <li className="font-[600]">
                    <Link>{item}</Link>
                </li>
            </ul>
           ))}
        </div>
     );
}
 
export default Lists;