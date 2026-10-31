"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import {
  Sparkles,
  Check,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Play,
  FileText,
  Code2,
  HelpCircle,
  Calendar,
  BarChart2,
  RotateCcw,
} from "lucide-react";

const TEACHING_STYLES = [
  {
    id: "teacher",
    name: "Teacher Style",
    desc: "Step-by-step explanation like a friendly teacher",
    icon: "👩‍🏫",
  },
  {
    id: "animated",
    name: "Animated Style",
    desc: "Visual animations and illustrations",
    icon: "🎨",
  },
  {
    id: "storytelling",
    name: "Storytelling Style",
    desc: "Learn through stories and real-life situations",
    icon: "📖",
  },
  {
    id: "practical",
    name: "Practical Style",
    desc: "Hands-on demonstrations and projects",
    icon: "💻",
  },
  {
    id: "simple",
    name: "Simple Explanation",
    desc: "Easy and simplified explanations",
    icon: "💡",
  },
  {
    id: "professional",
    name: "Professional Style",
    desc: "Detailed and academic explanations",
    icon: "🎓",
  },
];

const PROMPT_CHIPS = [
  "Learn Python programming",
  "Understand Machine Learning",
  "Learn Web Development",
  "Prepare for Interviews",
];

export default function CreateCoursePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState(
    "I want to learn Python programming from beginner to intermediate level. Explain with real-life examples and practical projects."
  );
  const [selectedStyle, setSelectedStyle] = useState("teacher");
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("General Knowledge");
  const [language, setLanguage] = useState("English");
  const [duration, setDuration] = useState("1-3 months");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/building");
  };

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Form (Left 8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-white p-7 lg:p-8 shadow-sm">
            <div className="max-w-md z-10 relative">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-xs font-semibold text-[#4F46E5] mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Create Your Course</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                What do you want{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">
                  to learn?
                </span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Just describe your learning goal and preferences, and AI will create a complete
                personalized course with video lectures, quizzes, and more.
              </p>
            </div>

            <div className="hidden sm:block absolute right-4 top-2 h-44 w-52 pointer-events-none">
              <Image
                src="/create-character.png"
                alt="AI Student"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-7">
            
            {/* Step 1: Prompt */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">
                  1
                </div>
                <label className="text-sm font-bold text-slate-900">
                  Describe what you want to learn
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows={4}
                  maxLength={500}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: I want to learn Python programming from beginner to intermediate level. Explain with real-life examples and practical projects."
                  className="w-full rounded-2xl border border-slate-200 p-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none focus:ring-4 focus:ring-indigo-50"
                />
                <span className="absolute bottom-3 right-4 text-[11px] font-semibold text-slate-400">
                  {prompt.length}/500
                </span>
              </div>

              {/* Try these examples chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-400">Try these examples:</span>
                {PROMPT_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setPrompt(`I want to ${chip.toLowerCase()} from scratch.`)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600 transition hover:border-[#4F46E5] hover:bg-indigo-50 hover:text-[#4F46E5]"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Teaching Style */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">
                    2
                  </div>
                  <label className="text-sm font-bold text-slate-900">
                    Choose your teaching style
                  </label>
                </div>
                <span className="text-xs text-slate-400 font-medium">You can select the style that suits you best.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TEACHING_STYLES.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <div
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`relative flex flex-col justify-between rounded-2xl border p-4 text-left cursor-pointer transition-all ${
                        isSelected
                          ? "border-[#4F46E5] bg-indigo-50/40 shadow-sm"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="text-2xl mb-2">{style.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{style.name}</div>
                        <div className="mt-1 text-[11px] text-slate-500 leading-tight">
                          {style.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Steps 3-6: Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] text-white">
                    3
                  </span>
                  Your current level
                </label>
                <div className="relative">
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] text-white">
                    4
                  </span>
                  Your learning goal
                </label>
                <div className="relative">
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                  >
                    <option>General Knowledge</option>
                    <option>Career Transition</option>
                    <option>Academic Exam</option>
                    <option>Build a Project</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] text-white">
                    5
                  </span>
                  Preferred language
                </label>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                    <option>German</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] text-white">
                    6
                  </span>
                  Expected duration
                </label>
                <div className="relative">
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                  >
                    <option>1-3 months</option>
                    <option>2-4 weeks</option>
                    <option>3-6 months</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-[#4338CA] hover:scale-[1.01] active:scale-[0.99]"
              >
                <Sparkles className="h-4 w-4" />
                <span>Generate My Course</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2 text-center text-xs text-slate-400">
                ✦ AI will create a complete course with modules, lessons, video lectures, quizzes and a personalized learning plan.
              </p>
            </div>

          </form>

        </div>

        {/* Right Sidebar: Preview & Outcome (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Course Preview */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>👁</span> Course Preview (Example)
            </h2>
            <div className="text-xs font-semibold text-slate-600 mb-3">Here&apos;s what you&apos;ll get:</div>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span>Structured course with modules and lessons</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                  <Play className="h-4 w-4 fill-rose-500" />
                </div>
                <span>AI-generated video lectures</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <FileText className="h-4 w-4" />
                </div>
                <span>Easy-to-understand explanations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                  <Code2 className="h-4 w-4" />
                </div>
                <span>Real-world examples and practice</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <span>Quizzes and exercises</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-500">
                  <Calendar className="h-4 w-4" />
                </div>
                <span>Personalized learning plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <span>Track your progress</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                  <RotateCcw className="h-4 w-4" />
                </div>
                <span>Revise and revisit anytime</span>
              </div>
            </div>
          </div>

          {/* Sample Course Outcome */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              Sample Course Outcome
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 shrink-0 rounded-xl bg-slate-900 overflow-hidden">
                <Image
                  src="/python-course.svg"
                  alt="Python"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight">
                  Python Programming for Beginners
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>5 Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>24 Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>Video lectures (5–10 min each)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>Quizzes after each lesson</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>Practice projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                <span>Estimated duration: 1–3 months</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AppShell>
  );
}

