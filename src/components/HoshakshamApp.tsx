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
      {/* Background Glows */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Status Bar */}
      <div className="h-12 w-full px-8 flex items-end justify-between text-[11px] font-bold z-30 pb-1">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4.5 h-4.5" />
        </div>
      </div>

      {/* Header */}
      <div className="px-5 py-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-zinc-800 p-0.5 bg-zinc-900">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="User" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1">Welcome back,</p>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-black tracking-tight">Felix Shyani</p>
              <div className="w-1 h-1 bg-brand-primary rounded-full" />
              <p className="text-[10px] font-bold text-brand-primary uppercase tracking-tighter">Hoshaksham</p>
            </div>
          </div>
        </div>
        <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center relative border border-zinc-800/50">
          <Bell className="w-5 h-5 text-zinc-400" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-brand-primary rounded-full border-2 border-[#0F0F0F]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 pt-4 overflow-y-auto pb-32 no-scrollbar z-10">
        {/* Search Bar - Real App Feel */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <div className="w-4 h-4 text-zinc-500">🔍</div>
          </div>
          <div className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-2xl py-3 pl-11 pr-4 text-[11px] text-zinc-500 font-medium">
            Search classes, clients...
          </div>
        </div>

        {/* Hero Stats Card */}
        <div className="bg-gradient-to-br from-brand-primary to-blue-600 rounded-[2.5rem] p-6 mb-8 shadow-2xl shadow-brand-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">Total Revenue</p>
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                <ArrowUpRight className="w-3 h-3 text-white" />
                <span className="text-[10px] font-black text-white">12%</span>
              </div>
            </div>
            <h1 className="text-4xl font-black text-white mb-1 tracking-tight">₹ 73,990</h1>
            <p className="text-white/50 text-[9px] font-medium">Payout scheduled for April 2nd</p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-4 flex flex-col gap-3">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Users className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight mb-0.5">Active Clients</p>
              <p className="text-lg font-bold">42</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-4 flex flex-col gap-3">
            <div className="w-8 h-8 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight mb-0.5">Classes Today</p>
              <p className="text-lg font-bold">08</p>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-5 px-1">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Upcoming Schedule</h2>
          <button className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">View All</button>
        </div>

        {/* Class Cards */}
        <div className="space-y-4">
          {[
            { title: "Skating Pro", time: "04:00 PM", color: "bg-zinc-900", border: "border-zinc-800", location: "SNN Raj", icon: "⛸️", status: "Confirmed" },
            { title: "Yoga Flow", time: "06:30 PM", color: "bg-zinc-900", border: "border-zinc-800", location: "HSR Layout", icon: "🧘", status: "Pending" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${item.color} border ${item.border} rounded-3xl p-5 relative group cursor-pointer hover:border-brand-primary/50 transition-colors`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight mb-0.5">{item.title}</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-brand-primary text-[10px] font-black">{item.time}</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-600">{item.status}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-7 h-7 rounded-lg border-2 border-zinc-900 overflow-hidden bg-zinc-800">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}-${j}`} alt="Sub" />
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-lg border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[8px] font-black text-zinc-400">
                    +12
                  </div>
                </div>
                <button className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
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
      <div className="absolute bottom-6 left-6 right-6 h-18 bg-zinc-900/90 backdrop-blur-xl rounded-3xl flex items-center justify-around px-2 shadow-2xl border border-white/5 z-20">
        <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
          <Home className="w-6 h-6" />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-white transition-colors cursor-pointer">
          <ClipboardList className="w-6 h-6" />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-white transition-colors cursor-pointer">
          <Users className="w-6 h-6" />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-white transition-colors cursor-pointer">
          <HelpCircle className="w-6 h-6" />
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-800 rounded-full z-30" />
    </div>
  );
}

