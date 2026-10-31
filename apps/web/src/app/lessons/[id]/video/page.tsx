"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  FileDown,
  Volume2,
  Settings,
  Maximize2,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

export default function VideoLecturePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("video");
  const [activeChapter, setActiveChapter] = useState(0);

  const CHAPTERS = [
    { time: "0:00", title: "Introduction to Variables" },
    { time: "1:45", title: "Creating Variables" },
    { time: "4:10", title: "Data Types in Python" },
    { time: "7:30", title: "Type Checking" },
    { time: "10:20", title: "Real-life Examples" },
  ];

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
              href="/lessons/1"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              ← Previous
            </Link>
            <Link
              href="/lessons/1/notes"
              className="rounded-xl bg-[#4F46E5] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338CA] transition"
            >
              Next →
            </Link>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Variables and Data Types in Python
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
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

        {/* Main Grid: Player + Chapters vs Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Player & Sub-tabs (8 Cols) */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Video Player */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 aspect-video w-full shadow-lg border border-slate-200/50">
              <Image
                src="/video-frame-lecturer.png"
                alt="AI Video Lecture"
                fill
                className="object-cover"
                priority
              />

              {/* Subtitle Banner Overlay */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-xl bg-black/85 px-4 py-2 text-center text-xs font-medium text-white shadow-lg backdrop-blur-sm max-w-lg w-11/12 border border-white/10">
                <p>A variable is like a container that stores a value. In Python, we can store different types of data.</p>
              </div>

              {/* Player Controls */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex flex-col gap-2">
                {/* Scrubber */}
                <div className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden">
                  <div className="h-full bg-[#4F46E5] w-[28%]" />
                </div>
                
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-indigo-400"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 fill-white" />
                      ) : (
                        <Play className="h-4 w-4 fill-white" />
                      )}
                    </button>
                    <span className="font-mono text-[11px]">03:24 / 12:18</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 text-xs">
                    <Volume2 className="h-4 w-4 text-slate-300 cursor-pointer" />
                    <span className="rounded border border-white/30 px-1 text-[10px] font-bold">CC</span>
                    <span className="font-semibold text-slate-300">1x</span>
                    <Settings className="h-4 w-4 text-slate-300 cursor-pointer" />
                    <Maximize2 className="h-4 w-4 text-slate-300 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Sub-Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3 text-xs font-bold text-slate-500">
              {[
                { id: "video", label: "Lecture Video" },
                { id: "transcript", label: "Transcript" },
                { id: "chapters", label: "Chapters" },
                { id: "notes", label: "Notes" },
                { id: "resources", label: "Resources" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-xl px-4 py-2 transition ${
                    activeTab === tab.id
                      ? "bg-[#4F46E5] text-white shadow-sm"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Split Content: Chapters on Left, Notes on Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              
              {/* Lesson Chapters */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lesson Chapters</h3>
                <div className="space-y-1.5 text-xs">
                  {CHAPTERS.map((ch, idx) => (
                    <div
                      key={ch.title}
                      onClick={() => setActiveChapter(idx)}
                      className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition ${
                        activeChapter === idx
                          ? "bg-indigo-50/70 text-[#4F46E5] font-bold"
                          : "text-slate-600 hover:bg-slate-50 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {activeChapter === idx ? (
                          <Play className="h-3 w-3 fill-[#4F46E5]" />
                        ) : (
                          <span className="h-2 w-2 rounded-full border border-slate-300" />
                        )}
                        <span>{ch.title}</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">{ch.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Notes & Key Takeaway */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Video Notes</h3>
                
                <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside leading-relaxed">
                  <li>A variable is a named location in memory used to store data.</li>
                  <li>Python automatically detects the data type.</li>
                  <li>You don&apos;t need to declare the type of a variable.</li>
                  <li>Common data types: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">str</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">int</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">float</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">bool</code>.</li>
                  <li>Use meaningful variable names for better readability.</li>
                </ul>

                {/* Key Takeaway Callout */}
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <span>💡</span> Key Takeaway
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Variables help us store and work with data. Python provides different data types to handle different kinds of information.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Module Playlist & Downloads (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Module 2 Lessons Playlist */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Module 2: Python Fundamentals</h3>
                  <span className="text-[11px] text-slate-400">2/5 lessons completed</span>
                </div>
                <span className="text-xs font-extrabold text-[#4F46E5]">40%</span>
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

            {/* Downloads & Resources */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Downloads &amp; Resources</h3>

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
                    <BookOpen className="h-4 w-4 text-[#4F46E5]" />
                    <div>
                      <div className="font-semibold text-slate-800">Code Files (ZIP)</div>
                      <div className="text-[10px] text-slate-400">1.1 MB</div>
                    </div>
                  </div>
                  <FileDown className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" />
                    <div>
                      <div className="font-semibold text-slate-800">Practice Exercises</div>
                      <div className="text-[10px] text-slate-400">5 questions</div>
                    </div>
                  </div>
                  <FileDown className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
              </div>
            </div>

            {/* Ask AI Tutor */}
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

