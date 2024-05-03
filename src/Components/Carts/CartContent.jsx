import {
  FaArrowDown,
  FaChevronDown,
  FaMinus,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";
import { RxMinus } from "react-icons/rx";
import Joinus from "../../Onboarding/Joinus";

const CartContent = () => {
  return (
    // <div className="mx-[20px] text-center">
    <div className="flex flex-col justify-cente my-5 gap-[2px] px-4 items-cent">
      <div className="mb-3">
        <h3 className="text-center font-semibold">Bag</h3>
        <div className="flex justify-center items-center gap-1">
          <p>0 items</p>
          <p>|</p>
          <RxMinus className="self-center" />
        </div>
      </div>

      <div className="border my-5">
        <h2 className="text-orange-500 font-semibold text-xl">
          Members get free shipping on orders $50+
        </h2>
        <p className="text-[#696767] text-base font-medium w-[80%]">
          Become a Nike Member for fasr free shipping on orders $50+
          <Link className="underline">Join us</Link> or
          <Link className="underline"> Sign in</Link>
        </p>
      </div>

      <div className="border-t">
        <p className="mt-4 mb-8 font-semibold">
          There are no items in your bag
        </p>
      </div>

      <div className="font-medium">
        <h1 className="text-2xl">Summary</h1>

        <div className="flex flex-col gap-2">
          <div className="font-base">
            <div className="flex items-center gap-2">
              <p>Do you have a Promo Code?</p>
              <FaChevronDown />
            </div>
            <div className="flex items-center mt-4 gap-3">
              <input
                type="text"
                className="border w-full rounded-md border-[#c0c0c0]"
              />
              <Button text="Apply" blackButton="true" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-[3px]">Subtotal
            <FaQuestionCircle />
            </p>
            <p>Free</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Estimated Shipping & Handelling</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-[3px]">
              Estimated Tax
              <FaQuestionCircle />
            </p>
              <p>-</p>
          </div>

          <div className="flex mt-2 items-center justify-between">
            <p>Total</p>
            <p>-</p>
          </div>

        </div>

        <div className="mt-7">
          <h1 className="font-bold text-xl">Favorites</h1>
         <p className="w-[90%] text-[22px]">Want to view your favorites?
          <Joinus title="Join us" to="/signup" /> or
          <Joinus title="Sign-in" to="/signup" />
         </p>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
