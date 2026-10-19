'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  Award, 
  RefreshCw 
} from 'lucide-react';
import { VU_GRADING_SCALE } from '../data/coursesData.js';
import { Button } from './Button.jsx';

export function GpaCalculator() {
  const [courses, setCourses] = useState([
    { id: '1', courseName: 'CS101 - Introduction to Computing', creditHours: 3, grade: 'A' },
    { id: '2', courseName: 'MTH101 - Calculus & Analytical Geometry', creditHours: 3, grade: 'B+' },
    { id: '3', courseName: 'ENG101 - English Comprehension', creditHours: 3, grade: 'A-' },
    { id: '4', courseName: 'ISL201 - Islamic Studies', creditHours: 2, grade: 'A' },
  ]);

  const [prevCgpa, setPrevCgpa] = useState('');
  const [prevCredits, setPrevCredits] = useState('');

  const getGpaPoints = (grade) => {
    const found = VU_GRADING_SCALE.find((item) => item.grade === grade);
    return found ? found.gpa : 0;
  };

  const handleAddCourse = () => {
    const newId = Date.now().toString();
    setCourses([...courses, { id: newId, courseName: `Course ${courses.length + 1}`, creditHours: 3, grade: 'A' }]);
  };

  const handleRemoveCourse = (id) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleUpdateCourse = (id, field, value) => {
    setCourses(
      courses.map((c) => {
        if (c.id === id) {
          return { ...c, [field]: value };
        }
        return c;
      })
    );
  };

  const handleReset = () => {
    setCourses([
      { id: '1', courseName: 'CS101 - Introduction to Computing', creditHours: 3, grade: 'A' },
      { id: '2', courseName: 'MTH101 - Calculus & Analytical Geometry', creditHours: 3, grade: 'B+' },
      { id: '3', courseName: 'ENG101 - English Comprehension', creditHours: 3, grade: 'A-' },
    ]);
    setPrevCgpa('');
    setPrevCredits('');
  };

  const currentSemesterCredits = courses.reduce((sum, c) => sum + Number(c.creditHours), 0);
  const totalQualityPoints = courses.reduce(
    (sum, c) => sum + Number(c.creditHours) * getGpaPoints(c.grade),
    0
  );

  const semesterGpa = currentSemesterCredits > 0 ? totalQualityPoints / currentSemesterCredits : 0;

  let cumulativeCgpa = semesterGpa;
  let totalOverallCredits = currentSemesterCredits;

  const parsedPrevCgpa = parseFloat(prevCgpa);
  const parsedPrevCredits = parseFloat(prevCredits);

  if (!isNaN(parsedPrevCgpa) && !isNaN(parsedPrevCredits) && parsedPrevCredits > 0) {
    const prevQualityPoints = parsedPrevCgpa * parsedPrevCredits;
    totalOverallCredits = parsedPrevCredits + currentSemesterCredits;
    cumulativeCgpa = (prevQualityPoints + totalQualityPoints) / totalOverallCredits;
  }

  const getAcademicStanding = (cgpa) => {
    if (cgpa >= 3.85) return { status: "Rector's Honour Roll", color: 'text-[#b48316] dark:text-[#fbbf24]' };
    if (cgpa >= 3.50) return { status: "Dean's Honour Roll", color: 'text-[#d4af37] dark:text-[#fbbf24]' };
    if (cgpa >= 2.00) return { status: 'Good Academic Standing', color: 'text-emerald-500' };
    if (cgpa >= 1.75) return { status: 'Academic Warning', color: 'text-amber-500' };
    return { status: 'Probation / Drop Risk', color: 'text-rose-500' };
  };

  const standing = getAcademicStanding(cumulativeCgpa);

  return (
    <div className="py-8 max-w-4xl mx-auto px-2 sm:px-4">
      
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-[#fef9ee] dark:bg-[#78350f]/25 text-[#b48316] dark:text-[#fbbf24] border border-[#f3dfa2] dark:border-[#b48316]/50 mb-2">
          <Calculator className="w-3.5 h-3.5 text-[#d4af37] dark:text-[#fbbf24]" />
          <span>Virtual University Grading System (4.00 Scale)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
          VU GPA & Cumulative CGPA Calculator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Accurately calculate your semester GPA and projected cumulative CGPA based on Virtual University official grading thresholds.
        </p>
      </div>

      {/* Results Banner (sharp border radius) */}
      <div className="glass-card p-5 sm:p-6 rounded border border-slate-200/90 dark:border-[#1e3a8a]/50 bg-white dark:bg-[#0b1a3a] mb-6 grid grid-cols-1 sm:grid-cols-3 gap-5 items-center shadow-xs">
        {/* Semester GPA */}
        <div className="text-center sm:border-r border-slate-200 dark:border-[#0e224e]">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Semester GPA
          </span>
          <div className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-[#60a5fa] my-1">
            {semesterGpa.toFixed(2)}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {currentSemesterCredits} Total Credit Hours
          </span>
        </div>

        {/* Projected CGPA */}
        <div className="text-center sm:border-r border-slate-200 dark:border-[#0e224e]">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Cumulative CGPA
          </span>
          <div className={`text-4xl sm:text-5xl font-black ${standing.color} my-1`}>
            {cumulativeCgpa.toFixed(2)}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Based on {totalOverallCredits} Total Credits
          </span>
        </div>

        {/* Academic Standing */}
        <div className="text-center bg-slate-50 dark:bg-[#060d1f] p-3.5 rounded border border-slate-200 dark:border-[#1e3a8a]/40">
          <Award className={`w-7 h-7 ${standing.color} mx-auto mb-1`} />
          <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">VU Standing Status</div>
          <div className={`text-sm font-black ${standing.color} mt-0.5`}>
            {standing.status}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Min 2.00 required for BS Graduation
          </p>
        </div>
      </div>

      {/* Input Table */}
      <div className="glass-card p-5 sm:p-6 rounded border border-slate-200/90 dark:border-[#1e3a8a]/50 bg-white dark:bg-[#0b1a3a] shadow-xs">
        
        {/* Previous CGPA Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-3.5 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 mb-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Previous CGPA (Optional)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              placeholder="e.g. 3.25"
              value={prevCgpa}
              onChange={(e) => setPrevCgpa(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#eef4fb] dark:focus:ring-[#1e3a8a]/40 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Previous Completed Credit Hours (Optional)
            </label>
            <input
              type="number"
              min="0"
              max="140"
              placeholder="e.g. 45"
              value={prevCredits}
              onChange={(e) => setPrevCredits(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#eef4fb] dark:focus:ring-[#1e3a8a]/40 transition-all"
            />
          </div>
        </div>

        {/* Current Semester Courses */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Current Semester Courses
            </h3>
            <button 
              onClick={handleReset} 
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#0f2b5c] dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="grid grid-cols-[1fr_85px_95px_32px] sm:grid-cols-[1fr_110px_120px_36px] gap-2 items-center p-2.5 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40"
              >
                <input
                  type="text"
                  value={course.courseName}
                  onChange={(e) => handleUpdateCourse(course.id, 'courseName', e.target.value)}
                  placeholder="Course name..."
                  className="bg-transparent border-none text-slate-900 dark:text-white text-xs sm:text-sm font-semibold outline-none placeholder:text-slate-400"
                />

                <select
                  value={course.creditHours}
                  onChange={(e) => handleUpdateCourse(course.id, 'creditHours', Number(e.target.value))}
                  className="px-2 py-1 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none cursor-pointer focus:border-[#0f2b5c] dark:focus:border-[#3b82f6]"
                >
                  <option value={1} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">1 Credit</option>
                  <option value={2} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">2 Credits</option>
                  <option value={3} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">3 Credits</option>
                  <option value={4} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">4 Credits</option>
                </select>

                <select
                  value={course.grade}
                  onChange={(e) => handleUpdateCourse(course.id, 'grade', e.target.value)}
                  className="px-2 py-1 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-xs font-bold text-[#0f2b5c] dark:text-[#60a5fa] outline-none cursor-pointer focus:border-[#0f2b5c] dark:focus:border-[#3b82f6]"
                >
                  {VU_GRADING_SCALE.map((g) => (
                    <option key={g.grade} value={g.grade} className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">
                      {g.grade} ({g.gpa.toFixed(2)})
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => handleRemoveCourse(course.id)}
                  disabled={courses.length <= 1}
                  className="w-8 h-8 rounded flex items-center justify-center text-rose-500 hover:bg-rose-100/60 dark:hover:bg-rose-950/40 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddCourse}
            icon={<Plus className="w-3.5 h-3.5" />}
            className="mt-3 w-full"
          >
            Add Another Course
          </Button>
        </div>

        {/* Grade Reference Grid */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-[#0e224e]">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5">
            Virtual University Official Grade Scale Reference
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {VU_GRADING_SCALE.map((scale) => (
              <div
                key={scale.grade}
                className="p-1.5 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 text-center"
              >
                <div className="font-black text-[#0f2b5c] dark:text-[#60a5fa] text-xs">
                  {scale.grade} = {scale.gpa.toFixed(2)}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{scale.range}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
