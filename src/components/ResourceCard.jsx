'use client';

import React from 'react';
import { 
  Download, 
  CheckCircle2, 
  FolderOpen, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';
import { Button } from './Button.jsx';

export function ResourceCard({ course, onOpenDetails, onDownloadFile }) {
  const primaryHandout = course.resources.find((r) => r.category === 'handouts') || course.resources[0];
  
  const midtermCount = course.resources.filter((r) => r.category === 'midterm').length;
  const finaltermCount = course.resources.filter((r) => r.category === 'finalterm').length;
  const quizCount = course.resources.filter((r) => r.category === 'quizzes').length;

  return (
    <div className="glass-card p-4 rounded border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] flex flex-col justify-between transition-all hover:border-[#0f2b5c] dark:hover:border-[#3b82f6] hover:shadow-md duration-150">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black bg-[#0f2b5c] dark:bg-[#1d4ed8] text-white px-2 py-0.5 rounded shadow-xs">
              {course.code}
            </span>
            <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#0e224e] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e3a8a]/60">
              Sem {course.semesterRecommendation} • {course.creditHours} CH
            </span>
          </div>

          <div className="flex items-center gap-1 text-[#b48316] dark:text-[#fbbf24] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37] dark:fill-[#fbbf24] dark:text-[#fbbf24]" />
            <span>4.9</span>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onOpenDetails(course)}
          className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-1.5 cursor-pointer hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] transition-colors"
        >
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
          {course.description}
        </p>

        {/* Content Badges (sharp border radius) */}
        <div className="flex flex-wrap gap-1 mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a]">
            <BookOpen className="w-3 h-3 text-[#b48316] dark:text-[#fbbf24]" />
            <span>Handouts</span>
          </span>
          {midtermCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              <CheckCircle2 className="w-3 h-3" />
              <span>{midtermCount} Midterm</span>
            </span>
          )}
          {finaltermCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
              <CheckCircle2 className="w-3 h-3" />
              <span>{finaltermCount} Finalterm</span>
            </span>
          )}
          {quizCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/40">
              <Sparkles className="w-3 h-3 text-[#d4af37] dark:text-[#fbbf24]" />
              <span>Quizzes</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer with Button.jsx */}
      <div className="pt-2.5 border-t border-slate-200/80 dark:border-[#0e224e] flex items-center justify-between gap-2">
        {primaryHandout && (
          <Button
            variant="contained"
            size="sm"
            onClick={() => onDownloadFile(primaryHandout, course.title)}
            icon={<Download className="w-3 h-3 text-[#d4af37] dark:text-[#fbbf24]" />}
            className="flex-1"
          >
            Handout ({primaryHandout.fileSize})
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => onOpenDetails(course)}
          icon={<FolderOpen className="w-3.5 h-3.5 text-[#b48316] dark:text-[#fbbf24]" />}
          className="whitespace-nowrap"
        >
          All Files ({course.resources.length})
        </Button>
      </div>
    </div>
  );
}
