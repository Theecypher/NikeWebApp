import FeaturedData from "../Featured/FeaturedData";

const Spotlight = () => {
    return ( 
        <div>
            <h3>Classics Spotlight</h3>

            <div className="flex justify-center items-center gap-3">
                {FeaturedData.map((item, index) => (
                    <div className="flex flex-col">
                        <h2>{item.details}</h2>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Spotlight;