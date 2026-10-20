'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar.jsx';
import { HeroSection } from '../components/HeroSection.jsx';
import { ResourceCard } from '../components/ResourceCard.jsx';
import { ResourceModal } from '../components/ResourceModal.jsx';
import { GpaCalculator } from '../components/GpaCalculator.jsx';
import { AcademicCalendar } from '../components/AcademicCalendar.jsx';
import { VuGuide } from '../components/VuGuide.jsx';
import { RequestFileModal } from '../components/RequestFileModal.jsx';
import { Footer } from '../components/Footer.jsx';
import { Button } from '../components/Button.jsx';
import { COURSES_DATA } from '../data/coursesData.js';
import { CheckCircle2, SearchX } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('resources');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');
  
  // Modals state
  const [selectedCourseModal, setSelectedCourseModal] = useState(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      if (selectedFaculty !== 'all' && course.faculty !== selectedFaculty) {
        return false;
      }

      if (selectedProgram !== 'All Programs') {
        const progAbbr = selectedProgram.match(/\(([^)]+)\)/)?.[1] || selectedProgram;
        const matchesProgram = course.programs.some(
          (p) =>
            p.toLowerCase().includes(progAbbr.toLowerCase()) ||
            progAbbr.toLowerCase().includes(p.toLowerCase()) ||
            selectedProgram.toLowerCase().includes(p.toLowerCase()) ||
            p.toLowerCase().includes(selectedProgram.toLowerCase())
        );
        if (!matchesProgram) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const codeMatch = course.code.toLowerCase().includes(q);
        const titleMatch = course.title.toLowerCase().includes(q);
        const descMatch = course.description.toLowerCase().includes(q);
        const filesMatch = course.resources.some((r) => r.title.toLowerCase().includes(q));

        return codeMatch || titleMatch || descMatch || filesMatch;
      }

      return true;
    });
  }, [searchQuery, selectedFaculty, selectedProgram]);

  const totalFilesCount = useMemo(() => {
    return COURSES_DATA.reduce((sum, c) => sum + c.resources.length, 0);
  }, []);

  const handleDownloadFile = (file, courseTitle) => {
    const fileContent = `==========================================================
VIRTUAL UNIVERSITY OF PAKISTAN - STUDY MATERIAL
Portal: VU StudyHub (https://vustudyhub.pk)
==========================================================

Title: ${file.title}
Course: ${courseTitle}
Category: ${file.category.toUpperCase()}
Coverage: ${file.syllabusCovered}
Author/Source: ${file.authorOrSource}
File Size: ${file.fileSize}
Pages: ${file.pages || 'N/A'}
Verified: ${file.isVerified ? 'Yes (100% Authentic LMS Content)' : 'Community Contributed'}

----------------------------------------------------------
STUDY NOTES & SUMMARY:
This document is prepared for Virtual University students 
enrolled in BSCS, BSSE, BSIT, BBA, and associated programs.

RECOMMENDED REVISION STRATEGY:
1. Cover Lessons 1 - 22 thoroughly for Midterm Exam.
2. Review Moaaz Siddique & Waqar Sidhu solved past papers.
3. Master Grand Quiz MCQs for 100% score in online quizzes.
----------------------------------------------------------
End of File Preview. Official document downloaded successfully.`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    addToast(`Downloading: ${file.title} (${file.fileSize})`, 'success');
  };

  const handleCopyShareLink = (course, file) => {
    const textToCopy = `📚 Download ${course.code} (${course.title}) ${file ? `- ${file.title}` : 'Handouts & Past Papers'} from VU StudyHub: https://vustudyhub.pk/#${course.code.toLowerCase()}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      addToast(`Link copied for ${course.code}! Share on your VU WhatsApp group.`, 'info');
    } else {
      addToast(`Ready to share: ${course.code}`, 'info');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white via-slate-50 to-slate-100/70 dark:from-[#060d1f] dark:via-[#060d1f] dark:to-[#040814] text-slate-900 dark:text-white transition-colors selection:bg-[#0f2b5c] dark:selection:bg-[#1d4ed8] selection:text-white">
      
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRequestFileClick={() => setIsRequestModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'resources' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            {/* Hero Section */}
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedFaculty={selectedFaculty}
              setSelectedFaculty={setSelectedFaculty}
              selectedProgram={selectedProgram}
              setSelectedProgram={setSelectedProgram}
              totalCoursesCount={COURSES_DATA.length}
              totalFilesCount={totalFilesCount}
            />

            {/* Courses Section Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-8 mb-5">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  Available Courses ({filteredCourses.length})
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Click on any subject to download complete handouts, midterm & finalterm solved papers.
                </p>
              </div>

              {(searchQuery || selectedFaculty !== 'all' || selectedProgram !== 'All Programs') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFaculty('all');
                    setSelectedProgram('All Programs');
                  }}
                >
                  Clear All Filters
                </Button>
              )}
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
                {filteredCourses.map((course) => (
                  <ResourceCard
                    key={course.code}
                    course={course}
                    onOpenDetails={(c) => setSelectedCourseModal(c)}
                    onDownloadFile={handleDownloadFile}
                  />
                ))}
              </div>
            ) : (
              /* No Results State (sharp border radius) */
              <div className="glass-card p-10 text-center rounded border border-slate-200 dark:border-[#1e3a8a]/50 bg-white dark:bg-[#0b1a3a] max-w-md mx-auto my-10 shadow-sm">
                <SearchX className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  No Courses Found
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
                  We couldn't find any courses matching "{searchQuery}". Would you like to request this course material?
                </p>
                <Button
                  variant="contained"
                  size="sm"
                  onClick={() => setIsRequestModalOpen(true)}
                >
                  Request Course Material
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: GPA Calculator */}
        {activeTab === 'calculator' && <GpaCalculator />}

        {/* Tab 3: Academic Calendar */}
        {activeTab === 'calendar' && <AcademicCalendar />}

        {/* Tab 4: VU Exam Guide */}
        {activeTab === 'guide' && <VuGuide />}
      </main>

      {/* Course Detail Modal */}
      <ResourceModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onDownloadFile={handleDownloadFile}
        onCopyShareLink={handleCopyShareLink}
      />

      {/* Request / Upload Modal */}
      <RequestFileModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSubmitSuccess={(msg) => addToast(msg, 'success')}
      />

      {/* Footer */}
      <Footer
        onSelectFaculty={(fac) => setSelectedFaculty(fac)}
        setActiveTab={setActiveTab}
      />

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
