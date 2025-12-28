
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { FOOTER_SECTIONS } from '../constants';
import { ArrowRight, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 md:pt-40 pb-0 overflow-hidden border-t-4 border-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* App Download Box - Scaled up to match other section's impact */}
        <ScrollReveal direction="up">
          <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-20 lg:p-24 text-center relative overflow-hidden mb-20 md:mb-32 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
            
            <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-[3.5rem] lg:text-[4.5rem] font-black text-white tracking-tighter font-display mb-6 md:mb-10 uppercase leading-[0.85]">
                  THE WORLD IS YOUR MARKETPLACE. SEND & RECEIVE ANYWHERE.
                </h2>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-slate-900 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl flex items-center gap-3 hover:bg-slate-100 transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl">
                    <span className="text-lg md:text-xl"></span> App Store
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    <span className="text-[10px] md:text-xs">▶</span> Google Play
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-4 md:p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] inline-block relative rotate-3 hover:rotate-0 transition-transform duration-700">
                   <div className="bg-slate-50 p-4 md:p-7 rounded-[2rem] flex items-center justify-center w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 relative border-2 border-slate-100">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Payrot" alt="QR Code" className="w-full h-full opacity-90" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 md:border-[4px] border-slate-50">
                          <div className="w-5 h-5 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                             <span className="text-[10px] md:text-sm font-black">P</span>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Newsletter & Main Links Grid - Scaled up typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-16 lg:gap-20 mb-20 md:mb-32">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-100">
                <span className="text-white text-sm md:text-xl font-black">P</span>
              </div>
              <span className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 font-display uppercase">PAYROT</span>
            </div>
            <p className="text-slate-500 text-xs md:text-lg leading-relaxed max-w-sm font-medium">
              Simplifying global payments for the modern workforce. Join 7M+ users moving money faster than ever.
            </p>
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-[0.3em]">Subscribe to our updates</p>
              <div className="relative max-w-sm">
                <input 
                  type="email" 
                  placeholder="email@payrot.com" 
                  className="w-full bg-slate-50 border-[2px] border-slate-100 rounded-2xl py-4 md:py-6 px-6 md:px-8 text-xs md:text-base focus:outline-none focus:border-blue-500 transition-colors font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white p-2.5 md:p-3.5 rounded-xl hover:bg-blue-600 transition-all">
                  <ArrowRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-[10px] md:text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-8 md:mb-12">{section.title}</h4>
              <ul className="space-y-4 md:space-y-6">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-500 hover:text-blue-600 text-xs md:text-xl font-medium transition-colors flex items-center gap-2">
                      {link.label}
                      {link.isNew && (
                        <span className="bg-blue-100 text-blue-600 text-[8px] md:text-[10px] font-black px-2 py-0.5 rounded-full uppercase">New</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & Bottom Bar */}
        <div className="border-t-4 border-slate-50 pt-10 md:pt-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="p-3 md:p-5 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400">
              <Twitter className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a href="#" className="p-3 md:p-5 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400">
              <Linkedin className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a href="#" className="p-3 md:p-5 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400">
              <Instagram className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a href="#" className="p-3 md:p-5 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400">
              <Github className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-[9px] md:text-xs font-black text-slate-400 tracking-[0.2em] uppercase italic">
              Design By Hamida Jannat
            </p>
            <p className="text-[9px] md:text-xs font-black text-slate-900 tracking-[0.2em] uppercase">
              © 2025 Payrot Inc. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Massive Watermark - Scaled back up to match Hero proportions */}
        <div className="mt-12 md:mt-24 text-center opacity-[0.05] select-none pointer-events-none overflow-hidden h-[120px] md:h-[300px] lg:h-[400px]">
           <h1 className="text-[10rem] md:text-[18rem] lg:text-[28rem] font-black tracking-tighter leading-none m-0 p-0 font-display transform translate-y-1/2 uppercase">PAYROT</h1>
        </div>
      </div>
    </footer>
  );
};
