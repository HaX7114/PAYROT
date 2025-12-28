import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-28">
          <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 group-hover:scale-110 transition-transform">
              <span className="text-white text-sm md:text-base font-black">P</span>
            </div>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-900 font-display uppercase">PAYROT</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-14 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-600 transition-colors text-slate-900 border-b-2 border-blue-600 pb-1">Freelancer</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Business</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Marketplace</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Fees</a>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button className="hidden sm:block text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors">Login</button>
            <button className="flex items-center gap-3 bg-blue-600 text-white px-6 md:px-10 py-3.5 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group whitespace-nowrap hover:scale-105 active:scale-95">
              Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};