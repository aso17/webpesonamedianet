import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Zap,
  ShieldCheck,
  Users,
  Search,
  Lightbulb,
} from "lucide-react";
import PageHeader from "../component/sections/PageHeader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export default function NilaiPerusahaanPage() {
  useDocumentTitle("Nilai Perusahaan");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: <Zap size={32} />,
      title: "Agility",
      desc: "Bergerak cepat dan adaptif dalam menghadapi perubahan teknologi jaringan demi kepuasan pelanggan.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Integrity",
      desc: "Menjunjung tinggi kejujuran dan transparansi dalam setiap layanan serta biaya yang kami berikan.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative",
      desc: "Membangun sinergi yang kuat antara tim teknisi dan pelanggan untuk solusi konektivitas terbaik.",
    },
    {
      icon: <Search size={32} />,
      title: "Focus",
      desc: "Berdedikasi penuh pada kestabilan jaringan dan detail kualitas instalasi di setiap titik.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovative",
      desc: "Selalu mengeksplorasi teknologi fiber optik terbaru untuk memberikan pengalaman internet masa depan.",
    },
    {
      icon: <Heart size={32} />,
      title: "Empathy",
      desc: "Mendengar dan menghargai pandangan pelanggan sebagai dasar pengembangan layanan kami.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Nilai Perusahaan"
        subtitle="Prinsip dasar yang menjadi jiwa dalam setiap layanan PT. Pesona Network Mediautama."
      />

      <section className="py-24 relative overflow-hidden">
        {/* BG Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0054A6]/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#0054A6] font-black tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Our Core Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Fondasi Hebat Untuk <br />
              <span className="text-[#00AEEF]">Layanan Terbaik.</span>
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#00AEEF]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,174,239,0.1)] overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0054A6]/[0.02] to-[#00AEEF]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#0054A6]/5 rounded-2xl flex items-center justify-center text-[#0054A6] group-hover:bg-[#0054A6] group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0054A6] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="w-10 h-1 bg-[#00AEEF] my-4 rounded-full group-hover:w-20 transition-all duration-500" />

                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Number */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-50 group-hover:text-[#00AEEF]/5 transition-colors duration-500 select-none">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION MINI */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#001f4d] rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#0054A6_0%,transparent_100%)] opacity-40" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4">
                Siap Merasakan Perbedaannya?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8 font-medium">
                Kami menerapkan nilai-nilai ini dalam setiap kabel yang kami
                pasang dan setiap bantuan yang kami berikan.
              </p>
              <button className="px-8 py-4 bg-[#00AEEF] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-[#00AEEF]/30">
                Hubungi Kami Sekarang
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
