"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Sparkles, FileText, ArrowRight, UserCheck, Play, CheckCircle2, MessageSquare } from "lucide-react";

const EXAMPLES = [
  "Learn Python programming",
  "Understand Machine Learning",
  "Learn Web Development",
];

export default function LandingPage() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      router.push(`/create?prompt=${encodeURIComponent(prompt)}`);
    } else {
      router.push("/create");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white pt-12 pb-20 lg:pt-16 lg:pb-24">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Column: Headline & Prompt */}
            <div className="lg:col-span-6 z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-[#4F46E5] mb-6">
                <Sparkles className="h-3.5 w-3.5 text-[#4F46E5]" />
                <span>AI-Powered Personalized Learning</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[62px] leading-[1.12]">
                Learn Anything, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899]">
                  Your Way
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Just tell us what you want to learn, and AI will create a complete personalized
                course with video lectures, quizzes and an AI tutor — designed for your goals and
                learning style.
              </p>

              {/* Prompt Input Form */}
              <form onSubmit={handleGenerate} className="mt-8 max-w-xl">
                <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-indigo-50/80 focus-within:border-[#4F46E5] focus-within:ring-4 focus-within:ring-indigo-100/50 transition gap-2 sm:gap-0">
                  <div className="flex items-center flex-1">
                    <div className="pl-3 pr-2 text-indigo-400 shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="What do you want to learn?"
                      className="w-full bg-transparent px-2 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 shrink-0 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-300/40 transition hover:bg-[#4338CA] hover:scale-[1.01] active:scale-[0.99] w-full sm:w-auto"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Generate Course</span>
                  </button>
                </div>

                {/* Example chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium text-slate-400">Try examples:</span>
                  {EXAMPLES.map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => setPrompt(example)}
                      className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-slate-600 transition hover:border-[#4F46E5] hover:bg-indigo-50 hover:text-[#4F46E5]"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </form>
            </div>

            {/* Right Column: Hero Graphic Preview */}
            <div className="lg:col-span-6 z-10 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-2xl shadow-indigo-100">
                  <Image
                    src="/hero-mockup.png"
                    alt="LearnAI Platform Preview"
                    width={780}
                    height={480}
                    className="w-full rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Badges Bar */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="flex items-center gap-4 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Personalized Courses</h2>
                <p className="text-xs text-slate-500">Created from your prompt</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                <Play className="h-6 w-6 fill-rose-500" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Engaging Video Lectures</h2>
                <p className="text-xs text-slate-500">In multiple teaching styles</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Practice & Quizzes</h2>
                <p className="text-xs text-slate-500">Track your progress</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">AI Tutor</h2>
                <p className="text-xs text-slate-500">Get instant help anytime</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-50/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[#4F46E5]">1K+</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Happy Learners</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#4F46E5]">10K+</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Courses Created</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#4F46E5]">95%</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#4F46E5]">4.8/5</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
