import React from "react";
import { Search, Terminal, Globe2, Activity } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function LookingGlassPage() {
  useDocumentTitle("Looking Glass - Routing Diagnostic");

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        variant="glass"
        badge="Diagnostic Tools"
        title="Looking"
        titleAccent="Glass"
        subtitle="Lakukan pemeriksaan routing, BGP, dan path connectivity dari core router Pesonanet."
        meta={["Ping", "Traceroute", "BGP Map"]}
      />

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#001233] rounded-[24px] p-8 shadow-2xl border border-white/10 overflow-hidden relative">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-white/30 text-[10px] font-mono ml-4 uppercase tracking-widest">
                Router-ID: AS13xxxx
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="IP Address / Hostname"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#00AEEF] outline-none"
              />
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#00AEEF] outline-none">
                <option>Select Command: Ping</option>
                <option>Traceroute</option>
                <option>BGP Route</option>
              </select>
            </div>

            <button className="w-full py-4 bg-[#00AEEF] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#00AEEF]/90 transition-all">
              Execute Command
            </button>

            {/* Output Area */}
            <div className="mt-8 bg-black/40 rounded-xl p-6 font-mono text-xs text-green-400 min-h-[200px] border border-white/5">
              <span className="opacity-50"># Waiting for input...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
