import ComplementarySidebar from "../../components/ComplementarySidebar";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex h-[100dvh]">
        <Sidebar></Sidebar>
        {children}
        <ComplementarySidebar></ComplementarySidebar>
        </div>
}

export default DashboardLayout;