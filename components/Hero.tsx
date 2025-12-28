import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized parallax factors for mobile performance
  const watermarkOffset = scrollY * 0.25;
  const leftCardOffset = scrollY * -0.1;
  const mascotOffset = scrollY * 0.15;
  const rightCardOffset = scrollY * -0.05;
  const ctaOffset = scrollY * 0.03;

  // Fluid opacity for headline
  const headingOpacity = Math.min(scrollY / 350, 1);

  // Common styles for both Hero cards
  const cardBaseStyles = "relative w-full aspect-[1.58/1] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-700 hover:scale-105 hover:-rotate-2 cursor-default flex flex-col justify-between overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] hover:shadow-[0_60px_120px_-20px_rgba(59,130,246,0.2)]";

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Background Watermark - Stretched & Parallax */}
      <div 
        className="absolute top-[120px] md:top-[160px] lg:top-[140px] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0"
        style={{ transform: `translateX(-50%) translateY(${watermarkOffset}px)` }}
      >
        <h1 className="text-[20vw] md:text-[22rem] lg:text-[34rem] font-black text-watermark tracking-tighter leading-none opacity-[0.85] uppercase font-display whitespace-nowrap transform scale-y-[1.5] origin-bottom transition-transform duration-75 ease-out">
          PAYROT
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center">
          
          {/* Main Visual Content Grid */}
          <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8 items-center mb-12 lg:mb-20">
            
            {/* Left Card: Info (Send and Receive) */}
            <div 
              className="w-full max-w-md md:max-w-xl lg:max-w-full order-2 lg:order-1 transition-transform duration-100 ease-out flex justify-center lg:justify-start"
              style={{ transform: typeof window !== 'undefined' && window.innerWidth > 1024 ? `translateY(${leftCardOffset}px)` : 'none' }}
            >
              <ScrollReveal direction="left" delay={100} className="w-full">
                <div className={`${cardBaseStyles} bg-white/95 backdrop-blur-xl border border-slate-100`}>
                  <div className="z-10">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 lg:w-20 bg-blue-600 rounded-xl sm:rounded-2xl shadow-2xl shadow-blue-200 flex items-center justify-center mb-4 md:mb-6">
                      <Globe className="text-white w-5 h-5 sm:w-7 sm:h-7 md:w-8 lg:w-10" />
                    </div>
                    <h3 className="font-black text-[clamp(1.2rem,4vw,2.5rem)] text-slate-900 mb-2 md:mb-4 tracking-tighter uppercase leading-none">
                      Send And <br className="hidden sm:block" /> Receive
                    </h3>
                  </div>
                  <div className="z-10">
                    <p className="text-[clamp(0.7rem,2vw,1.1rem)] text-slate-500 leading-tight md:leading-relaxed font-medium max-w-[90%]">
                      Money Worldwide Fast, Secure, And Hassle-Free. Seamless Global Banking For Professionals.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Center: Mascot Image */}
            <div 
              className="w-full order-1 lg:order-2 flex justify-center items-center transition-transform duration-150 ease-out"
              style={{ transform: typeof window !== 'undefined' && window.innerWidth > 768 ? `translateY(${mascotOffset}px)` : 'none' }}
            >
              <ScrollReveal direction="up" duration={1200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] md:blur-[140px] opacity-10 animate-pulse"></div>
                  
                  <div className="relative z-10 transition-transform duration-1000 group-hover:scale-105">
                    <img 
                      src="https://png.pngtree.com/png-clipart/20250616/original/pngtree-blue-parrot-with-bright-feathers-tropical-bird-clipart-illustration-png-image_21192018.png" 
                      alt="Payrot Mascot" 
                      className="w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] lg:w-[680px] lg:h-[580px] object-contain drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
                    />
                  </div>

                  <div className="absolute bottom-10 md:bottom-20 left-[-150%] right-[-150%] hidden md:flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent relative">
                       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 lg:w-24 border border-blue-200 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md">
                          <div className="w-6 h-6 lg:w-8 bg-blue-600 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.8)] border-2 border-white"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card: Visa Card (Identical dimensions) */}
            <div 
              className="w-full max-w-md md:max-w-xl lg:max-w-full order-3 lg:order-3 transition-transform duration-100 ease-out flex justify-center lg:justify-end"
              style={{ transform: typeof window !== 'undefined' && window.innerWidth > 1024 ? `translateY(${rightCardOffset}px)` : 'none' }}
            >
              <ScrollReveal direction="right" delay={300} className="w-full">
                <div className={`${cardBaseStyles} card-gradient text-white`}>
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[90px]"></div>
                  
                  <div className="flex justify-between items-start z-10">
                    <span className="text-[clamp(1rem,3vw,2.2rem)] font-black tracking-[0.15em] italic font-display">PAYROT</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 sm:h-5 md:h-6 lg:h-8 brightness-0 invert opacity-90" alt="visa" />
                  </div>
                  
                  <div className="z-10 mt-auto">
                    <div className="mb-4 md:mb-8">
                      <span className="text-[clamp(0.5rem,1vw,0.75rem)] text-white/40 block mb-1 md:mb-2 font-black uppercase tracking-[0.2em]">Card Number</span>
                      <p className="text-[clamp(0.9rem,2.5vw,1.8rem)] font-mono tracking-widest font-medium">
                        5467 3867 0099 3441
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[clamp(0.4rem,0.8vw,0.6rem)] text-white/40 block uppercase font-black mb-1 tracking-wider">Card Holder</span>
                        <span className="text-[clamp(0.6rem,1.5vw,1rem)] font-bold uppercase tracking-tight">HAMIDA JANNAT</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[clamp(0.4rem,0.8vw,0.6rem)] text-white/40 block uppercase font-black mb-1 tracking-wider">Expires</span>
                        <span className="text-[clamp(0.6rem,1.5vw,1rem)] font-bold">07/28</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Headline & Actions */}
          <div 
            className="w-full flex flex-col items-center transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${ctaOffset}px)` }}
          >
            <ScrollReveal direction="up" delay={400}>
              <button className="group flex items-center gap-3 bg-blue-600 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-[0.3em] hover:bg-blue-700 transition-all mb-12 shadow-2xl shadow-blue-100 whitespace-nowrap hover:scale-105 active:scale-95">
                OPEN ACCOUNT <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </ScrollReveal>
            
            <div 
              className="w-full transition-opacity duration-300 ease-out px-4"
              style={{ opacity: headingOpacity }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-[#0d2036] text-center tracking-tighter font-display mb-12 md:mb-20 leading-[0.9] lg:leading-[0.8] uppercase">
                FAST SEND,<br />FAST RECEIVE
              </h2>
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start border-t border-slate-100 pt-10 md:pt-16">
              <ScrollReveal direction="left" delay={500}>
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-200"></div>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-sm font-medium leading-relaxed">
                    Payrot empowers freelancers and businesses to move money at the speed of thought.
                  </p>
                  <a href="#" className="text-[10px] md:text-[11px] font-black text-blue-600 underline decoration-2 underline-offset-8 uppercase tracking-[0.2em] hover:text-blue-700 transition-colors">
                    OUR SERVICES
                  </a>
                </div>
              </ScrollReveal>

              <div className="hidden lg:block"></div>

              <ScrollReveal direction="right" delay={600}>
                <div className="flex justify-between items-center bg-white border border-slate-100 p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-blue-100 transition-all duration-500">
                  <div className="flex-1">
                    <span className="text-[9px] md:text-[10px] font-black text-slate-300 block mb-3 tracking-[0.2em] uppercase">TOTAL TRANSFERS</span>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 tracking-tighter leading-none mb-4">90M+</p>
                    <a href="#" className="text-[9px] md:text-[10px] font-black text-slate-900 flex items-center gap-2 tracking-[0.2em] hover:gap-3 transition-all uppercase">
                       VIEW STATS <ArrowRight className="text-blue-600 w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-right pl-6 border-l border-slate-100">
                    <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase leading-relaxed tracking-wider">
                      Trusted<br />In 150+<br />Countries
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};