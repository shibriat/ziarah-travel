import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <nav>
          <ul>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a></li>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Users</a></li>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Users</h1>
          <Button>Add User</Button>
        </header>
        <div className="mb-6">
          <Input placeholder="Search users..." />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>User List</CardTitle>
            <CardDescription>A list of all the users in your application.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>User</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
