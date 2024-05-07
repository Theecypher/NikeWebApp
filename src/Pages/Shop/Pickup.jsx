import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark, FaSort } from "react-icons/fa6";
import { GiToggles } from "react-icons/gi";
import { GrSort } from "react-icons/gr";
import { RiToggleFill, RiToggleLine } from "react-icons/ri";
import { RxCaretSort } from "react-icons/rx";

const Pickup = () => {
    const [isVisible, setIsVisible] = useState(false)

    return ( 
        <div className="flex justify-between border-y-[2px] items-center my-3">
            <h1>Pick Up Today</h1>

            <div>
                {isVisible ? 
                <RiToggleFill onClick={() => setIsVisible(false)} className="text-[55px] text-[#ccc]" />
             :   <RiToggleLine onClick={() => setIsVisible(true)} className="text-[55px] text-[#ccc]" />
            }
            </div>
        </div>
     );
}
 
export default Pickup;