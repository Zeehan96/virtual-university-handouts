'use client';

import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  Send 
} from 'lucide-react';
import { Button } from './Button.jsx';

export function RequestFileModal({ isOpen, onClose, onSubmitSuccess }) {
  const [mode, setMode] = useState('request');
  const [courseCode, setCourseCode] = useState('');
  const [resourceType, setResourceType] = useState('Handout');
  const [notes, setNotes] = useState('');
  const [studentContact, setStudentContact] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseCode.trim()) {
      alert('Please enter a course code (e.g. CS101 or MTH101)');
      return;
    }

    if (mode === 'request') {
      onSubmitSuccess(`Request for ${courseCode.toUpperCase()} (${resourceType}) submitted! We will upload it shortly.`);
    } else {
      onSubmitSuccess(`Thank you for contributing! Your ${courseCode.toUpperCase()} file has been submitted for review.`);
    }

    setCourseCode('');
    setNotes('');
    setStudentContact('');
    setSelectedFile(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-white dark:bg-[#0b1a3a] border border-slate-200/90 dark:border-[#1e3a8a]/60 rounded max-w-lg w-full overflow-hidden shadow-2xl flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200/90 dark:border-[#0e224e] bg-slate-50/80 dark:bg-[#060d1f] flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {mode === 'request' ? 'Request Missing Study Material' : 'Upload & Contribute Notes'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Help us expand Virtual University's largest student resource hub.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-7 h-7 rounded flex items-center justify-center bg-slate-100 dark:bg-[#0e224e] text-slate-500 hover:bg-slate-200 dark:hover:bg-[#1e3a8a]/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="p-3.5 pb-0 flex gap-2">
          <button
            type="button"
            onClick={() => setMode('request')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
              mode === 'request' 
                ? 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a] shadow-xs' 
                : 'bg-slate-100 dark:bg-[#0e224e] text-slate-600 dark:text-slate-400 hover:bg-slate-200/80'
            }`}
          >
            Request a File
          </button>

          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
              mode === 'upload' 
                ? 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a] shadow-xs' 
                : 'bg-slate-100 dark:bg-[#0e224e] text-slate-600 dark:text-slate-400 hover:bg-slate-200/80'
            }`}
          >
            Contribute / Upload Notes
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 flex flex-col gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Course Code *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. CS101, MTH101, ENG201, PHY101"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#cbdbee]/50 dark:focus:ring-[#1e3a8a]/40 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Resource Category
            </label>
            <select
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#cbdbee]/50 dark:focus:ring-[#1e3a8a]/40 transition-all cursor-pointer"
            >
              <option value="Official Handout" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Official Handouts (PDF)</option>
              <option value="Highlighted Handout" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Highlighted Handouts (Mid/Final marked)</option>
              <option value="Midterm Solved Papers" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Midterm Solved Past Papers (Moaaz / Waqar)</option>
              <option value="Finalterm Solved Papers" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Finalterm Solved Past Papers</option>
              <option value="Mega Grand Quiz" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Grand Quiz / MCQs Dumps</option>
              <option value="Short Notes" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Short Revision Notes / Slides</option>
              <option value="Assignment Solution" className="bg-white dark:bg-[#0b1a3a] text-slate-900 dark:text-white">Assignment Solution / Code</option>
            </select>
          </div>

          {mode === 'upload' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Attach Document / PDF
              </label>
              <div className="border border-dashed border-slate-300 dark:border-[#1e3a8a]/60 rounded p-4 text-center bg-slate-50 dark:bg-[#060d1f]">
                <UploadCloud className="w-6 h-6 text-[#d4af37] dark:text-[#fbbf24] mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {selectedFile ? selectedFile.name : 'Click to select PDF or Notes file'}
                </p>
                <span className="text-[10px] text-slate-400">PDF, DOCX, ZIP up to 50MB</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.zip,.rar"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  id="modal-file-upload"
                />
                <div className="mt-2">
                  <label htmlFor="modal-file-upload" className="cursor-pointer inline-block px-3 py-1.5 rounded bg-white dark:bg-[#0b1a3a] border border-slate-200 dark:border-[#1e3a8a]/50 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 shadow-xs">
                    Browse File
                  </label>
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Additional Details / Description
            </label>
            <textarea
              rows={2}
              placeholder="Specify lesson numbers, author name (e.g. Moaaz Siddique), or year..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#cbdbee]/50 dark:focus:ring-[#1e3a8a]/40 transition-all resize-none placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Your Email or WhatsApp (Optional for updates)
            </label>
            <input
              type="text"
              placeholder="e.g. student@gmail.com or 0300-1234567"
              value={studentContact}
              onChange={(e) => setStudentContact(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-50 dark:bg-[#060d1f] border border-slate-200 dark:border-[#1e3a8a]/40 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:border-[#0f2b5c] dark:focus:border-[#3b82f6] focus:ring-2 focus:ring-[#cbdbee]/50 dark:focus:ring-[#1e3a8a]/40 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center justify-end gap-2 mt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              size="sm"
              type="submit"
              icon={<Send className="w-3.5 h-3.5" />}
            >
              {mode === 'request' ? 'Submit Request' : 'Upload Material'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
