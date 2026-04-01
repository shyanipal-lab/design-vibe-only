import React from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  ArrowDownLeft,
  CheckCircle2,
  Clock
} from "lucide-react";

const TRANSACTIONS = [
  { id: 1, name: "Yoga Flow - Monthly", amount: "+₹ 4,500", date: "Today, 10:30 AM", status: "Received", icon: "🧘" },
  { id: 2, name: "Skating Pro - Session", amount: "+₹ 1,200", date: "Today, 09:15 AM", status: "Received", icon: "⛸️" },
  { id: 3, name: "Personal Training", amount: "+₹ 2,500", date: "Yesterday", status: "Received", icon: "💪" },
];

export default function HoshakshamApp() {
  return (
    <div className="w-full h-full bg-[#F8F9FB] text-zinc-900 font-sans flex flex-col overflow-hidden select-none relative p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-2xl font-black tracking-tighter text-zinc-900">Revenue Dashboard</h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Zen Mode: Only Inflows Visible</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-zinc-400" />
          </div>
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 overflow-hidden">
        {/* Left Column: Main Stats */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Revenue Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-10 shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <DollarSign className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Total Inflow This Month</p>
              </div>
              <h1 className="text-6xl font-black text-zinc-900 mb-4 tracking-tighter">₹ 1,42,800</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                  <ArrowUpRight className="w-3 h-3" />
                  <span className="text-[10px] font-black">24.5%</span>
                </div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">vs last month</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 shadow-lg shadow-zinc-200/30 border border-zinc-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Active Students</p>
              <p className="text-3xl font-black tracking-tighter text-zinc-900">128</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] p-8 shadow-lg shadow-zinc-200/30 border border-zinc-100"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Avg. Retention</p>
              <p className="text-3xl font-black tracking-tighter text-zinc-900">94%</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Transactions */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 rounded-[40px] p-10 flex-1 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <ArrowDownLeft className="w-48 h-48 text-white" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Recent Inflows</h4>
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-brand-primary" />
                </div>
              </div>

              <div className="space-y-8 flex-1">
                {TRANSACTIONS.map((tx, i) => (
                  <motion.div 
                    key={tx.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:bg-brand-primary/20 transition-colors">
                        {tx.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-brand-primary transition-colors">{tx.name}</p>
                        <p className="text-[10px] font-medium text-zinc-500">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-emerald-400 tracking-tighter">{tx.amount}</p>
                      <div className="flex items-center gap-1 justify-end">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">{tx.status}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="mt-10 w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-400 transition-all">
                View All Transactions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

