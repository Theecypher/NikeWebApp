import { SiJordan, SiNike } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const UserAuth = () => {
  return (
    <div className="px-7 flex flex-col gap-4">
      <div className="flex gap-3 py-5">
        <SiNike className="font-[600] w-10 h-10" />
        <SiJordan className="font-[600] w-10 h-10" />
      </div>

      <form>
        <div className="mb-5">
          <h1 className="font-[500] w-[80%] text-2xl my-1">
            Enter your email to join us or sign up
          </h1>
          <p>
            Nigeria <Link className="underline text-[#e1e1e1]">Change</Link>
          </p>
        </div>

        <input type="email" className="border-2 border-[#b1aeae] py-3 w-full rounded-xl px-5 my-5" placeholder="Email" />
        <p className="my-4 w-[60%] text-[#7f7e7e]">
          By continuning, I agree to Nike's
          <Link className="underline"> privacy Policy</Link> and
          <Link className="underline"> Terms of use</Link>
        </p>

        {/* <Button text="Continue" blackButton={true} /> */}
        <button className="w-full bg-black px-4 py-3 text-white rounded-3xl">Continue</button>
      </form>
    </div>
  );
};

export default UserAuth;
