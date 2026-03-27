import React, { useState } from "react";
import { Star, Terminal as TerminalIcon, GitFork, Brain, Zap } from "lucide-react";
import { cn } from "../lib/utils";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to "Google Spreadsheet"
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          phase: selectedPhase,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">PROTOCOL SUBMITTED</h1>
        <p className="text-on-surface-variant mb-8">Your feedback has been successfully integrated into the SLIIT Innovator Nexus.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 bg-primary text-surface font-headline font-bold uppercase tracking-widest"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-[1px] w-8 bg-primary"></span>
          <span className="text-primary font-mono text-xs tracking-widest uppercase">Protocol: FB-992-ALPHA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tight mb-4">
          The Irreplaceable <span className="text-primary">Innovator</span> Workshop
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl leading-relaxed">
          SLIIT Kandy Innovators - <span className="text-tertiary">Anonymous Feedback Protocol</span>. Your data will be processed to optimize future agentic workflows.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-12">
          {/* Rating */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="font-headline text-sm uppercase tracking-[0.3em] text-slate-400">01. Overall System Rating</label>
              <span className="font-mono text-[10px] text-primary opacity-50">[FLOAT: 1.0 - 5.0]</span>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={cn(
                    "w-14 h-14 border flex items-center justify-center group transition-all",
                    rating >= star ? "border-primary bg-primary/10" : "border-outline-variant/30 hover:bg-primary/5"
                  )}
                >
                  <Star
                    size={24}
                    className={cn(
                      "transition-all",
                      rating >= star ? "text-primary fill-primary scale-110" : "text-slate-600 group-hover:text-primary"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Phase Selection */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="font-headline text-sm uppercase tracking-[0.3em] text-slate-400">02. Primary Phase Selection</label>
              <span className="font-mono text-[10px] text-primary opacity-50">[ENUM: SELECT_ONE]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: "p1", title: "Phase 1: Precision Prompting", icon: TerminalIcon },
                { id: "p2", title: "Phase 2: Agentic Workflows", icon: GitFork },
                { id: "p3", title: "Phase 3: Mindset", icon: Brain },
              ].map((phase) => (
                <div
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={cn(
                    "glass-panel p-6 relative cursor-pointer group transition-all",
                    selectedPhase === phase.id ? "border-primary bg-primary/5" : "border-outline-variant/20 hover:border-primary/50"
                  )}
                >
                  {selectedPhase === phase.id && (
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></div>
                  )}
                  <phase.icon
                    size={24}
                    className={cn(
                      "mb-4 block transition-colors",
                      selectedPhase === phase.id ? "text-primary" : "text-slate-500 group-hover:text-primary"
                    )}
                  />
                  <h4 className={cn(
                    "font-headline font-bold text-sm mb-2 transition-colors",
                    selectedPhase === phase.id ? "text-on-surface" : "text-slate-400 group-hover:text-on-surface"
                  )}>
                    {phase.title}
                  </h4>
                  <p className="text-[10px] text-slate-600 uppercase tracking-tighter">
                    {selectedPhase === phase.id ? "Active State Protocol" : "Idle Standby"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Areas */}
          <div className="space-y-4">
            <label className="font-headline text-sm uppercase tracking-[0.3em] text-slate-400">03. Key Data Points Extracted</label>
            <div className="relative">
              <div className="absolute top-3 left-4 text-primary font-mono text-sm opacity-50">&gt;_</div>
              <textarea
                className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 text-on-surface font-mono text-sm pl-10 pt-3 terminal-scroll resize-none"
                placeholder="e.g., Using AI as a 24/7 mentor, the Perfect Prompt Formula..."
                rows={4}
              ></textarea>
            </div>
          </div>

          <div className="space-y-4">
            <label className="font-headline text-sm uppercase tracking-[0.3em] text-slate-400">04. Additional System Logs</label>
            <div className="relative">
              <div className="absolute top-3 left-4 text-primary font-mono text-sm opacity-50">&gt;_</div>
              <textarea
                className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 text-on-surface font-mono text-sm pl-10 pt-3 terminal-scroll resize-none"
                placeholder="Any other feedback or suggestions?"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-8">
            <button
              disabled={isSubmitting}
              className="group relative w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-surface font-headline font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 animate-neon-pulse hover:shadow-[0_0_60px_rgba(58,223,250,0.8)] hover:brightness-110 disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Submit Feedback Protocol"}
              <Zap size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-[10px] text-slate-600 font-mono text-center md:text-left">By submitting, you agree to store this data in the SLIIT Innovator Nexus.</p>
          </div>
        </form>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="glass-panel p-8 border-l-4 border-l-tertiary">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-mono text-xs text-emerald-500 font-bold uppercase tracking-widest">System Status: Nominal</span>
            </div>
            <div className="space-y-6">
              <div className="relative h-32 w-full bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-40 grayscale"
                  src="https://picsum.photos/seed/hardware/400/200"
                  alt="Hardware"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
              </div>
              <div>
                <h5 className="text-tertiary font-headline font-bold text-xs uppercase tracking-widest mb-2">Agent Integrity Check</h5>
                <p className="text-slate-500 text-xs leading-relaxed">Your feedback is strictly anonymous. All PII data is stripped before reaching the central repository.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-6">
                <div>
                  <span className="block text-[10px] text-slate-600 uppercase">Version</span>
                  <span className="block text-xs font-mono text-on-surface">v1.0.2-LTS</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-600 uppercase">Location</span>
                  <span className="block text-xs font-mono text-on-surface">Kandy Node</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border border-outline-variant/10 bg-surface-container-low">
            <h5 className="text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest mb-4">Workshop Stats</h5>
            <ul className="space-y-3 font-mono text-[10px] text-slate-500">
              <li className="flex justify-between"><span>Attendees</span> <span className="text-primary">240+</span></li>
              <li className="flex justify-between"><span>Prompts Generated</span> <span className="text-primary">12k</span></li>
              <li className="flex justify-between"><span>Success Rate</span> <span className="text-primary">99.2%</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
