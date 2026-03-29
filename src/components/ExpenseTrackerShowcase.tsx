import { motion, AnimatePresence } from "motion/react";
import { Wallet, TrendingUp, Users, Trophy, Target, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ExpenseTrackerShowcase() {
  const [showIntro, setShowIntro] = useState(true);
  const friends = [
    { name: "You", spent: 450, goal: 1000, status: "On Track", color: "bg-brand-primary" },
    { name: "Alex", spent: 820, goal: 1000, status: "Warning", color: "bg-red-500" },
    { name: "Sam", spent: 310, goal: 1000, status: "Top Saver", color: "bg-emerald-500" },
  ];

  return (
    <div className="w-full max-w-[400px] mx-auto bg-zinc-50 rounded-[32px] overflow-hidden shadow-inner border border-zinc-200/50 font-sans text-zinc-900 relative">
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-white p-8 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <Wallet className="w-6 h-6 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">The Playground</span>
            </div>

            <h2 className="font-header text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">
              Split.<br />Grow.<br /><span className="text-brand-primary">Win.</span>
            </h2>

            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              Split & Grow is a social financial experiment. Compete with friends to see who can save the most, split bills instantly, and watch your collective wealth grow through gamified milestones.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Social Splitting", desc: "Instant bill division with friends" },
                { title: "The Saving Race", desc: "Competitive leaderboard for spending" },
                { title: "Goal Milestones", desc: "Visual tracking for your targets" }
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-brand-primary mt-1.5" />
                  <div>
                    <p className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">{feat.title}</p>
                    <p className="text-[9px] text-zinc-400 font-medium">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowIntro(false)}
              className="w-full bg-zinc-900 text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl shadow-zinc-900/10"
            >
              Launch Full App
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Header */}
      <div className="bg-white p-6 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Split & Grow</h3>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Gamified Finance</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
            <Zap className="w-3 h-3 text-brand-primary" />
            <span className="text-[10px] font-bold">Lvl 12</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 rounded-2xl p-4 text-white">
            <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Total Balance</p>
            <p className="text-lg font-bold">$2,450.00</p>
            <div className="flex items-center gap-1 text-emerald-400 text-[8px] font-bold mt-2">
              <ArrowUpRight className="w-3 h-3" />
              +12.5%
            </div>
          </div>
          <div className="bg-white border border-zinc-100 rounded-2xl p-4">
            <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Shared Debt</p>
            <p className="text-lg font-bold text-zinc-900">$120.50</p>
            <div className="flex items-center gap-1 text-red-500 text-[8px] font-bold mt-2">
              <ArrowDownRight className="w-3 h-3" />
              Due in 2d
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-brand-primary" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Saving Race</h4>
            </div>
            <span className="text-[10px] text-zinc-400 font-bold">Week 4</span>
          </div>
          
          <div className="space-y-3">
            {friends.map((friend, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-zinc-100 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${friend.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {friend.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold">{friend.name}</span>
                    <span className="text-[10px] font-bold">${friend.spent}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(friend.spent / friend.goal) * 100}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                      className={`h-full ${friend.color}`}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-[8px] font-bold uppercase tracking-tighter ${
                    friend.status === "Top Saver" ? "text-emerald-500" : 
                    friend.status === "Warning" ? "text-red-500" : "text-zinc-400"
                  }`}>
                    {friend.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-brand-primary" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Your Goals</h4>
          </div>
          <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-bold text-zinc-900">New MacBook Pro</p>
                  <p className="text-[10px] text-zinc-500 font-medium">Target: $2,400</p>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg text-[10px] font-bold text-brand-primary border border-brand-primary/20">
                  75%
                </div>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-full bg-brand-primary"
                />
              </div>
              <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                Estimated completion: <span className="text-zinc-900">3 weeks</span>
              </p>
            </div>
            <TrendingUp className="absolute -bottom-4 -right-4 w-24 h-24 text-brand-primary/5 rotate-12" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">
            <Users className="w-3 h-3" />
            Split Bill
          </button>
          <button className="flex items-center justify-center gap-2 border border-zinc-200 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors">
            <TrendingUp className="w-3 h-3" />
            Invest
          </button>
        </div>

        <Link 
          to="/split-and-grow"
          className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all group"
        >
          View Full Dashboard
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
