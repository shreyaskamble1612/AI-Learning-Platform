"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

interface AppHeaderProps {
  onMenuClick?: () => void;
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-16 sm:h-20 w-full items-center justify-between border-b border-slate-100 bg-white/80 px-4 sm:px-8 backdrop-blur-md gap-3">
      {/* Mobile Hamburger + Search */}
      <div className="flex flex-1 items-center gap-3 max-w-xl">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open sidebar menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, topics, or ask..."
            className="w-full rounded-2xl border border-slate-100 bg-slate-50/70 py-2 sm:py-2.5 pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification Bell */}
        <button
          type="button"
          aria-label="View notifications"
          className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-50 transition"
        >
          <Bell className="h-4 sm:h-5 w-4 sm:w-5" />
          <span className="absolute right-1 sm:right-2 top-1 sm:top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm">
            3
          </span>
        </button>

        {/* User Pill */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 sm:gap-3 rounded-2xl p-1 sm:p-1.5 transition hover:bg-slate-50"
          >
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full ring-2 ring-indigo-100 shrink-0">
              <Image
                src="/sharvari-patil.png"
                alt="Sharvari Patil"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-bold text-slate-900 leading-tight">Sharvari Patil</div>
              <div className="text-[11px] font-medium text-slate-400">Learner</div>
            </div>
            <ChevronDown className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-slate-400" />
          </button>

          {/* Quick Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 sm:hidden">
                <div className="text-xs font-bold text-slate-900">Sharvari Patil</div>
                <div className="text-[10px] text-slate-400">Learner</div>
              </div>
              <Link
                href="/settings"
                onClick={() => setDropdownOpen(false)}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Profile & Settings
              </Link>
              <Link
                href="/progress"
                onClick={() => setDropdownOpen(false)}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Learning Progress
              </Link>
              <div className="my-1 border-t border-slate-100" />
              <Link
                href="/"
                onClick={() => setDropdownOpen(false)}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50"
              >
                Log out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
