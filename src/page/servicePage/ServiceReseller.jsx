import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  TrendingUp,
  Globe2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Users,
  Coins,
  ArrowRight,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// ── Animation Variants ──────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceReseller() {
  useDocumentTitle("Program Reseller - Tumbuh Bersama Pesonanet");

  return (
    <main className="min-h-screen bg-white">
      {/* Variant split digunakan untuk menunjukkan potensi angka 
          dan kemudahan bergabung dalam program kemitraan.
      */}
      <PageHeader
        variant="split"
        badge="Partnership Program"
        title="Reseller"
        titleAccent="Partners"
        subtitle="Bangun bisnis internet mandiri di wilayah Anda dengan dukungan infrastruktur backbone terbaik dan manajemen legalitas dari Pesonanet."
        stats={[
          { num: "100", suffix: "%", label: "Technical Support" },
          { num: "Low", suffix: "", label: "Investment" },
          { num: "High", suffix: "", label: "Profit Margin" },
        ]}
      />

      {/* Keunggulan Menjadi Reseller */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-[32px] md:text-[45px] font-black text-[#001f4d] leading-tight mb-6">
                Mengapa Menjadi{" "}
                <span className="text-[#00AEEF]">Mitra Kami?</span>
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Kami menyediakan ekosistem bisnis internet yang siap pakai,
                mulai dari ketersediaan bandwidth hingga bantuan teknis di
                lapangan.
              </p>
              <div className="p-8 rounded-3xl bg-[#001f4d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/20 -mr-10 -mt-10 rotate-45" />
                <h4 className="text-xl font-bold mb-4 relative z-10">
                  Bantuan Legalitas
                </h4>
                <p className="text-white/60 text-sm mb-6 relative z-10">
                  Tidak perlu pusing dengan perizinan ISP. Anda bisa beroperasi
                  secara resmi di bawah naungan PT. Pesona Network Mediautama.
                </p>
                <div className="flex items-center gap-2 text-[#00AEEF] font-bold text-xs tracking-widest uppercase cursor-pointer group">
                  Daftar Sekarang{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Harga Khusus Reseller",
                    desc: "Dapatkan tarif bandwidth grosir untuk margin keuntungan yang lebih maksimal bagi bisnis Anda.",
                    icon: Coins,
                  },
                  {
                    title: "Panel Manajemen Mandiri",
                    desc: "Akses dashboard untuk memantau trafik, status pelanggan, dan manajemen tagihan secara real-time.",
                    icon: Cpu,
                  },
                  {
                    title: "Training & Edukasi",
                    desc: "Bimbingan teknis cara instalasi jaringan dan troubleshooting dari tim ahli Pesonanet.",
                    icon: Users,
                  },
                  {
                    title: "SLA Backbone Terjamin",
                    desc: "Kualitas internet dari pusat yang stabil memastikan kepuasan pelanggan akhir Anda tetap terjaga.",
                    icon: ShieldCheck,
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="p-8 rounded-[32px] border border-slate-100 bg-white hover:border-[#00AEEF]/20 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-[#0054A6]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#001f4d] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Khusus Reseller */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#0054A6] text-[10px] font-bold uppercase tracking-widest mb-6">
            <Handshake className="w-4 h-4" /> Limited Slot for Each Area
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#001f4d] mb-6">
            Mulai Bisnis ISP Anda Hari Ini!
          </h2>
          <p className="text-slate-500 mb-10">
            Jadilah bagian dari revolusi digital di Tangerang. Kami berikan
            semua *tools* yang Anda butuhkan untuk sukses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-[#00AEEF] text-white rounded-full font-bold shadow-lg shadow-[#00AEEF]/25 hover:scale-105 transition-all">
              Buka Kemitraan
            </button>
            <button className="px-10 py-4 bg-white text-[#001f4d] border border-slate-200 rounded-full font-bold hover:bg-slate-100 transition-all">
              Pelajari Prosedur
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
