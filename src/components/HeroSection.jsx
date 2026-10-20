'use client';

import React from 'react';
import { 
  Search, 
  X, 
  BookMarked, 
  FileCheck2, 
  GraduationCap, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { FACULTIES, VU_PROGRAMS } from '../data/coursesData.js';

export function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedFaculty,
  setSelectedFaculty,
  selectedProgram,
  setSelectedProgram,
  totalCoursesCount,
  totalFilesCount,
}) {
  return (
    <div className="py-10 px-2 sm:px-4 relative">
      
      {/* Ambient background glow for light and dark modes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#eef4fb] via-[#e2ebf8]/40 to-transparent dark:from-[#1d4ed8]/15 dark:via-[#1e3a8a]/8 dark:to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Banner Tag */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] dark:text-[#fbbf24] shrink-0" />
          <span>Updated for Spring & Fall Semesters 2025 - 2026</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-3">
          All Virtual University{' '}
          <span className="text-[#0f2b5c] dark:text-[#60a5fa]">
            Handouts & Past Papers
          </span> in One Place
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Instant download official VU handouts, highlighted study notes, Moaaz & Waqar Sidhu solved midterm & finalterm papers, mega quiz files, and assignment solutions for all degree programs.
        </p>
      </div>

      {/* Search & Program Filter Box */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="glass-card p-3 rounded shadow-sm border border-slate-200/90 dark:border-[#1e3a8a]/50 bg-white dark:bg-[#0b1a3a] flex flex-col gap-2.5">
          
          {/* Main Search Input */}
          <div className="flex items-center gap-2.5 bg-slate-50 dark:bg-[#060d1f] px-3.5 py-2.5 rounded border border-slate-200 dark:border-[#1e3a8a]/40 focus-within:border-[#d4af37] dark:focus-within:border-[#fbbf24] focus-within:ring-2 focus-within:ring-[#fef9ee] dark:focus-within:ring-[#b48316]/30 transition-all">
            <Search className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24] shrink-0" />
            <input
              type="text"
              placeholder="Search by course code (e.g. CS101, MTH101, ENG201) or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 px-0.5">
            {/* Degree Program Dropdown */}
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <GraduationCap className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24] shrink-0" />
              <div className="relative w-full">
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full appearance-none bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 rounded px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none cursor-pointer pr-8 focus:border-[#d4af37] dark:focus:border-[#fbbf24]"
                >
                  {VU_PROGRAMS.map((prog) => (
                    <option key={prog} value={prog} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">
                      {prog}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Quick Chips */}
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[11px] text-slate-500 font-semibold">Quick:</span>
              {['CS101', 'EDU101', 'MTH101', 'EDU301', 'CS201', 'ENG201', 'ISL201'].map((code) => (
                <button
                  key={code}
                  onClick={() => setSearchQuery(code)}
                  className={`px-2 py-0.5 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                    searchQuery.toUpperCase() === code 
                      ? 'bg-[#0f2b5c] dark:bg-[#1d4ed8] text-white border-[#d4af37] dark:border-[#fbbf24] shadow-xs' 
                      : 'bg-slate-100 dark:bg-[#0e224e] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#1e3a8a]/50 hover:border-[#d4af37] hover:text-[#b48316] hover:bg-[#fef9ee]'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Category Chips (sharp border radius) */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap mb-8">
        {FACULTIES.map((fac) => {
          const isSelected = selectedFaculty === fac.id;
          return (
            <button
              key={fac.id}
              onClick={() => setSelectedFaculty(fac.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                isSelected 
                  ? 'bg-[#0f2b5c] dark:bg-[#1d4ed8] text-white shadow-xs border border-[#d4af37] dark:border-[#fbbf24]' 
                  : 'bg-white dark:bg-[#0b1a3a] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e3a8a]/40 hover:bg-[#fef9ee] dark:hover:bg-[#0e224e] hover:text-[#b48316] hover:border-[#f3dfa2] shadow-xs'
              }`}
            >
              <Layers className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37] dark:text-[#fbbf24]' : 'text-[#b48316] dark:text-[#fbbf24]'}`} />
              <span>{fac.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Metrics Row (sharp border radius) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
        <div className="glass-card p-3 rounded text-center border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs hover:shadow-sm">
          <div className="inline-flex p-1.5 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/30 mb-1.5">
            <BookMarked className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {totalCoursesCount}+
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Active VU Courses
          </div>
        </div>

        <div className="glass-card p-3 rounded text-center border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs hover:shadow-sm">
          <div className="inline-flex p-1.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-1.5">
            <FileCheck2 className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {totalFilesCount}+
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Handouts & Solved Papers
          </div>
        </div>

        <div className="glass-card p-3 rounded text-center border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs hover:shadow-sm">
          <div className="inline-flex p-1.5 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/30 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            100% Free
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Instant Direct Downloads
          </div>
        </div>

        <div className="glass-card p-3 rounded text-center border border-slate-200/90 dark:border-[#1e3a8a]/40 bg-white dark:bg-[#0b1a3a] shadow-xs hover:shadow-sm">
          <div className="inline-flex p-1.5 rounded bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/30 mb-1.5">
            <GraduationCap className="w-4 h-4 text-[#d4af37] dark:text-[#fbbf24]" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            All Degrees
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            BSCS, BSIT, BBA & ADP
          </div>
        </div>
      </div>

    </div>
  );
}
