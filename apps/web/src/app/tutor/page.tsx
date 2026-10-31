"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  Paperclip,
  Send,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  Code2,
  Bug,
  HelpCircle,
  Globe,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function AITutorPage() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "Can you explain variables in simpler words?",
      time: "10:24 AM",
    },
    {
      id: 2,
      sender: "ai",
      time: "10:24 AM",
      text: "Sure! A variable is like a box where you store information. In Python, you can put different types of information inside a variable, such as text, numbers, or True/False values.",
      example: "Think of a variable as a labeled box. You can put anything in the box and use it later.",
      code: `name = "Sharvari"      # storing text\nage = 20              # storing a number\nis_student = True     # storing a True/False value`,
      table: [
        { variable: "name", value: '"Sharvari"', type: "string (str)", desc: "Stores text (your name)" },
        { variable: "age", value: "20", type: "integer (int)", desc: "Stores a whole number (your age)" },
        { variable: "is_student", value: "True", type: "boolean (bool)", desc: "Stores a True/False value" },
      ],
      footerText: "You can use these variables later in your program to perform different operations.",
    },
  ]);

  const SUGGESTED_QUESTIONS = [
    "What is the difference between int and float?",
    "How do I convert a string to an integer?",
    "Can you give me more examples of variables?",
    "What are the rules for naming variables?",
    "Explain boolean with examples",
    "How do I check the type of a variable?",
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: "Just now",
    };

    const aiMsg = {
      id: Date.now() + 1,
      sender: "ai",
      time: "Just now",
      text: `Here is a clear breakdown for "${text}": In Python, variables hold dynamic references to objects. When you ask this, consider how types interact in runtime.`,
      example: `Example: x = 10 (integer) and y = 10.5 (float) are stored differently in memory.`,
      code: `# Example in Python\nx = 10\nprint(type(x))  # <class 'int'>`,
      table: [],
      footerText: "Feel free to test this code in your practice exercises or ask for another angle!",
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <AppShell>
      <div className="space-y-6">
        
        {/* Breadcrumbs */}
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
          <span className="text-slate-800 font-bold">AI Tutor</span>
        </div>

        {/* Header Banner */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0">
              <Image src="/ai-tutor-mascot.svg" alt="AI Tutor" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">AI Tutor</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Get instant help, clear explanations, and personalized support for your learning journey.
              </p>
              
              {/* Badges */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[#4F46E5]">
                  <Heart className="h-3 w-3 fill-[#4F46E5]" />
                  Powered by AI
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">
                  Context-aware
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">
                  Step-by-step explanations
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">
                  Code help
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-600 font-bold">
                  ● Available 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Canvas (8 Cols) vs Lesson Context (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Chat Stream Area (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-6">
            
            <div className="space-y-6">
              {messages.map((m: any) => {
                if (m.sender === "user") {
                  return (
                    <div key={m.id} className="flex items-start justify-end gap-3">
                      <div className="text-right">
                        <div className="rounded-3xl rounded-tr-none bg-[#4F46E5] px-5 py-3 text-xs sm:text-sm text-white shadow-md shadow-indigo-100 leading-relaxed max-w-lg">
                          {m.text}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 block mr-1">{m.time}</span>
                      </div>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-indigo-100 shrink-0">
                        <Image src="/sharvari-patil.png" alt="User" fill className="object-cover" />
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={m.id} className="flex items-start gap-3">
                    <div className="relative h-8 w-8 shrink-0">
                      <Image src="/ai-tutor-mascot.svg" alt="AI" fill className="object-contain" />
                    </div>

                    <div className="flex-1 space-y-4 rounded-3xl rounded-tl-none border border-slate-100 bg-slate-50/70 p-5 text-xs sm:text-sm text-slate-800">
                      <p className="leading-relaxed">{m.text}</p>

                      {m.example && (
                        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-3.5 text-xs text-slate-700">
                          <strong className="font-bold text-slate-900">💡 Real-life example:</strong>{" "}
                          {m.example}
                        </div>
                      )}

                      {m.code && (
                        <div className="overflow-hidden rounded-2xl bg-slate-900 text-slate-200">
                          <div className="flex items-center justify-between border-b border-slate-800 px-3.5 py-2 text-xs text-slate-400">
                            <span className="font-mono text-[11px]">Python</span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(m.code);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              }}
                              className="flex items-center gap-1 hover:text-slate-200"
                            >
                              {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                              <span className="text-[10px]">{copied ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                          <pre className="p-3.5 font-mono text-xs leading-relaxed text-indigo-200">
                            {m.code}
                          </pre>
                        </div>
                      )}

                      {m.table && m.table.length > 0 && (
                        <div>
                          <div className="text-xs font-bold text-slate-700 mb-2">Here&apos;s what each variable stores:</div>
                          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full text-left text-xs">
                              <thead className="border-b border-slate-100 bg-slate-50 text-slate-700 font-bold">
                                <tr>
                                  <th className="p-3">Variable</th>
                                  <th className="p-3">Value</th>
                                  <th className="p-3">Data Type</th>
                                  <th className="p-3">Description</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                                {m.table.map((row: any, idx: number) => (
                                  <tr key={idx} className="hover:bg-slate-50/50">
                                    <td className="p-3 font-mono text-indigo-600 font-bold">{row.variable}</td>
                                    <td className="p-3 font-mono text-emerald-600">{row.value}</td>
                                    <td className="p-3 text-slate-700">{row.type}</td>
                                    <td className="p-3 text-slate-500">{row.desc}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {m.footerText && (
                        <p className="text-xs text-slate-600 pt-1 leading-relaxed">{m.footerText}</p>
                      )}

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px] text-slate-400">
                        <span>{m.time}</span>
                        <div className="flex items-center gap-2">
                          <button className="hover:text-slate-600 p-1">
                            <ThumbsUp className="h-3.5 w-3.5" />
                          </button>
                          <button className="hover:text-slate-600 p-1">
                            <ThumbsDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                "What are the different data types?",
                "Show me more examples",
                "How do I change a variable value?",
                "Explain with a real-life example?",
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#4F46E5] hover:bg-indigo-50 hover:text-[#4F46E5]"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:border-[#4F46E5] focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition"
            >
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-slate-600 transition"
              >
                <Paperclip className="h-4 w-4" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="w-full bg-transparent px-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4F46E5] text-white shadow-sm hover:bg-[#4338CA] transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>

          {/* Right Column: Context, Suggestions & Categories (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Current Lesson Info */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Current Lesson</h3>
                <Link href="/courses/1" className="text-[11px] font-bold text-[#4F46E5] hover:underline">
                  Change Lesson
                </Link>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-100 p-3">
                <div className="relative h-12 w-12 shrink-0 rounded-xl bg-slate-900 overflow-hidden">
                  <Image src="/python-course.svg" alt="Python" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Variables and Data Types in Python</div>
                  <div className="text-[10px] text-slate-400">Module 2: Python Fundamentals • Lesson 2 of 5</div>
                </div>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Suggested Questions</h3>
              </div>

              <div className="space-y-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-100 p-2.5 text-left text-xs text-slate-700 transition hover:border-indigo-100 hover:bg-indigo-50/50 hover:text-[#4F46E5]"
                  >
                    <span>{q}</span>
                    <ArrowRight className="h-3 w-3 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Ask About Categories */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ask About</h3>

              <div className="space-y-2.5 text-xs">
                <div
                  onClick={() => handleSend("Explain key concepts from this lesson")}
                  className="flex items-center gap-3 rounded-2xl p-2.5 hover:bg-slate-50 cursor-pointer transition"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Explain Concepts</div>
                    <div className="text-[10px] text-slate-400">Get simple explanations of difficult topics</div>
                  </div>
                </div>

                <div
                  onClick={() => handleSend("Give me practical code examples")}
                  className="flex items-center gap-3 rounded-2xl p-2.5 hover:bg-slate-50 cursor-pointer transition"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-[#4F46E5]">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Code Examples</div>
                    <div className="text-[10px] text-slate-400">Get practical examples and sample code</div>
                  </div>
                </div>

                <div
                  onClick={() => handleSend("Help me debug this error")}
                  className="flex items-center gap-3 rounded-2xl p-2.5 hover:bg-slate-50 cursor-pointer transition"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <Bug className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Debug My Code</div>
                    <div className="text-[10px] text-slate-400">Find and fix errors in your code</div>
                  </div>
                </div>

                <div
                  onClick={() => handleSend("Give me practice questions")}
                  className="flex items-center gap-3 rounded-2xl p-2.5 hover:bg-slate-50 cursor-pointer transition"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Practice Problems</div>
                    <div className="text-[10px] text-slate-400">Get additional practice questions</div>
                  </div>
                </div>

                <div
                  onClick={() => handleSend("How is this used in real-world applications?")}
                  className="flex items-center gap-3 rounded-2xl p-2.5 hover:bg-slate-50 cursor-pointer transition"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Real-world Applications</div>
                    <div className="text-[10px] text-slate-400">Learn how to use concepts in real projects</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

