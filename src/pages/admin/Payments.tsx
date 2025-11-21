import { Link } from "react-router-dom";
import { Edit2, Search, Filter, Download } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockPayments = [
  { id: "PAY-001", user: "John Doe", amount: "$150.00", status: "Success", date: "2024-01-15", method: "Credit Card" },
  { id: "PAY-002", user: "Sarah Smith", amount: "$120.00", status: "Pending", date: "2024-01-14", method: "PayPal" },
  { id: "PAY-003", user: "Mike Johnson", amount: "$180.00", status: "Success", date: "2024-01-12", method: "Credit Card" },
  { id: "PAY-004", user: "Emily Brown", amount: "$200.00", status: "Failed", date: "2024-01-10", method: "Debit Card" },
  { id: "PAY-005", user: "David Wilson", amount: "$100.00", status: "Success", date: "2024-01-08", method: "Credit Card" },
  { id: "PAY-006", user: "Lisa Anderson", amount: "$95.00", status: "Success", date: "2024-01-07", method: "PayPal" },
  { id: "PAY-007", user: "Tom Martinez", amount: "$175.00", status: "Pending", date: "2024-01-05", method: "Credit Card" },
  { id: "PAY-008", user: "Anna Garcia", amount: "$130.00", status: "Success", date: "2024-01-03", method: "Debit Card" },
];

const Payments = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Failed": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Payments</h1>
          <p className="text-gray-400 mt-1">Manage payment transactions and history</p>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-400">Total Revenue</p>
            <p className="text-2xl font-bold text-white mt-2">$34,582</p>
            <p className="text-xs text-green-400 mt-1">+12% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-400">Successful</p>
            <p className="text-2xl font-bold text-white mt-2">186</p>
            <p className="text-xs text-gray-400 mt-1">94% success rate</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-400">Pending</p>
            <p className="text-2xl font-bold text-white mt-2">8</p>
            <p className="text-xs text-yellow-400 mt-1">Awaiting confirmation</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-400">Failed</p>
            <p className="text-2xl font-bold text-white mt-2">4</p>
            <p className="text-xs text-red-400 mt-1">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by ID, user, or amount..."
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
                <TableHead className="text-gray-400">Payment ID</TableHead>
                <TableHead className="text-gray-400">User</TableHead>
                <TableHead className="text-gray-400">Amount</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Method</TableHead>
                <TableHead className="text-gray-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayments.map((payment) => (
                <TableRow key={payment.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell className="text-white font-medium font-mono text-sm">{payment.id}</TableCell>
                  <TableCell className="text-white">{payment.user}</TableCell>
                  <TableCell className="text-white font-semibold">{payment.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{payment.date}</TableCell>
                  <TableCell className="text-gray-300">{payment.method}</TableCell>
                  <TableCell className="text-right">
                    <Link to={`/admin/payments/${payment.id}`}>
                      <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-700">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </Link>
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

export default Payments;
