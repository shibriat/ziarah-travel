"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Bell, Home as HomeIcon, Users, Settings, PanelLeft } from 'lucide-react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="h-16 bg-gradient-to-r from-[#03B289]/50 to-[#029a7a]/50 backdrop-blur-lg border-b border-white/20 shadow-lg flex items-center justify-between px-6 text-white">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            <PanelLeft size={20} className="text-white" />
          </Button>
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} className="text-white" />
          </Button>
          <Button>Add User</Button>
        </div>
      </header>
      <div className="flex" style={{height: 'calc(100vh - 4rem)'}}>
        <aside className={`bg-gradient-to-b from-[#C0F2D0]/50 to-[#a0e0b0]/50 backdrop-blur-lg border-r border-white/20 shadow-lg flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
          <nav className="flex-1 p-4">
            <ul>
              <li>
                <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  <HomeIcon size={20} />
                  {!isCollapsed && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 py-2 px-4 rounded bg-gray-200 dark:hover:bg-gray-700">
                  <Users size={20} />
                  {!isCollapsed && <span>Users</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  <Settings size={20} />
                  {!isCollapsed && <span>Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
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
