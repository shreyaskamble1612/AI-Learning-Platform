"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  Clock,
  Search,
  Play,
  Bookmark,
  MoreVertical,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Archive,
  ChevronDown,
  RotateCcw,
  Download,
  Trash2,
} from "lucide-react";

export default function CourseHistoryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const COURSES = [
    {
      id: 1,
      name: "Python Programming for Beginners",
      meta: "10 lessons • 10 hrs",
      image: "/python-course.svg",
      status: "In Progress",
      progress: 60,
      lastAccessed: "Oct 26, 2026",
      link: "/courses/1",
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      meta: "8 lessons • 8 hrs",
      image: "/data-science-course.svg",
      status: "In Progress",
      progress: 38,
      lastAccessed: "Oct 24, 2026",
      link: "/courses/3",
    },
    {
      id: 3,
      name: "Introduction to Machine Learning",
      meta: "5 lessons • 6 hrs",
      image: "/machine-learning-course.svg",
      status: "In Progress",
      progress: 60,
      lastAccessed: "Oct 22, 2026",
      link: "/courses/2",
    },
    {
      id: 4,
      name: "Web Development with HTML & CSS",
      meta: "12 lessons • 12 hrs",
      image: "/web-development-course.svg",
      status: "Completed",
      progress: 100,
      lastAccessed: "Oct 18, 2026",
      link: "/courses/4",
    },
    {
      id: 5,
      name: "Statistics for Beginners",
      meta: "8 lessons • 7 hrs",
      image: "/statistics-course.svg",
      status: "Completed",
      progress: 100,
      lastAccessed: "Oct 10, 2026",
      link: "/courses/5",
    },
    {
      id: 6,
      name: "Basics of Artificial Intelligence",
      meta: "6 lessons • 6 hrs",
      image: "/artificial-intelligence-course.svg",
      status: "Completed",
      progress: 100,
      lastAccessed: "Oct 05, 2026",
      link: "/courses/6",
    },
    {
      id: 7,
      name: "SQL for Data Analysis",
      meta: "5 lessons • 5 hrs",
      image: "/sql-course.svg",
      status: "Archived",
      progress: 0,
      lastAccessed: "Sep 28, 2026",
      link: "#",
    },
    {
      id: 8,
      name: "Effective Study Techniques",
      meta: "4 lessons • 3 hrs",
      image: "/study-techniques-course.svg",
      status: "Archived",
      progress: 0,
      lastAccessed: "Sep 20, 2026",
      link: "#",
    },
  ];

  const filtered = COURSES.filter((c) => {
    if (activeTab === "completed") return c.status === "Completed";
    if (activeTab === "progress") return c.status === "In Progress";
    if (activeTab === "archived") return c.status === "Archived";
    return true;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Course History</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                View all your generated courses, past learning, and previously accessed lessons.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            {[
              { id: "all", label: "All Courses (8)" },
              { id: "completed", label: "Completed (3)" },
              { id: "progress", label: "In Progress (3)" },
              { id: "archived", label: "Archived (2)" },
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
              placeholder="Search in your courses..."
              className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none"
            />
          </div>
        </div>

        {/* Main Grid: Table (8 Cols) vs Summaries (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Course History Table (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
              <h2 className="text-sm font-bold text-slate-900 mb-4">Your Course History</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-100 bg-slate-50/60 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Course Name</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Progress</th>
                      <th className="py-3 px-4">Last Accessed</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {filtered.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-9 w-9 shrink-0 rounded-xl bg-slate-900 overflow-hidden">
                              <Image src={c.image} alt={c.name} fill className="object-cover" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">{c.name}</div>
                              <div className="text-[10px] text-slate-400">{c.meta}</div>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {c.status === "In Progress" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
                              ✓ In Progress
                            </span>
                          )}
                          {c.status === "Completed" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-[#4F46E5]">
                              ✓ Completed
                            </span>
                          )}
                          {c.status === "Archived" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                              Archived
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {c.status === "Archived" ? (
                            <span className="text-slate-400 font-mono">—</span>
                          ) : (
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-16 rounded-full bg-slate-100 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    c.progress === 100 ? "bg-emerald-500" : "bg-[#4F46E5]"
                                  }`}
                                  style={{ width: `${c.progress}%` }}
                                />
                              </div>
                              <span className="text-[11px] font-bold text-slate-700">{c.progress}%</span>
                            </div>
                          )}
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 text-[11px]">
                          {c.lastAccessed}
                        </td>

                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            <Link
                              href={c.link}
                              className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition"
                            >
                              <Play className="h-3 w-3 fill-current" />
                            </Link>
                            <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600">
                              <Bookmark className="h-3 w-3" />
                            </button>
                            <button className="text-slate-400 hover:text-slate-600">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Completed Courses Showcase Cards */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">🏆</span>
                  <h3 className="text-sm font-bold text-slate-900">Completed Courses (3)</h3>
                </div>
                <span className="text-xs font-bold text-[#4F46E5] hover:underline cursor-pointer">
                  View All Completed →
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white mb-2">
                      &lt;/&gt;
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      Web Development with HTML &amp; CSS
                    </div>
                    <div className="mt-1 text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>✓ Completed on Oct 18, 2026</span>
                    </div>
                  </div>
                  <Link href="/courses/4" className="mt-4 text-[11px] font-bold text-[#4F46E5] hover:underline">
                    Review →
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white mb-2">
                      📊
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      Statistics for Beginners
                    </div>
                    <div className="mt-1 text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>✓ Completed on Oct 10, 2026</span>
                    </div>
                  </div>
                  <Link href="/courses/5" className="mt-4 text-[11px] font-bold text-[#4F46E5] hover:underline">
                    Review →
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500 text-white mb-2">
                      🤖
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      Basics of Artificial Intelligence
                    </div>
                    <div className="mt-1 text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>✓ Completed on Oct 05, 2026</span>
                    </div>
                  </div>
                  <Link href="/courses/6" className="mt-4 text-[11px] font-bold text-[#4F46E5] hover:underline">
                    Review →
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Recent Lessons, Summary & Quick Actions (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Recently Accessed Lessons */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Recently Accessed Lessons
                </h3>
                <span className="text-[11px] font-bold text-[#4F46E5] hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <Link
                  href="/lessons/1"
                  className="flex items-center justify-between rounded-xl p-2 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Play className="h-3.5 w-3.5 text-[#4F46E5] fill-[#4F46E5]" />
                    <div>
                      <div className="font-bold text-slate-800">Variables and Data Types in Python</div>
                      <div className="text-[10px] text-slate-400">Python Programming • Module 2 • Lesson 3</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">Oct 26</span>
                </Link>

                <div className="flex items-center justify-between rounded-xl p-2 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Play className="h-3.5 w-3.5 text-[#4F46E5] fill-[#4F46E5]" />
                    <div>
                      <div className="font-bold text-slate-800">Introduction to NumPy</div>
                      <div className="text-[10px] text-slate-400">Data Science Fundamentals • Module 1 • Lesson 2</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">Oct 24</span>
                </div>

                <div className="flex items-center justify-between rounded-xl p-2 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Play className="h-3.5 w-3.5 text-[#4F46E5] fill-[#4F46E5]" />
                    <div>
                      <div className="font-bold text-slate-800">What is Machine Learning?</div>
                      <div className="text-[10px] text-slate-400">Machine Learning • Module 1 • Lesson 1</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">Oct 22</span>
                </div>
              </div>
            </div>

            {/* Learning Summary */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Learning Summary
                </h3>
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                  All Time <ChevronDown className="h-3 w-3" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-[#4F46E5] mb-1">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-base font-extrabold text-slate-900">8</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Total Courses</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-base font-extrabold text-slate-900">3</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Completed</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-[#4F46E5] mb-1">
                    <Play className="h-4 w-4 fill-current" />
                    <span className="text-base font-extrabold text-slate-900">3</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">In Progress</div>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Archive className="h-4 w-4" />
                    <span className="text-base font-extrabold text-slate-900">2</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Archived</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Quick Actions
              </h3>

              <div className="space-y-1 text-xs">
                <Link
                  href="/lessons/1"
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Play className="h-3.5 w-3.5 text-slate-400" />
                    <span>Continue Last Course</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </Link>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                    <span>Revisit Completed Courses</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Archive className="h-3.5 w-3.5 text-slate-400" />
                    <span>Manage Archived Courses</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Download className="h-3.5 w-3.5 text-slate-400" />
                    <span>Download Course Notes</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition">
                  <div className="flex items-center gap-2.5">
                    <Trash2 className="h-3.5 w-3.5 text-rose-500" />
                    <span>Delete Course History</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-rose-400" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

