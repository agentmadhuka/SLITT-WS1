import { Cpu, Zap, Rocket, Users, ShieldCheck, Database, MapPin } from "lucide-react";

export default function Overview() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            <span className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-primary">
              Status: Systems Active
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-none">
            EVOLVE BEYOND <br />
            <span className="text-primary italic">THE MACHINE.</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-2xl mb-10 leading-relaxed">
            The "Irreplaceable Innovator" protocol is a strategic re-calibration. We shift from linear execution to exponential problem-solving. Transitioning the human agent from a <span className="text-primary font-medium">task-doer</span> to an <span className="text-tertiary font-medium">architect of value</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-surface font-headline font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(58,223,250,0.5)] transition-all active:scale-95">
              Initialize Protocol
            </button>
            <a
              href="https://notebooklm.google.com/notebook/c163c491-95bd-4949-bb1d-0d49f21a9616"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-outline-variant/30 text-on-surface font-headline font-bold tracking-widest uppercase hover:bg-primary/10 transition-all flex items-center justify-center"
            >
              View Documentation
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-surface-container relative overflow-hidden group">
            <img
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://picsum.photos/seed/tech-grid/800/800"
              alt="Neural Network Grid"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4 p-4 border-r border-t border-primary/40">
              <span className="text-[10px] font-headline text-primary uppercase tracking-widest">Bio-Metric Sync</span>
            </div>
          </div>
          {/* Stats Floating Card */}
          <div className="absolute -bottom-6 -left-6 p-6 glass-panel border border-primary/20 shadow-2xl">
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">System Uptime</div>
                <div className="text-3xl font-headline font-bold text-primary tracking-tighter">99.98%</div>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Nodes</div>
                <div className="text-3xl font-headline font-bold text-tertiary tracking-tighter">1,240</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics Bento Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-headline font-bold uppercase tracking-[0.4em] text-slate-500">System Diagnostics</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="p-8 bg-surface-container-low circuit-edge hover:bg-surface-container transition-colors group">
            <div className="text-primary mb-8">
              <Cpu size={40} />
            </div>
            <h3 className="font-headline font-bold text-2xl text-on-surface mb-4 tracking-tight uppercase">01. Deconstruction</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Analyze current task-based workflows. Identify recursive patterns and automate the mundane to liberate cognitive bandwidth.
            </p>
            <ul className="space-y-3 text-[10px] font-headline uppercase tracking-widest text-slate-500">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Workflow Audit</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Redundancy Mapping</li>
            </ul>
          </div>
          {/* Phase 2 */}
          <div className="p-8 bg-surface-container-low circuit-edge hover:bg-surface-container transition-colors group">
            <div className="text-primary mb-8">
              <Zap size={40} />
            </div>
            <h3 className="font-headline font-bold text-2xl text-on-surface mb-4 tracking-tight uppercase">02. Synthesis</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Re-engineering the approach. Learn to leverage AI agents as cognitive force multipliers rather than simple tools.
            </p>
            <ul className="space-y-3 text-[10px] font-headline uppercase tracking-widest text-slate-500">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Agent Orchestration</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Prompt Architecting</li>
            </ul>
          </div>
          {/* Phase 3 */}
          <div className="p-8 bg-surface-container-low circuit-edge hover:bg-surface-container transition-colors group">
            <div className="text-primary mb-8">
              <Rocket size={40} />
            </div>
            <h3 className="font-headline font-bold text-2xl text-on-surface mb-4 tracking-tight uppercase">03. Deployment</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Live implementation of problem-solving frameworks. Measure impact in strategic value generated versus hours logged.
            </p>
            <ul className="space-y-3 text-[10px] font-headline uppercase tracking-widest text-slate-500">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Impact Analytics</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Scaled Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secondary CTA / Stats Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-12 glass-panel border border-outline-variant/10 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
          <h4 className="font-headline font-bold text-4xl text-on-surface mb-6 tracking-tighter">READY TO <br /><span className="text-primary uppercase">Override?</span></h4>
          <p className="text-on-surface-variant mb-8 max-w-md">
            The workshop begins in <span className="text-tertiary">04:12:35</span>. Synchronize your workstation to receive the initial payload.
          </p>
          <button className="w-fit px-10 py-4 bg-surface-container-highest text-primary font-headline font-black uppercase tracking-widest border border-primary/20 hover:bg-primary hover:text-surface transition-all">
            Synchronize Now
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 bg-surface-container border border-outline-variant/10">
            <Users size={24} className="text-tertiary mb-4" />
            <div className="text-4xl font-headline font-bold mb-1">450+</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Innovators Synced</div>
          </div>
          <div className="p-8 bg-surface-container border border-outline-variant/10">
            <ShieldCheck size={24} className="text-tertiary mb-4" />
            <div className="text-4xl font-headline font-bold mb-1">92%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Efficiency Gain</div>
          </div>
          <div className="p-8 bg-surface-container border border-outline-variant/10">
            <Database size={24} className="text-tertiary mb-4" />
            <div className="text-4xl font-headline font-bold mb-1">12.5 TB</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Data Processed</div>
          </div>
          <div className="p-8 bg-surface-container border border-outline-variant/10">
            <MapPin size={24} className="text-tertiary mb-4" />
            <div className="text-4xl font-headline font-bold mb-1">Kandy</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Base Operations</div>
          </div>
        </div>
      </section>
    </div>
  );
}
