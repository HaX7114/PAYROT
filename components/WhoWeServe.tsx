
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhoWeServe: React.FC = () => {
  return (
    <section className="py-14 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-[5.6rem] lg:text-[7rem] font-black text-slate-900 tracking-tighter font-display text-center mb-14 md:mb-22 uppercase leading-none">
            WHO WE SERVE
          </h2>
        </ScrollReveal>

        <div className="space-y-17 md:space-y-36">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-17 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <ScrollReveal direction={isReversed ? "right" : "left"}>
                    <div className="relative overflow-hidden rounded-[1.8rem] md:rounded-[2.8rem] shadow-2xl border-[2px] md:border-[7px] border-slate-50 group">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-[250px] md:h-[420px] object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="flex-1">
                  <ScrollReveal direction={isReversed ? "left" : "right"} delay={100}>
                    <h3 className="text-2xl md:text-[3rem] lg:text-[3.8rem] font-black text-slate-900 tracking-tighter mb-4 md:mb-7 uppercase leading-[0.9]">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 mb-6 md:mb-10 leading-relaxed text-xs md:text-lg lg:text-xl font-medium opacity-80">
                      {service.description}
                    </p>
                    <button className="flex items-center gap-2 text-blue-600 font-black group uppercase tracking-[0.2em] text-[8px] md:text-sm lg:text-base underline decoration-[1.5px] underline-offset-[8px] hover:gap-4 transition-all">
                      {service.linkText} <ArrowRight className="group-hover:translate-x-2 transition-transform md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    </button>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
