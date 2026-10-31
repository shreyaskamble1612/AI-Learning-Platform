"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  Bookmark,
  Search,
  ChevronDown,
  Play,
  Code2,
  FileText,
  ExternalLink,
  Plus,
  ArrowRight,
  MoreVertical,
  Star,
  Download,
  Folder,
} from "lucide-react";

export default function BookmarksPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const BOOKMARKS = [
    {
      id: 1,
      title: "Variables and Data Types in Python",
      course: "Python Programming for Beginners • Module 2 • Lesson 3",
      image: "/python-course.svg",
      type: "lesson",
      tags: ["Lesson", "Explanation", "Code Example"],
      date: "Oct 26, 2026",
      actionText: "Continue",
      actionIcon: Play,
      link: "/lessons/1",
    },
    {
      id: 2,
      title: "Types of Machine Learning",
      course: "Introduction to Machine Learning • Module 1 • Lesson 4",
      image: "/machine-learning-course.svg",
      type: "lesson",
      tags: ["Video", "Key Concepts", "Notes"],
      date: "Oct 24, 2026",
      actionText: "Continue",
      actionIcon: Play,
      link: "/courses/2",
    },
    {
      id: 3,
      title: "Python Data Type Examples",
      course: "Python Programming for Beginners • Module 2 • Examples",
      iconEmoji: "💻",
      type: "code",
      tags: ["Code", "Practice", "Reference"],
      date: "Oct 22, 2026",
      actionText: "View Code",
      actionIcon: Code2,
      link: "/lessons/1/notes",
    },
    {
      id: 4,
      title: "Important Notes: Python Basics",
      course: "Python Programming for Beginners • Module 1",
      iconEmoji: "📝",
      type: "notes",
      tags: ["Notes", "Summary", "Revision"],
      date: "Oct 20, 2026",
      actionText: "View Notes",
      actionIcon: FileText,
      link: "/lessons/1/notes",
    },
    {
      id: 5,
      title: "Useful Resource: Python Documentation",
      course: "External Resource • Official Python Docs",
      iconEmoji: "🔗",
      type: "resource",
      tags: ["Resource", "Official Docs", "Reference"],
      date: "Oct 18, 2026",
      actionText: "Open Link",
      actionIcon: ExternalLink,
      link: "https://docs.python.org",
      external: true,
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
              <Bookmark className="h-6 w-6 fill-[#4F46E5]" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Bookmarks</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Your saved lessons, videos, explanations, and study materials.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            {[
              { id: "all", label: "All Bookmarks (12)" },
              { id: "lessons", label: "Lessons (5)" },
              { id: "code", label: "Code (3)" },
              { id: "notes", label: "Notes (2)" },
              { id: "resources", label: "Resources (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-4 py-2 transition ${
                  activeTab === tab.id
                    ? "bg-[#4F46E5] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookmarks..."
              className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none"
            />
          </div>
        </div>

        {/* Main Grid: Bookmarks List (8 Cols) vs Collections & Stats (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bookmarked Items (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900">Your Bookmarked Items</h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>Sort by:</span>
                <span className="font-bold text-slate-800 cursor-pointer flex items-center gap-1">
                  Recently Added <ChevronDown className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* List */}
            <div className="space-y-3">
              {BOOKMARKS.map((item) => {
                const ActionIcon = item.actionIcon;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50/50"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="text-indigo-600 mt-1">
                        <Bookmark className="h-4 w-4 fill-[#4F46E5]" />
                      </div>

                      {item.image ? (
                        <div className="relative h-11 w-11 shrink-0 rounded-xl bg-slate-900 overflow-hidden">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                          {item.iconEmoji}
                        </div>
                      )}

                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h3>
                        <p className="text-[11px] text-slate-400">{item.course}</p>

                        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                      <div className="text-[11px] text-slate-400">
                        Bookmarked on <span className="font-medium text-slate-600">{item.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {item.external ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                          >
                            <ActionIcon className="h-3 w-3" />
                            <span>{item.actionText}</span>
                          </a>
                        ) : (
                          <Link
                            href={item.link}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                          >
                            <ActionIcon className="h-3 w-3" />
                            <span>{item.actionText}</span>
                          </Link>
                        )}
                        <button className="text-slate-400 hover:text-slate-600">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
              <span className="text-slate-400 font-medium">Showing 5 of 12 bookmarks</span>
              <div className="flex items-center gap-1">
                <button className="h-7 w-7 rounded-lg border border-slate-200 font-bold hover:bg-slate-50">
                  ←
                </button>
                <button className="h-7 w-7 rounded-lg bg-[#4F46E5] text-white font-bold">
                  1
                </button>
                <button className="h-7 w-7 rounded-lg border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">
                  2
                </button>
                <button className="h-7 w-7 rounded-lg border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">
                  3
                </button>
                <button className="h-7 w-7 rounded-lg border border-slate-200 font-bold hover:bg-slate-50">
                  →
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Collections, Stats & Quick Actions (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Bookmark Collections */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Bookmark Collections
                </h3>
                <button className="text-[11px] font-bold text-[#4F46E5] hover:underline flex items-center gap-1">
                  <Plus className="h-3 w-3" />
                  <span>New Collection</span>
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Folder className="h-4 w-4 text-purple-500 fill-purple-100" />
                    <span>Python Basics</span>
                  </div>
                  <span className="font-bold text-slate-400">5</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Folder className="h-4 w-4 text-blue-500 fill-blue-100" />
                    <span>Machine Learning</span>
                  </div>
                  <span className="font-bold text-slate-400">3</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Folder className="h-4 w-4 text-amber-500 fill-amber-100" />
                    <span>Revision Notes</span>
                  </div>
                  <span className="font-bold text-slate-400">2</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Folder className="h-4 w-4 text-emerald-500 fill-emerald-100" />
                    <span>Important Examples</span>
                  </div>
                  <span className="font-bold text-slate-400">2</span>
                </div>
              </div>
            </div>

            {/* Bookmark Statistics */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Bookmark Statistics
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-[#4F46E5] mb-1">
                    <Bookmark className="h-4 w-4 fill-[#4F46E5]" />
                    <span className="text-base font-extrabold text-slate-900">12</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Total Bookmarks</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-rose-500 mb-1">
                    <Play className="h-4 w-4 fill-rose-500" />
                    <span className="text-base font-extrabold text-slate-900">5</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Lessons &amp; Videos</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-purple-600 mb-1">
                    <Code2 className="h-4 w-4" />
                    <span className="text-base font-extrabold text-slate-900">3</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Code Examples</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-amber-500 mb-1">
                    <FileText className="h-4 w-4" />
                    <span className="text-base font-extrabold text-slate-900">2</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Notes</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Quick Actions
              </h3>

              <div className="space-y-1 text-xs">
                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Play className="h-3.5 w-3.5 text-slate-400" />
                    <span>View Recently Added</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Star className="h-3.5 w-3.5 text-slate-400" />
                    <span>View Most Accessed</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Download className="h-3.5 w-3.5 text-slate-400" />
                    <span>Export Bookmarks</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

