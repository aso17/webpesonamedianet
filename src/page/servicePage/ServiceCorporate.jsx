import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Network,
  ShieldCheck,
  Users2,
  CheckCircle2,
  ArrowRight,
  MonitorCheck,
  Cable,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// ── Animation Variants ──────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceCorporate() {
  useDocumentTitle("Solusi Perkantoran - Infrastruktur IT & Jaringan Terpadu");

  return (
    <main className="min-h-screen bg-white">
      {/* Variant "glass" memberikan kesan eksklusif.
        Meta digunakan untuk poin-poin checklist cepat di dalam card header.
      */}
      <PageHeader
        variant="glass"
        badge="Office & Corporate Solution"
        title="Infrastruktur"
        titleAccent="Perkantoran"
        subtitle="Transformasi ruang kerja Anda dengan ekosistem jaringan yang cerdas, aman, dan dirancang untuk produktivitas maksimal tanpa kendala teknis."
        meta={["Custom Topology", "On-site Deployment", "Business Continuity"]}
      />

      {/* Main Features Grid */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[45px] font-black text-[#001f4d] leading-tight"
            >
              Konektivitas yang{" "}
              <span className="text-[#00AEEF]">Menyatukan</span> Seluruh Lantai
            </motion.h2>
            <p className="text-slate-500 mt-6 leading-relaxed">
              Kami tidak hanya memberikan kabel dan router. Kami membangun
              fondasi digital agar tim Anda dapat berkolaborasi tanpa hambatan,
              di mana pun mereka duduk.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Structured Cabling",
                desc: "Instalasi kabel LAN (Cat6/Fiber) yang rapi dan terorganisir untuk stabilitas data antar ruang.",
                icon: Cable,
              },
              {
                title: "Smart Wi-Fi Mesh",
                desc: "Cakupan sinyal tanpa 'dead-zone' dengan teknologi seamless roaming di seluruh area kantor.",
                icon: Network,
              },
              {
                title: "Internal Server",
                desc: "Penyediaan dan konfigurasi server lokal untuk penyimpanan data internal yang aman.",
                icon: MonitorCheck,
              },
              {
                title: "CCTV Integration",
                desc: "Integrasi sistem keamanan IP Camera yang dapat dipantau langsung dari jaringan internal.",
                icon: ShieldCheck,
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group p-8 rounded-[32px] border border-slate-100 bg-white hover:bg-[#001f4d] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] group-hover:bg-[#00AEEF] flex items-center justify-center mb-8 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-[#0054A6] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#001f4d] group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-[#EEF5FF]/50 relative overflow-hidden">
        {/* Dekorasi Geometris Abstrak */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#00AEEF]/10 rounded-full -mr-64 -mt-64 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-[#00AEEF] font-bold tracking-[3px] uppercase text-[10px]">
                Seamless Collaboration
              </span>
              <h2 className="text-[30px] md:text-[40px] font-black text-[#001f4d] mt-4 mb-6 leading-tight">
                Efisiensi Kerja Dimulai dari <br />
                Jaringan yang Sehat
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Pengaturan Bandwidth Management per Departemen",
                  "Sistem VPN Aman untuk Akses Kerja dari Rumah",
                  "Dukungan Maintenance Rutin setiap Bulan",
                  "Laporan Monitoring Jaringan Berkala",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00AEEF]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0054A6]" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 group text-[#0054A6] font-bold uppercase tracking-widest text-[11px] hover:text-[#00AEEF] transition-colors">
                Konsultasikan Layout Kantor Anda{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-[32px] bg-white shadow-xl flex items-center justify-center p-10 border border-slate-100">
                  <Building2 className="w-full h-full text-[#0054A6]/10" />
                </div>
                <div className="aspect-square rounded-[32px] bg-[#00AEEF] shadow-xl flex items-center justify-center p-10 mt-8">
                  <Users2 className="w-full h-full text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
