
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const GlobalSection: React.FC = () => {
  return (
    <section className="py-14 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal direction="up" duration={1000}>
          <div className="relative bg-[#0d1525] rounded-[1.8rem] md:rounded-[4.2rem] overflow-hidden pt-28 md:pt-45 pb-14 md:pb-22 px-4 md:px-11 text-center shadow-[0_35px_70px_-15px_rgba(13,21,37,0.6)] border-[3px] md:border-[8px] border-slate-50">
            
            <div className="absolute top-0 left-1/4 w-34 md:w-[350px] h-34 md:h-[350px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[100px] -z-0 animate-pulse"></div>
            
            <div className="absolute -top-14 md:-top-28 left-1/2 -translate-x-1/2 w-34 h-34 md:w-[280px] md:h-[280px] rounded-full shadow-[0_20px_70px_rgba(59,130,246,0.5)] bg-slate-900 border-[6px] md:border-[14px] border-white z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bc46?auto=format&fit=crop&q=80&w=1000" 
                alt="Globe" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[4s]"
              />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-[4.9rem] lg:text-[6.3rem] font-black text-white tracking-tighter font-display mb-6 md:mb-9 leading-[0.85] uppercase">
                GROW BEYOND<br className="hidden md:block" /> BORDERS
              </h2>
              <p className="text-slate-400 mb-7 md:mb-11 text-xs md:text-lg lg:text-xl leading-relaxed font-medium max-w-3xl mx-auto px-4 md:px-0 opacity-80">
                Whether You're Paying A Freelancer Or A Full Team Overseas, Payrot Makes It Simple, Fast, And Secure.
              </p>
              <button className="group inline-flex items-center gap-1.5 md:gap-3.5 border-[1.5px] border-white/10 px-6 md:px-10 py-3 md:py-4.5 rounded-full text-white font-black text-[8px] md:text-sm lg:text-base uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl hover:scale-110 active:scale-95">
                Explore More <ArrowRight className="group-hover:translate-x-3 transition-transform w-3 h-3 md:w-6 lg:w-7" />
              </button>
            </div>
            
            <div className="absolute bottom-[-3%] right-[-1%] text-slate-800 text-[7rem] md:text-[17.5rem] font-black pointer-events-none opacity-[0.03] font-display italic hidden md:block select-none">
              GLOBAL
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
