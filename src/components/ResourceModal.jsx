'use client';

import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  FileArchive, 
  FileCode, 
  Share2, 
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Button } from './Button.jsx';

export function ResourceModal({ course, onClose, onDownloadFile, onCopyShareLink }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!course) return null;

  const categories = [
    { id: 'all', label: 'All Files', count: course.resources.length },
    { id: 'handouts', label: 'Handouts', count: course.resources.filter(r => r.category === 'handouts').length },
    { id: 'midterm', label: 'Midterm Papers', count: course.resources.filter(r => r.category === 'midterm').length },
    { id: 'finalterm', label: 'Finalterm Papers', count: course.resources.filter(r => r.category === 'finalterm').length },
    { id: 'quizzes', label: 'Grand Quizzes', count: course.resources.filter(r => r.category === 'quizzes').length },
    { id: 'shortnotes', label: 'Short Notes', count: course.resources.filter(r => r.category === 'shortnotes').length },
  ];

  const filteredResources = selectedCategory === 'all'
    ? course.resources
    : course.resources.filter(r => r.category === selectedCategory);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'zip':
        return <FileArchive className="w-4 h-4 text-amber-500" />;
      case 'code':
        return <FileCode className="w-4 h-4 text-cyan-500" />;
      default:
        return <FileText className="w-4 h-4 text-[#0f2b5c] dark:text-[#60a5fa]" />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-white dark:bg-[#0b1a3a] border border-slate-200/90 dark:border-[#1e3a8a]/60 rounded max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200/90 dark:border-[#0e224e] bg-slate-50/80 dark:bg-[#060d1f] flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-xs font-black bg-[#0f2b5c] dark:bg-[#1d4ed8] text-white px-2 py-0.5 rounded shadow-xs">
                {course.code}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a]">
                {course.creditHours} Credit Hours
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                Semester {course.semesterRecommendation}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">
              {course.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Programs: {course.programs.join(' • ')}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded flex items-center justify-center bg-slate-100 dark:bg-[#0e224e] text-slate-500 hover:bg-slate-200 dark:hover:bg-[#1e3a8a]/60 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          
          {/* Category Filter Pills (sharp border radius) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-4 border-b border-slate-200/70 dark:border-[#0e224e]">
            {categories.map((cat) => {
              if (cat.count === 0 && cat.id !== 'all') return null;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    isSelected 
                      ? 'bg-[#0f2b5c] dark:bg-[#1d4ed8] text-white shadow-xs' 
                      : 'bg-slate-100 dark:bg-[#0e224e] text-slate-700 dark:text-slate-300 hover:bg-[#eef4fb] dark:hover:bg-[#1e3a8a]/50 hover:text-[#0f2b5c] dark:hover:text-white'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Files List */}
          <div className="flex flex-col gap-2.5">
            {filteredResources.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 hover:border-[#0f2b5c] dark:hover:border-[#3b82f6] hover:bg-[#eef4fb]/30 dark:hover:bg-[#060d1f] transition-colors gap-3"
              >
                {/* File Icon & Info */}
                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                  <div className="p-2 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 shrink-0">
                    {getFileIcon(file.fileType)}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {file.title}
                      </span>
                      {file.isVerified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Verified</span>
                        </span>
                      )}
                      {file.highlighted && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#b48316] dark:text-[#fbbf24] bg-[#fef9ee] dark:bg-[#78350f]/25 px-1.5 py-0.5 rounded border border-[#f3dfa2] dark:border-[#b48316]/50">
                          <Sparkles className="w-3 h-3 text-[#d4af37] dark:text-[#fbbf24]" />
                          <span>Highlighted</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                      <span><strong>Source:</strong> {file.authorOrSource}</span>
                      <span>•</span>
                      <span><strong>Coverage:</strong> {file.syllabusCovered}</span>
                      <span>•</span>
                      <span><strong>Size:</strong> {file.fileSize}</span>
                      {file.pages && (
                        <>
                          <span>•</span>
                          <span><strong>Pages:</strong> {file.pages}</span>
                        </>
                      )}
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[#b48316] dark:text-[#fbbf24] font-bold">
                        <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37] dark:fill-[#fbbf24] dark:text-[#fbbf24]" />
                        <span>{file.rating.toFixed(1)}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* File Actions with Button.jsx */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => onCopyShareLink(course, file)}
                    className="p-1.5 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-slate-600 hover:text-[#0f2b5c] dark:hover:text-[#60a5fa] hover:border-[#0f2b5c] dark:hover:border-[#3b82f6] transition-colors cursor-pointer"
                    title="Copy WhatsApp share link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <Button
                    variant="contained"
                    size="sm"
                    onClick={() => onDownloadFile(file, course.title)}
                    icon={<Download className="w-3 h-3 text-[#d4af37] dark:text-[#fbbf24]" />}
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Exam Strategy Tip Banner */}
          <div className="mt-5 p-3 rounded bg-[#eef4fb] dark:bg-[#0e224e]/50 border border-[#cbdbee] dark:border-[#1e3a8a]/60 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-[#0f2b5c] dark:text-[#93c5fd] uppercase tracking-wider mb-0.5">
                VU Exam Strategy for {course.code}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Virtual University exam pattern gives 20% weightage to Midterm and 60% to Finalterm. For midterm preparation, focus on Lessons 1 to 22. Practice Moaaz Siddique past papers for recurring MCQs and Waqar Sidhu files for short subjective questions.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer with Button.jsx */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200/90 dark:border-[#0e224e] bg-slate-50/80 dark:bg-[#060d1f] flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Scanned for viruses • Verified for Virtual University LMS
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
}
