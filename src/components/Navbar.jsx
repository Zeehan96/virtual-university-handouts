'use client';

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Moon, 
  Sun, 
  Calculator, 
  Calendar, 
  HelpCircle, 
  UploadCloud, 
  Menu, 
  X,
  GraduationCap
} from 'lucide-react';
import { Button } from './Button.jsx';

export function Navbar({ activeTab, setActiveTab, onRequestFileClick }) {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vu_theme');
    const currentTheme = saved || (document.documentElement.getAttribute('data-theme') || 'light');
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('vu_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { id: 'resources', label: 'Handouts & Files', icon: BookOpen },
    { id: 'calculator', label: 'GPA Calculator', icon: Calculator },
    { id: 'calendar', label: 'Exam Schedule', icon: Calendar },
    { id: 'guide', label: 'VU Exam Guide', icon: HelpCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-slate-200/90 dark:border-[#0e224e] w-full transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div 
          onClick={() => { setActiveTab('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded bg-[#0f2b5c] dark:bg-[#0b1a3a] border border-[#d4af37]/40 dark:border-[#fbbf24]/50 flex items-center justify-center text-[#d4af37] dark:text-[#fbbf24] shadow-xs">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 leading-none">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">VU</span>
              <span className="text-lg font-black tracking-tight text-[#0f2b5c] dark:text-[#60a5fa]">Study</span>
              <span className="text-lg font-black tracking-tight text-[#b48316] dark:text-[#fbbf24]">Hub</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Virtual University Handouts Portal
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a] shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#0f2b5c] dark:hover:text-white hover:bg-[#eef4fb]/70 dark:hover:bg-[#0e224e]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#b48316] dark:text-[#fbbf24]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onRequestFileClick}
            icon={<UploadCloud className="w-3.5 h-3.5 text-[#0f2b5c] dark:text-[#060d1f]" />}
            className="hidden sm:inline-flex"
          >
            Request / Upload
          </Button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-8 h-8 rounded flex items-center justify-center bg-slate-100 dark:bg-[#0e224e] border border-slate-200 dark:border-[#1e3a8a]/50 text-slate-700 dark:text-slate-200 hover:bg-[#eef4fb] dark:hover:bg-[#1e3a8a]/60 hover:border-[#cbdbee] dark:hover:border-[#3b82f6] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#0f2b5c]" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
            className="md:hidden w-8 h-8 rounded flex items-center justify-center bg-slate-100 dark:bg-[#0e224e] border border-slate-200 dark:border-[#1e3a8a]/50 text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 border-t border-slate-200 dark:border-[#0e224e] bg-white/95 dark:bg-[#060d1f]/95 backdrop-blur-md flex flex-col gap-1.5 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold cursor-pointer transition-colors ${
                  isActive 
                    ? 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a]' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-[#eef4fb] dark:hover:bg-[#0e224e]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <Button
            variant="contained"
            size="sm"
            onClick={() => {
              onRequestFileClick();
              setMobileMenuOpen(false);
            }}
            icon={<UploadCloud className="w-4 h-4" />}
            className="mt-2 w-full"
          >
            Request Missing File / Upload
          </Button>
        </div>
      )}
    </nav>
  );
}
