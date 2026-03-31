import React from "react";
import { motion } from "motion/react";
import { 
  Menu, 
  Bell, 
  MoreHorizontal, 
  MapPin, 
  Home, 
  ClipboardList, 
  HelpCircle, 
  Plus, 
  Wifi, 
  Battery, 
  Signal,
  ArrowUpRight,
  Users,
  Calendar
} from "lucide-react";

export default function HoshakshamApp() {
  return (
    <div className="w-full h-full bg-[#0F0F0F] text-white font-sans flex flex-col overflow-hidden select-none relative">
      {/* Status Bar */}
      <div className="h-10 w-full px-6 flex items-center justify-between text-[10px] font-bold z-30">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <div className="px-5 py-2 flex items-center justify-between z-20">
        <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800/50">
          <Menu className="w-5 h-5 text-zinc-400" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center relative border border-zinc-800/50">
            <Bell className="w-5 h-5 text-zinc-400" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-primary rounded-full border-2 border-[#0F0F0F]" />
          </div>
          <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-zinc-800 p-0.5">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="User" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 pt-6 overflow-y-auto pb-32 no-scrollbar z-10">
        {/* Hero Stats */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Total Revenue</p>
            <div className="flex items-center gap-0.5 text-emerald-500 text-[10px] font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
              <ArrowUpRight className="w-2.5 h-2.5" />
              12%
            </div>
          </div>
          <h1 className="text-4xl font-black mb-1 tracking-tight">₹ 73,990</h1>
          <p className="text-zinc-500 text-[10px] font-medium">Last updated 2 mins ago</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-4 flex flex-col gap-3 group cursor-pointer hover:bg-zinc-800/50 transition-all">
            <div className="w-8 h-8 bg-brand-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-primary" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight mb-0.5">Active</p>
              <p className="text-lg font-bold">42 Clients</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-4 flex flex-col gap-3 group cursor-pointer hover:bg-zinc-800/50 transition-all">
            <div className="w-8 h-8 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight mb-0.5">Upcoming</p>
              <p className="text-lg font-bold">8 Classes</p>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Your Classes</h2>
          <button className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">See All</button>
        </div>

        {/* Class Cards */}
        <div className="space-y-4">
          {[
            { title: "Skating Pro", price: "₹1,200", color: "bg-[#E0F2F1]", text: "text-teal-900", location: "SNN Raj", icon: "⛸️" },
            { title: "Yoga Flow", price: "₹800", color: "bg-[#FFF3E0]", text: "text-orange-900", location: "HSR Layout", icon: "🧘" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${item.color} rounded-[2.5rem] p-6 ${item.text} relative group cursor-pointer shadow-xl shadow-black/5`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight leading-none mb-1">{item.title}</h3>
                    <div className="flex items-center gap-1 opacity-60">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <MoreHorizontal className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-9 h-9 rounded-2xl border-4 border-white/20 overflow-hidden bg-zinc-200 shadow-sm">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}-${j}`} alt="Sub" />
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-2xl border-4 border-white/20 bg-white/40 flex items-center justify-center text-[10px] font-black backdrop-blur-md shadow-sm">
                    +12
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-50 mb-0.5">Monthly</p>
                  <p className="text-2xl font-black tracking-tight">{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-28 right-6 w-14 h-14 bg-brand-primary rounded-2xl shadow-2xl shadow-brand-primary/40 flex items-center justify-center z-30"
      >
        <Plus className="w-7 h-7 text-white" />
      </motion.button>

      {/* Bottom Nav */}
      <div className="absolute bottom-6 left-6 right-6 h-20 bg-[#1A1A1A]/90 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-around px-4 shadow-2xl border border-white/5 z-20">
        <div className="flex flex-col items-center gap-1 text-brand-primary">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
            <Home className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-zinc-600 hover:text-white transition-colors cursor-pointer">
          <ClipboardList className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center gap-1 text-zinc-600 hover:text-white transition-colors cursor-pointer">
          <HelpCircle className="w-6 h-6" />
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-zinc-800/50 rounded-full z-30" />
      
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
