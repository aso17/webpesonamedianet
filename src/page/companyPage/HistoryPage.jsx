import React from "react";
import { motion } from "framer-motion";
import { History, Award, Users, ShieldCheck } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
export default function HistoryPage() {
  useDocumentTitle("Sejarah");
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
      {/* HEADER HALAMAN */}
      <PageHeader
        variant="dark"
        title="Sejarah"
        titleAccent="Perusahaan"
        badge="Milestone"
        subtitle="Perjalanan Pesona Network Mediautama dalam menghadirkan konektivitas fiber optik sejak tahun 2021 hingga menjadi pilihan utama."
      />

      {/* CONTENT SEJARAH */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-2 bg-[linear-gradient(135deg,#0054A6_0%,#00AEEF_100%)] rounded-[3rem] shadow-2xl">
                <div className="rounded-[2.8rem] overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Network Infrastructure"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
              {/* Badge 2021 */}
              <div className="absolute -bottom-6 -right-6 bg-[#001f4d] text-white p-8 rounded-[2rem] shadow-xl border-4 border-white">
                <p className="text-sm font-bold tracking-widest text-[#00AEEF] uppercase">
                  Since
                </p>
                <p className="text-4xl font-black italic">2021</p>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div variants={itemVariants}>
                <span className="text-[#0054A6] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                  Established & Growth
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                  Dedikasi untuk <br />
                  <span className="text-[#00AEEF]">Tangerang Raya.</span>
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium"
              >
                <p>
                  <span className="text-[#0054A6] font-bold">
                    Pesona Network Mediautama
                  </span>{" "}
                  didirikan sejak tahun 2021 untuk memberikan akses internet
                  berkualitas dan terjangkau di wilayah Tangerang dan
                  sekitarnya.
                </p>
                <p>
                  Mengutamakan kenyamanan pengguna dengan infrastruktur{" "}
                  <span className="text-slate-900 font-semibold italic">
                    fiber optik
                  </span>{" "}
                  yang memadai dan tim teknisi berpengalaman, membuat Pesona
                  Network Mediautama menjadi pilihan utama dalam layanan
                  internet masyarakat.
                </p>
              </motion.div>

              {/* Stats/Icons */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0054A6]/5 rounded-xl flex items-center justify-center text-[#0054A6]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Kualitas Terjamin
                    </h4>
                    <p className="text-sm text-slate-500">
                      Infrastruktur Premium
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#00AEEF]/5 rounded-xl flex items-center justify-center text-[#00AEEF]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Pilihan Utama</h4>
                    <p className="text-sm text-slate-500">Layanan Terpercaya</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[18rem] font-black text-slate-50 select-none pointer-events-none uppercase -z-10 opacity-40">
          History
        </div>
      </section>
    </main>
  );
}
