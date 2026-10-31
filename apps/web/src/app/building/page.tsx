"use client";

import Link from "next/link";
import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function BuildingCoursePage() {
  const [module2Open, setModule2Open] = useState(true);

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Top Back Link */}
        <div>
          <Link
            href="/create"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#4F46E5] transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Create Course</span>
          </Link>
        </div>

        {/* Header Banner with Mascot */}
        <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-white p-7 lg:p-8 shadow-sm">
          <div className="max-w-xl z-10 relative">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              AI is Creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">
                Your Course
              </span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Sit back while we generate a personalized learning experience based on your request.
              This may take a few minutes.
            </p>
          </div>

          <div className="hidden sm:block absolute right-6 top-3 h-36 w-36">
            <Image
              src="/ai-tutor-mascot.svg"
              alt="AI Mascot"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Progress Stepper (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-7">
            
            {/* Overall Progress Bar */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-2">
                <span>Overall Progress</span>
                <span className="text-[#4F46E5] text-sm font-extrabold">65%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] transition-all duration-1000"
                  style={{ width: "65%" }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500 font-medium">
                Generating your personalized course on{" "}
                <span className="font-bold text-slate-800">&quot;Python Programming for Beginners&quot;</span>...
              </p>
            </div>

            {/* Stepper */}
            <div className="space-y-6">
              
              {/* Step 1: Done */}
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">1. Understanding your request</h3>
                    <p className="text-[11px] text-slate-400">Analyzing topic, level, goals and teaching style...</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-emerald-600">Completed</span>
                    <div className="text-[10px] text-slate-400">5 seconds</div>
                  </div>
                </div>
              </div>

              {/* Step 2: Done */}
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">2. Creating course outline</h3>
                    <p className="text-[11px] text-slate-400">Generating modules, lessons and learning objectives...</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-emerald-600">Completed</span>
                    <div className="text-[10px] text-slate-400">12 seconds</div>
                  </div>
                </div>
              </div>

              {/* Step 3: In Progress with Sub-stepper */}
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-white mt-0.5 shadow-md shadow-indigo-200">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">3. Generating lesson content</h3>
                      <p className="text-[11px] text-slate-400">Creating explanations, examples and notes for each lesson...</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-[#4F46E5]">In progress</span>
                      <div className="text-[10px] text-slate-400">40 seconds</div>
                    </div>
                  </div>

                  {/* Sub-card Stepper Box */}
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-[#4F46E5]" />
                      <span>Generating content for Module 2: Python Fundamentals</span>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-600 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span>Module 1: Introduction to Python (4 lessons)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4F46E5] font-semibold">
                      <Loader2 className="h-3.5 w-3.5 animate-spin shrink-0" />
                      <span>Module 2: Python Fundamentals (generating...)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <span>Module 3: Control Flow (pending)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <span>Module 4: Functions (pending)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <span>Module 5: Projects (pending)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Pending */}
              <div className="flex items-start gap-4 text-slate-400">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-xs font-bold mt-0.5">
                  4
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-500">4. Creating quizzes</h3>
                    <p className="text-[11px] text-slate-400">Generating practice questions and answers...</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">Pending</span>
                </div>
              </div>

              {/* Step 5: Pending */}
              <div className="flex items-start gap-4 text-slate-400">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-xs font-bold mt-0.5">
                  5
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-500">5. Preparing video lectures</h3>
                    <p className="text-[11px] text-slate-400">Generating video scripts and creating narrated slides...</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">Pending</span>
                </div>
              </div>

              {/* Step 6: Pending */}
              <div className="flex items-start gap-4 text-slate-400">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-xs font-bold mt-0.5">
                  6
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-500">6. Finalizing your course</h3>
                    <p className="text-[11px] text-slate-400">Optimizing and saving your personalized learning plan...</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">Pending</span>
                </div>
              </div>

            </div>

            {/* Quick jump to Course */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Outline ready! You can start viewing now.</span>
              <Link
                href="/courses/1"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#4338CA]"
              >
                <span>View Course Overview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: Live Course Preview (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#4F46E5]" />
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Live Course Preview
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-[#4F46E5] animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                Generating...
              </span>
            </div>

            {/* Course Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <div className="relative h-14 w-14 shrink-0 rounded-xl bg-slate-900 overflow-hidden">
                <Image
                  src="/python-course.svg"
                  alt="Python"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Python Programming for Beginners</h3>
                <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                  <span>Beginner</span>
                  <span>•</span>
                  <span>~6 weeks</span>
                  <span>•</span>
                  <span>English</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Learn Python from scratch with real-world examples, hands-on practice, and projects.
            </p>

            {/* Modules List */}
            <div className="space-y-3 pt-2">
              
              {/* Module 1: Completed */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Module 1: Introduction to Python</div>
                      <div className="text-[10px] text-slate-400">4 lessons • Completed</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Module 2: Generating (Open) */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-3.5">
                <div
                  onClick={() => setModule2Open(!module2Open)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Loader2 className="h-4 w-4 text-[#4F46E5] animate-spin" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Module 2: Python Fundamentals</div>
                      <div className="text-[10px] text-[#4F46E5] font-semibold">4 lessons • Generating...</div>
                    </div>
                  </div>
                  {module2Open ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </div>

                {module2Open && (
                  <div className="mt-3 pl-6 space-y-2 border-l-2 border-indigo-200 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">2.1 Variables and Data Types</span>
                      <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between text-[#4F46E5] font-semibold">
                      <span>2.2 Operators in Python</span>
                      <span className="text-[10px]">Generating...</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>2.3 Input and Output</span>
                      <span className="text-[10px]">Pending</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>2.4 Type Conversion</span>
                      <span className="text-[10px]">Pending</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Module 3: Pending */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5">
                <div className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-slate-300" />
                    <div>
                      <div className="text-xs font-bold text-slate-500">Module 3: Control Flow</div>
                      <div className="text-[10px] text-slate-400">5 lessons • Pending</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-300" />
                </div>
              </div>

              {/* Module 4: Pending */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5">
                <div className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-slate-300" />
                    <div>
                      <div className="text-xs font-bold text-slate-500">Module 4: Functions</div>
                      <div className="text-[10px] text-slate-400">5 lessons • Pending</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-300" />
                </div>
              </div>

              {/* Module 5: Pending */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5">
                <div className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-slate-300" />
                    <div>
                      <div className="text-xs font-bold text-slate-500">Module 5: Projects</div>
                      <div className="text-[10px] text-slate-400">6 lessons • Pending</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-300" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </AppShell>
  );
}

