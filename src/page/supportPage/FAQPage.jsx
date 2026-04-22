import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  HelpCircle,
  Plus,
  Minus,
  LayoutGrid,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const FAQ_DATA = {
  MSP: [
    {
      q: "Apa itu MSP?",
      a: "Penyedia layanan terkelola (MSP) memberikan layanan seperti jaringan, aplikasi, infrastruktur, dan keamanan. Melalui dukungan MSP, bisnis dapat memberikan layanan asli mereka bersama dengan layanan penyedia lain secara efisien.",
    },
    {
      q: "Mengapa bisnis membutuhkan MSP?",
      a: "Untuk memastikan infrastruktur IT tetap optimal 24/7 tanpa harus merekrut tim IT internal yang besar.",
    },
  ],
  "Data Center": [
    {
      q: "Apa layanan Data Center Pesonanet?",
      a: "Kami menyediakan colocation, penyewaan rak, dan pengelolaan server di lingkungan yang aman dan terkendali suhu serta power-nya.",
    },
  ],
  Domain: [
    {
      q: "Bagaimana cara pendaftaran domain?",
      a: "Proses pendaftaran domain bisa dilakukan melalui tim support kami dengan melampirkan identitas resmi perusahaan.",
    },
  ],
  "Fiber Optik": [
    {
      q: "Apa keunggulan Fiber Optik?",
      a: "Transmisi data lebih cepat, stabil terhadap gangguan elektromagnetik, dan memiliki bandwidth yang sangat besar.",
    },
  ],
  "SD WAN": [
    {
      q: "Apa itu SD WAN?",
      a: "Teknologi jaringan yang menggunakan software untuk mengelola konektivitas antara kantor cabang dan pusat secara cerdas.",
    },
  ],
  // Tambahkan kategori lainnya sesuai kebutuhan (IPLC, Metro Ethernet, dll)
};

export default function FAQPage() {
  useDocumentTitle("Q&A - Pusat Bantuan Pesonanet");
  const [activeCategory, setActiveCategory] = useState("MSP");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        variant="centered"
        badge="Help Center"
        title="Pertanyaan"
        titleAccent="Populer"
        subtitle="Pilih kategori layanan di bawah untuk menemukan jawaban teknis yang Anda butuhkan."
      />

      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* SIDEBAR NAVIGATION (LEFT) */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            <div className="mb-4 px-2">
              <h3 className="text-sm font-black text-[#001f4d] uppercase tracking-widest flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-[#00AEEF]" /> Kategori
                Layanan
              </h3>
            </div>
            {Object.keys(FAQ_DATA).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0); // Reset accordion saat pindah kategori
                }}
                className={`flex items-center justify-between p-5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/25 translate-x-2"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeCategory === cat ? "rotate-90" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* FAQ DETAIL CONTENT (RIGHT) */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#001f4d] mb-2">
                Pertanyaan Yang Sering Diajukan Untuk{" "}
                <span className="text-[#00AEEF]">{activeCategory}</span>
              </h2>
              <div className="h-1.5 w-20 bg-[#00AEEF] rounded-full" />
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {FAQ_DATA[activeCategory].map((item, idx) => (
                    <div
                      key={idx}
                      className={`mb-4 border rounded-[24px] overflow-hidden transition-all duration-300 ${
                        openIndex === idx
                          ? "border-[#00AEEF]/30 bg-[#EEF5FF]/30"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === idx ? -1 : idx)
                        }
                        className="w-full p-6 text-left flex items-center justify-between"
                      >
                        <span
                          className={`font-bold transition-colors ${
                            openIndex === idx
                              ? "text-[#0054A6]"
                              : "text-[#001f4d]"
                          }`}
                        >
                          {item.q}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            openIndex === idx
                              ? "bg-[#00AEEF] text-white rotate-180"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {openIndex === idx ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-[#00AEEF]/10 mt-2">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
