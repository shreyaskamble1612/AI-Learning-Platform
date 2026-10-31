"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  BarChart2,
  CheckCircle2,
  Clock,
  Flame,
  ChevronDown,
  Trophy,
  Star,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";

export default function ProgressDashboardPage() {
  const [timeRange, setTimeRange] = useState("30");

  const DAYS = [
    { day: "Mon", height: "35%" },
    { day: "Tue", height: "30%" },
    { day: "Wed", height: "55%" },
    { day: "Thu", height: "70%" },
    { day: "Fri", height: "60%" },
    { day: "Sat", height: "95%" },
    { day: "Sun", height: "75%" },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
                <BarChart2 className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Learning Progress Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Track your learning journey, course progress, and achievements.
                </p>
              </div>
            </div>

            <div className="relative self-start sm:self-auto">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="appearance-none rounded-2xl border border-slate-200 bg-slate-50 py-2 pl-4 pr-9 text-xs font-bold text-slate-700"
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 flex items-center gap-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
              <span className="text-2xl">📗</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">3</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Courses in Progress</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 flex items-center gap-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">12</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Lessons Completed</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 flex items-center gap-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">6.5 hrs</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Total Study Time</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 flex items-center gap-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
              <Flame className="h-6 w-6 fill-amber-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">7 Days</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">Learning Streak</div>
            </div>
          </div>
        </div>

        {/* Middle Row: Overall Progress + Weekly Activity + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Overall Progress (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Overall Progress</h2>

            <div className="flex items-center gap-6 my-2">
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
                    className="text-emerald-500"
                    strokeDasharray="60, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-xl font-extrabold text-slate-900">60%</div>
                  <div className="text-[7px] text-slate-400 font-bold uppercase">Overall Completion</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  You&apos;re making great progress! 🎉
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  You&apos;ve completed 12 of 20 lessons across all your courses.
                </p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+15% progress in the last 7 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Activity Bar Chart (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Learning Activity</h2>

            {/* Custom Bar Graph */}
            <div className="flex items-end justify-between gap-2 h-28 pt-2">
              {DAYS.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div
                    className="w-full max-w-[20px] rounded-t-lg bg-[#4F46E5] hover:bg-[#4338CA] transition-all cursor-pointer"
                    style={{ height: d.height }}
                  />
                  <span className="text-[10px] font-semibold text-slate-400">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Achievements</h2>
              <span className="text-[11px] font-bold text-[#4F46E5] hover:underline cursor-pointer">
                View All →
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">First Course Started</div>
                    <div className="text-[10px] text-slate-400">You started your first AI course!</div>
                  </div>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Flame className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">7-Day Learning Streak</div>
                    <div className="text-[10px] text-slate-400">Learned for 7 consecutive days!</div>
                  </div>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Quiz Ace</div>
                    <div className="text-[10px] text-slate-400">Scored 80% or higher in a quiz!</div>
                  </div>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
            </div>
          </div>

        </div>

        {/* Lower Row: Courses breakdown + Progress Trends Line Chart + Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* My Courses Breakdown (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">My Courses</h2>
              <Link href="/courses" className="text-[11px] font-bold text-[#4F46E5] hover:underline">
                View All Courses →
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900">Python Programming for Beginners</div>
                  <Link href="/lessons/1" className="text-[11px] font-bold text-[#4F46E5]">
                    Continue →
                  </Link>
                </div>
                <div className="text-[10px] text-slate-400">6 of 10 lessons completed</div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              <div className="p-3 rounded-2xl border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900">Data Science Fundamentals</div>
                  <Link href="/courses/3" className="text-[11px] font-bold text-[#4F46E5]">
                    Continue →
                  </Link>
                </div>
                <div className="text-[10px] text-slate-400">3 of 8 lessons completed</div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "38%" }} />
                </div>
              </div>

              <div className="p-3 rounded-2xl border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900">Introduction to Machine Learning</div>
                  <Link href="/courses/2" className="text-[11px] font-bold text-[#4F46E5]">
                    Continue →
                  </Link>
                </div>
                <div className="text-[10px] text-slate-400">3 of 5 lessons completed</div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Trends Line Chart (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Progress Trends</h2>
            
            <div className="relative h-44 w-full flex flex-col justify-end">
              <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 100">
                <line x1="0" y1="20" x2="300" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                <polyline
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="15,90 95,70 175,55 255,25"
                />
                <circle cx="15" cy="90" r="4" fill="#4F46E5" />
                <circle cx="95" cy="70" r="4" fill="#4F46E5" />
                <circle cx="175" cy="55" r="4" fill="#4F46E5" />
                <circle cx="255" cy="25" r="5" fill="#4F46E5" />
              </svg>

              <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-2 mt-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4 (60%)</span>
              </div>
            </div>
          </div>

          {/* Learning Insights (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base">💡</span>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Learning Insights</h2>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 font-medium leading-relaxed">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Your progress increased by 15% this week.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>You are most active on weekends.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Your quiz average is 82%.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Keep going! You are on track to complete your goals.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Goals Bar */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
            <Target className="h-4 w-4 text-[#4F46E5]" />
            <span>My Learning Goals</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1.5">
                <span>Complete 5 courses</span>
                <span>3 / 5</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "60%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1.5">
                <span>Study 10 hours this week</span>
                <span>6.5 / 10 hrs</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "65%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1.5">
                <span>Maintain a 14-day streak</span>
                <span>7 / 14 days</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </AppShell>
  );
}

