import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="relative md:flex min-h-screen">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="flex-1 md:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;