import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale, Award, CheckCircle } from "lucide-react";
import PageHeader from "../component/sections/PageHeader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function LegalitasPage() {
  useDocumentTitle("Izin & Legalitas Resmi");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const dokumenLegal = [
    {
      title: "SKLO (Surat Keterangan Laik Operasi)",
      subtitle: "No: 117/TEL.04.02/2026 - Layanan ISP Resmi",
    },
    {
      title: "NIB (Nomor Induk Berusaha)",
      subtitle: "No: 1010250029603 - Berbasis Risiko (OSS RBA)",
    },
    {
      title: "KBLI 61921",
      subtitle: "Penyelenggara Jasa Akses Internet (ISP)",
    },
    {
      title: "Akta Pendirian Perusahaan",
      subtitle: "PT. Pesona Network Mediautama",
    },
    {
      title: "Sertifikasi Perangkat",
      subtitle: "Standarisasi alat transmisi data Kominfo",
    },
    {
      title: "Komitmen Kualitas Layanan",
      subtitle: "Sesuai regulasi & SLA telekomunikasi Indonesia",
    },
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Legalitas"
        subtitle="Aspek hukum dan perizinan resmi PT. Pesona Network Mediautama sebagai penyelenggara layanan internet terpercaya."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* SISI KIRI: Pesan Keamanan */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#0054A6]/10 rounded-2xl flex items-center justify-center text-[#0054A6] mb-6">
                  <Scale size={32} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
                  Operasional yang <br />
                  <span className="text-[#0054A6]">Sah & Terlindungi.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  Kami beroperasi secara resmi di bawah naungan Kementerian
                  Komunikasi dan Digital RI. Transparansi legalitas adalah
                  komitmen kami untuk memberikan rasa aman kepada seluruh mitra
                  dan pelanggan.
                </p>

                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-[#00AEEF]" size={20} />{" "}
                      Terverifikasi ULO 2026
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Layanan ISP kami telah dinyatakan lulus Uji Laik Operasi
                      (ULO) sesuai Berita Acara Evaluasi tanggal 13 Maret 2026.
                    </p>
                  </div>
                  <Award
                    size={100}
                    className="absolute -right-8 -bottom-8 text-slate-200/50 -rotate-12"
                  />
                </div>
              </motion.div>
            </div>

            {/* SISI KANAN: Daftar Dokumen */}
            <div className="lg:col-span-7">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {dokumenLegal.map((doc, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#00AEEF]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#00AEEF]/10 group-hover:text-[#00AEEF] transition-colors">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-none mb-1">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {doc.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle size={24} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* LICENSE DETAIL CARDS */}
      {/* LICENSE DETAIL CARDS */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CARD 1: SKLO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group p-[2px] rounded-[2.5rem] bg-[linear-gradient(135deg,#7dd3f0_0%,#00AEEF_100%)] shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-br from-[#001f4d] via-[#003d8f] to-[#0068c8] p-10 rounded-[2.4rem] h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                      <ShieldCheck className="text-[#7dd3f0]" size={32} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
                      Kemenkominfo RI
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-widest mb-1">
                        Nama Dokumen
                      </p>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        Surat Keterangan Laik Operasi (SKLO) <br />{" "}
                        Penyelenggaraan Jasa Akses Internet
                      </h3>
                    </div>

                    <div>
                      <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-widest mb-1">
                        Nomor SKLO
                      </p>
                      <p className="text-2xl font-black text-white tracking-tighter">
                        117/TEL.04.02/2026
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-[9px] text-white/30 font-medium">
                      PT. PESONA NETWORK MEDIAUTAMA
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">
                        Status: Aktif
                      </span>
                      <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-500" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: NIB (Sekarang SAMA dengan Card 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group p-[2px] rounded-[2.5rem] bg-[linear-gradient(135deg,#7dd3f0_0%,#00AEEF_100%)] shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-br from-[#001f4d] via-[#003d8f] to-[#0068c8] p-10 rounded-[2.4rem] h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                      <FileText className="text-[#7dd3f0]" size={32} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
                      OSS-RBA Verified
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-widest mb-1">
                        Nomor Induk Berusaha (NIB)
                      </p>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        1010250029603
                      </h3>
                    </div>

                    <div>
                      <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-widest mb-1">
                        Klasifikasi Usaha (KBLI)
                      </p>
                      <p className="text-2xl font-black text-white tracking-tighter">
                        61921 (ISP)
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-[9px] text-white/30 font-medium">
                      PT. PESONA NETWORK MEDIAUTAMA
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">
                        Terverifikasi
                      </span>
                      <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-500" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FOOTER ACCENT */}
      <section className="py-12 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8">
            Berlisensi Dari
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-black text-xl text-slate-900 italic tracking-tighter">
              KOMINFO
            </div>
            <div className="font-black text-xl text-slate-900 italic tracking-tighter">
              KEMENKUMHAM
            </div>
            <div className="font-black text-xl text-slate-900 italic tracking-tighter">
              OSS RBA
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
