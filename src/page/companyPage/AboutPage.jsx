import {
  ShieldCheck,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Fingerprint,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { motion } from "framer-motion";
import { useDocumentTitle } from "../..//hooks/useDocumentTitle";
export default function AboutPage() {
  useDocumentTitle("Tentang Kami");
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
        variant="split"
        title="Tentang Kami"
        badge="Profil Perusahaan"
        subtitle="Mengenal lebih dekat PT. Pesona Network Mediautama dan komitmen kami untuk konektivitas Tangerang."
        stats={[
          { num: "5", suffix: "+", label: "Tahun Pengalaman" },
          { num: "99", suffix: "%", label: "Uptime Service" },
          { num: "24", suffix: "/7", label: "Support Teknis" },
        ]}
      />

      {/* HERO INTRO */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="lg:col-span-8" variants={itemVariants}>
              <span className="text-[#00AEEF] font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">
                ESTABLISHED 2021
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                Konektivitas <br />
                <span className="text-[#0054A6]">Tanpa Batas.</span>
              </h1>
            </motion.div>
            <motion.div
              className="lg:col-span-4 lg:pt-12"
              variants={itemVariants}
            >
              <p className="text-xl text-slate-500 leading-relaxed font-medium border-l-4 border-[#00AEEF] pl-8">
                Pesona Network Mediautama hadir sebagai katalisator digital,
                memberikan akses fiber optik premium yang dirancang untuk masa
                depan Tangerang.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW: IDENTITAS RESMI SECTION */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#001f4d] via-[#003d8f] to-[#0068c8] rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Dekorasi Cahaya */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7dd3f0]/10 rounded-full blur-[80px] -mr-32 -mt-32" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                  <Fingerprint size={16} className="text-[#7dd3f0]" />
                  <span className="text-[10px] font-black tracking-widest uppercase">
                    Profil Entitas Resmi
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Penyelenggara Jasa <br />
                  <span className="text-[#7dd3f0]">Akses Internet (ISP)</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 font-medium">
                  Kami bukan sekadar penyedia layanan; kami adalah pemegang
                  lisensi resmi yang berkomitmen penuh pada standar kualitas
                  telekomunikasi nasional Indonesia.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Nama Perusahaan
                  </p>
                  <p className="text-xl font-bold">
                    PT. PESONA NETWORK MEDIAUTAMA
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-[#7dd3f0] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Jenis Penyelenggaraan
                  </p>
                  <p className="text-xl font-bold italic">
                    Internet Service Provider (ISP)
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                  <p className="text-xs font-bold text-white/50 tracking-wider">
                    SKLO & NIB TERVERIFIKASI 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGY & VISION */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-10 left-10 text-[12rem] font-black text-slate-200/50 select-none pointer-events-none uppercase hidden lg:block">
          Vision
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-[6px] bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] rounded-[2.5rem] shadow-xl relative z-10">
                <div className="max-h-[450px] md:max-h-[550px] rounded-[2.2rem] overflow-hidden bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                    alt="Infrastructure"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#0054A6]/10 rounded-3xl -z-0" />

              <div className="absolute -bottom-6 -right-6 bg-[#001f4d] text-white p-7 rounded-2xl shadow-2xl max-w-[260px] hidden md:block z-20 border border-white/10 backdrop-blur-md">
                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                  "Infrastruktur fiber optik kami adalah investasi untuk
                  kemajuan ekonomi digital di Tangerang."
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#7dd3f0] font-bold text-[10px] uppercase tracking-widest">
                  Tech Excellence <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-xs font-black text-[#0054A6] tracking-[0.3em] uppercase mb-4">
                  Visi Kami
                </h2>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                  Menjadi tulang punggung digital yang memberdayakan masyarakat
                  melalui teknologi fiber optik.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldCheck size={26} />,
                    title: "Integritas Layanan",
                    desc: "Menjadikan kepuasan dan kepercayaan pelanggan sebagai standar tertinggi operasi kami.",
                  },
                  {
                    icon: <Lightbulb size={26} />,
                    title: "Inovasi Tanpa Henti",
                    desc: "Selalu terdepan dalam mengadopsi teknologi jaringan terbaru untuk performa maksimal.",
                  },
                ].map((misi, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-6 group p-6 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 shrink-0 bg-[#0054A6]/5 rounded-2xl flex items-center justify-center text-[#0054A6] group-hover:bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] group-hover:text-white transition-all duration-500">
                      {misi.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        {misi.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {misi.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
          <span className="text-[#0054A6] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Our Values
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Mengapa <span className="text-[#0054A6]">Pesona Network?</span>
          </h2>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            {
              title: "Fiber Optik",
              desc: "Infrastruktur modern yang menjamin stabilitas kecepatan tinggi secara konsisten.",
            },
            {
              title: "Teknisi Ahli",
              desc: "Tim profesional bersertifikasi yang siap merespon setiap kebutuhan teknis Anda.",
            },
            {
              title: "Kearifan Lokal",
              desc: "Pemahaman mendalam terhadap lanskap dan kebutuhan masyarakat Tangerang.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-[2px] rounded-[2.5rem] bg-transparent hover:bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] transition-all duration-500 overflow-hidden"
            >
              <div className="bg-white p-12 rounded-[2.4rem] h-full transition-colors duration-500">
                <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-50 group-hover:text-[#0054A6]/5 transition-colors duration-500">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-1.5 bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] mb-8 rounded-full group-hover:w-20 transition-all duration-500" />
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
