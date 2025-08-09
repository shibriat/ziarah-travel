"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Bell, Home as HomeIcon, Users, Settings, PanelLeft, Menu, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    if (isLoggedIn !== 'true') {
      router.push('/');
    } else {
      setUserRole(role || '');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    router.push('/');
  };

  const navItems = [
    { href: '/dashboard', icon: <HomeIcon size={20} />, label: 'Dashboard' },
    { href: '/users', icon: <Users size={20} />, label: 'Users' },
    { href: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen">
      <header className="h-16 bg-gradient-to-r from-[#03B289]/80 to-[#029a7a]/80 backdrop-blur-lg border-b border-white/20 shadow-lg flex items-center justify-between px-6 text-white">
        <div className="flex items-center gap-4">
          {/* Desktop Collapse Button */}
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="hidden md:flex">
            <PanelLeft size={20} className="text-white" />
          </Button>
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            <Menu size={20} className="text-white" />
          </Button>
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} className="text-white" />
          </Button>
          {userRole === 'admin' && <Button>Add User</Button>}
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut size={20} className="text-white" />
          </Button>
        </div>
      </header>
      <div className="flex" style={{height: 'calc(100vh - 4rem)'}}>
        {/* Sidebar */}
        <aside
          className={`
            bg-green-900/30 backdrop-blur-lg border-r border-white/10 shadow-lg
            flex flex-col transition-all duration-300
            md:relative absolute z-10
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64
          `}
        >
          <nav className="flex-1 p-4">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 py-3 px-4 rounded ${
                      pathname === item.href
                        ? 'bg-gray-200/50 dark:bg-gray-700/50'
                        : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {item.icon}
                    {!isCollapsed && <span className="text-sm">{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
