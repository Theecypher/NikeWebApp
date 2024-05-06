import {
  FaArrowDown,
  FaChevronDown,
  FaChevronUp,
  FaMinus,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";
import { RxMinus } from "react-icons/rx";
import Joinus from "../../Onboarding/Joinus";
import { useState } from "react";

const CartContent = () => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div className="flex flex-col justify-cente my-5 gap-[2px] px-5 items-cent">
      <div className="mb-3">
        <h3 className="text-center font-semibold">Bag</h3>
        <div className="flex justify-center items-center gap-1">
          <p>0 items</p>
          <p>|</p>
          <RxMinus className="self-center" />
        </div>
      </div>

      <div className="border my-5 p-2">
        <h2 className="text-orange-500 w-[90%] font-bold text-xl">
          Members get free shipping on orders $50+
        </h2>
        <p className="text-[#696767] text-base font-normal w-[85%]">
          Become a Nike Member for fast free shipping on orders $50+
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
        <h1 className="text-2xl mb-3">Summary</h1>

        <div className="flex flex-col gap-2">
          <div className="font-base">
            <div className="flex items-center gap-2">
              <p>Do you have a Promo Code?</p>
              {isVisible ? <FaChevronDown onClick={() => setIsVisible(false)} /> : <FaChevronUp onClick={() => setIsVisible(true)} />}
            </div>
            <div className={isVisible ? "hidden" : "flex items-center my-3 gap-3 ease-in-out duration-100"}>
              <input
                type="text"
                className="border w-full rounded-md border-[#c0c0c0]"
              />
              <Button text="Apply" blackButton="true" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-[3px]">Subtotal
            <FaQuestionCircle className="text-[15px]" />
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
              <FaQuestionCircle className="text-[15px]" />
            </p>
              <p>-</p>
          </div>

          <div className="flex mt-2 items-center justify-between">
            <p>Total</p>
            <p>-</p>
          </div>

        </div>

        <div className="mt-12">
          <h1 className="font-semibold text-2xl">Favorites</h1>
         <p className="w-[90%] text-[17px]">Want to view your favorites?
          <Joinus title="Join us" to="/signup" /> or 
          <Joinus title="Sign-in" to="/signup" />
         </p>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
