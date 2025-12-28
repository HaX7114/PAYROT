
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HireSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          <ScrollReveal direction="left">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-[3.5rem] lg:text-[4.9rem] font-black text-slate-900 tracking-tighter font-display mb-4 md:mb-7 leading-[0.9] uppercase">
                HIRE AND PAY GLOBALLY
              </h2>
              <p className="text-slate-500 mb-6 md:mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm md:text-base lg:text-xl font-medium">
                <strong>Payrot</strong> Workforce Helps You Onboard And Pay Freelancers Or Contractors Across <strong>150+ Countries</strong> Quickly, Securely, And Without Borders.
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-black hover:gap-4 transition-all uppercase tracking-[0.2em] text-[10px] md:text-sm lg:text-base mx-auto lg:mx-0 underline decoration-[1.5px] underline-offset-[8px]">
                EXPLORE WORKFORCE TOOLS <ArrowRight size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative max-w-[490px] mx-auto w-full">
              <div className="relative bg-slate-50 rounded-[1.8rem] md:rounded-[3.5rem] p-3 md:p-7 aspect-square flex items-center justify-center overflow-hidden shadow-2xl shadow-slate-200/50">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Woman using laptop" 
                  className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[2.8rem] grayscale hover:grayscale-0 transition-all duration-1000"
                />
                
                <div className="absolute top-3 md:top-9 left-3 md:left-9 bg-white p-2 md:p-3.5 rounded-lg md:rounded-[1.1rem] shadow-2xl flex items-center gap-1.5 md:gap-3 border border-slate-100 scale-100 origin-top-left">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-black text-[10px] md:text-sm">P</span>
                  </div>
                  <div>
                    <p className="text-[6px] md:text-[10px] font-black text-slate-900">PAYROT</p>
                    <p className="text-[5px] md:text-[7px] text-slate-400 whitespace-nowrap font-bold">Tax Loss. Pay Smarter</p>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-1 md:-right-6 bg-white p-2 md:p-3.5 rounded-lg md:rounded-[1.1rem] shadow-2xl flex items-center gap-1.5 md:gap-3 border border-slate-100 scale-100 origin-right">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                     <CheckCircle2 className="w-3.5 h-3.5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[6px] md:text-[10px] font-black text-slate-900 uppercase">Payment Request</p>
                    <p className="text-[5px] md:text-[7px] text-slate-400 font-bold">Sent</p>
                  </div>
                </div>

                <div className="absolute bottom-3 md:bottom-9 left-1/4 bg-white/95 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-[1.4rem] shadow-2xl flex items-center gap-2 md:gap-3.5 border border-white scale-100 origin-bottom">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-md md:rounded-xl flex items-center justify-center text-white">
                     <span className="text-[10px] md:text-sm font-black">$</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-base font-black text-slate-900">1580 USD</p>
                    <p className="text-[6px] md:text-[9px] text-slate-400 font-black uppercase tracking-widest">Paid Successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
