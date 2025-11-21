import { Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentActions = [
  { type: "add", model: "Pet", name: "Golden Retriever - Max", time: "2 minutes ago" },
  { type: "edit", model: "User", name: "john.doe@email.com", time: "15 minutes ago" },
  { type: "delete", model: "Order", name: "Order #1234", time: "1 hour ago" },
  { type: "add", model: "Product", name: "Premium Dog Food", time: "2 hours ago" },
  { type: "edit", model: "Pet", name: "Persian Cat - Luna", time: "3 hours ago" },
  { type: "add", model: "Contact Message", name: "From sarah@email.com", time: "4 hours ago" },
  { type: "edit", model: "Category", name: "Dogs", time: "5 hours ago" },
  { type: "add", model: "Pet Image", name: "border-collie-action.jpg", time: "6 hours ago" },
];

const RecentActions = () => {
  return (
    <aside className="w-80 bg-gray-950 border-l border-gray-800 p-6 overflow-auto">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white text-lg">Recent Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActions.map((action, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="mt-1">
                {action.type === "add" && <Plus className="h-4 w-4 text-green-400" />}
                {action.type === "edit" && <Edit className="h-4 w-4 text-blue-400" />}
                {action.type === "delete" && <Trash2 className="h-4 w-4 text-red-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{action.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {action.type === "add" && "Added"} 
                  {action.type === "edit" && "Changed"} 
                  {action.type === "delete" && "Deleted"} {action.model}
                </p>
                <p className="text-xs text-gray-500 mt-1">{action.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default RecentActions;
