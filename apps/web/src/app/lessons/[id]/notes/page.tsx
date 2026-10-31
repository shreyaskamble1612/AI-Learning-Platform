"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Play,
  CheckCircle2,
  Send,
  Sparkles,
  ExternalLink,
  Code2,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function LessonNotesPage() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [tutorMessage, setTutorMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Can you explain this in simpler words?",
      time: "10:24 AM",
    },
    {
      sender: "ai",
      text: "Sure! A variable is like a box where you store information. You can put different types of information like text, numbers, or True/False values. Would you like to see more examples?",
      time: "10:24 AM",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutorMessage.trim()) return;
    const newMsg = { sender: "user", text: tutorMessage, time: "Just now" };
    setMessages((prev) => [
      ...prev,
      newMsg,
      {
        sender: "ai",
        text: `Great question! In Python, '${tutorMessage}' is easy to master once you understand how values are bound in memory. Let me know if you want code samples!`,
        time: "Just now",
      },
    ]);
    setTutorMessage("");
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
              href="/lessons/1/video"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              ← Previous
            </Link>
            <Link
              href="/quiz"
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

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3 text-xs font-bold text-slate-500">
          <Link
            href="/lessons/1/video"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <Play className="h-3.5 w-3.5" />
            <span>Video Lecture</span>
          </Link>
          <Link
            href="/lessons/1/notes"
            className="shrink-0 rounded-xl bg-[#4F46E5] px-4 py-2 text-white shadow-sm flex items-center gap-2"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Notes &amp; Examples</span>
          </Link>
          <button className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Key Concepts</span>
          </button>
          <Link
            href="/quiz"
            className="shrink-0 rounded-xl px-4 py-2 hover:bg-slate-100 text-slate-700 transition flex items-center gap-2"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Quiz</span>
          </Link>
        </div>

        {/* Main Grid: Notes Content (8 Cols) vs Practice & Mini Tutor (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Notes Content (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm space-y-8">
            
            {/* Section 1: What are Variables */}
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">1. What are Variables?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A variable is a named location in memory used to store data. You can think of it
                    as a container that holds a value, which can be changed later.
                  </p>
                  <div className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-3.5 text-xs text-slate-700">
                    <span className="font-bold text-slate-900">💡 Example:</span> If you want to store your name, you can create a variable called <code className="bg-white px-1 py-0.5 rounded font-mono text-[#4F46E5]">name</code> and assign your name to it.
                  </div>
                </div>

                {/* Code Editor Box */}
                <div className="overflow-hidden rounded-2xl bg-slate-900 text-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-800 px-3.5 py-2 text-xs text-slate-400">
                    <span className="font-mono text-[11px]">Python</span>
                    <button
                      onClick={() => {
                        setCopied1(true);
                        setTimeout(() => setCopied1(false), 2000);
                      }}
                      className="flex items-center gap-1 hover:text-slate-200"
                    >
                      {copied1 ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span className="text-[10px]">{copied1 ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 font-mono text-xs leading-relaxed text-indigo-200">
                    <span className="text-slate-500">1  # Creating a variable</span>{"\n"}
                    <span className="text-slate-500">2  </span><span className="text-sky-300">name</span> = <span className="text-emerald-300">&quot;Sharvari&quot;</span>{"\n"}
                    <span className="text-slate-500">3  </span><span className="text-sky-300">age</span> = <span className="text-amber-300">20</span>{"\n"}
                    <span className="text-slate-500">4  </span><span className="text-sky-300">is_student</span> = <span className="text-purple-300">True</span>{"\n"}
                    <span className="text-slate-500">5  </span>{"\n"}
                    <span className="text-slate-500">6  </span><span className="text-blue-400">print</span>(name)        <span className="text-slate-500"># Output: Sharvari</span>{"\n"}
                    <span className="text-slate-500">7  </span><span className="text-blue-400">print</span>(age)         <span className="text-slate-500"># Output: 20</span>{"\n"}
                    <span className="text-slate-500">8  </span><span className="text-blue-400">print</span>(is_student)  <span className="text-slate-500"># Output: True</span>
                  </pre>
                </div>
              </div>
            </div>

            {/* Section 2: Different Data Types */}
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Different Data Types in Python</h2>
              <p className="text-xs text-slate-500 mb-4">
                Python has several built-in types. Here are the most common ones:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {/* String */}
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 space-y-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold text-white">
                    Aa
                  </div>
                  <div className="text-xs font-bold text-slate-900">String (str)</div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Used to store text data.
                  </p>
                  <div className="text-[11px] font-mono text-indigo-600 font-semibold pt-1">
                    Example: &quot;Hello&quot;
                  </div>
                </div>

                {/* Integer */}
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 space-y-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-xs font-bold text-white">
                    123
                  </div>
                  <div className="text-xs font-bold text-slate-900">Integer (int)</div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Used to store whole numbers.
                  </p>
                  <div className="text-[11px] font-mono text-emerald-600 font-semibold pt-1">
                    Example: 10
                  </div>
                </div>

                {/* Float */}
                <div className="rounded-2xl border border-sky-100 bg-sky-50/40 p-4 space-y-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500 text-xs font-bold text-white">
                    1.2
                  </div>
                  <div className="text-xs font-bold text-slate-900">Float (float)</div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Used to store decimal numbers.
                  </p>
                  <div className="text-[11px] font-mono text-sky-600 font-semibold pt-1">
                    Example: 3.14
                  </div>
                </div>

                {/* Boolean */}
                <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-4 space-y-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-xs font-bold text-white">
                    T/F
                  </div>
                  <div className="text-xs font-bold text-slate-900">Boolean (bool)</div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Used to store True or False values.
                  </p>
                  <div className="text-[11px] font-mono text-amber-600 font-semibold pt-1">
                    Example: True
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Real-life Examples */}
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Real-life Examples</h2>
              <p className="text-xs text-slate-500 mb-4">
                Here are some practical examples that use multiple data types:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Code on Left (8 Cols) */}
                <div className="md:col-span-8 overflow-hidden rounded-2xl bg-slate-900 text-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
                    <span className="font-mono text-[11px]">Python</span>
                    <button
                      onClick={() => {
                        setCopied2(true);
                        setTimeout(() => setCopied2(false), 2000);
                      }}
                      className="flex items-center gap-1 hover:text-slate-200"
                    >
                      {copied2 ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span className="text-[10px]">{copied2 ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="p-4 font-mono text-xs leading-relaxed text-indigo-200">
                    <span className="text-slate-500">1  # Personal information</span>{"\n"}
                    <span className="text-slate-500">2  </span><span className="text-sky-300">name</span> = <span className="text-emerald-300">&quot;Sharvari&quot;</span>        <span className="text-slate-500"># string</span>{"\n"}
                    <span className="text-slate-500">3  </span><span className="text-sky-300">age</span> = <span className="text-amber-300">20</span>                    <span className="text-slate-500"># integer</span>{"\n"}
                    <span className="text-slate-500">4  </span><span className="text-sky-300">height</span> = <span className="text-sky-300">5.6</span>                <span className="text-slate-500"># float</span>{"\n"}
                    <span className="text-slate-500">5  </span><span className="text-sky-300">is_student</span> = <span className="text-purple-300">True</span>          <span className="text-slate-500"># boolean</span>{"\n"}
                    <span className="text-slate-500">6  </span><span className="text-blue-400">print</span>(f&quot;Name: &#123;name&#125;&quot;){"\n"}
                    <span className="text-slate-500">7  </span><span className="text-blue-400">print</span>(f&quot;Age: &#123;age&#125;&quot;){"\n"}
                    <span className="text-slate-500">8  </span><span className="text-blue-400">print</span>(f&quot;Height: &#123;height&#125;&quot;)
                  </pre>
                </div>

                {/* Output on Right (4 Cols) */}
                <div className="md:col-span-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs font-mono">
                  <div className="font-bold text-slate-500 mb-2 font-sans uppercase tracking-wider text-[10px]">
                    Output
                  </div>
                  <div className="space-y-1 text-slate-800">
                    <div>Name: Sharvari</div>
                    <div>Age: 20</div>
                    <div>Height: 5.6</div>
                    <div>Student: True</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Practice Exercises & Mini AI Tutor (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Practice Exercises */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[#4F46E5]" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Practice Exercises</h3>
                </div>
                <span className="text-[11px] font-bold text-[#4F46E5] hover:underline cursor-pointer flex items-center gap-1">
                  Open in Code Editor →
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3">
                  <div>
                    <div className="font-bold text-slate-900">Exercise 1: Create Variables</div>
                    <div className="text-[10px] text-slate-400">Easy • 5 min</div>
                  </div>
                  <button className="rounded-xl bg-[#4F46E5] px-3.5 py-1 text-xs font-bold text-white hover:bg-[#4338CA]">
                    Start
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3">
                  <div>
                    <div className="font-bold text-slate-900">Exercise 2: Work with Different Data Types</div>
                    <div className="text-[10px] text-slate-400">Medium • 10 min</div>
                  </div>
                  <button className="rounded-xl bg-[#4F46E5] px-3.5 py-1 text-xs font-bold text-white hover:bg-[#4338CA]">
                    Start
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-3">
                  <div>
                    <div className="font-bold text-slate-900">Exercise 3: Real-world Examples</div>
                    <div className="text-[10px] text-slate-400">Medium • 10 min</div>
                  </div>
                  <button className="rounded-xl bg-[#4F46E5] px-3.5 py-1 text-xs font-bold text-white hover:bg-[#4338CA]">
                    Start
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Mini AI Tutor Widget */}
            <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image src="/ai-tutor-mascot.svg" alt="Tutor" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">AI Tutor</h3>
                    <p className="text-[10px] text-slate-400">Ask questions about this lesson</p>
                  </div>
                </div>
                <Link href="/tutor" className="text-[11px] font-bold text-[#4F46E5] hover:underline">
                  Full Chat →
                </Link>
              </div>

              {/* Chat Stream */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1 text-xs">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                        m.sender === "user"
                          ? "bg-[#4F46E5] text-white rounded-br-none"
                          : "bg-slate-100 text-slate-800 rounded-bl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1">{m.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <input
                  type="text"
                  value={tutorMessage}
                  onChange={(e) => setTutorMessage(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:border-[#4F46E5] focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#4F46E5] text-white shadow-sm hover:bg-[#4338CA] transition shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </AppShell>
  );
}

