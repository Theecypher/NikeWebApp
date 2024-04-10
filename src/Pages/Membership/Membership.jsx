import { Link } from "react-router-dom";
import Lists from "./Lists";

const Membership = () => {
  return (
    <div className="container flex flex-col justify-center ml-[20px]">
      <div className="flex justify-between">
        <h2 className="font-[600]">Nike Membership</h2>

        <Link className="mr-[35px] font-[600]">Sign Up</Link>
      </div>

      <Lists />
    </div>
  );
};

export default Membership;
