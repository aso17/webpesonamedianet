import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Plus,
  Minus,
  Search,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  Wifi,
  Globe,
  Server,
  Shield,
  Network,
  BarChart3,
} from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// ── Data FAQ ─────────────────────────────────────────────────────────────────
const FAQ_DATA = {
  MSP: {
    icon: Layers,
    color: "#00AEEF",
    description: "Managed Service Provider — Layanan pengelolaan IT terpadu",
    items: [
      {
        q: "Apa itu Managed Service Provider (MSP)?",
        a: "MSP memberikan layanan pengelolaan jaringan, aplikasi, infrastruktur, dan keamanan secara proaktif. Bisnis Anda dapat fokus pada core business sementara kami memastikan sistem IT berjalan optimal 24/7 tanpa gangguan.",
        tag: "Umum",
      },
      {
        q: "Mengapa bisnis membutuhkan layanan MSP?",
        a: "MSP memungkinkan bisnis mendapatkan akses ke tim ahli IT tanpa biaya rekrutmen dan pelatihan internal. Anda mendapatkan monitoring proaktif, respons insiden cepat, dan skalabilitas layanan sesuai pertumbuhan bisnis.",
        tag: "Manfaat",
      },
      {
        q: "Berapa lama kontrak minimum layanan MSP?",
        a: "Kami menawarkan kontrak mulai dari 12 bulan dengan opsi perpanjangan fleksibel. Tersedia juga paket bulanan untuk kebutuhan jangka pendek dengan harga yang kompetitif.",
        tag: "Kontrak",
      },
      {
        q: "Apakah MSP tersedia di luar jam kerja?",
        a: "Ya, tim NOC (Network Operations Center) kami beroperasi 24 jam sehari, 7 hari seminggu, 365 hari setahun. Setiap insiden akan ditangani dengan SLA response time yang telah disepakati.",
        tag: "SLA",
      },
    ],
  },
  "Fiber Optik": {
    icon: Wifi,
    color: "#0054A6",
    description: "Koneksi internet ultra-cepat berbasis serat optik",
    items: [
      {
        q: "Apa keunggulan Fiber Optik dibanding koneksi lain?",
        a: "Fiber optik menawarkan kecepatan transmisi hingga 10 Gbps, latensi sangat rendah (<5ms), imun terhadap interferensi elektromagnetik, dan stabilitas koneksi jauh lebih tinggi dibanding copper atau wireless.",
        tag: "Teknis",
      },
      {
        q: "Berapa lama proses instalasi Fiber Optik?",
        a: "Proses survei dan instalasi umumnya memakan waktu 7–14 hari kerja tergantung lokasi dan kondisi infrastruktur existing. Tim lapangan kami akan memberikan estimasi akurat setelah survei awal.",
        tag: "Instalasi",
      },
      {
        q: "Apakah tersedia garansi uptime untuk Fiber Optik?",
        a: "Layanan Fiber Dedicated kami dilengkapi SLA uptime 99,9% yang tertuang dalam perjanjian kontrak. Jika uptime di bawah SLA, akan ada kompensasi sesuai ketentuan yang berlaku.",
        tag: "SLA",
      },
    ],
  },
  "SD-WAN": {
    icon: Network,
    color: "#0891B2",
    description: "Software-Defined WAN untuk manajemen jaringan cerdas",
    items: [
      {
        q: "Apa itu SD-WAN dan bagaimana cara kerjanya?",
        a: "SD-WAN menggunakan software untuk mengelola dan mengoptimalkan konektivitas WAN secara dinamis. Sistem secara otomatis memilih jalur terbaik berdasarkan kondisi jaringan real-time, meningkatkan performa aplikasi sekaligus mengurangi biaya.",
        tag: "Teknis",
      },
      {
        q: "Apakah SD-WAN bisa dikombinasikan dengan jaringan existing?",
        a: "Ya, SD-WAN bersifat agnostik terhadap media transport. Dapat dikombinasikan dengan MPLS, fiber, broadband, atau LTE sebagai backup. Migrasi bertahap pun memungkinkan tanpa downtime signifikan.",
        tag: "Integrasi",
      },
      {
        q: "Apa manfaat SD-WAN untuk perusahaan multi-cabang?",
        a: "SD-WAN sangat ideal untuk perusahaan dengan banyak lokasi karena sentralisasi manajemen, visibilitas end-to-end, Quality of Service (QoS) otomatis per aplikasi, dan enkripsi end-to-end antar cabang.",
        tag: "Multi-cabang",
      },
    ],
  },
  "Data Center": {
    icon: Server,
    color: "#7C3AED",
    description: "Fasilitas colocation dan hosting server kelas enterprise",
    items: [
      {
        q: "Apa saja layanan Data Center yang tersedia?",
        a: "Kami menyediakan layanan colocation (penyewaan rack/cage), dedicated server, cloud private, dan managed hosting. Semua dilengkapi dengan power redundancy N+1, cooling precision, dan physical security 24/7.",
        tag: "Layanan",
      },
      {
        q: "Berapa kapasitas dan tier Data Center Pesonanet?",
        a: "Fasilitas kami beroperasi pada standar Tier III dengan availabilitas 99.98%. Dilengkapi dual power feed, UPS, genset, dan sistem cooling yang termonitor secara real-time.",
        tag: "Spesifikasi",
      },
      {
        q: "Apakah ada akses fisik ke server saya?",
        a: "Ya, pelanggan dapat mengakses server secara fisik dengan jadwal yang telah disetujui, menggunakan sistem access control biometric dan escorted access untuk keamanan optimal.",
        tag: "Akses",
      },
    ],
  },
  "IP Transit": {
    icon: Globe,
    color: "#059669",
    description: "Konektivitas internet global dengan BGP routing",
    items: [
      {
        q: "Apa itu IP Transit?",
        a: "IP Transit adalah layanan konektivitas yang memungkinkan jaringan Anda terhubung ke internet global melalui upstream provider. Pesonanet memiliki koneksi langsung ke berbagai Tier-1 carrier untuk memastikan routing optimal.",
        tag: "Umum",
      },
      {
        q: "Apakah Pesonanet menyediakan BGP peering?",
        a: "Ya, kami memiliki ASN sendiri dan aktif melakukan BGP peering di IIX, SGIX, dan beberapa internet exchange regional. Pelanggan IP Transit dapat memanfaatkan routing policy yang optimal.",
        tag: "Teknis",
      },
    ],
  },
  RPKI: {
    icon: Shield,
    color: "#DC2626",
    description: "Resource Public Key Infrastructure untuk keamanan routing",
    items: [
      {
        q: "Apa itu RPKI dan mengapa penting?",
        a: "RPKI adalah framework keamanan yang memvalidasi kepemilikan prefix IP menggunakan kriptografi. Ini mencegah BGP hijacking dan route leak yang dapat menyebabkan traffic misdirection atau serangan siber.",
        tag: "Keamanan",
      },
      {
        q: "Apakah Pesonanet sudah menerapkan RPKI?",
        a: "Ya, seluruh prefix IP Pesonanet telah di-sign dengan ROA (Route Origin Authorization) yang valid. Kami juga melakukan RPKI validation (ROV) untuk semua prefix yang kami terima dari peer dan upstream.",
        tag: "Implementasi",
      },
      {
        q: "Bagaimana cara memeriksa status RPKI prefix saya?",
        a: "Anda dapat menggunakan tool RPKI Validator yang tersedia di menu Dukungan kami, atau mengakses validator publik seperti rpki.cloudflare.com. Tim NOC kami siap membantu proses signing ROA untuk prefix Anda.",
        tag: "Tools",
      },
    ],
  },
  MRTG: {
    icon: BarChart3,
    color: "#D97706",
    description: "Multi Router Traffic Grapher untuk monitoring bandwidth",
    items: [
      {
        q: "Apa itu MRTG dan apa kegunaannya?",
        a: "MRTG (Multi Router Traffic Grapher) adalah tool monitoring yang menampilkan grafik penggunaan bandwidth secara real-time dan historis. Sangat berguna untuk capacity planning dan troubleshooting performa jaringan.",
        tag: "Umum",
      },
      {
        q: "Bagaimana cara mengakses MRTG Pesonanet?",
        a: "Pelanggan dapat mengakses dashboard MRTG melalui portal pelanggan dengan kredensial yang diberikan saat onboarding. Grafik tersedia dalam interval 5 menit, harian, mingguan, dan bulanan.",
        tag: "Akses",
      },
    ],
  },
};

