import { Link } from "react-router-dom";
import { Edit, Trash2, Search, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockMessages = [
  { id: 1, name: "Sarah Wilson", email: "sarah@example.com", subject: "Inquiry about adoption", date: "2024-11-20", status: "New" },
  { id: 2, name: "Mike Johnson", email: "mike@example.com", subject: "Pet care question", date: "2024-11-19", status: "Read" },
  { id: 3, name: "Emily Davis", email: "emily@example.com", subject: "Interested in volunteering", date: "2024-11-18", status: "Replied" },
  { id: 4, name: "Tom Brown", email: "tom@example.com", subject: "Donation inquiry", date: "2024-11-17", status: "New" },
  { id: 5, name: "Lisa Anderson", email: "lisa@example.com", subject: "General question", date: "2024-11-16", status: "Read" },
];

const ContactMessages = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Contact Messages</h1>
          <p className="text-gray-400 mt-1">View and manage contact form submissions</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search messages..."
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
              <TableHead className="text-gray-300">Subject</TableHead>
              <TableHead className="text-gray-300">Date</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockMessages.map((message) => (
              <TableRow key={message.id} className="border-gray-700 hover:bg-gray-750">
                <TableCell className="text-gray-400">#{message.id}</TableCell>
                <TableCell className="text-white font-medium">{message.name}</TableCell>
                <TableCell className="text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    {message.email}
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">{message.subject}</TableCell>
                <TableCell className="text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {message.date}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="default"
                    className={
                      message.status === "New" 
                        ? "bg-blue-600" 
                        : message.status === "Read"
                        ? "bg-yellow-600"
                        : "bg-green-600"
                    }
                  >
                    {message.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/contact-messages/${message.id}`}>
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

export default ContactMessages;
