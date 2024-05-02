import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartContent = () => {
  return (
    <div>
      <div>
        <h3>Bag</h3>
        <div>
          <p>0 items</p>
          <p>|</p>
          <FaMinus />
        </div>
      </div>

      <div className="border">
        <h2 className="text-orange-500">
          Members get free shipping on orders $50+
        </h2>
        <p className="text-[#e1e1e1]">
          Become a Nike Member for fasr free shipping on orders $50+
          <Link className="underline">Join us</Link> or
          <Link className="underline">Sign in</Link>
        </p>
      </div>

      <div className="border border-b">
        <p>There are no items in your bag</p>
      </div>

      <div>
        <h1>Summary</h1>
        <div>
            <p>Do you have a Promo Code?</p>
            <option value=""></option>
        </div>

        <div>
            <p>Subtotal</p>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
