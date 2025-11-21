import { Link } from "react-router-dom";
import { Plus, Edit, Users, Shield, MessageSquare, Image, Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const adminSections = [
  {
    title: "AUTHENTICATION AND AUTHORIZATION",
    color: "bg-emerald-600",
    models: [
      { name: "Groups", icon: Shield, path: "/admin/groups", count: 3 },
      { name: "Users", icon: Users, path: "/admin/users", count: 125 },
    ],
  },
  {
    title: "ACCOUNTS",
    color: "bg-blue-600",
    models: [
      { name: "Users", icon: Users, path: "/admin/accounts/users", count: 125 },
    ],
  },
  {
    title: "CONTACT",
    color: "bg-purple-600",
    models: [
      { name: "Contact Messages", icon: MessageSquare, path: "/admin/contact-messages", count: 47 },
    ],
  },
  {
    title: "GALLERY",
    color: "bg-pink-600",
    models: [
      { name: "Pet Images", icon: Image, path: "/admin/pet-images", count: 234 },
    ],
  },
  {
    title: "PET",
    color: "bg-orange-600",
    models: [
      { name: "Adoption Prices", icon: Heart, path: "/admin/adoption-prices", count: 5 },
      { name: "Adoptions", icon: Heart, path: "/admin/adoptions", count: 89 },
      { name: "Pet Categories", icon: Heart, path: "/admin/pet-categories", count: 8 },
      { name: "Pets", icon: Heart, path: "/admin/pets", count: 156 },
    ],
  },
  {
    title: "SHOP",
    color: "bg-cyan-600",
    models: [
      { name: "Categories", icon: ShoppingCart, path: "/admin/shop/categories", count: 12 },
      { name: "Order Items", icon: ShoppingCart, path: "/admin/shop/order-items", count: 543 },
      { name: "Orders", icon: ShoppingCart, path: "/admin/shop/orders", count: 234 },
      { name: "Products", icon: ShoppingCart, path: "/admin/shop/products", count: 67 },
      { name: "Shop Payments", icon: ShoppingCart, path: "/admin/shop/payments", count: 198 },
    ],
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Site administration</h1>
        <p className="text-gray-400">Welcome to the admin dashboard</p>
      </div>

      <div className="grid gap-8">
        {adminSections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className={`${section.color} text-white px-4 py-2 rounded-t-lg font-semibold text-sm`}>
              {section.title}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.models.map((model, modelIdx) => (
                <Card key={modelIdx} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <model.icon className="h-5 w-5 text-gray-400" />
                      <span className="text-white">{model.name}</span>
                      <span className="ml-auto text-sm text-gray-400">({model.count})</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-4">
                    <Link
                      to={`${model.path}/add`}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="text-sm font-medium">Add</span>
                    </Link>
                    <Link
                      to={model.path}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="text-sm font-medium">Change</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
