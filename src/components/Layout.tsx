import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, GitFork, Brain, Send, Terminal, Network } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const sidebarItems = [
  { name: "Overview", path: "/overview", icon: LayoutDashboard },
  { name: "Phases", path: "/phases", icon: GitFork },
  { name: "Takeaways", path: "/takeaways", icon: Brain },
  { name: "Submit", path: "/submit", icon: Send },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_15px_rgba(58,223,250,0.1)]">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tighter text-primary uppercase font-headline">
            The Irreplaceable Innovator Workshop
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              cn(
                "font-headline tracking-tight font-bold text-sm transition-colors",
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-cyan-200"
              )
            }
          >
            Protocol
          </NavLink>
          <NavLink
            to="/phases"
            className={({ isActive }) =>
              cn(
                "font-headline tracking-tight font-bold text-sm transition-colors",
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-cyan-200"
              )
            }
          >
            Phases
          </NavLink>
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              cn(
                "font-headline tracking-tight font-bold text-sm transition-colors",
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-cyan-200"
              )
            }
          >
            Feedback
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300">
            <Terminal size={20} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Side Navigation */}
        <aside className="hidden lg:flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] bg-surface-container-low w-64 border-r border-primary/10 z-40 pt-8">
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
                <Network size={16} className="text-primary" />
              </div>
              <div>
                <h2 className="font-headline font-black uppercase text-primary text-xs tracking-widest">
                  System Protocol
                </h2>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                  Anonymous Feedback
                </p>
              </div>
            </div>
          </div>
          <nav className="flex-1">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 px-6 py-4 transition-all font-headline font-medium text-sm tracking-widest uppercase",
                    isActive
                      ? "bg-primary/10 text-primary border-r-2 border-primary"
                      : "text-slate-500 hover:text-cyan-300 hover:bg-slate-800/50 hover:translate-x-1"
                  )
                }
              >
                <item.icon size={18} />
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="p-6">
            <button className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-surface font-headline font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_15px_rgba(58,223,250,0.4)] transition-all">
              Initialize Protocol
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-12 overflow-y-auto">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="lg:ml-64 w-full py-4 px-8 flex flex-col md:flex-row justify-between items-center bg-surface border-t border-cyan-900/30 gap-4 z-50">
        <div className="text-primary font-bold font-headline text-xs tracking-widest uppercase">
          © 2024 SLIIT Kandy Innovators | Agentic Protocol v1.0.2
        </div>
        <div className="flex gap-6">
          <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-cyan-300 transition-colors">Privacy</a>
          <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-cyan-300 transition-colors">Security</a>
          <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-cyan-300 transition-colors">Terminal Logs</a>
        </div>
      </footer>
    </div>
  );
}
