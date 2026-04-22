import React from "react";
import { motion } from "framer-motion";
import {
  Settings2,
  ShieldCheck,
  Zap,
  Clock,
  LineChart,
  HardDrive,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// ── Animation Variants ──────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceManage() {
  useDocumentTitle("Managed Service - Solusi IT Terpadu Pesonanet");

  return (
    <main className="min-h-screen bg-white">
      {/* Pilih Variant "dark" agar terlihat profesional dan teknis.
          Ikon Settings2 memberikan kesan pengelolaan/konfigurasi.
      */}
      <PageHeader
        variant="dark"
        badge="Enterprise Managed Solutions"
        title="Managed"
        titleAccent="Service"
        subtitle="Biarkan tim ahli kami mengelola infrastruktur IT dan jaringan Anda secara menyeluruh, sehingga Anda bisa fokus sepenuhnya pada pertumbuhan bisnis."
        icon={Settings2}
      />

      <section className="py-24 px-5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-black text-[#001f4d] leading-tight tracking-tight">
              Layanan <span className="text-[#00AEEF]">End-to-End</span> <br />
              Untuk Infrastruktur IT Anda
            </h2>
            <div className="h-1.5 w-20 bg-[#00AEEF] mt-6 rounded-full" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Item 1 */}
            <motion.div
              variants={item}
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#00AEEF]/30 hover:shadow-2xl hover:shadow-[#0054A6]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-[#0054A6]" />
              </div>
              <h3 className="text-xl font-bold text-[#001f4d] mb-4">
                Security Management
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Monitoring keamanan jaringan secara real-time, manajemen
                firewall, dan perlindungan proaktif terhadap serangan siber.
              </p>
              <ul className="space-y-3">
                {[
                  "Firewall UTM",
                  "Endpoint Security",
                  "Vulnerability Assessment",
                ].map((list) => (
                  <li
                    key={list}
                    className="flex items-center gap-2 text-[13px] font-medium text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> {list}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Item 2 */}
            <motion.div
              variants={item}
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#00AEEF]/30 hover:shadow-2xl hover:shadow-[#0054A6]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HardDrive className="w-7 h-7 text-[#0054A6]" />
              </div>
              <h3 className="text-xl font-bold text-[#001f4d] mb-4">
                Network Operations
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Pengelolaan perangkat network (Router, Switch, Access Point)
                termasuk pemeliharaan rutin dan penggantian perangkat.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 Monitoring",
                  "Hardware Maintenance",
                  "SLA Guaranteed",
                ].map((list) => (
                  <li
                    key={list}
                    className="flex items-center gap-2 text-[13px] font-medium text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> {list}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Item 3 */}
            <motion.div
              variants={item}
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#00AEEF]/30 hover:shadow-2xl hover:shadow-[#0054A6]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones className="w-7 h-7 text-[#0054A6]" />
              </div>
              <h3 className="text-xl font-bold text-[#001f4d] mb-4">
                On-Site Support
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Tim teknisi ahli siap datang ke lokasi Anda untuk menangani
                kendala teknis yang membutuhkan penanganan fisik segera.
              </p>
              <ul className="space-y-3">
                {[
                  "Response Time Cepat",
                  "Technical Consultation",
                  "Local Support",
                ].map((list) => (
                  <li
                    key={list}
                    className="flex items-center gap-2 text-[13px] font-medium text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> {list}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section Ringan */}
      <section className="pb-24 px-5">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-[#001f4d] p-10 md:p-16 text-center relative overflow-hidden">
          {/* Dekorasi Geometris di dalam CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 -mr-20 -mt-20 rotate-45 pointer-events-none" />

          <h2 className="text-white text-2xl md:text-4xl font-black mb-6 relative z-10">
            Siap Mengoptimalkan Infrastruktur Digital Anda?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto relative z-10">
            Diskusikan kebutuhan spesifik bisnis Anda dengan konsultan IT kami
            dan temukan solusi yang paling efisien.
          </p>
          <button className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 relative z-10">
            Hubungi Tim Ahli
          </button>
        </div>
      </section>
    </main>
  );
}
