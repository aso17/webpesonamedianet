import React from "react";
import { ShieldCheck, ShieldAlert, CheckCircle, Info } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function RPKIPage() {
  useDocumentTitle("RPKI Validator - Security Check");

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        variant="dark"
        badge="Network Security"
        title="RPKI"
        titleAccent="Validator"
        subtitle="Pastikan routing prefix Anda aman dan tervalidasi menggunakan standar RPKI Pesonanet."
        icon={ShieldCheck}
      />

      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#001f4d] mb-6">
                Membangun Jaringan yang{" "}
                <span className="text-[#00AEEF]">Lebih Aman</span>
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Resource Public Key Infrastructure (RPKI) adalah kerangka kerja
                keamanan untuk memvalidasi rute di internet. Pesonanet
                berkomitmen untuk menjaga integritas data pelanggan dari
                pembajakan rute (BGP Hijacking).
              </p>

              <div className="space-y-4">
                {[
                  {
                    t: "Route Validation",
                    d: "Memastikan origin AS sesuai dengan database IRR.",
                    icon: CheckCircle,
                  },
                  {
                    t: "Hijack Prevention",
                    d: "Melindungi rute Anda dari pengalihan trafik ilegal.",
                    icon: ShieldAlert,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <item.icon className="w-6 h-6 text-[#0054A6]" />
                    <div>
                      <h4 className="font-bold text-[#001f4d]">{item.t}</h4>
                      <p className="text-sm text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#001f4d] rounded-[40px] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <h3 className="text-xl font-bold mb-6">Check Your Prefix</h3>
              <div className="space-y-4 relative z-10">
                <input
                  type="text"
                  placeholder="ASN (e.g. 13xxxx)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-[#00AEEF]"
                />
                <input
                  type="text"
                  placeholder="Prefix (e.g. 103.xxx.xxx.0/24)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-[#00AEEF]"
                />
                <button className="w-full py-4 bg-[#00AEEF] text-white rounded-xl font-bold hover:shadow-lg shadow-[#00AEEF]/40 transition-all">
                  Verify Status
                </button>
              </div>
              <div className="mt-8 flex items-start gap-2 text-white/40 text-[10px] leading-relaxed uppercase tracking-widest">
                <Info className="w-3 h-3 flex-shrink-0" />
                <span>
                  Data is synced with global RIR databases periodically.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
