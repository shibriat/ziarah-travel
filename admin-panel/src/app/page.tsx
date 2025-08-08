import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Bell, Home, Users, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 flex flex-col">
        <div className="h-16 flex items-center justify-center bg-gradient-to-r from-[#03B289] to-[#029a7a]">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li><a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700"><Home size={20} /> Dashboard</a></li>
            <li><a href="#" className="flex items-center gap-2 py-2 px-4 rounded bg-gray-200 dark:bg-gray-700"><Users size={20} /> Users</a></li>
            <li><a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700"><Settings size={20} /> Settings</a></li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 flex items-center justify-between px-6 bg-gradient-to-r from-[#03B289] to-[#029a7a]">
          <div>
            {/* Search bar can go here if needed */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <Button>Add User</Button>
          </div>
        </header>
        <main className="flex-1 p-6">
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
    </div>
  );
}
