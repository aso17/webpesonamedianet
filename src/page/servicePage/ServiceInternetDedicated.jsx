import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  Infinity,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function ServiceInternetDedicated() {
  useDocumentTitle("Internet Dedicated - Koneksi Bisnis Stabil");

  const features = [
    {
      icon: <Activity size={24} />,
      title: "Simetris 1:1",
      desc: "Kecepatan download dan upload yang sama besar untuk kelancaran video conference dan backup data.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "SLA 99.9%",
      desc: "Jaminan ketersediaan layanan tinggi dengan kompensasi jika terjadi downtime.",
    },
    {
      icon: <Zap size={24} />,
      title: "Low Latency",
      desc: "Rute jaringan terpendek untuk memastikan transmisi data real-time tanpa hambatan.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHeader
        variant="dark"
        title="Internet"
        titleAccent="Dedicated"
        badge="B2B Premium Solution"
        subtitle="Solusi konektivitas premium dengan bandwidth eksklusif tanpa bagi-bagi untuk kebutuhan bisnis kritikal."
      />
      {/* --- HERO DETAIL --- */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0054A6] font-black tracking-widest text-[10px] uppercase bg-[#0054A6]/5 px-4 py-2 rounded-full">
                Premium Enterprise Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-8 leading-tight">
                Bandwidth Murni <br />
                <span className="text-[#00AEEF]">Hanya Untuk Anda.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Berbeda dengan layanan broadband, Internet Dedicated Pesonanet
                memberikan jalur khusus yang tidak terbagi dengan pengguna lain.
                Sangat cocok untuk perusahaan yang bergantung penuh pada
                aplikasi cloud, server mandiri, dan VoIP.
              </p>

              <div className="space-y-4">
                {[
                  "Bandwidth Terjamin 100%",
                  "Monitoring Jaringan 24/7",
                  "Public IP Static Gratis",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  referrerPolicy="no-referrer"
                  alt="Server Room"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating Stat */}
              <div className="absolute -bottom-6 -left-6 bg-[#001f4d] p-8 rounded-3xl text-white shadow-xl z-20 hidden md:block border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-[#00AEEF]">
                    <BarChart3 size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      Performance
                    </p>
                    <p className="text-2xl font-black">Stable 1:1</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-[#00AEEF] transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0054A6]/5 flex items-center justify-center text-[#0054A6] mb-6 group-hover:bg-[#0054A6] group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#001f4d] to-[#0068c8] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Siap Meningkatkan Performa Bisnis?
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                Konsultasikan kebutuhan bandwidth perusahaan Anda dengan tim
                teknis kami dan dapatkan penawaran terbaik.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#00AEEF] hover:bg-[#7dd3f0] text-[#001f4d] font-black rounded-2xl transition-all flex items-center justify-center gap-2">
                  Hubungi Account Executive <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-black rounded-2xl transition-all">
                  Download Katalog
                </button>
              </div>
            </div>
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00AEEF]/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
