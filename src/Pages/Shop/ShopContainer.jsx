import Filter from "./Filter";
import HorizontalScroll from "./HorizontalScroll";
import Pickup from "./Pickup";


const ShopContainer = () => {
    return ( 
        <div className="mx-4">
            <p className="my-5 text-xl font-semibold">Mother's Day</p>

            <HorizontalScroll />
            <Pickup />
            <Filter />
            
        </div>
     );
}
 
export default ShopContainer;