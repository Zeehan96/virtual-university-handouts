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
  GraduationCap,
  Phone,
  Sparkles
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
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
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
          {/* Animated Muhammad Zeeshan Khalid Contact Badge (Hidden on mobile header, visible on sm+ screens) */}
          <a
            href="https://wa.me/923156900796"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Muhammad Zeeshan Khalid on WhatsApp / Call: 03156900796"
            className="group relative hidden sm:flex items-center gap-2 px-3 py-1.5 rounded border border-[#d4af37]/70 dark:border-[#fbbf24]/60 bg-gradient-to-r from-amber-50/90 via-white to-amber-50/90 dark:from-[#0b1a3a] dark:via-[#0e224e] dark:to-[#0b1a3a] shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-shimmer-border animate-gentle-pulse cursor-pointer select-none"
          >
            {/* Live animated pulsing beacon dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-xs"></span>
            </span>

            <div className="flex flex-col text-left leading-none py-0.5">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#0f2b5c] dark:group-hover:text-[#60a5fa] transition-colors whitespace-nowrap">
                  Muhammad Zeeshan Khalid
                </span>
                <span className="inline-block animate-bounce text-[10px]">✨</span>
              </div>
              <span className="text-[11px] font-bold text-[#b48316] dark:text-[#fbbf24] flex items-center gap-1 mt-0.5">
                <Phone className="w-2.5 h-2.5 text-[#b48316] dark:text-[#fbbf24] animate-pulse" />
                <span>03156900796</span>
              </span>
            </div>
          </a>

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
                className={`flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold cursor-pointer transition-colors ${isActive
                    ? 'bg-[#eef4fb] dark:bg-[#0e224e] text-[#0f2b5c] dark:text-[#93c5fd] border border-[#cbdbee] dark:border-[#1e3a8a]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-[#eef4fb] dark:hover:bg-[#0e224e]'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Mobile Animated Contact Card (sharp rounded border radius) */}
          <a
            href="https://wa.me/923156900796"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-between p-2.5 rounded border border-[#d4af37]/70 dark:border-[#fbbf24]/60 bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-[#0b1a3a] dark:via-[#0e224e] dark:to-[#0b1a3a] shadow-xs animate-shimmer-border"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  Muhammad Zeeshan Khalid <Sparkles className="w-3 h-3 text-[#d4af37]" />
                </p>
                <p className="text-[11px] font-semibold text-[#b48316] dark:text-[#fbbf24] flex items-center gap-1">
                  <Phone className="w-3 h-3 inline animate-pulse" /> 03156900796
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 animate-pulse whitespace-nowrap">
              WhatsApp
            </span>
          </a>

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
