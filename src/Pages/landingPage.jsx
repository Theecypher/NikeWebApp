import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Hero from "./Hero/hero";
import Membership from "./Membership/Membership";
import Navbar from "./Navbar";
import Sports from "./Sports/sports";
import Spotlight from "./Spotlight/spotlight";
import ClickandScroll from "./Trending/HorizontalScroll";
import Trending from "./Trending/Trending";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      {/* <Trending /> */}
      <ClickandScroll />
      {/* <Featured />
      <Spotlight />
      <Sports />
      <Membership />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
