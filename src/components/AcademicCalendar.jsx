'use client';

import React from 'react';
import { 
  Calendar as CalendarIcon, 
  ExternalLink, 
  CalendarCheck2
} from 'lucide-react';

export function AcademicCalendar() {
  const events = [
    {
      title: 'Course Selection Window (Add/Drop)',
      date: 'Semester Start - 2 Weeks',
      type: 'general',
      description: 'Students can add, drop or replace courses up to maximum allowed credit hours per semester rule.',
    },
    {
      title: 'Midterm Date Sheet Creation Portal Opens',
      date: 'Approx. 4 Weeks Before Midterm',
      type: 'urgent',
      description: 'Book your preferred exam center, exam date and time slots on datesheet.vu.edu.pk. Slots fill quickly on first-come basis.',
    },
    {
      title: 'Midterm Examinations (Lessons 1 to 22)',
      date: 'Mid Semester Exam Week',
      type: 'exam',
      description: 'Midterm carries 20% to 25% course weightage. Conducted in Virtual University verified examination campus on VUBrowser.',
    },
    {
      title: 'Graded Discussion Boards (GDB) & Assignments',
      date: 'Continuous throughout semester',
      type: 'active',
      description: 'Mandatory 15% to 20% overall coursework weightage. Submit on VU LMS within due dates.',
    },
    {
      title: 'Final Term Date Sheet Making',
      date: 'Approx. 3 Weeks Before Finalterm',
      type: 'urgent',
      description: 'Select your preferred slots for comprehensive Final Term exams.',
    },
    {
      title: 'Final Term Examinations (Comprehensive Lessons 23 to 45 + 15% Mid)',
      date: 'End of Semester Exam Window',
      type: 'exam',
      description: 'Carries highest 60% weightage. Passing threshold requires aggregate passing in final exam paper.',
    },
    {
      title: 'Semester Result Announcement on VULMS',
      date: '3 to 4 Weeks After Final Exam',
      type: 'general',
      description: 'Official CGPA and SGPA grade cards published in VU LMS Gradebook tab.',
    },
  ];

  return (
    <div className="py-8 max-w-4xl mx-auto px-2 sm:px-4">
      
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 mb-2">
          <CalendarCheck2 className="w-3.5 h-3.5" />
          <span>Virtual University Academic Schedule & Dates</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
          VU Academic Timeline & Exam Schedule
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Stay updated with semester milestones, midterm / finalterm exam dates, and official VU datesheet deadlines.
        </p>
      </div>

      {/* Datesheet Action Card */}
      <div className="glass-card p-5 rounded mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-[#eef4fb] to-[#e2ebf8] dark:from-[#0b1a3a] dark:to-[#0e224e] border border-[#cbdbee] dark:border-[#1e3a8a] shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-[#93c5fd] bg-white dark:bg-[#060d1f] border border-[#cbdbee] dark:border-[#1e3a8a] px-1.5 py-0.5 rounded">
              Official Portal
            </span>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              VU Date Sheet Portal (datesheet.vu.edu.pk)
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
            When datesheet opens, generate your Roll Number Slip by selecting your preferred city, campus center, exam dates, and batch timings.
          </p>
        </div>

        <a
          href="https://datesheet.vu.edu.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] hover:bg-[#b48316] dark:bg-[#fbbf24] dark:hover:bg-[#f59e0b] text-[#0f2b5c] dark:text-[#060d1f] font-bold rounded text-xs shadow-xs transition-colors whitespace-nowrap cursor-pointer"
        >
          <span>Open Date Sheet</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Timeline Events */}
      <div className="glass-card p-5 sm:p-6 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          Semester Milestones & Timeline
        </h3>

        <div className="flex flex-col gap-3">
          {events.map((event, index) => {
            const isExam = event.type === 'exam';
            const isUrgent = event.type === 'urgent';
            return (
              <div
                key={index}
                className={`flex items-start gap-3 p-3.5 rounded border transition-colors ${
                  isExam 
                    ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40' 
                    : isUrgent 
                    ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40' 
                    : 'bg-slate-50 dark:bg-[#060d1f] border-slate-200 dark:border-[#1e3a8a]/40'
                }`}
              >
                <div className={`p-2 rounded shrink-0 ${
                  isExam 
                    ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-600' 
                    : isUrgent 
                    ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600' 
                    : 'bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/30'
                }`}>
                  <CalendarIcon className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {event.title}
                    </h4>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      isExam 
                        ? 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300' 
                        : isUrgent 
                        ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300' 
                        : 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd]'
                    }`}>
                      {event.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
