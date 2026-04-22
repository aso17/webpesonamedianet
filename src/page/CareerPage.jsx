import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Construction, Mail, BellRing, SearchX } from "lucide-react";
import PageHeader from "../component/sections/PageHeader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function CareerPage() {
  useDocumentTitle("Karir - Bergabung dengan PT. Pesona Network Mediautama");

  return (
    <main className="min-h-screen bg-white">
      {/* Header dengan variant centered untuk kesan yang clean */}
      <PageHeader
        variant="centered"
        badge="Career Opportunities"
        title="Karir"
        titleAccent="Pesona"
        subtitle="Temukan kesempatan untuk bertumbuh dan berinovasi bersama tim profesional kami di industri telekomunikasi."
      />

      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-12 md:p-20 rounded-[40px] bg-slate-50 border border-dashed border-slate-300 relative overflow-hidden"
          >
            {/* Dekorasi Background */}
            <div className="absolute -top-10 -right-10 opacity-[0.03]">
              <Briefcase className="w-64 h-64 text-[#001f4d]" />
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8">
                <SearchX className="w-10 h-10 text-slate-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#001f4d] mb-4">
                Lowongan Belum Tersedia
              </h2>

              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed mb-10">
                Saat ini kami belum membuka posisi baru. Namun, kami selalu
                mencari talenta berbakat. Silakan kirimkan CV Anda untuk kami
                simpan di database kami.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:admin@pesonamedia.net"
                  className="flex items-center gap-2 px-8 py-4 bg-[#001f4d] text-white rounded-full font-bold hover:bg-[#003d8f] transition-all"
                >
                  <Mail className="w-4 h-4" /> Kirim CV (Database)
                </a>
                <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#0054A6] border border-[#0054A6]/20 rounded-full font-bold hover:bg-slate-100 transition-all">
                  <BellRing className="w-4 h-4" /> Beritahu Saya
                </button>
              </div>
            </div>
          </motion.div>

          {/* Info Tambahan */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6">
              <div className="text-[#00AEEF] font-bold text-xs uppercase tracking-widest mb-2">
                Budaya Kerja
              </div>
              <h4 className="font-bold text-[#001f4d] mb-2">
                Inovatif & Kolaboratif
              </h4>
              <p className="text-sm text-slate-500">
                Lingkungan kerja yang mendukung ide baru dan kerjasama tim yang
                solid.
              </p>
            </div>
            <div className="p-6">
              <div className="text-[#00AEEF] font-bold text-xs uppercase tracking-widest mb-2">
                Pengembangan
              </div>
              <h4 className="font-bold text-[#001f4d] mb-2">Growth Mindset</h4>
              <p className="text-sm text-slate-500">
                Kesempatan pelatihan dan peningkatan skill secara berkala.
              </p>
            </div>
            <div className="p-6">
              <div className="text-[#00AEEF] font-bold text-xs uppercase tracking-widest mb-2">
                Benefit
              </div>
              <h4 className="font-bold text-[#001f4d] mb-2">Kesejahteraan</h4>
              <p className="text-sm text-slate-500">
                Asuransi kesehatan dan berbagai tunjangan untuk kenyamanan
                bekerja.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
