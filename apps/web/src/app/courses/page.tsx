"use client";

import Link from "next/link";
import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import { BookOpen, Play, Clock, ArrowRight, Sparkles } from "lucide-react";

const COURSES = [
  {
    id: 1,
    title: "Python Programming for Beginners",
    desc: "Learn Python from scratch with real-world examples, hands-on practice, and projects.",
    image: "/python-course.svg",
    lessons: "24 Lessons",
    duration: "6 Weeks",
    level: "Beginner",
    progress: 40,
    status: "In Progress",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    desc: "Master supervised and unsupervised learning algorithms with practical code.",
    image: "/machine-learning-course.svg",
    lessons: "18 Lessons",
    duration: "5 Weeks",
    level: "Intermediate",
    progress: 60,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    desc: "Pandas, NumPy, and statistical analysis for real-world datasets.",
    image: "/data-science-course.svg",
    lessons: "16 Lessons",
    duration: "4 Weeks",
    level: "Beginner",
    progress: 38,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Web Development with HTML & CSS",
    desc: "Modern semantic markup, responsive grid layouts, and clean styling.",
    image: "/web-development-course.svg",
    lessons: "12 Lessons",
    duration: "3 Weeks",
    level: "Beginner",
    progress: 100,
    status: "Completed",
  },
  {
    id: 5,
    title: "Statistics for Beginners",
    desc: "Probability, distributions, hypothesis testing and exploratory data analysis.",
    image: "/statistics-course.svg",
    lessons: "14 Lessons",
    duration: "4 Weeks",
    level: "Beginner",
    progress: 100,
    status: "Completed",
  },
  {
    id: 6,
    title: "Basics of Artificial Intelligence",
    desc: "Foundations of modern AI, LLMs, neural networks, and prompt engineering.",
    image: "/artificial-intelligence-course.svg",
    lessons: "10 Lessons",
    duration: "3 Weeks",
    level: "All Levels",
    progress: 100,
    status: "Completed",
  },
];

export default function CoursesListPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">My Courses</h1>
            <p className="mt-1 text-xs text-slate-500">
              Explore your active, completed, and generated learning paths.
            </p>
          </div>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#4F46E5] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338CA] transition"
          >
            <Sparkles className="h-4 w-4" />
            <span>Generate New Course</span>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-900 mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white">
                    {course.level}
                  </div>
                  <div
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold ${
                      course.status === "Completed"
                        ? "bg-emerald-500 text-white"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    {course.status}
                  </div>
                </div>

                <h2 className="text-base font-bold text-slate-900 leading-snug line-clamp-1">
                  {course.title}
                </h2>
                <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {course.desc}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Play className="h-3 w-3 fill-slate-400 text-slate-400" />
                    {course.lessons}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full bg-[#4F46E5]"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#4F46E5] hover:text-white transition"
                >
                  <span>Open Course</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AppShell>
  );
}

