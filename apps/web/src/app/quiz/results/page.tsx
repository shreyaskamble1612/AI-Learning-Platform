"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Trophy,
  RotateCcw,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function QuizResultsPage() {
  const [filter, setFilter] = useState("all");

  const QUESTIONS_REVIEW = [
    { id: 1, text: "What is a variable in Python?", correct: true },
    { id: 2, text: "Which data type is used to store whole numbers?", correct: true },
    { id: 3, text: "Which of the following is a valid variable name in Python?", correct: true },
    { id: 4, text: "What will be the output of type(3.14)?", correct: false },
    { id: 5, text: "Which of the following is a string in Python?", correct: true },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/courses/1" className="hover:text-[#4F46E5] flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" />
            <span>My Courses</span>
          </Link>
          <span>&gt;</span>
          <Link href="/courses/1" className="hover:text-[#4F46E5]">
            Python Programming for Beginners
          </Link>
          <span>&gt;</span>
          <span>Module 2</span>
          <span>&gt;</span>
          <span className="text-slate-800 font-bold">Quiz Results</span>
        </div>

        {/* Header Banner */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-slate-900 overflow-hidden">
              <Image src="/python-course.svg" alt="Python" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Quiz Results</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Variables and Data Types in Python
              </p>

              {/* Badges */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-[#4F46E5]">
                  Module 2: Python Fundamentals
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-600">
                  Variables and Data Types
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-600">
                  10 Questions
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-600">
                  10 Minutes
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-emerald-600 font-bold">
                  Easy-Medium
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Results & Review (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Celebration Score Banner */}
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-purple-50/40 to-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-400/20 text-3xl">
                    🏆
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Great Job! 🎉</h2>
                    <p className="text-xs text-slate-500">You&apos;ve completed the quiz.</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 text-center">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Your Score</div>
                    <div className="text-2xl font-extrabold text-[#4F46E5]">8 / 10</div>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Accuracy</div>
                    <div className="text-2xl font-extrabold text-emerald-600">80%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center gap-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">8</div>
                  <div className="text-[10px] text-slate-400 font-semibold">Correct Answers</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center gap-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">2</div>
                  <div className="text-[10px] text-slate-400 font-semibold">Incorrect Answers</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center gap-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#4F46E5]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">10:00</div>
                  <div className="text-[10px] text-slate-400 font-semibold">Time Taken</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center gap-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 leading-tight">Easy - Med</div>
                  <div className="text-[10px] text-slate-400 font-semibold">Difficulty</div>
                </div>
              </div>
            </div>

            {/* Question Review Accordion */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900">Question Review</h3>
                <div className="relative">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="appearance-none rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-3 pr-8 text-xs font-semibold text-slate-700"
                  >
                    <option value="all">All Questions</option>
                    <option value="correct">Correct Only</option>
                    <option value="incorrect">Incorrect Only</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                {QUESTIONS_REVIEW.map((q) => (
                  <div
                    key={q.id}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:bg-slate-50/70 transition text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 font-mono text-[11px] font-bold text-[#4F46E5]">
                        Q{q.id}
                      </span>
                      <span className="font-semibold text-slate-800">{q.text}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {q.correct ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                      ) : (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white">
                          <XCircle className="h-3.5 w-3.5" />
                        </div>
                      )}
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Performance Analysis & Suggestions (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Performance Analysis Donut */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Performance Analysis
              </h3>

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
                      className="text-emerald-500"
                      strokeDasharray="80, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-base font-extrabold text-slate-900">80%</div>
                    <div className="text-[7px] text-slate-400 font-bold">Score</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Correct Answers</span>
                    </div>
                    <span className="font-bold text-slate-900">8</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      <span>Incorrect Answers</span>
                    </div>
                    <span className="font-bold text-slate-900">2</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span>Total Questions</span>
                    </div>
                    <span className="font-bold text-slate-900">10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic-wise Performance Bars */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Topic-wise Performance
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Variables</span>
                    <span className="text-emerald-600">100%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Data Types</span>
                    <span className="text-[#4F46E5]">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Type Conversion</span>
                    <span className="text-[#4F46E5]">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Suggestions for Improvement */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-base">💡</span>
                <h3 className="text-xs font-bold text-slate-900">AI Suggestions for Improvement</h3>
              </div>

              <div className="space-y-2 text-xs text-slate-600 font-medium leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Revise the concept of type() and data types.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Practice more questions on type conversion.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Try a quiz again to achieve a higher score.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/quiz"
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Retake Quiz</span>
              </Link>

              <Link
                href="/lessons/1"
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#4F46E5] py-3 text-xs font-bold text-white shadow-md shadow-indigo-100 hover:bg-[#4338CA] transition"
              >
                <span>Continue Learning</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