// ── Komponen Tag ──────────────────────────────────────────────────────────────
function Tag({ text, color }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide"
      style={{
        background: `${color}15`,
        color: color,
        border: `1px solid ${color}25`,
      }}
    >
      {text}
    </span>
  );
}

// ── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
      style={{
        background: isOpen ? "#fff" : "#fafbfc",
        border: `1px solid ${isOpen ? color + "30" : "#e8edf3"}`,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: isOpen
          ? `0 8px 32px ${color}12, 0 2px 8px ${color}08`
          : "none",
        transition: "all 0.3s ease",
        marginBottom: 12,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start gap-4 p-6"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        {/* Number */}
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black mt-0.5 transition-all"
          style={{
            background: isOpen ? color : "#f1f5f9",
            color: isOpen ? "#fff" : "#94a3b8",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {item.tag && <Tag text={item.tag} color={color} />}
          </div>
          <span
            className="font-bold text-sm md:text-[15px] leading-snug block"
            style={{ color: isOpen ? "#0a1628" : "#334155" }}
          >
            {item.q}
          </span>
        </div>

        {/* Toggle icon */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isOpen ? color : "#f1f5f9",
            color: isOpen ? "#fff" : "#94a3b8",
            marginTop: 2,
          }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 pb-6 ml-11"
              style={{
                borderTop: `1px solid ${color}15`,
                paddingTop: 16,
              }}
            >
              {/* Left accent bar */}
              <div className="flex gap-3">
                <div
                  className="flex-shrink-0 w-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${color}, ${color}20)`,
                  }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748b", lineHeight: 1.75 }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function FAQPage() {
  useDocumentTitle("Q&A - Pusat Bantuan Pesonanet");

  const [activeCategory, setActiveCategory] = useState("MSP");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Object.keys(FAQ_DATA);
  const currentData = FAQ_DATA[activeCategory];
  const ActiveIcon = currentData.icon;

  // Filter berdasarkan search
  const filteredItems = searchQuery.trim()
    ? currentData.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentData.items;

  return (
    <main className="min-h-screen" style={{ background: "#f8fafc" }}>
      <PageHeader
        variant="centered"
        badge="Help Center"
        title="Pusat Bantuan"
        subtitle="Temukan jawaban teknis untuk setiap layanan Pesonanet. Pilih kategori atau gunakan pencarian untuk menemukan informasi yang Anda butuhkan."
        tags={["MSP", "Fiber Optik", "SD-WAN", "Data Center", "IP Transit"]}
      />

      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {/* ── Search Bar ── */}
          <div className="max-w-2xl mx-auto mb-12">
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 24px rgba(0,84,166,.06)",
              }}
            >
              <Search
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "#94a3b8" }}
              />
              <input
                type="text"
                placeholder={`Cari pertanyaan di kategori ${activeCategory}...`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(-1);
                }}
                className="flex-1 text-sm outline-none bg-transparent"
                style={{ color: "#334155", caretColor: "#00AEEF" }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* ── Sidebar ── */}
            <aside className="xl:w-72 flex-shrink-0">
              <div
                className="sticky top-24 rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: "1px solid #e8edf3",
                  boxShadow: "0 4px 24px rgba(0,84,166,.05)",
                }}
              >
                {/* Sidebar header */}
                <div
                  className="px-5 py-4 border-b"
                  style={{ borderColor: "#f1f5f9" }}
                >
                  <p
                    className="text-[10px] font-black tracking-[2px] uppercase"
                    style={{ color: "#94a3b8" }}
                  >
                    Kategori Layanan
                  </p>
                </div>

                {/* Category list */}
                <nav className="p-2">
                  {categories.map((cat) => {
                    const catData = FAQ_DATA[cat];
                    const CatIcon = catData.icon;
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setOpenIndex(0);
                          setSearchQuery("");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group"
                        style={{
                          background: isActive
                            ? `${catData.color}12`
                            : "transparent",
                          border: isActive
                            ? `1px solid ${catData.color}25`
                            : "1px solid transparent",
                          marginBottom: 2,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                          style={{
                            background: isActive ? catData.color : "#f1f5f9",
                          }}
                        >
                          <CatIcon
                            className="w-4 h-4"
                            style={{ color: isActive ? "#fff" : "#94a3b8" }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <span
                            className="text-sm font-bold block leading-tight"
                            style={{
                              color: isActive ? catData.color : "#334155",
                            }}
                          >
                            {cat}
                          </span>
                          <span
                            className="text-[10px]"
                            style={{ color: "#94a3b8" }}
                          >
                            {catData.items.length} pertanyaan
                          </span>
                        </div>

                        <ChevronRight
                          className="w-3.5 h-3.5 flex-shrink-0 transition-transform"
                          style={{
                            color: isActive ? catData.color : "#cbd5e1",
                            transform: isActive ? "translateX(2px)" : "none",
                          }}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Contact support card */}
                <div
                  className="m-3 p-4 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg,#001f4d,#0054A6)",
                  }}
                >
                  <MessageCircle className="w-5 h-5 text-white/70 mb-2" />
                  <p className="text-[12px] font-bold text-white mb-1">
                    Tidak menemukan jawaban?
                  </p>
                  <p className="text-[11px] text-white/60 mb-3 leading-relaxed">
                    Tim support kami siap membantu 24/7.
                  </p>
                  <a
                    href="/hubungi-kami"
                    className="flex items-center gap-1.5 text-[11px] font-bold transition-opacity hover:opacity-80"
                    style={{ color: "#00AEEF" }}
                  >
                    Hubungi Support
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <div className="flex-1 min-w-0">
              {/* Category header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Header card */}
                  <div
                    className="rounded-2xl p-7 mb-8 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${currentData.color}10, ${currentData.color}05)`,
                      border: `1px solid ${currentData.color}20`,
                    }}
                  >
                    {/* Background icon watermark */}
                    <div
                      className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ opacity: 0.06 }}
                    >
                      <ActiveIcon
                        style={{
                          width: 100,
                          height: 100,
                          color: currentData.color,
                        }}
                      />
                    </div>

                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: currentData.color }}
                      >
                        <ActiveIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[10px] font-black tracking-[2px] uppercase"
                            style={{ color: currentData.color }}
                          >
                            Kategori
                          </span>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                            style={{
                              background: `${currentData.color}15`,
                              color: currentData.color,
                            }}
                          >
                            {filteredItems.length} dari{" "}
                            {currentData.items.length} pertanyaan
                            {searchQuery ? " ditemukan" : ""}
                          </span>
                        </div>
                        <h2
                          className="text-2xl md:text-3xl font-black leading-tight"
                          style={{ color: "#0a1628", letterSpacing: "-0.5px" }}
                        >
                          {activeCategory}
                        </h2>
                        <p
                          className="text-sm mt-1"
                          style={{ color: "#64748b" }}
                        >
                          {currentData.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty state */}
                  {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                      <Search
                        className="w-10 h-10 mx-auto mb-3"
                        style={{ color: "#cbd5e1" }}
                      />
                      <p className="font-bold text-slate-400">
                        Tidak ada hasil untuk &ldquo;{searchQuery}&rdquo;
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
                        Coba kata kunci yang berbeda
                      </p>
                    </div>
                  )}

                  {/* Accordion items */}
                  <div>
                    {filteredItems.map((item, idx) => (
                      <AccordionItem
                        key={`${activeCategory}-${idx}`}
                        item={item}
                        isOpen={openIndex === idx}
                        onToggle={() =>
                          setOpenIndex(openIndex === idx ? -1 : idx)
                        }
                        color={currentData.color}
                        index={idx}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Contact Strip ── */}
          <div
            className="mt-16 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,#001f4d 0%,#003580 50%,#0054A6 100%)",
            }}
          >
            {/* Background grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,174,239,.05) 1px,transparent 1px)," +
                  "linear-gradient(90deg,rgba(0,174,239,.05) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 400,
                height: 400,
                background:
                  "radial-gradient(circle,rgba(0,174,239,.12) 0%,transparent 70%)",
                top: -100,
                right: -80,
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p
                  className="text-[10px] font-black tracking-[2.5px] uppercase mb-2"
                  style={{ color: "rgba(0,174,239,.7)" }}
                >
                  Butuh Bantuan Lebih Lanjut?
                </p>
                <h3
                  className="text-2xl md:text-3xl font-black text-white leading-tight"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Tim support kami siap
                  <br />
                  <span style={{ color: "#00AEEF" }}>membantu 24/7</span>
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: "rgba(255,255,255,.55)" }}
                >
                  Response time rata-rata kurang dari 5 menit untuk pertanyaan
                  teknis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="tel:+622112345678"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "#fff",
                  }}
                >
                  <Phone className="w-4 h-4" style={{ color: "#00AEEF" }} />
                  +62 21 1234 5678
                </a>
                <a
                  href="mailto:support@pesonamedianet.id"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "#fff",
                  }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#00AEEF" }} />
                  Email Support
                </a>
                {/* <a
                  href="/hubungi-kami"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "#00AEEF",
                    color: "#001f4d",
                    boxShadow: "0 4px 20px rgba(0,174,239,.35)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                  <ArrowRight className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
