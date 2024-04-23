import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Hero from "./Hero/hero";
import Membership from "./Membership/Membership";
import Navbar from "./Navbar";
import ShopbySport from "./Sports/sportss";
import SpotLight from "./Spotlight/spotSlideshow";
import Trending from "./Trending/Trending";


const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Trending />
      <Featured />
      <SpotLight />
      <ShopbySport />
      {/* <Membership /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
