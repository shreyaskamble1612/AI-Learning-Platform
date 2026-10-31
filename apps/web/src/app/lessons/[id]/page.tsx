"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Copy,
  Check,
  FileDown,
  ExternalLink,
  MessageSquare,
  Sparkles,
  BookOpen,
  HelpCircle,
  Code2,
  FileText,
} from "lucide-react";

export default function LessonDetailsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`name = "Sharvari"\nage = 20\nis_student = True`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
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
            <span className="text-slate-800 font-bold">Lesson 2</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/courses/1"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              ← Previous
            </Link>
            <Link
              href="/lessons/1/video"
              className="rounded-xl bg-[#4F46E5] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338CA] transition"
            >
              Next →
            </Link>
          </div>
        </div>

        {/* Lesson Title & Tags */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Variables and Data Types in Python
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-3xl">
            Learn how to store data in variables and understand different data types in Python with
            practical examples and real-life use cases.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
            <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-[#4F46E5]">
              Module 2: Python Fundamentals
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-600">
              Lesson 2 of 5
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-600">
              12 min
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-emerald-600">
              Beginner
            </span>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 aspect-video max-h-[460px] w-full shadow-lg border border-slate-200/50">
          <Image
            src="/video-frame-lesson.png"
            alt="Variables and Data Types Video Lecture"
            fill
            className="object-cover"
          />

          {/* Interactive Player Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-5">
            <div className="flex justify-between items-center text-xs text-white/90">
              <span className="font-bold tracking-wide">Variables: store data</span>
              <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-mono">720p HD</span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden">
                <div className="h-full bg-[#4F46E5] w-[28%]" />
              </div>
              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-4">
                  <button type="button" aria-label="Play video" className="hover:text-indigo-400">
                    <Play className="h-4 w-4 fill-white" />
                  </button>
                  <span className="font-mono text-[11px]">03:24 / 12:18</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="border border-white/30 rounded px-1 text-[10px]">CC</span>
                  <span>1x</span>
                  <Link
                    href="/lessons/1/video"
                    className="hover:text-indigo-400 font-bold flex items-center gap-1"
                  >
                    <span>Full Lecture</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3 text-xs font-bold text-slate-500">
          <Link
            href="/lessons/1"
            className="shrink-0 rounded-xl bg-[#4F46E5] px-4 py-2 text-white shadow-sm flex items-center gap-2"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Explanation</span>
          </Link>
          <Link
            href="/lessons/1/notes"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>&lt;/&gt; Examples</span>
          </Link>
          <Link
            href="/lessons/1/notes"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Key Concepts</span>
          </Link>
          <Link
            href="/lessons/1/notes"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Notes</span>
          </Link>
          <Link
            href="/quiz"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Quiz</span>
          </Link>
        </div>

        {/* Content & Right Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Explanation Body (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-6">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. What are Variables?</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Variables are used to store data in Python. You can think of a variable as a
                container that holds a value, which can be changed later.
              </p>

              {/* Callout */}
              <div className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-xs text-slate-700 flex items-start gap-2.5">
                <span className="text-base">💡</span>
                <p>
                  <strong className="font-semibold text-slate-900">Example:</strong> If you want to store your name, you can create a variable called <code className="bg-white px-1.5 py-0.5 rounded border border-indigo-200 font-mono text-[#4F46E5]">name</code> and assign your name to it.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Creating Variables</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                In Python, you don&apos;t need to declare the type of a variable. You can simply
                assign a value using the <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono font-bold">=</code> operator.
              </p>

              {/* Code Box */}
              <div className="overflow-hidden rounded-2xl bg-slate-900 text-slate-200">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 text-xs text-slate-400">
                  <span className="font-mono">Python</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded px-2 py-0.5 hover:bg-slate-800 text-slate-300 transition"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs leading-relaxed text-indigo-300">
                  <span className="text-slate-500"># Creating variables</span>{"\n"}
                  <span className="text-sky-300">name</span> = <span className="text-emerald-300">&quot;Sharvari&quot;</span>{"\n"}
                  <span className="text-sky-300">age</span> = <span className="text-amber-300">20</span>{"\n"}
                  <span className="text-sky-300">is_student</span> = <span className="text-purple-300">True</span>
                </pre>
              </div>
            </div>

            {/* Link to notes/examples */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Ready for code examples and practice?</span>
              <Link
                href="/lessons/1/notes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] hover:underline"
              >
                <span>View Full Notes &amp; Examples</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Sidebar: Module Lessons & Resources (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Lesson Progress */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lesson Progress</h3>
                  <div className="text-lg font-bold text-slate-900 mt-1">40%</div>
                </div>
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
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
                      strokeDasharray="40, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-slate-700">In Progress</span>
                </div>
              </div>
            </div>

            {/* Module 2 Lessons */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Module 2: Python Fundamentals</h3>
                  <span className="text-[11px] text-slate-400">2/5 lessons completed</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <Link
                  href="/lessons/1"
                  className="flex items-center justify-between rounded-xl p-2 text-slate-700 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>2.1 Variables and Data Types</span>
                  </div>
                  <span className="text-[11px] text-slate-400">8 min</span>
                </Link>

                <div className="flex items-center justify-between rounded-xl bg-indigo-50/60 p-2 font-bold text-[#4F46E5]">
                  <div className="flex items-center gap-2">
                    <Play className="h-3.5 w-3.5 fill-[#4F46E5]" />
                    <span>2.2 Variables and Data Types</span>
                  </div>
                  <span className="text-[11px]">12 min</span>
                </div>

                <div className="flex items-center justify-between rounded-xl p-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                    <span>2.3 Operators in Python</span>
                  </div>
                  <span className="text-[11px]">10 min</span>
                </div>

                <div className="flex items-center justify-between rounded-xl p-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                    <span>2.4 Input and Output</span>
                  </div>
                  <span className="text-[11px]">12 min</span>
                </div>

                <div className="flex items-center justify-between rounded-xl p-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                    <span>2.5 Type Conversion</span>
                  </div>
                  <span className="text-[11px]">8 min</span>
                </div>
              </div>
            </div>

            {/* Lesson Resources */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lesson Resources</h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-rose-500" />
                    <div>
                      <div className="font-semibold text-slate-800">Lesson Slides (PDF)</div>
                      <div className="text-[10px] text-slate-400">2.4 MB</div>
                    </div>
                  </div>
                  <FileDown className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="h-4 w-4 text-[#4F46E5]" />
                    <div>
                      <div className="font-semibold text-slate-800">Code Files (ZIP)</div>
                      <div className="text-[10px] text-slate-400">1.1 MB</div>
                    </div>
                  </div>
                  <FileDown className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="font-semibold text-slate-800">Additional Examples</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
              </div>
            </div>

            {/* Ask AI Tutor Card */}
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 p-5 text-center">
              <div className="flex justify-center mb-2">
                <div className="relative h-12 w-12">
                  <Image src="/ai-tutor-mascot.svg" alt="Tutor" fill className="object-contain" />
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900">Need Help?</h4>
              <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                Ask our AI Tutor if you have any doubts about this lesson.
              </p>
              <Link
                href="/tutor"
                className="mt-3 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#4F46E5] py-2 text-xs font-bold text-white shadow-sm hover:bg-[#4338CA] transition"
              >
                <span>Ask AI Tutor</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

