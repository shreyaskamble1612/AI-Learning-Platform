"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  User,
  GraduationCap,
  Bot,
  Bell,
  ShieldCheck,
  Palette,
  Camera,
  Pencil,
  Mail,
  Calendar,
  Phone,
  Target,
  Lock,
  Key,
  Trash2,
  PlayCircle,
  BarChart2,
  Clock,
  Sparkles,
  BookOpen,
  Code,
  Lightbulb,
  CheckSquare,
  HelpCircle,
  Star,
  Megaphone,
  Globe,
  Sun,
  Moon,
  Monitor,
  Tv,
  Download,
  BookMarked,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("My Profile");
  const [teachingStyle, setTeachingStyle] = useState("Simple");
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">("light");

  // Toggle states
  const [twoFactor, setTwoFactor] = useState(true);
  const [includeCode, setIncludeCode] = useState(true);
  const [useAnalogies, setUseAnalogies] = useState(true);
  const [addQuestions, setAddQuestions] = useState(true);

  // Notification toggles
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [quizReminders, setQuizReminders] = useState(true);
  const [achievementsNotify, setAchievementsNotify] = useState(true);
  const [announcementsNotify, setAnnouncementsNotify] = useState(false);

  // Dropdown states
  const [learningStyle, setLearningStyle] = useState("Video Lectures with Explanations");
  const [difficultyLevel, setDifficultyLevel] = useState("Beginner to Intermediate");
  const [courseLength, setCourseLength] = useState("Short & Focused (5-10 min per lesson)");
  const [dailyGoal, setDailyGoal] = useState("30 Minutes");
  const [explanationDepth, setExplanationDepth] = useState("Medium (Balanced)");
  const [language, setLanguage] = useState("English");
  const [videoQuality, setVideoQuality] = useState("Auto (Recommended)");
  const [downloadPref, setDownloadPref] = useState("Notes & Slides (PDF)");

  // Notification toast
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const tabs = [
    { name: "My Profile", icon: User },
    { name: "Learning Preferences", icon: GraduationCap },
    { name: "AI Teaching Settings", icon: Bot },
    { name: "Notifications", icon: Bell },
    { name: "Account & Security", icon: ShieldCheck },
    { name: "Appearance", icon: Palette },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Toast alert */}
        {saveMessage && (
          <div className="fixed top-24 right-8 z-50 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-xl animate-fade-in">
            <CheckCircle2 className="h-5 w-5" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* Header Section */}
        <div>
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white shadow-md shadow-indigo-100">
              <Settings className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Profile & Settings
              </h1>
              <p className="text-sm text-slate-500">
                Manage your profile, learning preferences, AI teaching style, and account settings.
              </p>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-100 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-100"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* COLUMN 1: Profile & Account Settings (4 cols) */}
          <div className="space-y-6 lg:col-span-4">
            {/* My Profile Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">My Profile</h2>

              <div className="mt-5 flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-indigo-50">
                    <Image
                      src="/sharvari-patil.png"
                      alt="Sharvari Patil"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <button
                    onClick={() => triggerToast("Avatar upload feature opened")}
                    title="Change Avatar"
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-md hover:bg-indigo-700 transition"
                  >
                    <Camera className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Sharvari Patil</h3>
                      <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                        Learner
                      </span>
                    </div>
                    <button
                      onClick={() => triggerToast("Profile edit mode enabled")}
                      className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/50 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 transition"
                    >
                      <Pencil className="h-3 w-3" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    A curious learner who loves exploring new technologies and building practical
                    skills.
                  </p>
                </div>
              </div>

              {/* Profile Meta Fields Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50/70 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-semibold text-slate-800">
                      sharvari.patil@example.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50/70 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium text-slate-400">Member Since</div>
                    <div className="text-xs font-bold text-slate-800">Oct 05, 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50/70 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50/70 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium text-slate-400">Learning Goal</div>
                    <div className="truncate text-xs font-bold text-slate-800">
                      Learn AI & Data Science
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900">Account Settings</h2>

              {/* Change Password */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3.5 transition hover:bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Change Password</div>
                    <div className="text-xs text-slate-400">
                      Update your account password regularly.
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => triggerToast("Password reset link sent")}
                  className="rounded-xl bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 transition"
                >
                  Change &rarr;
                </button>
              </div>

              {/* 2FA Toggle */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3.5 transition hover:bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Two-Factor Authentication (2FA)
                    </div>
                    <div className="text-xs text-slate-400">
                      Add an extra layer of security to your account.
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setTwoFactor(!twoFactor);
                    triggerToast(`Two-factor authentication ${!twoFactor ? "enabled" : "disabled"}`);
                  }}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    twoFactor ? "bg-[#4F46E5]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      twoFactor ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Account Security */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3.5 transition hover:bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Key className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Account Security</div>
                    <div className="text-xs text-slate-400">
                      Manage active sessions and connected devices.
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => triggerToast("Active devices: 2 sessions")}
                  className="rounded-xl bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 transition"
                >
                  Manage &rarr;
                </button>
              </div>

              {/* Delete Account */}
              <div className="flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50/20 p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Delete Account</div>
                    <div className="text-xs text-slate-400">
                      Permanently delete your account and all data.
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => triggerToast("Account deletion confirmation required")}
                  className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100 transition"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Preferences & AI Settings (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Learning Preferences Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#4F46E5]" />
                <h2 className="text-base font-bold text-slate-900">Learning Preferences</h2>
              </div>

              {/* Preferred Learning Style */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <PlayCircle className="h-4 w-4 text-indigo-600" />
                  <span>Preferred Learning Style</span>
                </label>
                <select
                  value={learningStyle}
                  onChange={(e) => {
                    setLearningStyle(e.target.value);
                    triggerToast("Saved learning style preference");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Video Lectures with Explanations</option>
                  <option>Interactive Code & Hands-on Labs</option>
                  <option>Reading, Cheatsheets & Summaries</option>
                  <option>Quiz-Driven & Active Recall</option>
                </select>
              </div>

              {/* Difficulty Level */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <BarChart2 className="h-4 w-4 text-indigo-600" />
                  <span>Difficulty Level</span>
                </label>
                <select
                  value={difficultyLevel}
                  onChange={(e) => {
                    setDifficultyLevel(e.target.value);
                    triggerToast("Saved difficulty preference");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Beginner to Intermediate</option>
                  <option>Absolute Beginner (From Scratch)</option>
                  <option>Intermediate (Some Experience)</option>
                  <option>Advanced & Professional</option>
                </select>
              </div>

              {/* Preferred Course Length */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Clock className="h-4 w-4 text-indigo-600" />
                  <span>Preferred Course Length</span>
                </label>
                <select
                  value={courseLength}
                  onChange={(e) => {
                    setCourseLength(e.target.value);
                    triggerToast("Saved course length preference");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Short & Focused (5-10 min per lesson)</option>
                  <option>Standard Comprehensive (15-20 min)</option>
                  <option>Deep Dive Bootcamp (30+ min)</option>
                </select>
              </div>

              {/* Daily Learning Goal */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Target className="h-4 w-4 text-indigo-600" />
                  <span>Daily Learning Goal</span>
                </label>
                <select
                  value={dailyGoal}
                  onChange={(e) => {
                    setDailyGoal(e.target.value);
                    triggerToast("Saved daily goal");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>15 Minutes</option>
                  <option>30 Minutes</option>
                  <option>45 Minutes</option>
                  <option>60 Minutes (1 Hour)</option>
                </select>
              </div>
            </div>

            {/* AI Teaching Preferences Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-[#4F46E5]" />
                <h2 className="text-base font-bold text-slate-900">AI Teaching Preferences</h2>
              </div>

              {/* Teaching Style Selector */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Teaching Style</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Simple", "Detailed", "Step-by-Step", "Real-World"].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => {
                        setTeachingStyle(style);
                        triggerToast(`Teaching style changed to ${style}`);
                      }}
                      className={`rounded-xl px-2 py-2 text-xs font-semibold transition ${
                        teachingStyle === style
                          ? "bg-[#4F46E5] text-white shadow-sm"
                          : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanation Depth */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <BookOpen className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Explanation Depth</span>
                </label>
                <select
                  value={explanationDepth}
                  onChange={(e) => {
                    setExplanationDepth(e.target.value);
                    triggerToast("Saved explanation depth");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Medium (Balanced)</option>
                  <option>High (In-Depth & Rigorous)</option>
                  <option>Concise (Fast Summary)</option>
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                {/* Include Code Examples */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Code className="h-4 w-4 text-indigo-600" />
                    <span>Include Code Examples</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIncludeCode(!includeCode);
                      triggerToast(`Code examples ${!includeCode ? "enabled" : "disabled"}`);
                    }}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      includeCode ? "bg-[#4F46E5]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        includeCode ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Use Real-Life Analogies */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    <span>Use Real-Life Analogies</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUseAnalogies(!useAnalogies);
                      triggerToast(`Analogies ${!useAnalogies ? "enabled" : "disabled"}`);
                    }}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      useAnalogies ? "bg-[#4F46E5]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        useAnalogies ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Add Practice Questions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckSquare className="h-4 w-4 text-indigo-600" />
                    <span>Add Practice Questions</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setAddQuestions(!addQuestions);
                      triggerToast(`Practice questions ${!addQuestions ? "enabled" : "disabled"}`);
                    }}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      addQuestions ? "bg-[#4F46E5]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        addQuestions ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Settings Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-[#4F46E5]" />
                <h2 className="text-base font-bold text-slate-900">Notification Settings</h2>
              </div>

              {/* Course & Lesson Updates */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <Bell className="h-4 w-4 text-amber-500" />
                  <span>Course & Lesson Updates</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCourseUpdates(!courseUpdates)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    courseUpdates ? "bg-[#4F46E5]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      courseUpdates ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Quiz & Progress Reminders */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <HelpCircle className="h-4 w-4 text-amber-500" />
                  <span>Quiz & Progress Reminders</span>
                </div>
                <button
                  type="button"
                  onClick={() => setQuizReminders(!quizReminders)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    quizReminders ? "bg-[#4F46E5]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      quizReminders ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Achievements & Streaks */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-400" />
                  <span>Achievements & Streaks</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAchievementsNotify(!achievementsNotify)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    achievementsNotify ? "bg-[#4F46E5]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      achievementsNotify ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* New Features & Announcements */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <Megaphone className="h-4 w-4 text-indigo-500" />
                  <span>New Features & Announcements</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAnnouncementsNotify(!announcementsNotify)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    announcementsNotify ? "bg-[#4F46E5]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      announcementsNotify ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Additional Settings & Learning Summary (3 cols) */}
          <div className="space-y-6 lg:col-span-3">
            {/* Additional Settings Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-[#4F46E5]" />
                <h2 className="text-base font-bold text-slate-900">Additional Settings</h2>
              </div>

              {/* Language */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Globe className="h-4 w-4 text-indigo-600" />
                  <span>Language</span>
                </label>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    triggerToast(`Language set to ${e.target.value}`);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Hindi</option>
                  <option>Japanese</option>
                </select>
              </div>

              {/* Theme Segmented Control */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Palette className="h-4 w-4 text-indigo-600" />
                  <span>Theme</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setThemeMode("light");
                      triggerToast("Light theme selected");
                    }}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2.5 text-xs font-semibold transition ${
                      themeMode === "light"
                        ? "border-2 border-[#4F46E5] bg-indigo-50/60 text-[#4F46E5]"
                        : "border border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setThemeMode("dark");
                      triggerToast("Dark theme selected");
                    }}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2.5 text-xs font-semibold transition ${
                      themeMode === "dark"
                        ? "border-2 border-[#4F46E5] bg-indigo-50/60 text-[#4F46E5]"
                        : "border border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setThemeMode("system");
                      triggerToast("System theme selected");
                    }}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2.5 text-xs font-semibold transition ${
                      themeMode === "system"
                        ? "border-2 border-[#4F46E5] bg-indigo-50/60 text-[#4F46E5]"
                        : "border border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                    <span>System</span>
                  </button>
                </div>
              </div>

              {/* Video Quality */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Tv className="h-4 w-4 text-indigo-600" />
                  <span>Video Quality</span>
                </label>
                <select
                  value={videoQuality}
                  onChange={(e) => {
                    setVideoQuality(e.target.value);
                    triggerToast(`Video quality set to ${e.target.value}`);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Auto (Recommended)</option>
                  <option>1080p (Full HD)</option>
                  <option>720p (HD)</option>
                  <option>480p (Data Saver)</option>
                </select>
              </div>

              {/* Download Preferences */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Download className="h-4 w-4 text-indigo-600" />
                  <span>Download Preferences</span>
                </label>
                <select
                  value={downloadPref}
                  onChange={(e) => {
                    setDownloadPref(e.target.value);
                    triggerToast("Saved download preference");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-800 focus:border-[#4F46E5] focus:bg-white focus:outline-none"
                >
                  <option>Notes & Slides (PDF)</option>
                  <option>Full Offline Package (Video + Notes)</option>
                  <option>Audio Only (Podcasts)</option>
                </select>
              </div>
            </div>

            {/* Your Learning Summary Card */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/30 p-6 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-[#4F46E5]" />
                <h2 className="text-base font-bold text-slate-900">Your Learning Summary</h2>
              </div>

              <div className="space-y-3 divide-y divide-indigo-100/60 pt-1">
                {/* Courses in Progress */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <BookMarked className="h-4 w-4 text-indigo-600" />
                    <span>Courses in Progress</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">3</span>
                </div>

                {/* Completed Courses */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Completed Courses</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">3</span>
                </div>

                {/* Total Study Time */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Total Study Time</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">6.5 hrs</span>
                </div>

                {/* Current Streak */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <span>Current Streak</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">7 Days</span>
                </div>

                {/* Learning Goal */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Target className="h-4 w-4 text-pink-600" />
                    <span>Learning Goal</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">30 min/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

