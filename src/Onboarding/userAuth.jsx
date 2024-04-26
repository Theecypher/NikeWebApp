import { SiJordan, SiNike } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const UserAuth = () => {
  return (
    <div className="px-7 flex flex-col gap-3">
      <div className="flex gap-3 py-2">
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
        <p className="my-4">
          By continuning I agree to Nike's
          <Link className="underline">privacy Policy</Link> and
          <Link className="underline">Terms of use</Link>
        </p>

        <Button text="Continue" blackButton={true} />
      </form>
    </div>
  );
};

export default UserAuth;
