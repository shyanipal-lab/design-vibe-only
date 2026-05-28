import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Flame, 
  CheckCircle, 
  MessageSquare, 
  UserCheck, 
  Share2, 
  Calendar, 
  Award,
  ChevronRight,
  ShieldCheck,
  Send,
  Plus
} from "lucide-react";

interface Sponsee {
  id: string;
  name: string;
  initials: string;
  days: number;
  lastCheckedIn: string;
  status: "safe" | "struggling" | "pending";
  streak: number;
}

const INITIAL_SPONSEES: Sponsee[] = [
  { id: "1", name: "David Miller", initials: "DM", days: 120, lastCheckedIn: "10m ago", status: "safe", streak: 24 },
  { id: "2", name: "Sarah Connor", initials: "SC", days: 45, lastCheckedIn: "1h ago", status: "safe", streak: 9 },
  { id: "3", name: "Marcus Wright", initials: "MW", days: 14, lastCheckedIn: "Yesterday", status: "struggling", streak: 0 },
  { id: "4", name: "John Connor", initials: "JC", days: 365, lastCheckedIn: "1h ago", status: "safe", streak: 52 }
];

export default function SobersApp() {
  const [sponsees, setSponsees] = useState<Sponsee[]>(INITIAL_SPONSEES);
  const [myDays, setMyDays] = useState(365);
  const [selectedSponsee, setSelectedSponsee] = useState<Sponsee | null>(INITIAL_SPONSEES[0]);
  const [actionDone, setActionDone] = useState<Record<string, boolean>>({});
  const [messages, setMessages] = useState<Record<string, string[]>>({
    "1": ["Hey Sponsor, made it to my morning meeting today!", "Feeling solid, thank you for checking on me."],
    "2": ["Sticking with the program, 45 days feels unreal."],
    "3": ["I am having a really tough afternoon... lots of cravings today."],
    "4": ["One full year clean! Today is my sober birthday. Couldn't have done it without you."]
  });
  const [inputText, setInputText] = useState("");

  const handleDayCheckIn = () => {
    setMyDays(prev => prev + 1);
  };

  const handleActionToggle = (actionKey: string) => {
    setActionDone(prev => ({ ...prev, [actionKey]: !prev[actionKey] }));
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedSponsee) return;
    const sId = selectedSponsee.id;
    setMessages(prev => ({
      ...prev,
      [sId]: [...(prev[sId] || []), inputText]
    }));
    setInputText("");
  };

  return (
    <div className="w-full h-full bg-[#050914] text-white p-6 font-sans flex flex-col justify-between overflow-hidden relative select-none">
      {/* Background radial highlight */}
      <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-100">Sobers Sponsors System</h4>
            <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Active Sponsorship Protocol</p>
          </div>
        </div>

        <button 
          onClick={handleDayCheckIn}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-xs font-black uppercase tracking-widest py-2 px-4 rounded-xl border border-white/10"
        >
          <Plus className="w-3.5 h-3.5 text-blue-400" />
          <span>Add 1 Day ({myDays})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 overflow-hidden">
        {/* Left column: sponsorship roster */}
        <div className="md:col-span-4 flex flex-col gap-3 overflow-y-auto pr-1">
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500">Your Sponsees</p>
          <div className="space-y-2">
            {sponsees.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSponsee(s)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedSponsee?.id === s.id 
                    ? "bg-blue-600/15 border-blue-500/50" 
                    : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    s.status === "struggling" 
                      ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                      : s.days >= 365 
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse"
                      : "bg-zinc-800 text-zinc-300 border border-white/10"
                  }`}>
                    {s.initials}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-100">{s.name}</h5>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        s.status === "safe" ? "bg-emerald-500" : "bg-red-500 animate-pulse"
                      }`} />
                      <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">{s.days} Days Sober</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  selectedSponsee?.id === s.id ? "text-blue-400 translate-x-0.5" : "text-zinc-600"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right columns: detailed sponsee view */}
        <div className="md:col-span-8 flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-4 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {selectedSponsee ? (
              <motion.div
                key={selectedSponsee.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col h-full justify-between"
              >
                {/* Sponsee details header */}
                <div className="flex items-start justify-between border-b border-white/5 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-black tracking-tight">{selectedSponsee.name}</h4>
                      {selectedSponsee.days >= 365 && (
                        <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                          <Award className="w-2.5 h-2.5" />
                          <span>1 Year</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Last Check-In: {selectedSponsee.lastCheckedIn}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                      <Flame className="w-3 h-3 text-orange-500" />
                      <span>{selectedSponsee.streak} Week Streak</span>
                    </div>
                  </div>
                </div>

                {/* Sponsee feed & chat timeline */}
                <div className="flex-1 my-3 overflow-y-auto flex flex-col gap-2.5 p-1">
                  <div className="text-center py-2">
                    <p className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Secure Direct Encrypted Channel</p>
                  </div>

                  {messages[selectedSponsee.id]?.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        i % 2 === 0 
                          ? "bg-zinc-800 text-zinc-100 self-start rounded-tl-none border border-white/5" 
                          : "bg-blue-600 text-white self-end rounded-tr-none"
                      }`}
                    >
                      {msg}
                    </div>
                  ))}
                </div>

                {/* Action builder & chat input */}
                <div className="border-t border-white/5 pt-3 flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleActionToggle("call_" + selectedSponsee.id)}
                      className={`text-[9px] py-2 px-2.5 rounded-lg border font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        actionDone["call_" + selectedSponsee.id]
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                          : "bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400"
                      }`}
                    >
                      <UserCheck className="w-3 h-3" />
                      <span>Sponsor Call {actionDone["call_" + selectedSponsee.id] ? "Done" : ""}</span>
                    </button>
                    <button 
                      onClick={() => handleActionToggle("milestone_" + selectedSponsee.id)}
                      className={`text-[9px] py-2 px-2.5 rounded-lg border font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        actionDone["milestone_" + selectedSponsee.id]
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                          : "bg-white/5 border-white/5 hover:bg-white/10 text-zinc-400"
                      }`}
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>Milestone Signed</span>
                    </button>
                  </div>

                  {/* Text send field */}
                  <form onSubmit={sendMessage} className="flex gap-2">
                    <input 
                      type="text" 
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder={`Send encouragement to ${selectedSponsee.name.split(' ')[0]}...`}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-zinc-100 text-xs py-2.5 px-4 rounded-xl border border-white/5 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-zinc-500 transition-all font-medium"
                    />
                    <button 
                      type="submit"
                      className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-blue-900/20 text-white shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-zinc-500">
                <p className="text-xs font-bold uppercase tracking-widest">Select a Sponsee Roster Item</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
