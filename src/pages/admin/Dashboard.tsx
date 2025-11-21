import { Link } from "react-router-dom";
import { Users, Heart, ShoppingBag, Package, DollarSign, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for charts
const activityData = [
  { name: "Mon", adoptions: 12, users: 24 },
  { name: "Tue", adoptions: 19, users: 35 },
  { name: "Wed", adoptions: 15, users: 28 },
  { name: "Thu", adoptions: 25, users: 42 },
  { name: "Fri", adoptions: 22, users: 38 },
  { name: "Sat", adoptions: 30, users: 55 },
  { name: "Sun", adoptions: 28, users: 48 },
];

const revenueData = [
  { month: "Jan", revenue: 4500 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6100 },
  { month: "May", revenue: 7200 },
  { month: "Jun", revenue: 6800 },
];

const recentActivity = [
  { action: "New adoption", detail: "Max adopted by John Doe", time: "2 minutes ago" },
  { action: "New user", detail: "Sarah Smith registered", time: "15 minutes ago" },
  { action: "Payment received", detail: "$150 from Jane Cooper", time: "1 hour ago" },
  { action: "New pet added", detail: "Luna - Golden Retriever", time: "3 hours ago" },
  { action: "Category updated", detail: "Dogs category modified", time: "5 hours ago" },
];

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: "1,245", icon: Users, change: "+12%", color: "text-blue-400" },
    { title: "Total Pets", value: "156", icon: Heart, change: "+8%", color: "text-pink-400" },
    { title: "Total Adoptions", value: "89", icon: ShoppingBag, change: "+23%", color: "text-green-400" },
    { title: "Total Categories", value: "20", icon: Package, change: "+2", color: "text-purple-400" },
    { title: "Total Payments", value: "$34,582", icon: DollarSign, change: "+18%", color: "text-cyan-400" },
    { title: "Active Today", value: "342", icon: Activity, change: "+5%", color: "text-orange-400" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to the admin dashboard</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-green-400">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Line type="monotone" dataKey="adoptions" stroke="#06B6D4" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Chart */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Bar dataKey="revenue" fill="#06B6D4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-gray-900/50 border border-gray-700">
                <Activity className="h-5 w-5 text-cyan-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-400">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/admin/users" className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors text-center">
          <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
          <p className="text-white font-medium">Users</p>
        </Link>
        <Link to="/admin/pets" className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors text-center">
          <Heart className="h-8 w-8 text-pink-400 mx-auto mb-2" />
          <p className="text-white font-medium">Pets</p>
        </Link>
        <Link to="/admin/adoptions" className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors text-center">
          <ShoppingBag className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <p className="text-white font-medium">Adoptions</p>
        </Link>
        <Link to="/admin/payments" className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors text-center">
          <DollarSign className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
          <p className="text-white font-medium">Payments</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
