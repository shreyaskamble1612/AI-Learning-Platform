"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  CheckCircle2,
  Play,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Globe,
  User,
  HelpCircle,
  FileText,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CourseOverviewPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/history"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#4F46E5] transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to My Courses</span>
          </Link>
        </div>

        {/* Course Header Banner */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Python Programming for Beginners
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
                Learn Python from scratch with real-world examples, hands-on practice, and projects.
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-600">
                  Beginner
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[#4F46E5]">
                  <BookOpen className="h-3.5 w-3.5" />
                  6 Modules
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[#4F46E5]">
                  <Play className="h-3 w-3 fill-[#4F46E5]" />
                  24 Lessons
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[#4F46E5]">
                  <Clock className="h-3.5 w-3.5" />
                  ~ 6 Weeks
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[#4F46E5]">
                  <Globe className="h-3.5 w-3.5" />
                  English
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-purple-600">
                  <User className="h-3.5 w-3.5" />
                  Teacher Style
                </span>
              </div>
            </div>

            {/* Video Intro Card */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-video shadow-md group">
                <Image
                  src="/video-frame-lesson.png"
                  alt="Course Preview"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link
                    href="/lessons/1/video"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-lg transition transform group-hover:scale-110"
                  >
                    <Play className="h-5 w-5 fill-white ml-0.5" />
                  </Link>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white">
                  <span>Watch Intro</span>
                  <span className="text-slate-300">• 2:15</span>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
            {[
              { id: "overview", label: "Course Overview" },
              { id: "modules", label: "Modules & Lessons" },
              { id: "resources", label: "Learning Resources" },
              { id: "quizzes", label: "Quizzes" },
              { id: "notes", label: "Notes" },
              { id: "discussion", label: "Discussion" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-xl px-4 py-2 transition ${
                  activeTab === tab.id
                    ? "bg-[#4F46E5] text-white shadow-sm"
                    : "hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modules & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Modules Accordion (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#4F46E5]" />
                <h2 className="text-sm font-bold text-slate-900">Course Modules</h2>
              </div>
              <button
                onClick={() => setExpandedModule(expandedModule ? null : 1)}
                className="text-xs font-bold text-[#4F46E5] hover:underline"
              >
                {expandedModule ? "Collapse All" : "Expand All ˅"}
              </button>
            </div>

            {/* Module 1: Intro (Expanded) */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div
                onClick={() => setExpandedModule(expandedModule === 1 ? null : 1)}
                className="flex items-center justify-between p-5 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#4F46E5] text-xs font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Introduction to Python</h3>
                    <p className="text-xs text-slate-400">Understand what Python is, its applications, and how to set it up.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-500">3/4 lessons</span>
                    <span className="ml-2 text-xs font-bold text-[#4F46E5]">75%</span>
                  </div>
                  {expandedModule === 1 ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </div>
              </div>

              {expandedModule === 1 && (
                <div className="divide-y divide-slate-100 px-5 pb-3 pt-1">
                  
                  {/* Lesson 1.1 */}
                  <div className="flex items-center justify-between py-3.5 text-xs">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-semibold text-slate-800">1.1 What is Python?</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400 font-medium">6 min</span>
                      <Link
                        href="/lessons/1"
                        className="rounded-lg border border-slate-200 px-3 py-1 font-semibold text-slate-600 hover:bg-slate-50"
                      >
                        Watch Again
                      </Link>
                    </div>
                  </div>

                  {/* Lesson 1.2 */}
                  <div className="flex items-center justify-between py-3.5 text-xs">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-semibold text-slate-800">1.2 Applications of Python</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400 font-medium">8 min</span>
                      <Link
                        href="/lessons/1"
                        className="rounded-lg border border-slate-200 px-3 py-1 font-semibold text-slate-600 hover:bg-slate-50"
                      >
                        Watch Again
                      </Link>
                    </div>
                  </div>

                  {/* Lesson 1.3 (Active) */}
                  <div className="flex items-center justify-between py-3.5 text-xs bg-indigo-50/40 -mx-5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                        <Play className="h-2 w-2 fill-white" />
                      </div>
                      <span className="font-bold text-[#4F46E5]">1.3 Installing Python</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 font-medium">10 min</span>
                      <Link
                        href="/lessons/1"
                        className="rounded-lg bg-[#4F46E5] px-3.5 py-1 text-white font-bold hover:bg-[#4338CA] shadow-sm"
                      >
                        Continue Lesson
                      </Link>
                    </div>
                  </div>

                  {/* Lesson 1.4 */}
                  <div className="flex items-center justify-between py-3.5 text-xs">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="h-4 w-4 rounded-full border border-slate-300" />
                      <span>1.4 Your First Python Program</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400 font-medium">12 min</span>
                      <span className="rounded-lg bg-slate-100 px-3 py-1 font-medium text-slate-500">
                        Not Started
                      </span>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Modules 2 to 6 */}
            {[
              { id: 2, name: "Python Fundamentals", desc: "Learn variables, data types, operators and basic input-output.", lessons: "0/5 lessons" },
              { id: 3, name: "Conditional Statements", desc: "Make decisions in Python using if, else and elif.", lessons: "0/4 lessons" },
              { id: 4, name: "Loops", desc: "Automate tasks using for and while loops.", lessons: "0/4 lessons" },
              { id: 5, name: "Functions", desc: "Organize your code with functions and parameters.", lessons: "0/4 lessons" },
              { id: 6, name: "Projects", desc: "Build real-world projects to apply your knowledge.", lessons: "0/3 lessons" },
            ].map((m) => (
              <div key={m.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-500">
                      {m.id}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">{m.name}</h3>
                      <p className="text-xs text-slate-400">{m.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-400 font-medium">{m.lessons}</span>
                    <span className="text-xs font-semibold text-slate-400">0%</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Right Sidebar: Progress, Goals, Style (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Your Progress */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Your Progress</h2>
              
              <div className="flex items-center gap-5">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                  <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#4F46E5]"
                      strokeDasharray="12, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-base font-extrabold text-slate-900">12%</div>
                    <div className="text-[7px] text-slate-400 uppercase font-semibold">Course Completion</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    <span>3 / 24 Lessons Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#4F46E5]" />
                    <span>2 Quizzes Taken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <span>85% Average Quiz Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-rose-500" />
                    <span>1h 20m Total Learning Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span>🎯</span> Learning Goals
              </h2>
              <div className="space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Understand Python fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Write and run Python programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Build small projects</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                  <span>Gain confidence in problem solving</span>
                </div>
              </div>
            </div>

            {/* Teaching Style Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#4F46E5]" />
                  Teaching Style
                </h2>
                <Link href="/settings" className="text-[11px] font-bold text-[#4F46E5] hover:underline">
                  Change Style
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">👩‍🏫</span>
                <div>
                  <div className="text-xs font-bold text-slate-900">Teacher Style</div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Step-by-step explanations like a friendly teacher with real examples.
                  </p>
                </div>
              </div>
            </div>

            {/* Big Action Button */}
            <Link
              href="/lessons/1"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#4F46E5] py-4 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-[#4338CA] hover:scale-[1.01]"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>Continue Learning</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

