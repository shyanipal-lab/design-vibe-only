'use client'

import { useCurrency } from "../lib/currency";
import { motion } from "motion/react";
import { Zap, Layers, TicketCheck, Coffee, ArrowUpRight, TrendingDown, Clock, CheckCircle2, Target, Flag, Rocket } from "lucide-react";

const IMPACT_CARDS = [
  {
    title: "Frictionless Filing",
    description: "From receipt to refund in 2 clicks. No more manual data entry.",
    icon: Zap,
    color: "text-brand-primary",
    bg: "bg-orange-50",
    stat: "2.4s",
    statLabel: "Avg. filing time"
  },
  {
    title: "Velocity at Scale",
    description: "Bulk mileage claims for power users. 50+ entries in one go.",
    icon: Layers,
    color: "text-blue-600",
    bg: "bg-blue-50",
    stat: "50+",
    statLabel: "Bulk entries"
  },
  {
    title: "Inbox Zero",
    description: "85% drop in support tickets related to expense errors.",
    icon: TicketCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    stat: "-85%",
    statLabel: "Support load"
  },
  {
    title: "Cultural Catalyst",
    description: "Boosting morale by making the 'boring stuff' invisible.",
    icon: Coffee,
    color: "text-purple-600",
    bg: "bg-purple-50",
    stat: "92%",
    statLabel: "User satisfaction"
  }
];

const RECENT_EXPENSES_BASE = [
  { id: 1, category: "Mileage", amount: 142.50, date: "Today", status: "Verified" },
  { id: 2, category: "Travel", amount: 890.00, date: "Yesterday", status: "Processing" },
  { id: 3, category: "Meals", amount: 45.20, date: "2 days ago", status: "Verified" },
];

const GOALS = [
  { id: 1, title: "Cycle Reduction", progress: 80, icon: Clock, color: "bg-orange-500" },
  { id: 2, title: "Team Onboarding", progress: 95, icon: Target, color: "bg-blue-500" },
  { id: 3, title: "Error Elimination", progress: 100, icon: CheckCircle2, color: "bg-emerald-500" },
];

export default function FyleReimbursementApp() {
  const { currency, isLoading, formatAmount } = useCurrency();

  return (
    <div className="w-full h-full bg-white p-6 md:p-10 font-sans overflow-y-auto selection:bg-brand-primary selection:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 leading-none mb-2">Expense Intelligence</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">System Performance Dashboard</p>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-zinc-50 rounded-full border border-zinc-100 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
              {isLoading ? "Detecting Region..." : `Live in ${currency}`}
            </span>
          </div>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {IMPACT_CARDS.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl ${card.bg} ${card.color} shadow-inner`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-black tracking-tighter ${card.color}`}>{card.stat}</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{card.statLabel}</p>
                </div>
              </div>
              <h4 className="text-base font-black uppercase tracking-tight text-zinc-900 mb-2">{card.title}</h4>
              <p className="text-sm font-medium text-zinc-500 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 p-10 rounded-[48px] bg-zinc-900 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <TrendingDown className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Recent Activity</h4>
                <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">View All</button>
              </div>
              <div className="space-y-6">
                {RECENT_EXPENSES_BASE.map((exp) => (
                  <div key={exp.id} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                        <Clock className="w-5 h-5 text-zinc-400 group-hover:text-brand-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover:text-brand-primary transition-colors">{exp.category}</p>
                        <p className="text-[11px] font-medium text-zinc-500">{exp.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black tracking-tighter">
                        {isLoading ? "..." : formatAmount(exp.amount)}
                      </p>
                      <div className="flex items-center gap-1.5 justify-end">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{exp.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Goals Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[48px] bg-zinc-50 border border-zinc-100 shadow-xl"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Quarterly Goals</h4>
              <div className="space-y-8">
                {GOALS.map((goal) => (
                  <div key={goal.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <goal.icon className="w-4 h-4 text-zinc-400" />
                        <span className="text-xs font-black uppercase tracking-tight text-zinc-900">{goal.title}</span>
                      </div>
                      <span className="text-[10px] font-black text-zinc-400">{goal.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${goal.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 p-10 rounded-[48px] bg-brand-primary text-white flex flex-col items-center justify-center text-center group cursor-pointer shadow-xl shadow-orange-500/20"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md group-hover:bg-white group-hover:text-brand-primary transition-all duration-300">
                <Rocket className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-1">Launch Bulk Claim</h4>
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Start high-velocity filing</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
