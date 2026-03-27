import { useState } from "react";
import { LineChart, Award, Zap, Download } from "lucide-react";
import { useAuth } from "../components/FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Takeaways() {
  const { user } = useAuth();
  const [isExporting, setIsExporting] = useState(false);
  const isAdmin = user?.email === "agentmadhuka@gmail.com";

  const handleExportCSV = async () => {
    if (!isAdmin) return;
    setIsExporting(true);
    try {
      const querySnapshot = await getDocs(collection(db, "feedback"));
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      if (data.length === 0) {
        alert("No feedback data found.");
        setIsExporting(false);
        return;
      }

      // Extract headers
      const headers = Object.keys(data[0]).filter(key => key !== 'id');
      headers.unshift('id'); // Put ID first

      // Convert to CSV string
      const csvRows = [];
      csvRows.push(headers.join(',')); // Header row

      for (const row of data) {
        const values = headers.map(header => {
          const val = row[header];
          // Escape quotes and wrap in quotes to handle commas in text
          const escaped = ('' + (val || '')).replace(/"/g, '""');
          return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
      }

      const csvString = csvRows.join('\n');
      
      // Trigger download
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `feedback_export_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Failed to export data. Check console for details.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Executive Summary</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface leading-none">
            Takeaways Dashboard
          </h1>
          <p className="mt-4 text-on-surface-variant font-body text-sm max-w-md border-l border-primary/20 pl-4 py-1">
            Summarizing the "Key Data Points Extracted" from the Agentic Innovator workshop sessions. Real-time participant analysis and sentiment metrics.
          </p>
        </div>
        <div className="flex flex-col items-end gap-4">
          {isAdmin && (
            <button
              onClick={handleExportCSV}
              disabled={isExporting}
              className="px-6 py-3 bg-surface-container-highest border border-primary/30 text-primary font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary/10 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Download size={16} />
              {isExporting ? "Exporting..." : "Export CSV Data"}
            </button>
          )}
          <div className="glass-panel p-6 border-t border-primary/40 relative overflow-hidden">
            <p className="italic text-tertiary font-headline text-xl leading-snug max-w-xs relative z-10">
              "Degrees get interviews; adaptability gets careers."
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[200px]">
        {/* Problem-Solver Score */}
        <div className="md:col-span-4 md:row-span-2 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-between relative group overflow-hidden min-h-[300px] md:min-h-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="flex justify-between items-start">
              <span className="text-primary font-headline text-[10px] tracking-[0.3em] uppercase">Problem-Solver Score</span>
              <LineChart size={20} className="text-primary/40" />
            </div>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-7xl font-headline font-bold tracking-tighter text-on-surface">88</span>
              <span className="text-primary font-bold">/100</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-2 font-mono">SYSTEM_HEALTH: NOMINAL</p>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-full bg-surface-container-highest overflow-hidden">
              <div className="h-full bg-primary w-[88%] shadow-[0_0_10px_#3adffa]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-headline tracking-widest text-on-surface-variant uppercase">
              <span>Adaptability</span>
              <span className="text-primary">94%</span>
            </div>
            <div className="flex justify-between text-[10px] font-headline tracking-widest text-on-surface-variant uppercase">
              <span>Innovation Velocity</span>
              <span className="text-secondary">82%</span>
            </div>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="md:col-span-8 md:row-span-1 bg-surface-container border border-outline-variant/20 p-6 flex flex-col justify-between min-h-[200px] md:min-h-0">
          <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
            <span className="text-primary font-headline text-[10px] tracking-[0.3em] uppercase">Sentiment Analysis</span>
            <div className="flex gap-2">
              <span className="text-[8px] px-1.5 py-0.5 border border-primary/20 text-primary">REAL-TIME</span>
              <span className="text-[8px] px-1.5 py-0.5 border border-secondary/20 text-secondary">AGGREGATED</span>
            </div>
          </div>
          <div className="flex flex-1 items-end gap-1 pt-6 overflow-hidden">
            {[30, 45, 25, 60, 50, 85, 40, 55, 20, 70, 95, 35].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 border-t border-primary transition-all duration-500 hover:bg-primary/40"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Insights Feed */}
        <div className="md:col-span-8 md:row-span-1 bg-surface-container-low border border-outline-variant/20 overflow-hidden flex flex-col min-h-[200px] md:min-h-0">
          <div className="p-4 bg-surface-container border-b border-outline-variant/10 flex items-center justify-between">
            <span className="text-primary font-headline text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span> Insights Feed
            </span>
            <span className="text-[10px] text-on-surface-variant font-mono uppercase">Node: CMB-01</span>
          </div>
          <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 terminal-scroll">
            <div className="flex gap-3">
              <span className="text-primary shrink-0">[14:22:01]</span>
              <span className="text-on-surface-variant">Participant feedback: "The focus on AI as a partner rather than a replacement is a game changer."</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary shrink-0">[14:23:45]</span>
              <span className="text-on-surface-variant">Data point extracted: High correlation between creative thinking and agent utilization efficiency.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary shrink-0">[14:25:12]</span>
              <span className="text-secondary shrink-0">[ANALYTICS]</span>
              <span className="text-on-surface">Core takeaway confirmed: Adaptability is the primary metric for long-term career resilience.</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="md:col-span-3 md:row-span-1 bg-surface-container border border-outline-variant/20 p-6 flex flex-col justify-center gap-2 text-center group min-h-[150px] md:min-h-0">
          <span className="text-on-surface-variant font-headline text-[10px] tracking-[0.2em] uppercase">Participant Engagement</span>
          <span className="text-4xl font-headline font-bold text-secondary group-hover:scale-110 transition-transform">98%</span>
        </div>
        <div className="md:col-span-3 md:row-span-1 bg-surface-container border border-outline-variant/20 p-6 flex flex-col justify-center gap-2 text-center group min-h-[150px] md:min-h-0">
          <span className="text-on-surface-variant font-headline text-[10px] tracking-[0.2em] uppercase">Innovation Hubs</span>
          <span className="text-4xl font-headline font-bold text-tertiary group-hover:scale-110 transition-transform">12</span>
        </div>
        <div className="md:col-span-6 md:row-span-1 relative group overflow-hidden border border-outline-variant/20 min-h-[200px] md:min-h-0">
          <img
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
            src="https://picsum.photos/seed/neural-network/800/200"
            alt="Neural Network"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="text-primary font-headline text-[10px] tracking-[0.4em] uppercase">System Vision</span>
            <h3 className="text-on-surface font-headline font-bold text-xl uppercase tracking-tighter">The Agentic Network</h3>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-outline-variant/20 pt-16">
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface uppercase mb-4 tracking-tight">Ready to Initialize Your Path?</h2>
          <p className="text-on-surface-variant font-body mb-8">The workshop concludes here, but the innovation continues. Download your personalized protocol and join the agentic elite.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-surface font-headline font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary-container transition-colors shadow-[0_0_20px_rgba(58,223,250,0.3)] text-center">
              Download Protocol
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-outline-variant/40 text-on-surface font-headline font-bold text-sm tracking-[0.2em] uppercase hover:bg-surface-container transition-colors text-center">
              View Logs
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface-container p-6 border-l-4 border-secondary">
            <Award size={24} className="text-secondary mb-2" />
            <p className="text-[10px] text-on-surface-variant uppercase font-headline mb-1">Rank</p>
            <p className="text-xl font-headline font-bold text-on-surface">Alpha Architect</p>
          </div>
          <div className="bg-surface-container p-6 border-l-4 border-tertiary">
            <Zap size={24} className="text-tertiary mb-2" />
            <p className="text-[10px] text-on-surface-variant uppercase font-headline mb-1">Status</p>
            <p className="text-xl font-headline font-bold text-on-surface">Initialized</p>
          </div>
        </div>
      </section>
    </div>
  );
}
