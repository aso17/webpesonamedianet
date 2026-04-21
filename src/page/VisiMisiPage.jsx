import React from "react";
import { motion } from "framer-motion";
// ShieldCheck sudah ditambahkan di sini
import { ShieldCheck, Target, Rocket, Eye, CheckCircle2 } from "lucide-react";
import PageHeader from "../component/sections/PageHeader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export default function VisiMisiPage() {
  useDocumentTitle("Visi & Misi");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 1, 0.2, 1] },
    },
  };

  return (
    <main className="bg-white">
      <PageHeader
        title="Visi & Misi"
        subtitle="Komitmen PT. Pesona Network Mediautama dalam membangun masa depan digital yang inklusif."
      />

      {/* SECTION VISI */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-[#0054A6]/5 rounded-3xl flex items-center justify-center text-[#0054A6] mb-8"
            >
              <Target size={40} />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#00AEEF] font-black tracking-[0.4em] uppercase text-xs mb-4"
            >
              Our Vision
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter max-w-4xl leading-[1.1]"
            >
              Menjadi <span className="text-[#0054A6]">Pilar Utama</span>{" "}
              Transformasi Digital di Tangerang Raya.
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              className="h-2 bg-[#00AEEF] mt-10 rounded-full"
            />
          </div>
        </div>

        <div className="absolute -bottom-10 right-0 text-[15rem] font-black text-slate-50 select-none pointer-events-none uppercase -z-10">
          Vision
        </div>
      </section>

      {/* SECTION MISI */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#0054A6] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                MISSION STATEMENT
              </span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">
                Langkah Nyata Kami Untuk{" "}
                <span className="text-[#00AEEF]">Pesona Network.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Kami tidak hanya membangun jaringan, kami membangun jembatan
                peluang bagi bisnis dan keluarga di Tangerang.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  "Inovasi Berkelanjutan",
                  "Integritas Tanpa Kompromi",
                  "Fokus pada Pelanggan",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-bold"
                  >
                    <CheckCircle2 size={20} className="text-[#00AEEF]" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Infrastruktur Unggul",
                  desc: "Mengembangkan infrastruktur fiber optik yang stabil, cepat, dan handal hingga ke pelosok daerah.",
                  icon: <Rocket className="text-white" />,
                },
                {
                  title: "Edukasi Digital",
                  desc: "Mendorong literasi digital bagi masyarakat setempat agar siap menghadapi ekonomi masa depan.",
                  icon: <Eye className="text-white" />,
                },
                {
                  title: "Layanan 24/7",
                  desc: "Memberikan dukungan teknis yang responsif dan solutif demi kenyamanan pelanggan.",
                  icon: <ShieldCheck className="text-white" />,
                },
              ].map((misi, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 bg-[#0054A6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0054A6]/20">
                      {misi.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">
                        {misi.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {misi.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
