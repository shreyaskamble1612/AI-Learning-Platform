"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Sparkles, User, Mail, Lock, Eye, EyeOff, BookOpen, Play, CheckCircle2, MessageSquare } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("Sharvari Patil");
  const [email, setEmail] = useState("sharvari.patil@example.com");
  const [password, setPassword] = useState("Password@123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-white">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Benefits & Graphic */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-[#4F46E5] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start Your Learning Journey</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
              Create Your Account <br />
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">
                Start Learning
              </span>
            </h1>

            <p className="mt-4 text-base text-slate-600 max-w-xl">
              Join LearnAI and get access to personalized courses, video lectures, quizzes, and an AI
              tutor — all created just for you.
            </p>

            {/* Feature List */}
            <div className="mt-8 space-y-4 max-w-lg">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#4F46E5]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Personalized Courses</h2>
                  <p className="text-xs text-slate-500">Generated from your prompt</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Play className="h-5 w-5 fill-rose-500" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Engaging Video Lectures</h2>
                  <p className="text-xs text-slate-500">In multiple teaching styles</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Practice & Quizzes</h2>
                  <p className="text-xs text-slate-500">Track your progress</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">AI Tutor Support</h2>
                  <p className="text-xs text-slate-500">Get instant help anytime</p>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="mt-8 overflow-hidden rounded-2xl max-w-lg">
              <Image
                src="/auth-illustration.png"
                alt="Learning illustration"
                width={500}
                height={260}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Sign Up Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-8 shadow-xl shadow-indigo-50/50">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Create an Account</h2>
              <p className="mt-1 text-xs text-slate-500 text-center">
                Join LearnAI and start your personalized learning journey.
              </p>

              {/* Social Login Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <svg className="h-4 w-4 fill-black" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.79 1.06-1.88.94-2.98-.94.04-2.07.63-2.73 1.41-.58.68-1.09 1.78-.95 2.86 1.05.08 2.12-.53 2.74-1.29z" />
                  </svg>
                  <span>Continue with Apple</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-3 text-xs font-semibold text-slate-400 uppercase">
                  or
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border border-slate-200 py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-2xl border border-slate-200 py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Password</label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full rounded-2xl border border-slate-200 py-2.5 pl-10 pr-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-400">
                    Use at least 8 characters with letters, numbers and a symbol.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#4F46E5] py-3 text-xs font-bold text-white shadow-md shadow-indigo-200 transition hover:bg-[#4338CA] hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  Sign up
                </button>

                <p className="text-center text-[11px] text-slate-400 leading-normal">
                  By signing up, you agree to our{" "}
                  <a href="#" className="underline hover:text-slate-600">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-slate-600">
                    Privacy Policy
                  </a>
                  .
                </p>

                <div className="text-center text-xs text-slate-600 pt-2 border-t border-slate-100">
                  Already have an account?{" "}
                  <Link href="/login" className="font-bold text-[#4F46E5] hover:underline">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

