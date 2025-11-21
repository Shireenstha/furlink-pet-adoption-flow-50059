import { Link, useLocation } from "react-router-dom";
import { Home, Users, Heart, ShoppingBag, Package, DollarSign, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/admin" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Pets", icon: Heart, path: "/admin/pets" },
  { name: "Adoptions", icon: ShoppingBag, path: "/admin/adoptions" },
  { name: "Categories", icon: Package, path: "/admin/categories" },
  { name: "Payments", icon: DollarSign, path: "/admin/payments" },
  { name: "Logout", icon: LogOut, path: "/admin/logout" },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">Django Administration</h1>
        <p className="text-sm text-gray-400 mt-1">Management Panel</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== "/admin" && location.pathname.startsWith(item.path));
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-cyan-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm">← Back to Site</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
