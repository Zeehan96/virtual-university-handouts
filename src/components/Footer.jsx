'use client';

import React from 'react';
import { GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';

export function Footer({ onSelectFaculty, setActiveTab }) {
  return (
    <footer className="border-t border-slate-200/90 dark:border-[#0e224e] bg-white dark:bg-[#060d1f] pt-10 pb-6 mt-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded bg-[#0f2b5c] dark:bg-[#0b1a3a] border border-[#d4af37]/40 dark:border-[#fbbf24]/50 flex items-center justify-center text-[#d4af37] dark:text-[#fbbf24] shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex items-center leading-none">
                <span className="text-base font-black text-slate-900 dark:text-white">VU Study</span>
                <span className="text-base font-black text-[#b48316] dark:text-[#fbbf24]">Hub</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Pakistan’s premier study resource center for Virtual University students. Instant access to handouts, Moaaz & Waqar Sidhu solved past papers, grand quizzes, and notes.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] dark:text-[#fbbf24]" />
              <span>100% Free & Open Access for All Students</span>
            </div>
          </div>

          {/* Faculties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Faculties & Degrees
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => { setActiveTab('resources'); onSelectFaculty('education'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Faculty of Education (B.Ed 1.5, 2.5, 4 Years)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('resources'); onSelectFaculty('cs_it'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Faculty of Computer Science & IT (BSCS/BSIT)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('resources'); onSelectFaculty('management'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Management Sciences & BBA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('resources'); onSelectFaculty('science_math'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Science & Mathematics (Calculus/Stats)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('resources'); onSelectFaculty('arts_humanities'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Arts & Humanities (English, Pak, Islam)
                </button>
              </li>
            </ul>
          </div>

          {/* Student Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Student Utilities
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => { setActiveTab('calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  VU CGPA / GPA Calculator (4.0 Scale)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('calendar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Academic Timeline & Exam Dates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] text-left transition-colors cursor-pointer"
                >
                  Exam Software (VUBrowser) & Passing Guide
                </button>
              </li>
              <li>
                <a 
                  href="https://vulms.vu.edu.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] inline-flex items-center gap-1 transition-colors"
                >
                  <span>VU Official LMS Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official VU Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Official VU Links
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="https://datesheet.vu.edu.pk" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] inline-flex items-center gap-1 transition-colors">
                  <span>VU Datesheet Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.vu.edu.pk" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] inline-flex items-center gap-1 transition-colors">
                  <span>VU Official Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://vulms.vu.edu.pk/NoticeBoard.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] inline-flex items-center gap-1 transition-colors">
                  <span>VU Notice Board</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-[#0e224e] flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            © 2026 VU StudyHub. Designed & Managed by <a href="https://wa.me/923156900796" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0f2b5c] dark:text-[#60a5fa] hover:underline">Muhammad Zeeshan Khalid</a> • Contact: <a href="tel:03156900796" className="font-bold text-[#b48316] dark:text-[#fbbf24] hover:underline">03156900796</a>
          </div>
          <div>
            Independent educational community portal. Not affiliated with or endorsed by Virtual University of Pakistan.
          </div>
        </div>

      </div>
    </footer>
  );
}
