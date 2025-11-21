import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would handle actual logout logic
    // For now, we'll just redirect to home
    navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <LogOut className="h-8 w-8 text-red-400" />
          </div>
          <CardTitle className="text-2xl text-white">Confirm Logout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-400">
            Are you sure you want to logout? You will need to login again to access the admin panel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleLogout}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              Yes, Logout
            </Button>
            <Link to="/admin" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-700"
              >
                Cancel
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-xs text-center text-gray-500">
              Having issues? <Link to="/admin/settings" className="text-cyan-400 hover:text-cyan-300">Contact Support</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
