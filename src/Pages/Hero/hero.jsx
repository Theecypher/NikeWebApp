import Button from "../../Components/Button";
import Navbar from "../Navbar";
import shoes from "./Assets/big-shoe2.png";
import { SiNike } from "react-icons/si";

const Hero = () => {
  return (
    <div>
      <div className="">
        <header className="bg-gray-200 text-center">
          <h3>Spring sale: Up to 50% Off</h3>
        </header>

        <section className="mx-4 mt-2">
          <div className="bg-black border h-full border-red-600 px-7 pt-7">
            <img className="rotate-[90deg] w-[300px]" src={shoes} alt="" />

            <div className="my-8 pb-4 mx-auto flex flex-col items-center">
              <SiNike className="text-white text-[50px] py-2" />
              <div className="flex gap-1">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-white rounded-full text-[4px] text-center">
                  Dn
                </div>
              </div>
              <div className="flex gap-3 text-white items-center">
                <p className="text-[5px] uppercase">introducing the nike</p>
                <p className="text-[9px]">AIRMAX</p>
                <p className="uppercase text-[5px]">Featuring Dynamic air</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Nike Air Mx Dn</h2>
            <h1 className="text-5xl font-bold my-[2px]">FEEL THE UNREAL</h1>
            <p className="text-[17px] font-[500] my-7">
              The next generation of Air technology launches on March 12th.
              Preview the full lineup of colorways now.
            </p>

            <div className="flex gap-2">
                <Button text="Get Notified" blackButton="true" />
                <Button text="Find Your Max" blackButton="true" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
