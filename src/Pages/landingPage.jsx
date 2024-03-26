import Featured from "./Featured/Featured";
import Hero from "./Hero/hero";
import Navbar from "./Navbar";
import Spotlight from "./Spotlight/spotlight";
import Trending from "./Trending/Trending";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Trending />
      <Featured />
      <Spotlight />
    </div>
  );
};

export default LandingPage;
