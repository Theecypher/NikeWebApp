import { Link } from "react-router-dom";

const Joinus = ({ title, to }) => {
    return ( 
        <Link className="underline text-[#5b5b5b] text-[17px]" to={to}> { title}</Link>
     );
}
 
export default Joinus;