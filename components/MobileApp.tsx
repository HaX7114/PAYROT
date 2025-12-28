import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const MobileApp: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-7xl lg:text-[8.5rem] font-black text-slate-900 tracking-tighter font-display text-center mb-16 md:mb-28 uppercase leading-[0.9]">
            USER FRIENDLY<br />MOBILE APP
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 items-center max-w-[1200px] mx-auto">
          
          {/* Mockup 1: Splash/Logo */}
          <ScrollReveal direction="up" delay={0}>
            <div className="bg-slate-50/50 rounded-[3rem] p-4 shadow-xl border border-slate-100 flex items-center justify-center transform hover:-rotate-3 transition-transform duration-700">
              <div className="w-full aspect-[9/19] rounded-[2.5rem] bg-white shadow-inner overflow-hidden flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute top-6 inset-x-0 flex justify-center">
                    <div className="w-20 h-5 bg-slate-900 rounded-full"></div>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-100 absolute inset-0 flex items-center justify-center pointer-events-none tracking-tighter uppercase opacity-30">PAYROT</h3>
                  <img src="https://images.unsplash.com/photo-1552728089-57bdde30eba3?auto=format&fit=crop&q=80&w=400" className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover z-10 shadow-2xl relative border-[6px] border-white" alt="app-parrot" />
                  <div className="mt-10 text-center z-10">
                    <p className="text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">Payrot</p>
                    <div className="w-8 h-8 border-[4px] border-blue-100 border-t-blue-600 rounded-full mx-auto animate-spin"></div>
                  </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mockup 2: Main Dashboard (Focal Point) */}
          <ScrollReveal direction="up" delay={200} className="md:order-last lg:order-none">
            <div className="relative scale-100 md:scale-110 lg:scale-105 z-20">
              <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-10 -z-10 animate-pulse"></div>
              <div className="bg-slate-900 rounded-[3rem] md:rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[4px] border-slate-800">
                 <div className="w-full aspect-[9/19] rounded-[2.2rem] md:rounded-[2.8rem] bg-[#0d1525] overflow-hidden text-white flex flex-col relative border border-white/5">
                    <div className="p-6 pb-2 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                         <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-[8px] md:text-[10px] font-black">P</div>
                         <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase">PAYROT</span>
                       </div>
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-800 flex items-center justify-center">
                          <span className="text-xs">•••</span>
                       </div>
                    </div>

                    <div className="px-6 flex-1 overflow-y-auto no-scrollbar">
                      <div className="flex items-center gap-3 mb-6 bg-slate-800/50 p-3 rounded-2xl border border-white/5">
                        <img src="https://picsum.photos/100/100" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-700" alt="avatar" />
                        <div>
                          <p className="text-xs md:text-sm font-black">Hamida Jannat</p>
                          <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Account ID: 9EDDP6</p>
                        </div>
                      </div>

                      <div className="bg-blue-600 rounded-[2rem] p-6 md:p-8 mb-6 shadow-2xl shadow-blue-900/40 relative overflow-hidden">
                         <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                         <p className="text-[9px] uppercase font-black opacity-60 mb-2 tracking-widest">Available Balance</p>
                         <p className="text-2xl md:text-4xl font-black tracking-tighter">$ 32,000.86</p>
                      </div>

                      <div className="flex justify-between gap-3 mb-8">
                        {['Add +', 'Send ↑', 'Recv ↓'].map(action => (
                          <button key={action} className="flex-1 bg-slate-800/80 p-3 rounded-xl text-[8px] font-black tracking-widest uppercase hover:bg-blue-600 transition-colors">
                            {action}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Activity</p>
                          <p className="text-[10px] font-black text-blue-500 uppercase">View All</p>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-slate-800/30 rounded-2xl border border-white/5">
                           <div>
                             <p className="text-xs font-black">Transfer to Bank</p>
                             <p className="text-[8px] text-green-500 font-black uppercase tracking-widest">Success</p>
                           </div>
                           <p className="text-xs font-black text-slate-200">-670 USD</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto bg-slate-900/90 backdrop-blur-md p-6 pb-8 flex justify-around items-center border-t border-white/5">
                       <div className="w-5 h-5 bg-slate-700 rounded-lg"></div>
                       <div className="w-12 h-12 bg-blue-600 rounded-2xl -mt-10 border-[6px] border-[#0d1525] shadow-2xl flex items-center justify-center font-black text-xl">+</div>
                       <div className="w-5 h-5 bg-slate-700 rounded-lg"></div>
                    </div>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mockup 3: Card Features */}
          <ScrollReveal direction="up" delay={400} className="hidden md:block">
            <div className="bg-slate-50/50 rounded-[3rem] p-4 shadow-xl border border-slate-100 flex items-center justify-center transform hover:rotate-3 transition-transform duration-700">
              <div className="w-full aspect-[9/19] rounded-[2.5rem] bg-blue-600 overflow-hidden relative border border-blue-400">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-800 opacity-60"></div>
                 <div className="absolute inset-0 flex flex-col p-8 justify-center items-center text-center z-10">
                    <div className="bg-white/20 backdrop-blur-2xl rounded-[2rem] p-8 mb-10 rotate-[15deg] shadow-2xl border border-white/30 hover:rotate-0 transition-all duration-700">
                       <div className="w-40 h-24 bg-slate-900 rounded-xl flex flex-col p-4 justify-between items-start text-left">
                          <span className="text-[7px] font-black italic opacity-60 tracking-widest text-white">PAYROT</span>
                          <div className="w-full">
                            <div className="w-10 h-7 bg-slate-800 rounded-sm mb-2"></div>
                            <div className="h-1 w-16 bg-white/20 rounded-full"></div>
                          </div>
                       </div>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black text-white leading-none tracking-tighter uppercase font-display mb-8">
                      GET YOUR<br />VIRTUAL<br />CARD<br />FREE
                    </h3>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform">Apply Now</button>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};