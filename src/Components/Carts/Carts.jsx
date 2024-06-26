import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Pages/Navbar";
import Scroll from "../MightLike/Might";
import MightLike from "../MightLike/MightLink";
import SearchIcon from "../Search/SearchIcon";
import CartContent from "./CartContent";
import CheckoutButton from "./CheckoutButton";

const Carts = () => {
  return (
    <div>
      <Navbar />
      <SearchIcon />

      <CartContent />
      <CheckoutButton />
      {/* <MightLike /> */}
      <Scroll />
      <Footer />
    </div>
  );
};

export default Carts;
