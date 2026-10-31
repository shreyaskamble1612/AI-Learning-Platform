"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { LayoutDashboard, BookOpen, Sparkles, MessageSquare, Settings } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const bottomNavItems = [
    { name: "Home", href: "/dashboard", icon: LayoutDashboard },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Create", href: "/create", icon: Sparkles, primary: true },
    { name: "Tutor", href: "/tutor", icon: MessageSquare },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar with desktop persistent & mobile drawer support */}
      <AppSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="flex flex-1 flex-col overflow-x-hidden min-w-0">
        <AppHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 sm:pb-8 max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (phones only) */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 z-40 border-t border-slate-100 bg-white/95 backdrop-blur-md px-3 py-1.5 flex items-center justify-around shadow-lg">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/courses" && pathname.startsWith("/courses")) ||
            (item.href === "/create" && (pathname === "/create" || pathname === "/building")) ||
            (item.href === "/settings" && (pathname === "/settings" || pathname === "/profile"));

          if (item.primary) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center -mt-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] text-white shadow-lg shadow-indigo-300 transition active:scale-95">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 mt-0.5">
                  {item.name}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition ${
                isActive ? "text-[#4F46E5] font-semibold" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon className="h-4.5 w-4.5" />
              <span className="text-[10px] mt-0.5">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
