"use client";

import Link from "next/link";
import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import {
  Play,
  CheckCircle2,
  Trophy,
  Clock,
  Sparkles,
  MessageSquare,
  HelpCircle,
  BookOpen,
  ArrowRight,
  MoreVertical,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-indigo-100/60 bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-white p-7 lg:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Welcome back, <span className="text-[#4F46E5]">Sharvari!</span> 👋
              </h1>
              <p className="mt-1.5 text-sm font-medium text-slate-500">
                Continue learning, achieve more!
              </p>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto">
              <span className="font-serif italic text-lg font-bold text-indigo-900/80 tracking-wide">
                Dream. Learn. Grow.
              </span>
              <div className="relative h-16 w-16">
                <Image
                  src="/ai-tutor-mascot.svg"
                  alt="AI Tutor Mascot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
              <Play className="h-5 w-5 fill-[#4F46E5]" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">3</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Courses Created</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">12</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Lessons Completed</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
              <Trophy className="h-5 w-5 fill-amber-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">85%</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Overall Progress</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">18.5 hrs</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Learning Time</div>
            </div>
          </div>
        </div>

        {/* Middle Section: Continue Learning + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Continue Learning Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                  <Play className="h-3.5 w-3.5 fill-[#4F46E5]" />
                </div>
                <h2 className="text-base font-bold text-slate-900">Continue Learning</h2>
              </div>
              <button aria-label="Course options" className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative h-32 w-full sm:w-44 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-900/5">
                <Image
                  src="/python-course.svg"
                  alt="Python Course"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    Python Programming for Beginners
                  </h3>
                  <div className="mt-2 inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-[#4F46E5]">
                    Module 2 • Lesson 1
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-600">Variables and Data Types</p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>Course Progress</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-start">
              <Link
                href="/lessons/1"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-2.5 text-xs font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-[#4338CA] hover:scale-[1.01]"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                <span>Continue Learning</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <Link
                href="/create"
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Create New Course</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                href="/tutor"
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#6366F1] text-white">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Ask AI Tutor</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                href="/quiz"
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500 text-white">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Take a Quiz</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                href="/courses"
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Browse Resources</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section: My Courses + Progress Ring + Streak Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* My Courses Mini Card */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#4F46E5]" />
                <h2 className="text-sm font-bold text-slate-900">My Courses</h2>
              </div>
              <Link href="/courses" className="text-xs font-bold text-[#4F46E5] hover:underline flex items-center gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-100 p-3.5 flex items-center gap-3.5">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-900 shrink-0">
                <Image
                  src="/machine-learning-course.svg"
                  alt="Machine Learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">Machine Learning Basics</div>
                <div className="text-[11px] text-slate-400">Created 2 days ago • 5 lessons</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "60%" }} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">60%</span>
                </div>
              </div>
              <Link
                href="/courses/1"
                className="rounded-lg bg-[#4F46E5] px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-[#4338CA] shrink-0"
              >
                Continue
              </Link>
            </div>
          </div>

          {/* Learning Progress Ring Mini Card */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-900">Your Learning Progress</h2>
              <Link href="/progress" className="text-xs font-bold text-[#4F46E5] hover:underline flex items-center gap-1">
                View Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="flex items-center gap-6">
              {/* Circular Progress Display */}
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
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
                    strokeDasharray="75, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-lg font-extrabold text-slate-900">75%</div>
                  <div className="text-[8px] font-medium text-slate-400 uppercase tracking-tight">Course Completion</div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 text-xs font-medium text-slate-600">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />
                    <span>Completed</span>
                  </div>
                  <span className="font-bold text-slate-900">18</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-300" />
                    <span>In Progress</span>
                  </div>
                  <span className="font-bold text-slate-900">6</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span>Not Started</span>
                  </div>
                  <span className="font-bold text-slate-900">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Streak Banner Card */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] p-6 text-white shadow-lg shadow-indigo-200 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <h2 className="text-sm font-bold">You&apos;re on a great streak!</h2>
            </div>
            <p className="my-2 text-xs text-indigo-100 leading-relaxed">
              Keep going, Sharvari! Consistent learning unlocks mastery 3x faster.
            </p>
            <Link
              href="/lessons/1"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-2 px-4 text-xs font-bold text-[#4F46E5] shadow-sm transition hover:bg-indigo-50"
            >
              <span>Continue Learning</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </AppShell>
  );
}

