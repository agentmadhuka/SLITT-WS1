import { Target, Network, Zap, CheckCircle } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Precision Prompting",
    phase: "Alpha",
    icon: Target,
    objective: "Master the extraction of high-fidelity outputs through contextual anchoring and structured input architecture.",
    capabilities: [
      "Chain-of-Thought Structuring",
      "Context Injection Protocols",
      "Multi-shot Calibration",
      "Output Schema Mapping",
    ],
  },
  {
    id: "02",
    title: "Agentic Workflows",
    phase: "Beta",
    icon: Network,
    objective: "Transition from single-turn commands to autonomous multi-agent systems that self-correct and iterate.",
    capabilities: [
      "Recursive Feedback Loops",
      "Agentic Swarm Architecture",
      "Dynamic Tool Integration",
      "Error-Correction Logic",
    ],
  },
  {
    id: "03",
    title: "Irreplaceable Mindset",
    phase: "Omega",
    icon: Zap,
    objective: "Synthesis of human intuition with machine precision to maintain unique strategic value in an AI-saturated market.",
    capabilities: [
      "Strategic Curation Models",
      "High-Level System Design",
      "Creative Deviation Detection",
      "Human-Agent Collaboration",
    ],
  },
];

export default function Phases() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-16 border-l-4 border-primary pl-6 py-2">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">System Directive: 04-B</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4">
          Workshop <span className="text-primary">Phases</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl leading-relaxed">
          Deconstructing the evolution from prompt engineer to agentic architect. Three distinct stages of cognitive and technical mastery.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="group relative bg-surface-container-low p-8 transition-all hover:bg-surface-container duration-500 border-t border-primary/20"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="text-6xl font-headline font-black text-primary">{phase.id}</span>
            </div>
            <div className="mb-8">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-surface transition-all duration-500">
                <phase.icon size={30} />
              </div>
              <h2 className="text-2xl font-headline font-bold mb-2">{phase.title}</h2>
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 mb-6 tracking-widest uppercase">
                Protocol Phase: {phase.phase}
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary"></span> Protocol Objective
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{phase.objective}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary"></span> Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {phase.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="text-xs flex items-center gap-3 text-on-surface/80 group-hover:text-on-surface transition-colors"
                    >
                      <CheckCircle size={14} className="text-primary" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Break */}
      <div className="relative w-full h-80 overflow-hidden mb-20 border border-outline-variant/30">
        <img
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          src="https://picsum.photos/seed/agent-interface/1200/400"
          alt="Agentic Interface"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
          <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-4">
            Core Reference: AGENTIC_NETWORK_V2
          </span>
          <h3 className="text-3xl font-headline font-bold max-w-xl">
            "The human is no longer the laborer, but the architect of the digital swarm."
          </h3>
        </div>
      </div>

      {/* Roadmap */}
      <section className="border border-outline-variant/20 bg-surface-container-low p-12">
        <h3 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-12">System Deployment Roadmap</h3>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
          <div className="relative z-10 md:w-1/4">
            <div className="w-4 h-4 rounded-full bg-primary mb-6 ring-8 ring-primary/10"></div>
            <h4 className="font-headline font-bold text-lg mb-2">Phase 1 Start</h4>
            <p className="text-xs text-on-surface-variant">Initialization of foundational prompting protocols. Calibration period: 2 weeks.</p>
          </div>
          <div className="relative z-10 md:w-1/4">
            <div className="w-4 h-4 rounded-full bg-primary/40 mb-6"></div>
            <h4 className="font-headline font-bold text-lg mb-2">Midpoint Sync</h4>
            <p className="text-xs text-on-surface-variant">Transition to workflow automation. Integration of custom GPT agents.</p>
          </div>
          <div className="relative z-10 md:w-1/4">
            <div className="w-4 h-4 rounded-full bg-primary/20 mb-6"></div>
            <h4 className="font-headline font-bold text-lg mb-2">Finalization</h4>
            <p className="text-xs text-on-surface-variant">Deployment of full agentic suite. Mindset shift certification.</p>
          </div>
          <div className="relative z-10 md:w-1/4">
            <div className="w-4 h-4 rounded-full border-2 border-primary/50 mb-6"></div>
            <h4 className="font-headline font-bold text-lg mb-2">Evolution</h4>
            <p className="text-xs text-on-surface-variant">Post-workshop iterative scaling and community protocol updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
