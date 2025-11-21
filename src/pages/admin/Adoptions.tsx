import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockAdoptions = [
  { id: 1, user: "John Doe", pet: "Max (Golden Retriever)", date: "2024-01-15", status: "Completed", amount: "$150" },
  { id: 2, user: "Sarah Smith", pet: "Luna (Persian Cat)", date: "2024-01-14", status: "Pending", amount: "$120" },
  { id: 3, user: "Mike Johnson", pet: "Charlie (Beagle)", date: "2024-01-12", status: "Completed", amount: "$180" },
  { id: 4, user: "Emily Brown", pet: "Bella (Border Collie)", date: "2024-01-10", status: "In Progress", amount: "$200" },
  { id: 5, user: "David Wilson", pet: "Oliver (Orange Tabby)", date: "2024-01-08", status: "Completed", amount: "$100" },
];

const Adoptions = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "In Progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Adoptions</h1>
          <p className="text-gray-400 mt-1">Manage adoption requests and records</p>
        </div>
        <Link to="/admin/adoptions/add">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Adoption
          </Button>
        </Link>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search adoptions..."
                className="pl-10 bg-gray-900 border-gray-700 text-white"
              />
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-transparent">
                <TableHead className="text-gray-400">ID</TableHead>
                <TableHead className="text-gray-400">User</TableHead>
                <TableHead className="text-gray-400">Pet</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Amount</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAdoptions.map((adoption) => (
                <TableRow key={adoption.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell className="text-white font-medium">{adoption.id}</TableCell>
                  <TableCell className="text-white">{adoption.user}</TableCell>
                  <TableCell className="text-gray-300">{adoption.pet}</TableCell>
                  <TableCell className="text-gray-300">{adoption.date}</TableCell>
                  <TableCell className="text-gray-300">{adoption.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(adoption.status)}>
                      {adoption.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/admin/adoptions/${adoption.id}`}>
                        <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-700">
                          <Edit2 className="h-4 w-4" />
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Adoptions;
