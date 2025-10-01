import Logout from "./ui/buttons/Logout";
import Logo from "./ui/Logo";
import { Navbar } from "./ui/Navbar";

const Sidebar = () => {
  return <div className=" flex flex-col justify-between items-center w-64 p-2">
    <Logo/>
    <Navbar/>
    <Logout/>
  </div>;
}

export default Sidebar;