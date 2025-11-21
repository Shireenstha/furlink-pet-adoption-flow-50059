import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockCategories = [
  { id: 1, name: "Dogs", description: "All dog breeds and types", count: 67 },
  { id: 2, name: "Cats", description: "Feline companions of all kinds", count: 54 },
  { id: 3, name: "Small Pets", description: "Rabbits, guinea pigs, hamsters", count: 23 },
  { id: 4, name: "Birds", description: "Parrots, canaries, and other birds", count: 12 },
  { id: 5, name: "Reptiles", description: "Turtles, lizards, and snakes", count: 8 },
  { id: 6, name: "Fish", description: "Aquatic pets", count: 15 },
  { id: 7, name: "Farm Animals", description: "Goats, chickens, ducks", count: 6 },
  { id: 8, name: "Exotic Pets", description: "Unusual and rare pets", count: 4 },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Pet Categories</h1>
          <p className="text-gray-400 mt-1">Manage pet categories and classifications</p>
        </div>
        <Link to="/admin/categories/add">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </Link>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search categories..."
              className="pl-10 bg-gray-900 border-gray-700 text-white"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-transparent">
                <TableHead className="text-gray-400">ID</TableHead>
                <TableHead className="text-gray-400">Name</TableHead>
                <TableHead className="text-gray-400">Description</TableHead>
                <TableHead className="text-gray-400">Pets Count</TableHead>
                <TableHead className="text-gray-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCategories.map((category) => (
                <TableRow key={category.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell className="text-white font-medium">{category.id}</TableCell>
                  <TableCell className="text-white font-medium">{category.name}</TableCell>
                  <TableCell className="text-gray-300">{category.description}</TableCell>
                  <TableCell className="text-gray-300">{category.count} pets</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/admin/categories/${category.id}`}>
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

export default Categories;
