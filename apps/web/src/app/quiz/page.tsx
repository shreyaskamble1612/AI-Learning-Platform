"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const QUESTIONS = [
  {
    id: 1,
    question: "What is the primary purpose of a variable in Python?",
    options: [
      { key: "A", text: "To store data values in memory" },
      { key: "B", text: "To compile Python bytecode into C" },
      { key: "C", text: "To create graphical user interfaces" },
      { key: "D", text: "To connect to external databases" },
    ],
    correctAnswer: "A",
    explanation: "A variable in Python acts as a container or reference in memory to store values.",
  },
  {
    id: 2,
    question: "Which function is used to determine the data type of an object in Python?",
    options: [
      { key: "A", text: "typeof()" },
      { key: "B", text: "type()" },
      { key: "C", text: "datatype()" },
      { key: "D", text: "checkType()" },
    ],
    correctAnswer: "B",
    explanation: "The built-in type() function returns the class type of the argument object.",
  },
  {
    id: 3,
    question: "Which of the following is a valid variable name in Python?",
    options: [
      { key: "A", text: "2age" },
      { key: "B", text: "user-name" },
      { key: "C", text: "age_2" },
      { key: "D", text: "class" },
    ],
    correctAnswer: "C",
    explanation:
      "A variable name in Python can contain letters, numbers, and underscores (_), but it cannot start with a number, contain a hyphen (-), or be a reserved keyword (like class).",
  },
  {
    id: 4,
    question: "What will be the output of type(3.14)?",
    options: [
      { key: "A", text: "<class 'int'>" },
      { key: "B", text: "<class 'float'>" },
      { key: "C", text: "<class 'number'>" },
      { key: "D", text: "<class 'double'>" },
    ],
    correctAnswer: "B",
    explanation: "Numbers with decimal points are represented as float instances in Python.",
  },
];

export default function QuizAssessmentPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(2); // Start on Question 3 to match screen 12!
  const [selectedAnswer, setSelectedAnswer] = useState<string>("C");
  const [showExplanation, setShowExplanation] = useState<boolean>(true);
  const [showHint, setShowHint] = useState<boolean>(false);

  const currentQ = QUESTIONS[currentQuestionIndex] || QUESTIONS[2];

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setShowExplanation(false);
      setShowHint(false);
    } else {
      router.push("/quiz/results");
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer("");
      setShowExplanation(false);
      setShowHint(false);
    }
  };

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
          <span className="text-slate-800 font-bold">Quiz</span>
        </div>

        {/* Quiz Header Banner */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-slate-900 overflow-hidden">
              <Image src="/python-course.svg" alt="Python" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Module 2 Quiz</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Test your understanding of Variables and Data Types in Python.
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

        {/* Quiz Body (8 Cols) vs Question Overview (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Question Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-6">
            
            {/* Question Header & Timer Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-bold text-slate-900 shrink-0">
                  Question {currentQ.id} of 10
                </span>
                <div className="h-2 flex-1 max-w-xs rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-[#4F46E5] rounded-full transition-all"
                    style={{ width: `${(currentQ.id / 10) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400 font-semibold">{currentQ.id * 10}% Complete</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 font-mono text-xs font-bold text-[#4F46E5]">
                <Clock className="h-3.5 w-3.5" />
                <span>07:24</span>
              </div>
            </div>

            {/* Question Text */}
            <div className="flex items-start gap-3 pt-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-bold text-xs text-[#4F46E5]">
                Q{currentQ.id}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswer === opt.key;
                return (
                  <div
                    key={opt.key}
                    onClick={() => {
                      setSelectedAnswer(opt.key);
                      setShowExplanation(true);
                    }}
                    className={`flex items-center gap-3.5 rounded-2xl border p-4 text-xs font-semibold cursor-pointer transition ${
                      isSelected
                        ? "border-[#4F46E5] bg-indigo-50/40 text-slate-900 shadow-sm ring-1 ring-[#4F46E5]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/60"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isSelected
                          ? "border-[#4F46E5] bg-[#4F46E5] text-white"
                          : "border-slate-300 text-slate-400"
                      }`}
                    >
                      {isSelected ? (
                        <span className="h-2 w-2 rounded-full bg-white" />
                      ) : (
                        <span className="text-[10px] font-bold">{opt.key}</span>
                      )}
                    </div>
                    <span className="font-mono text-slate-800">{opt.key}. {opt.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Instant Feedback Card */}
            {showExplanation && (
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Correct Answer: {currentQ.correctAnswer}. {currentQ.options.find(o => o.key === currentQ.correctAnswer)?.text}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px] pl-6">
                  <strong className="text-slate-800 font-semibold">Explanation:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Hint Card if toggled */}
            {showHint && (
              <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3.5 text-xs text-amber-900 flex items-start gap-2">
                <span className="text-base">💡</span>
                <div>
                  <strong className="font-bold">AI Tutor Hint:</strong> In Python, variable identifiers cannot begin with numerical digits and cannot share identical names with keywords like <code>def</code> or <code>class</code>.
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
              >
                ← Previous Question
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-100 hover:bg-[#4338CA] transition"
              >
                <span>{currentQuestionIndex === QUESTIONS.length - 1 ? "Finish Quiz" : "Next Question"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Question Grid, Hints & Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quiz Progress & Question Overview */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Quiz Progress</span>
                  <span className="text-[#4F46E5]">30%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "30%" }} />
                </div>
                <div className="text-[11px] text-slate-400">3 of 10 questions answered</div>
              </div>

              {/* Number Grid */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Question Overview
                </h3>

                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                    const isAnswered = num < 3;
                    const isCurrent = num === currentQ.id;

                    return (
                      <button
                        key={num}
                        onClick={() => {
                          if (num <= QUESTIONS.length) {
                            setCurrentQuestionIndex(num - 1);
                          }
                        }}
                        className={`flex h-9 w-full items-center justify-center rounded-xl text-xs font-bold transition ${
                          isCurrent
                            ? "border-2 border-[#4F46E5] bg-indigo-50/60 text-[#4F46E5]"
                            : isAnswered
                            ? "bg-emerald-50 text-emerald-600 font-extrabold"
                            : "border border-slate-100 bg-slate-50 text-slate-400 hover:bg-slate-100"
                        }`}
                      >
                        {isAnswered ? "✓" : num}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#4F46E5]" />
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span>Not Answered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Tutor Hint Card */}
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 p-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="relative h-7 w-7">
                  <Image src="/ai-tutor-mascot.svg" alt="Tutor" fill className="object-contain" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">AI Tutor Hint</h3>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Need a hint? Get a helpful hint or explanation for this question without seeing the answer.
              </p>

              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white py-2 text-xs font-bold text-[#4F46E5] shadow-sm hover:bg-indigo-50 transition"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{showHint ? "Hide Hint" : "Show Hint ✦"}</span>
              </button>
            </div>

            {/* Quiz Details */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Quiz Details</h3>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Total Questions</span>
                  <span className="font-bold text-slate-900">10</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Time Limit</span>
                  <span className="font-bold text-slate-900">10 Minutes</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Difficulty</span>
                  <span className="font-bold text-slate-900">Easy - Medium</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Topic</span>
                  <span className="font-bold text-slate-900">Variables and Data Types</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Attempts</span>
                  <span className="font-bold text-slate-900">1 / 3</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

