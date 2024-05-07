import Header from "../../Components/header";
import Navbar from "../Navbar";
import ShopContainer from "./ShopContainer";
import ShopContent from "./ShopContent";


const Shop = () => {
  return (
    <div className="bg-">
      {/* <p className={}></p */}
      <Navbar />
      <Header />

      <ShopContainer />
      <ShopContent />
    </div>
  );
};

export default Shop;
