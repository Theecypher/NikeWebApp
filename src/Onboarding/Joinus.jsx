import { Link } from "react-router-dom";

const Joinus = ({ title, to }) => {
    return ( 
        <Link className="underline text-[#5b5b5b]" to={to}>{title}</Link>
     );
}
 
export default Joinus;