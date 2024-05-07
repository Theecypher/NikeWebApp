import { Link } from "react-router-dom";

const Joinus = ({ title, to, isTrue, icon, handleClick }) => {
    return ( 
        <Link onClick={handleClick} className={isTrue ?"flex items-center py-[2px] px-4 border-2 gap-2 rounded-3xl" : "underline text-[#5b5b5b] text-[17px]"} to={to}> { title} {icon}</Link>
     );
}
 
export default Joinus;