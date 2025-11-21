import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import RecentActions from "./RecentActions";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <AdminSidebar />
      <div className="flex-1 flex">
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
        <RecentActions />
      </div>
    </div>
  );
};

export default AdminLayout;
