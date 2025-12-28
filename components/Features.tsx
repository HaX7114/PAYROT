
import React from 'react';
import { FEATURES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Features: React.FC = () => {
  return (
    <section className="py-14 md:py-28 relative overflow-hidden bg-white">
      {/* Background Watermark - Fades In Up consistently while scrolling into view */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <ScrollReveal direction="up" duration={1500} delay={100}>
          <h1 className="text-[9rem] md:text-[18rem] font-black text-slate-200 tracking-tight leading-none opacity-80 uppercase font-display whitespace-nowrap">
            FEATURES
          </h1>
        </ScrollReveal>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="space-y-3.5 md:space-y-7">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={feature.id} direction="up" delay={index * 100}>
              <div 
                className="group flex flex-col md:flex-row items-center justify-between p-6 md:p-10 lg:p-14 rounded-[2.5rem] md:rounded-[5rem] border-[2px] border-slate-50 hover:border-blue-100 hover:bg-slate-50/50 transition-all duration-700 cursor-pointer min-h-[250px] md:min-h-[300px]"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14 flex-1 w-full md:w-auto text-center md:text-left">
                  <div className="w-12 h-7 md:w-20 md:h-10 rounded-full border-[2px] border-blue-500 flex items-center justify-center text-blue-600 font-black text-[10px] md:text-lg lg:text-xl shrink-0 tracking-[0.2em]">
                    {feature.number}
                  </div>
                  <h3 className="text-xl md:text-[2.8rem] lg:text-[3.5rem] font-black text-slate-900 tracking-tighter uppercase font-display leading-tight">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 flex-1 justify-end mt-8 md:mt-0 w-full md:w-auto">
                  <p className="text-slate-400 text-xs md:text-lg lg:text-xl max-w-md text-center md:text-right font-medium leading-relaxed opacity-90">
                    {feature.description}
                  </p>
                  
                  {/* Arrow Button - 50% Smaller than before */}
                  <div className={`w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center transition-all duration-700 shrink-0 transform hover:scale-110 active:scale-95 ${
                    index === 0 
                      ? 'bg-slate-900 text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)]'
                  }`}>
                    <ArrowUpRight className="w-7 h-7 md:w-11 md:h-11 lg:w-14 lg:h-14 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
