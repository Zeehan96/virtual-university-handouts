'use client';

import React from 'react';

/**
 * Reusable Button Component
 * @param {('contained'|'outline'|'ghost'|'danger')} variant - Button style variant
 * @param {('sm'|'md'|'lg')} size - Button size
 * @param {React.ReactNode} children - Button text/content
 * @param {string} className - Additional Tailwind CSS classes
 * @param {React.ReactNode} icon - Optional icon
 */
export function Button({
  variant = 'contained',
  size = 'md',
  children,
  className = '',
  icon,
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) {
  // Base classes with small border radius (rounded / rounded-sm)
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded';

  // Size variations
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-2 gap-2',
    lg: 'text-sm sm:text-base px-5 py-2.5 gap-2.5',
  }[size] || 'text-xs sm:text-sm px-3.5 py-2 gap-2';

  // Navy blue theme variants with secondary gold
  const variantClasses = {
    contained: 'bg-[#0f2b5c] hover:bg-[#0a1e40] dark:bg-[#1d4ed8] dark:hover:bg-[#2563eb] text-white shadow-xs active:scale-[0.99] border border-[#0f2b5c] dark:border-[#1d4ed8]',
    secondary: 'bg-[#d4af37] hover:bg-[#b48316] dark:bg-[#fbbf24] dark:hover:bg-[#f59e0b] text-[#0f2b5c] dark:text-[#060d1f] font-bold shadow-xs active:scale-[0.99] border border-[#b48316] dark:border-[#fbbf24]',
    outline: 'border border-slate-300 dark:border-[#3b82f6]/70 text-[#0f2b5c] dark:text-[#93c5fd] bg-white dark:bg-[#0e224e]/50 hover:bg-[#eef4fb] dark:hover:bg-[#0e224e] hover:text-[#0a1e40] dark:hover:text-white hover:border-[#0f2b5c] active:scale-[0.99]',
    ghost: 'text-slate-600 dark:text-slate-300 hover:text-[#0f2b5c] dark:hover:text-white hover:bg-[#eef4fb] dark:hover:bg-[#0e224e] active:scale-[0.99] border border-transparent',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs border border-rose-600 active:scale-[0.99]',
  }[variant] || 'bg-[#0f2b5c] hover:bg-[#0a1e40] text-white';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
