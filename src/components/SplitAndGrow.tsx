import { motion } from "motion/react";
import { Wallet, TrendingUp, Users, Trophy, Target, ArrowUpRight, ArrowDownRight, Zap, ChevronLeft, Plus, Bell, Settings, PieChart, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function SplitAndGrow() {
  const friends = [
    { name: "You", spent: 450, goal: 1000, status: "On Track", color: "bg-brand-primary", level: 12 },
    { name: "Alex", spent: 820, goal: 1000, status: "Warning", color: "bg-red-500", level: 8 },
    { name: "Sam", spent: 310, goal: 1000, status: "Top Saver", color: "bg-emerald-500", level: 15 },
    { name: "Jordan", spent: 550, goal: 1000, status: "On Track", color: "bg-blue-500", level: 10 },
  ];

  const transactions = [
    { title: "Netflix Subscription", category: "Entertainment", amount: -15.99, date: "Today", icon: <PieChart className="w-4 h-4" /> },
    { title: "Dinner at Mario's", category: "Food", amount: -45.00, date: "Yesterday", icon: <Users className="w-4 h-4" /> },
    { title: "Salary Deposit", category: "Income", amount: 2450.00, date: "2 days ago", icon: <TrendingUp className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-20">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-zinc-100 rounded-xl transition-colors relative">
              <Bell className="w-5 h-5 text-zinc-400" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-white" />
            </button>
            <button className="p-2 hover:bg-zinc-100 rounded-xl transition-colors">
              <Settings className="w-5 h-5 text-zinc-400" />
            </button>
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              PS
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Overview & Stats */}
          <div className="lg:col-span-2 space-y-8">
            <header>
              <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Financial Dashboard</h1>
              <p className="text-zinc-400 font-medium">Welcome back, Shyani. You've saved <span className="text-emerald-500">$120.50</span> more than last month.</p>
            </header>

            {/* Main Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 rounded-[32px] p-8 text-white relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Total Balance</p>
                  <h2 className="text-4xl font-black tracking-tighter mb-6">$12,450.80</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                      <ArrowUpRight className="w-4 h-4" />
                      +12.5%
                    </div>
                    <div className="h-4 w-px bg-zinc-800" />
                    <p className="text-zinc-500 text-xs font-medium">vs last month</p>
                  </div>
                </div>
                <TrendingUp className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-zinc-100 rounded-[32px] p-8 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Shared Expenses</p>
                  <h2 className="text-4xl font-black tracking-tighter mb-6 text-zinc-900">$840.20</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                      {friends.map((f, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${f.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                          {f.name[0]}
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-2">+ 3 others</span>
                  </div>
                </div>
                <Users className="absolute -bottom-8 -right-8 w-48 h-48 text-zinc-50 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>

            {/* Recent Activity */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest">Recent Activity</h3>
                <button className="text-[10px] font-bold text-brand-primary font-accent lowercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {transactions.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white p-4 rounded-2xl border border-zinc-100 flex items-center justify-between hover:border-zinc-200 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-brand-primary/10 group-hover:text-brand-primary font-accent lowercase transition-colors">
                        {t.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">{t.category} • {t.date}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-bold ${t.amount > 0 ? "text-emerald-500" : "text-zinc-900"}`}>
                      {t.amount > 0 ? "+" : ""}{t.amount.toFixed(2)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Gamification & Goals */}
          <div className="space-y-8">
            {/* Level Progress */}
            <div className="bg-brand-primary rounded-[32px] p-8 text-white shadow-xl shadow-brand-primary/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Current Level</p>
                    <p className="text-xl font-black tracking-tighter">Level 12</p>
                  </div>
                </div>
                <Trophy className="w-6 h-6 text-white/40" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Progress to Lvl 13</span>
                  <span>840 / 1000 XP</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Savings Race Leaderboard */}
            <section className="bg-white border border-zinc-100 rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest">Saving Race</h3>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Week 4</span>
              </div>
              <div className="space-y-6">
                {friends.map((f, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-zinc-300">#{i + 1}</span>
                        <div className={`w-6 h-6 rounded-lg ${f.color} flex items-center justify-center text-[8px] font-bold text-white`}>
                          {f.name[0]}
                        </div>
                        <span className="text-[10px] font-bold">{f.name}</span>
                      </div>
                      <span className="text-[10px] font-bold">${f.spent}</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(f.spent / f.goal) * 100}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                        className={`h-full ${f.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-3">
              <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors flex items-center justify-center gap-3 group">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                Add Expense
              </button>
              <button className="w-full bg-white border border-zinc-100 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3">
                <CreditCard className="w-4 h-4" />
                Manage Cards
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Floating Action Button for Mobile */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl shadow-brand-primary/40 flex items-center justify-center lg:hidden z-50"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
