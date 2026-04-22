import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Globe,
  Users,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Wifi,
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

export default function ServiceBusiness() {
  useDocumentTitle("Internet Bisnis - Koneksi Cepat untuk UMKM & Office");

  return (
    <main className="min-h-screen bg-white">
      {/* Variant "split" sangat bagus untuk menunjukkan angka-angka kunci 
          seperti Rasio bandwidth atau dukungan IP Static.
      */}
      <PageHeader
        variant="split"
        badge="Business Connectivity"
        title="Internet Bisnis"
        subtitle="Solusi internet super cepat dan stabil yang dirancang khusus untuk mendukung operasional harian kantor, café, hingga UMKM di Indonesia"
        stats={[
          { num: "100", suffix: "Mbps", label: "Up To Speed" },
          { num: "1:2", suffix: "", label: "Bandwidth Ratio" },
          { num: "FREE", suffix: "", label: "Static IP Option" },
        ]}
      />

      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Branding Image/Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-[32px] bg-gradient-to-br from-[#0054A6] to-[#00AEEF] overflow-hidden relative shadow-2xl">
                {/* Dekorasi Geometris internal */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wifi className="w-32 h-32 text-white/20 animate-pulse" />
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Uptime
                    </p>
                    <p className="text-xl font-black text-[#001f4d]">99.9%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-[32px] md:text-[40px] font-black text-[#001f4d] leading-tight mb-6">
                Kenapa Bisnis Anda Butuh{" "}
                <span className="text-[#00AEEF]">Pesonanet?</span>
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Kami memahami bahwa setiap detik koneksi yang terputus adalah
                kerugian bagi bisnis Anda. Internet Bisnis kami hadir dengan
                skalabilitas tinggi sesuai kebutuhan tim Anda.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Prioritas Trafik Data",
                    desc: "Trafik bisnis diprioritaskan untuk aplikasi kritikal seperti Zoom, Cloud, dan Email.",
                    icon: Zap,
                  },
                  {
                    title: "Dukungan Teknis Cepat",
                    desc: "Layanan pelanggan prioritas dengan response time di bawah 4 jam.",
                    icon: Briefcase,
                  },
                  {
                    title: "Tanpa FUP (Fair Usage Policy)",
                    desc: "Gunakan internet sepuasnya tanpa takut kecepatan menurun di tengah bulan.",
                    icon: ShieldCheck,
                  },
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={item} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#0054A6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001f4d] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing/Action Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#001f4d] mb-4">
              Mulai Berlangganan Hari Ini
            </h3>
            <p className="text-slate-500 mb-8">
              Pilih paket yang paling sesuai dengan jumlah perangkat dan
              kebutuhan kantor Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-[#0054A6] text-white rounded-full font-bold shadow-lg shadow-[#0054A6]/20 hover:bg-[#003d8f] transition-all">
                Lihat Daftar Harga
              </button>
              <button className="px-8 py-4 bg-white text-[#0054A6] border border-[#0054A6]/20 rounded-full font-bold hover:bg-slate-50 transition-all">
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
