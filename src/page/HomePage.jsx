import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Shield,
  Headphones,
  ArrowRight,
  BarChart3,
  Wifi as WifiIcon,
  Server as ServerIcon,
  Briefcase as BriefcaseIcon,
  Building2 as Building2Icon,
  Users as UsersIcon,
  Zap as ZapIcon,
  ArrowUpRight,
} from "lucide-react";
import HeroBanner from "../component/sections/HeroBanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export default function HomePage() {
  useDocumentTitle("Home");
  const pesonaGradient = {
    background: "linear-gradient(135deg, #003d8f 0%, #0068c8 100%)",
  };

  return (
    <main className="bg-white">
      <HeroBanner />

      {/* --- SECTION 1: CORE VALUES (The "Why") --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap size={32} />,
                title: "Ultra-Fast Speed",
                desc: "Teknologi GPON terbaru memastikan koneksi stabil dengan latency rendah untuk gaming & streaming.",
              },
              {
                icon: <Shield size={32} />,
                title: "Unlimited Freedom",
                desc: "Nikmati internet tanpa batasan kuota (FUP). Gunakan sepuasnya kapanpun Anda mau.",
              },
              {
                icon: <Headphones size={32} />,
                title: "Local Support",
                desc: "Tim teknisi kami berdomisili di Tangerang, memastikan respon cepat jika terjadi kendala.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 rounded-[2.5rem] bg-slate-50 lg:bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-[#0054A6]/10 transition-all duration-500 border border-slate-200 lg:border-transparent hover:border-slate-100"
              >
                {/* Ikon berubah jadi hijau (#22c55e) saat card di-hover */}
                <div className="w-16 h-16 bg-[#0054A6]/5 rounded-2xl flex items-center justify-center text-[#0054A6] mb-6 group-hover:scale-110 group-hover:bg-green-50 group-hover:text-[#22c55e] transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0054A6] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- SECTION 2: INTEGRATED SERVICES (The "What") --- */}
      <section className="pt-12 pb-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#0054A6] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
            >
              Enterprise Solutions
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Layanan <span className="text-[#00AEEF]">Terintegrasi.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Internet Dedicated",
                href: "/layanan/internet-dedicated",
                icon: <WifiIcon size={28} />,
                desc: "Koneksi eksklusif dengan jaminan SLA tinggi.",
                color: "#0054A6",
              },
              {
                label: "Manage Service",
                href: "/layanan/manage-service",
                icon: <ServerIcon size={28} />,
                desc: "Pengelolaan infrastruktur jaringan oleh tim ahli.",
                color: "#00AEEF",
              },
              {
                label: "Bisnis",
                href: "/layanan/bisnis",
                icon: <BriefcaseIcon size={28} />,
                desc: "Solusi internet fleksibel untuk pertumbuhan UMKM.",
                color: "#0054A6",
              },
              {
                label: "Perkantoran",
                href: "/layanan/perkantoran",
                icon: <Building2Icon size={28} />,
                desc: "Infrastruktur stabil untuk korporasi skala besar.",
                color: "#00AEEF",
              },
              {
                label: "Reseller",
                href: "/layanan/reseller",
                icon: <UsersIcon size={28} />,
                desc: "Program kemitraan strategis infrastruktur.",
                color: "#0054A6",
              },
              {
                label: "Broadband",
                href: "/layanan/broadband",
                icon: <ZapIcon size={28} />,
                desc: "Internet super cepat untuk rumah dan usaha.",
                color: "#00AEEF",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-[1px] rounded-[2rem] overflow-hidden bg-slate-200 lg:bg-slate-100 hover:bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] transition-all duration-500 cursor-pointer shadow-sm lg:shadow-none"
              >
                {/* Link membungkus seluruh area kartu */}
                <Link to={service.href} className="block h-full">
                  <div className="bg-white p-8 rounded-[1.9rem] h-full flex flex-col justify-between relative z-10">
                    <div>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: `${service.color}10`,
                          color: service.color,
                        }}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#0054A6] transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-[#00AEEF] transition-colors">
                        Explore Detail
                      </span>
                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#001f4d] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- SECTION 3: TRUST STATS (The "Proof") --- */}
      <section
        className="py-20 relative overflow-hidden"
        style={pesonaGradient}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Clients", value: "1,500+" },
              { label: "Coverage Areas", value: "25+" },
              { label: "Uptime Rate", value: "99.9%" },
              { label: "Technical Staff", value: "50+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 uppercase tracking-[0.2em] text-[10px] font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PACKAGES (The "Action") --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0054A6] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              Pricing Plans
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Pilih Paket{" "}
              <span className="text-[#00AEEF]">Kebutuhan Anda.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white shadow-xl border border-slate-100 relative overflow-hidden"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                Home Fiber
              </h3>
              <p className="text-slate-500 font-medium mb-8">
                Sempurna untuk keluarga dan hiburan rumah.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "100 Mbps Speed",
                  "Unlimited (No FUP)",
                  "Free Instalasi",
                  "24/7 Support",
                ].map((list, x) => (
                  <li
                    key={x}
                    className="flex items-center gap-3 font-bold text-slate-700 text-sm"
                  >
                    <CheckCircle2 size={18} className="text-[#00AEEF]" /> {list}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#0054A6] text-white font-black rounded-2xl hover:bg-[#001f4d] transition-colors">
                Pilih Paket Home
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
              style={pesonaGradient}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-2">Business Pro</h3>
                <p className="text-white/80 font-medium mb-8">
                  Koneksi dedicated untuk performa bisnis maksimal.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Dedicated 1:1",
                    "SLA 99.9%",
                    "IP Static Public",
                    "Priority Support",
                  ].map((list, x) => (
                    <li
                      key={x}
                      className="flex items-center gap-3 font-bold text-white text-sm"
                    >
                      <CheckCircle2 size={18} className="text-white/50" />{" "}
                      {list}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-[#001f4d] text-white font-black rounded-2xl hover:scale-[1.02] transition-all">
                  Pilih Paket Bisnis
                </button>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
