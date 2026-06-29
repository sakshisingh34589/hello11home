import React from 'react';

export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '', disabled = false }) {
  const baseStyle = "px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#EAB308] text-black hover:bg-black hover:text-[#EAB308] shadow-lg hover:shadow-xl",
    secondary: "bg-black text-white hover:bg-[#EAB308] hover:text-black shadow-md"
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      {children}
    </button>
  );
}