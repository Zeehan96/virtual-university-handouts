'use client';

import React from 'react';
import { 
  AlertTriangle, 
  Monitor, 
  Lightbulb, 
  ShieldCheck, 
  Clock,
  Layers
} from 'lucide-react';

export function VuGuide() {
  return (
    <div className="py-8 max-w-4xl mx-auto px-2 sm:px-4">
      
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-[#d4af37] dark:text-[#fbbf24]" />
          <span>Essential Advice for Virtual University Students</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
          VU Student Survival & Exam Guide
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Master your semesters with insider tips on exam patterns, passing criteria, VUBrowser exam software, and assignment scoring.
        </p>
      </div>

      {/* 4 Pillars Grid (sharp border radius) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
        
        {/* Card 1: 60/20/20 Rule */}
        <div className="glass-card p-5 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
          <div className="w-9 h-9 rounded bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#60a5fa] flex items-center justify-center mb-3">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
            60 / 20 / 20 Grading Formula
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            VU calculates overall course weightage as:
            <br />• <strong>60% Finalterm Exam:</strong> Decisive for passing.
            <br />• <strong>20% Midterm Exam:</strong> Crucial for maintaining GPA.
            <br />• <strong>20% Coursework:</strong> Quizzes, GDBs, and Assignments.
          </p>
        </div>

        {/* Card 2: Campus Exam Tool */}
        <div className="glass-card p-5 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
          <div className="w-9 h-9 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
            <Monitor className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
            Campus VUBrowser Exam Tool
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Exams are held in strict lock-down environment.
            <br />• Bring your <strong>Student ID card & Roll No Slip</strong>.
            <br />• Use on-screen Calculator & MathType for formulas.
            <br />• Save subjective answers frequently during paper!
          </p>
        </div>

        {/* Card 3: Plagiarism Warning */}
        <div className="glass-card p-5 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
          <div className="w-9 h-9 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
            Avoiding Zero in Assignments
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            VU instructors run automated code plagiarism detectors (like MOSS):
            <br />• Never upload unedited solutions from social media.
            <br />• Rename variables, change styling, and explain logic in your own words.
          </p>
        </div>

        {/* Card 4: Quizzes */}
        <div className="glass-card p-5 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
          <div className="w-9 h-9 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] flex items-center justify-center mb-3 border border-[#f3dfa2] dark:border-[#b48316]/30">
            <Clock className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
            LMS Quizzes (90s Timer)
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Each MCQ on LMS gives exactly 90 seconds.
            <br />• Review our <strong>Grand Quiz Files</strong> beforehand.
            <br />• Ensure high-speed stable internet connection.
            <br />• Click 'Save' before the timer reaches 00:00!
          </p>
        </div>
      </div>

      {/* 4-Step Strategy */}
      <div className="glass-card p-5 sm:p-6 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
          <span>4-Step Strategy to Achieve 3.5+ CGPA</span>
        </h3>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 font-bold flex items-center justify-center text-xs shrink-0">1</div>
            <div>
              <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">Read Official Handouts First:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Most questions in VU papers are verbatim from handouts. Use our highlighted PDFs to prioritize high-frequency exam topics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 font-bold flex items-center justify-center text-xs shrink-0">2</div>
            <div>
              <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">Solve Moaaz & Waqar Sidhu Files:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Past papers teach you how the VU examination cell constructs questions, handles multiple-choice distractors, and frames subjective problems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 font-bold flex items-center justify-center text-xs shrink-0">3</div>
            <div>
              <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">Never Miss 20% Sessional Marks:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                If you score 100% in your Quizzes, Assignments, and GDBs, you already secure 20 free percentage points before walking into the final exam hall!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 font-bold flex items-center justify-center text-xs shrink-0">4</div>
            <div>
              <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">Review Golden Short Notes Before Exam Night:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Don't re-read 400 pages of handouts on exam night. Download our curated summary notes to refresh definitions, formulas, and diagrams.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
