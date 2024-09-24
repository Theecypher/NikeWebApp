import { Children, createContext, useContext, useState } from "react";
import { DiReact } from "react-icons/di";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import User from "../assets/user.png";
import { CgMoreVertical } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";

const SidebarContext = createContext();
export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <DiReact
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 " : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img src={User} alt="" className="w-10 h-10 rounded-md" />

          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3 " : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Mma Obiora</h4>
              <span className="text-xs text-gray-600">
                obioramma12gmail.com
              </span>
            </div>

            <CgMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

export function SidebarItem({ icon, text, active, alert }) {
  const expanded = useContext(SidebarContext);

  console.log(expanded);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors: ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`overflow-hidden transition-all  ${
            expanded
              ? "absolute h-2 w-2 right-2 rounded bg-indigo-400"
              : "hidden"
          }`}
        />
      )}
    </li>
  );
}

// export default SidebarItem
