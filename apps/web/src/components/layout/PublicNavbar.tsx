"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/learnai-logo.svg"
            alt="LearnAI Logo"
            width={140}
            height={36}
            className="h-8 sm:h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
          <Link
            href="/"
            className={`transition-colors hover:text-[#4F46E5] ${
              pathname === "/" ? "text-[#4F46E5] font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <a href="#features" className="hover:text-[#4F46E5] transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-[#4F46E5] transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-[#4F46E5] transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-[#4F46E5] transition-colors">
            About
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#4F46E5] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338CA] hover:shadow-indigo-200"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/signup"
            className="sm:hidden rounded-full bg-[#4F46E5] px-4 py-1.5 text-xs font-semibold text-white"
          >
            Sign up
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-100 bg-white px-6 py-5 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 transition hover:bg-slate-50 ${
                pathname === "/" ? "bg-indigo-50 text-[#4F46E5]" : ""
              }`}
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-50"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-50"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-50"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-50"
            >
              About
            </a>
          </nav>
          <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-slate-100">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-[#4F46E5] py-2.5 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
