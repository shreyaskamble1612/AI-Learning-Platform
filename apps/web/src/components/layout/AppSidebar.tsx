"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  BookOpen,
  BarChart2,
  Clock,
  Bookmark,
  MessageSquare,
  User,
  Settings,
  Star,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create New Course", href: "/create", icon: Sparkles },
  { name: "My Courses", href: "/courses", icon: BookOpen },
  { name: "Progress", href: "/progress", icon: BarChart2 },
  { name: "History", href: "/history", icon: Clock },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "AI Tutor", href: "/tutor", icon: MessageSquare },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface AppSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AppSidebar({ isOpen = false, onClose }: AppSidebarProps) {
  const pathname = usePathname();

  const SidebarContent = (
    <>
      {/* Logo & Close Button (on mobile) */}
      <div className="mb-6 flex items-center justify-between px-2">
        <Link href="/dashboard" onClick={onClose} className="flex items-center gap-2">
          <Image
            src="/learnai-logo.svg"
            alt="LearnAI Logo"
            width={130}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </Link>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/courses" && pathname.startsWith("/courses")) ||
            (item.href === "/create" && (pathname === "/create" || pathname === "/building")) ||
            (item.href === "/profile" && pathname === "/profile") ||
            (item.href === "/settings" && pathname === "/settings");

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-slate-400"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Promo / Streak Card */}
      <div className="mt-auto pt-4">
        <div className="rounded-2xl border border-indigo-50 bg-gradient-to-b from-indigo-50/50 to-purple-50/40 p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700">
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
            <span>Learning Streak</span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-lg font-bold text-slate-900">
            <span>7 Days</span>
            <span className="text-orange-500">🔥</span>
          </div>
          <div className="mt-3 flex justify-center">
            <Image
              src="/ai-tutor-mascot.svg"
              alt="Mascot"
              width={70}
              height={70}
              className="h-14 w-auto animate-bounce-slow"
            />
          </div>
          <p className="mt-2 text-[11px] text-slate-500 font-medium">Keep learning, achieve more!</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-slate-100 bg-white px-5 py-6 lg:flex z-30">
        {SidebarContent}
      </aside>

      {/* Mobile Off-canvas Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          {/* Drawer */}
          <aside className="fixed inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col border-r border-slate-100 bg-white px-5 py-6 shadow-2xl transition-transform animate-in slide-in-from-left duration-200">
            {SidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
