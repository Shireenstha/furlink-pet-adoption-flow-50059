import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Search, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", joined: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", joined: "2024-02-20" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Moderator", status: "Active", joined: "2024-03-10" },
  { id: 4, name: "Alice Johnson", email: "alice@example.com", role: "User", status: "Inactive", joined: "2024-04-05" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Active", joined: "2024-05-12" },
];

const UsersList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Users</h1>
          <p className="text-gray-400 mt-1">Manage user accounts</p>
        </div>
        <Link to="/admin/users/add">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search users..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
          />
        </div>
        <Button variant="outline" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750">
          Filter
        </Button>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-750">
              <TableHead className="text-gray-300">ID</TableHead>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Email</TableHead>
              <TableHead className="text-gray-300">Role</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Joined</TableHead>
              <TableHead className="text-gray-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id} className="border-gray-700 hover:bg-gray-750">
                <TableCell className="text-gray-400">#{user.id}</TableCell>
                <TableCell className="text-white font-medium">{user.name}</TableCell>
                <TableCell className="text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    {user.email}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-300">{user.role}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "default" : "secondary"}
                    className={user.status === "Active" ? "bg-green-600" : "bg-gray-600"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{user.joined}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/users/${user.id}`}>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-gray-700">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-gray-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersList;
