import { LuLayoutDashboard } from "react-icons/lu";
import Sidebar, { SidebarItem } from "./Sidebarrr";
import { MdSettingsApplications } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
// import Sidebar, { SidebarItem } from "./Sidebar";

const Index = () => {
  return (
    <main>
      <Sidebar>
        <SidebarItem
          icon={<LuLayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<BiUserCircle size={20} />} text="Interns" active />
        <SidebarItem
          icon={<MdSettingsApplications size={20} />}
          text="Applications"
        />
        <SidebarItem
          icon={<GrProjects size={20} />}
          text="New Projects"
          alert
        />
      </Sidebar>
    </main>
  );
};

export default Index;
