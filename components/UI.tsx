import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'accent';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "relative font-bold text-sm tracking-widest py-4 px-8 transition-all duration-200 uppercase flex items-center justify-center gap-3 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none font-mono whitespace-nowrap";
  
  const variants = {
    primary: "bg-black text-white border-2 border-black hover:bg-[#FF3300] hover:border-[#FF3300] hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    accent: "bg-[#FF3300] text-black border-2 border-black hover:bg-black hover:text-[#FF3300] hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    ghost: "bg-transparent text-black hover:bg-gray-200 border-transparent hover:underline"
  };
  
  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowUpRight size={18} />}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string, subtitle?: string, centered?: boolean, accent?: boolean }> = ({ title, subtitle, centered, accent }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <div className={`inline-block border-b-4 border-black pb-2 mb-6 ${accent ? 'border-[#FF3300]' : ''}`}>
       <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] font-display break-words">
        {title}
        {accent && <span className="text-[#FF3300]">.</span>}
       </h2>
    </div>
    {subtitle && (
      <p className="text-xl md:text-2xl text-gray-500 font-mono tracking-tight max-w-2xl leading-tight">
        <span className="text-[#FF3300] font-bold mr-2">//</span>{subtitle}
      </p>
    )}
  </div>
);

export const Marquee: React.FC<{ children: React.ReactNode, reverse?: boolean }> = ({ children, reverse = false }) => {
  return (
    <div className="overflow-hidden flex bg-black text-white py-4 border-y-2 border-black w-full">
      <div className={`flex animate-marquee whitespace-nowrap min-w-full ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="flex px-4 shrink-0">{children}</div>
        <div className="flex px-4 shrink-0">{children}</div>
      </div>
    </div>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="relative group">
    <input 
      className="w-full bg-[#F0F0F0] border-b-2 border-black p-4 font-mono focus:outline-none focus:bg-white placeholder:text-gray-400 transition-colors focus:border-[#FF3300] rounded-none"
      {...props}
    />
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF3300] transition-all duration-300 group-focus-within:w-full"></div>
  </div>
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <div className="relative group">
    <textarea 
      className="w-full bg-[#F0F0F0] border-b-2 border-black p-4 font-mono focus:outline-none focus:bg-white placeholder:text-gray-400 min-h-[150px] transition-colors focus:border-[#FF3300] resize-none rounded-none"
      {...props}
    />
    <div className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#FF3300] transition-all duration-300 group-focus-within:w-full"></div>
  </div>
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className = '', ...props }) => (
  <div className="relative">
    <select 
      className={`w-full bg-[#F0F0F0] border-2 border-black p-4 font-mono focus:outline-none appearance-none rounded-none uppercase tracking-wider hover:bg-white transition-colors cursor-pointer ${className}`}
      {...props}
    />
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF3300]">
      <ChevronDown size={24} strokeWidth={3} />
    </div>
  </div>
);

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className="flex items-center cursor-pointer group select-none">
    <div className="relative">
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="w-6 h-6 border-2 border-black bg-white peer-checked:bg-[#FF3300] transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 pointer-events-none font-bold">
        ✓
      </div>
    </div>
    <span className="ml-4 font-bold uppercase tracking-widest font-mono group-hover:text-[#FF3300] transition-colors">{label}</span>
  </label>
);

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CountUp: React.FC<{ value: string; label: string; suffix?: string }> = ({ value, label, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isFloat = value.includes('.');

  useEffect(() => {
    let timer: any = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = numericValue;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDisplayValue(end);
              clearInterval(timer);
            } else {
              setDisplayValue(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [numericValue, value, isFloat]);

  return (
    <div ref={ref} className="group hover:bg-[#FF3300] hover:text-black p-8 md:p-12 border-black border-r-2 border-b-2 transition-colors cursor-crosshair bg-white">
      <h3 className="text-6xl md:text-8xl font-black mb-2 tabular-nums tracking-tighter font-display">
        {isFloat ? displayValue.toFixed(1) : Math.floor(displayValue)}
        <span className="text-3xl md:text-5xl ml-1 text-[#FF3300] group-hover:text-black">{suffix}</span>
      </h3>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-gray-500 group-hover:text-black border-t border-gray-300 group-hover:border-black pt-4 mt-4">{label}</p>
    </div>
  );
};