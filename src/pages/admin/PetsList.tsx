import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockPets = [
  { id: 1, name: "Max", species: "Dog", breed: "Golden Retriever", age: 2, status: "Available" },
  { id: 2, name: "Luna", species: "Cat", breed: "Persian", age: 1, status: "Available" },
  { id: 3, name: "Charlie", species: "Dog", breed: "Border Collie", age: 3, status: "Adopted" },
  { id: 4, name: "Bella", species: "Cat", breed: "Orange Tabby", age: 2, status: "Available" },
  { id: 5, name: "Snow", species: "Rabbit", breed: "White Rabbit", age: 1, status: "Available" },
];

const PetsList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Pets</h1>
          <p className="text-gray-400 mt-1">Manage pet listings</p>
        </div>
        <Link to="/admin/pets/add">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Pet
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search pets..."
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
              <TableHead className="text-gray-300">Species</TableHead>
              <TableHead className="text-gray-300">Breed</TableHead>
              <TableHead className="text-gray-300">Age</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPets.map((pet) => (
              <TableRow key={pet.id} className="border-gray-700 hover:bg-gray-750">
                <TableCell className="text-gray-400">#{pet.id}</TableCell>
                <TableCell className="text-white font-medium">{pet.name}</TableCell>
                <TableCell className="text-gray-300">{pet.species}</TableCell>
                <TableCell className="text-gray-300">{pet.breed}</TableCell>
                <TableCell className="text-gray-300">{pet.age} years</TableCell>
                <TableCell>
                  <Badge
                    variant={pet.status === "Available" ? "default" : "secondary"}
                    className={pet.status === "Available" ? "bg-green-600" : "bg-gray-600"}
                  >
                    {pet.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/pets/${pet.id}`}>
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

export default PetsList;
