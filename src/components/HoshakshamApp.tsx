import React from "react";
import { motion } from "motion/react";
import { Menu, Bell, MoreHorizontal, MapPin, Home, ClipboardList, HelpCircle, Plus } from "lucide-react";

export default function HoshakshamApp() {
  return (
    <div className="w-full h-full bg-black text-white font-sans flex flex-col overflow-hidden select-none">
      {/* Status Bar Space */}
      <div className="h-8 w-full" />

      {/* Header */}
      <div className="px-4 py-2 flex items-center justify-between">
        <Menu className="w-5 h-5 text-zinc-400" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center relative">
            <Bell className="w-4 h-4 text-zinc-400" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full border border-black" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pt-4 overflow-y-auto pb-28 no-scrollbar">
        {/* Hero Stats */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1 tracking-tight">₹ 73,990</h1>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Received this month</p>
        </div>

        {/* Quick Stats Pills */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl py-3 px-3 flex items-center justify-between group cursor-pointer hover:bg-zinc-800 transition-colors">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tight">Payment received</span>
            <span className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-[9px] font-bold text-zinc-400 group-hover:bg-zinc-700">4</span>
          </div>
          <div className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl py-3 px-3 flex items-center justify-between group cursor-pointer hover:bg-zinc-800 transition-colors">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tight">Upcoming</span>
            <span className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-[9px] font-bold text-zinc-400 group-hover:bg-zinc-700">+ 2</span>
          </div>
        </div>

        {/* Class Cards */}
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#D9E2EC] rounded-[2rem] p-5 text-black relative group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-7 h-7 rounded-full border border-[#D9E2EC] overflow-hidden bg-zinc-200">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}-${j}`} alt="Sub" />
                      </div>
                    ))}
                  </div>
                  <div className="w-7 h-7 rounded-full border border-[#D9E2EC] bg-[#C4CFDB] flex items-center justify-center text-[8px] font-bold ml-[-8px] z-10">
                    +2
                  </div>
                  <div className="ml-2 border border-dashed border-zinc-400 rounded-full px-2 py-1 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                    <Plus className="w-2.5 h-2.5" />
                    Add subscribers
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-zinc-400" />
              </div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold tracking-tight">₹100</h3>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-tight">Skating Class</p>
                <div className="flex items-center gap-0.5 text-zinc-600">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">SNN raj</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-4 left-4 right-4 h-16 bg-[#242424] rounded-full flex items-center justify-around px-2 shadow-2xl border border-zinc-800/50">
        <div className="flex flex-col items-center gap-0.5 text-white">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-widest">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-white transition-colors cursor-pointer">
          <ClipboardList className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase tracking-widest">Orders</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-white transition-colors cursor-pointer">
          <HelpCircle className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase tracking-widest">Help</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-800 rounded-full" />
    </div>
  );
}
