import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Tv,
  Gamepad2,
  Infinity,
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  MonitorPlay,
  Heart,
  Zap,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceBroadband() {
  useDocumentTitle("Internet Broadband Rumah - Hiburan Tanpa Batas");

  return (
    <main className="min-h-screen bg-white">
      {/* Variant "centered" sangat cocok untuk segmen retail/home user 
          karena terlihat lebih "inviting" dan tidak terlalu kaku.
      */}
      <PageHeader
        variant="centered"
        badge="Home Internet Solution"
        title="Broadband"
        titleAccent="Unlimited"
        subtitle="Rasakan kebebasan berinternet di rumah dengan kecepatan tinggi, tanpa kuota (FUP), dan stabil untuk seluruh anggota keluarga."
        tags={["Streaming", "Gaming", "Work from Home"]}
      />

      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1: Streaming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#00AEEF]/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MonitorPlay className="w-8 h-8 text-[#00AEEF]" />
              </div>
              <h3 className="text-2xl font-black text-[#001f4d] mb-4 text-balance">
                Streaming Kualitas 4K
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Nikmati film dan serial favorit Anda tanpa buffering. Koneksi
                stabil menjamin kualitas visual terbaik setiap saat.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#0054A6] uppercase tracking-wider">
                Ultra Low Latency <Heart className="w-3 h-3 fill-current" />
              </div>
            </motion.div>

            {/* Feature 2: Gaming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-10 rounded-[40px] bg-[#001f4d] text-white hover:shadow-2xl hover:shadow-[#001f4d]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <Gamepad2 className="w-8 h-8 text-[#00AEEF]" />
              </div>
              <h3 className="text-2xl font-black mb-4">
                Lancar Main Game Online
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Ping rendah dan stabil adalah kunci kemenangan. Pesonanet
                memberikan jalur khusus untuk pengalaman gaming terbaik.
              </p>
              <ul className="space-y-3">
                {["Lag-Free Experience", "Fast Update Downloads"].map(
                  (list) => (
                    <li
                      key={list}
                      className="flex items-center gap-2 text-xs font-medium text-white/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> {list}
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Feature 3: Unlimited */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#00AEEF]/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Infinity className="w-8 h-8 text-[#00AEEF]" />
              </div>
              <h3 className="text-2xl font-black text-[#001f4d] mb-4">
                Benar-Benar Tanpa Kuota
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Tidak ada FUP, tidak ada penurunan kecepatan mendadak. Gunakan
                internet sepuasnya 24 jam penuh tanpa rasa khawatir.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#0054A6] uppercase tracking-wider">
                True Unlimited Data <Zap className="w-3 h-3 fill-current" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Selection CTA */}
      <section className="pb-24 px-5">
        <div className="max-w-4xl mx-auto rounded-[50px] bg-gradient-to-br from-[#EEF5FF] to-white border border-[#0054A6]/10 p-12 text-center">
          <Wifi className="w-12 h-12 text-[#0054A6] mx-auto mb-6" />
          <h2 className="text-3xl font-black text-[#001f4d] mb-4">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto">
            Mulai dari paket pelajar hingga paket keluarga besar, kami punya
            solusi yang pas untuk kantong Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#0054A6] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#003d8f] transition-all group">
              <ShoppingBag className="w-5 h-5" /> Lihat Paket Harga
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#001f4d] border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              Hubungi Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
