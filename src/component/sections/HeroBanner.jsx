import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
const whatsappNumber = "6287825122645";
const message = encodeURIComponent(
  "Halo Pesonanet, saya ingin bertanya tentang layanan internet."
);
const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

const SLIDES = [
  {
    badge: "Internet Terpercaya",
    title: ["Koneksi Tanpa", "Batas untuk", "Bisnis Anda"],
    accentLine: 2,
    sub: "Solusi internet dedicated dengan uptime 99,9% dan SLA yang terjamin untuk mendukung pertumbuhan bisnis Anda.",
    cta: { label: "Mulai Sekarang", href: waUrl },
    ctaSecondary: {
      label: "Lihat Selengkapnya",
      href: "/services/dedicated-internet",
    },
    stats: [
      { n: "99", s: ".5%", l: "Uptime" },
      { n: "24", s: "/7", l: "Support" },
      { n: "10", s: "Gbps", l: "Kapasitas" },
    ],
    bg: "from-[#001f4d] via-[#003d8f] to-[#0068c8]",
  },
  {
    badge: "Managed Service",
    title: ["Kelola Jaringan", "Lebih Mudah", "dan Efisien"],
    accentLine: 1,
    sub: "Layanan managed service kami memastikan jaringan Anda selalu optimal dengan tim ahli yang siap kapan saja.",
    cta: { label: "Pelajari Layanan", href: "/layanan/manage-service" },
    ctaSecondary: { label: "Hubungi Kami", href: waUrl },
    stats: [
      { n: "500", s: "+", l: "Klien" },
      { n: "6", s: "th+", l: "Pengalaman" },
      { n: "5", s: "min", l: "Respons" },
    ],
    bg: "from-[#001233] via-[#002966] to-[#0068c8]",
  },
  {
    badge: "Broadband Rumahan",
    title: ["Internet Cepat", "untuk Rumah", "dan Keluarga"],
    accentLine: 0,
    sub: "Nikmati streaming, gaming, dan bekerja dari rumah dengan kecepatan tinggi yang stabil dan harga terjangkau.",
    cta: { label: "Cek Paket", href: "/layanan/broadband" },
    ctaSecondary: { label: "Cek Coverage", href: "/layanan/broadband" },
    stats: [
      { n: "1", s: "Gbps", l: "Kecepatan" },
      { n: "3", s: "K+", l: "Pengguna" },
      { n: "100", s: "%", l: "Fiber" },
    ],
    bg: "from-[#001840] via-[#003080] to-[#00a8e8]",
  },
];

const TICKER = [
  "Internet Dedicated 1 Gbps mulai dari Rp 5.000.000/bulan",
  "Uptime 99,9% dengan SLA Terjamin untuk Bisnis Anda",
  "Managed Service — Tim Ahli Siap 24/7 Mendukung Operasional",
  "Broadband Fiber Optic hingga 1 Gbps untuk Rumah dan Kantor",
  "Tes Bandwidth Gratis — Cek Kecepatan Koneksi Anda Sekarang",
  "Hubungi Kami: (021) 397-183-19 · admin@pesonamedia.net",
];

const DURATION = 5000;

// ── Dekorasi SVG ──────────────────────────────────────────────────────────────
function WifiDeco({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg viewBox="0 0 140 140" fill="none" className="w-full h-full">
        <path
          d="M18 68Q70 25 122 68"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M34 84Q70 50 106 84"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M52 100Q70 78 88 100"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="70" cy="116" r="7" fill="white" />
      </svg>
    </div>
  );
}

function PcDeco({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
        <rect
          x="20"
          y="30"
          width="140"
          height="95"
          rx="8"
          stroke="white"
          strokeWidth="4"
        />
        <rect
          x="40"
          y="50"
          width="100"
          height="55"
          rx="3"
          stroke="white"
          strokeWidth="2.5"
        />
        <line
          x1="90"
          y1="125"
          x2="90"
          y2="155"
          stroke="white"
          strokeWidth="4"
        />
        <line
          x1="55"
          y1="155"
          x2="125"
          y2="155"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="68" cy="77" r="10" stroke="white" strokeWidth="2.5" />
        <circle cx="90" cy="77" r="10" stroke="white" strokeWidth="2.5" />
        <circle cx="112" cy="77" r="10" stroke="white" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

function GlobeDeco({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <circle cx="100" cy="100" r="85" stroke="white" strokeWidth="2" />
        <ellipse
          cx="100"
          cy="100"
          rx="50"
          ry="85"
          stroke="white"
          strokeWidth="1.5"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="85"
          ry="40"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="15"
          y1="100"
          x2="185"
          y2="100"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="15"
          x2="100"
          y2="185"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

// ── PulseDot ──────────────────────────────────────────────────────────────────
function PulseDot({ className = "" }) {
  return (
    <div
      className={`absolute w-2.5 h-2.5 rounded-full bg-primary-light pointer-events-none ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-primary-light animate-ping opacity-75" />
    </div>
  );
}

function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, "")); // Ambil angka saja

  useEffect(() => {
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = target;
    const totalFrames = Math.min(end, 60); // Batasi frame agar smooth
    const increment = end / totalFrames;
    const intervalTime = duration / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, target, duration]);

  return <>{count}</>;
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function StatBar({ stats, animKey }) {
  return (
    // Mobile: baris di bawah konten | Desktop: absolute kanan bawah
    <div
      className={`
      flex items-center
      border-t border-white/10 mt-5 pt-3.5 pb-0
      md:border-0 md:mt-0 md:pt-0 md:absolute md:bottom-20 md:right-16 md:gap-0
    `}
    >
      {stats.map((st, i) => (
        // Gunakan import { Fragment } from "react" atau React.Fragment agar bisa dipasang KEY
        <div key={`stat-group-${i}`} className="flex items-center">
          <div className="flex-1 md:flex-none md:min-w-[80px] text-center">
            <div className="text-xl md:text-[30px] font-black text-white tracking-tight leading-none">
              <Counter key={`${animKey}-${i}`} value={st.n} />
              <span className="text-primary-light text-base md:text-[20px] font-black">
                {st.s}
              </span>
            </div>
            <div className="text-[9px] md:text-[10px] text-white/40 tracking-widest uppercase mt-1">
              {st.l}
            </div>
          </div>

          {/* Garis pemisah antar statistik */}
          {i < stats.length - 1 && (
            <div className="w-px self-stretch bg-white/12 mx-3 md:mx-5 my-0.5" />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Komponen Utama ────────────────────────────────────────────────────────────
export default function HeroBanner() {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const startRef = useRef(Date.now());
  const rafRef = useRef(null);
  const savedProgress = useRef(0);

  const goTo = useCallback((n) => {
    setCur(n);
    setAnimKey((k) => k + 1);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (paused) return;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCur((c) => {
          const next = (c + 1) % SLIDES.length;
          setAnimKey((k) => k + 1);
          setProgress(0);
          startRef.current = Date.now();
          return next;
        });
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, cur]);

  const handlePause = () => {
    savedProgress.current = progress;
    setPaused(true);
    cancelAnimationFrame(rafRef.current);
  };
  const handleResume = () => {
    startRef.current = Date.now() - (savedProgress.current / 100) * DURATION;
    setPaused(false);
  };

  return (
    <>
      {/* Inject keyframes tickerMove di index.css saja, tidak perlu di sini */}
      <section
        className={`
          relative w-full overflow-hidden bg-[#001f4d]
          h-auto md:h-[clamp(520px,calc(100vh-72px),680px)]
        `}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        {/* Slides track */}
        <div
          className="flex h-full"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translateX(-${(100 / SLIDES.length) * cur}%)`,
            transition: "transform 0.85s cubic-bezier(.77,0,.175,1)",
          }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`
                relative flex-shrink-0 bg-gradient-to-br ${s.bg}
                h-auto md:h-full
              `}
              style={{ width: `${100 / SLIDES.length}%` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 md:h-1
                bg-gradient-to-r from-primary to-primary-light z-10"
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 580"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id={`grid-${i}`}
                      width="60"
                      height="60"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M60 0L0 0 0 60"
                        fill="none"
                        stroke="white"
                        strokeWidth=".5"
                      />
                    </pattern>
                  </defs>
                  <rect width="1000" height="580" fill={`url(#grid-${i})`} />
                </svg>
              </div>

              {/* Dekoratif lingkaran */}
              {/* Dekoratif lingkaran */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lingkaran Luar Besar - Pakai border biru muda terang */}
                <div
                  className="absolute w-[340px] md:w-[600px] h-[340px] md:h-[600px]
    -top-24 -right-16 rounded-full border-2 border-[#7dd3f0]/40 shadow-[0_0_40px_rgba(125,211,240,0.1)]"
                />

                {/* Lingkaran Tengah - Lebih tipis */}
                <div
                  className="hidden md:block absolute w-[450px] h-[450px]
    top-10 right-28 rounded-full border border-[#7dd3f0]/25"
                />

                {/* Efek Cahaya Glow (Blur) agar garisnya terlihat "hidup" */}
                <div
                  className="absolute w-[320px] md:w-[500px] h-[320px] md:h-[500px]
    -top-36 -right-14 rounded-full bg-[#7dd3f0]/10 blur-[80px]"
                />

                {/* Aksen Bawah */}
                <div
                  className="absolute w-[180px] md:w-[220px] h-[180px] md:h-[220px]
    -bottom-16 right-32 rounded-full bg-[#00AEEF]/20"
                />
              </div>

              {/* SVG Dekorasi — sembunyikan di mobile kecil, tampilkan transparan di mobile */}
              {i === 0 && (
                <>
                  <WifiDeco
                    className="
                    w-16 h-16 md:w-36 md:h-36
                    top-3 right-3 md:top-16 md:right-36
                    opacity-[0.10] md:opacity-[0.15]
                    animate-[floatY_5s_ease-in-out_infinite]
                  "
                  />
                  <GlobeDeco
                    className="
                    hidden md:block w-52 h-52
                    top-12 right-10
                    opacity-[0.08]
                    animate-[floatX_7s_ease-in-out_.5s_infinite]
                  "
                  />
                </>
              )}
              {i === 1 && (
                <PcDeco
                  className="
                  w-16 h-16 md:w-44 md:h-44
                  top-3 right-3 md:top-20 md:right-28
                  opacity-[0.10] md:opacity-[0.15]
                  animate-[floatY_6s_ease-in-out_1s_infinite]
                "
                />
              )}
              {i === 2 && (
                <WifiDeco
                  className="
                  w-16 h-16 md:w-44 md:h-44
                  top-3 right-3 md:top-14 md:right-28
                  opacity-[0.10] md:opacity-[0.15]
                  animate-[floatY_5.5s_ease-in-out_infinite]
                "
                />
              )}

              {/* Pulse dots — hanya desktop */}
              <PulseDot className="hidden md:block top-[30%] right-[38%]" />
              <PulseDot className="hidden md:block top-[58%] right-[55%] [animation-delay:1s]" />

              {/* Konten */}
              <div
                className="
                relative z-10 flex flex-col
                px-5 pt-12 pb-0
                md:absolute md:inset-0 md:flex-row md:items-center md:px-16 lg:px-24 md:pt-0
              "
              >
                <div key={`${i}-${animKey}`} className="md:max-w-[580px]">
                  {/* Badge */}
                  <div
                    className="
                      inline-flex items-center gap-1.5 border border-[#7dd3f0]/40
                      text-[#7dd3f0] text-[9px] md:text-[11px] font-bold tracking-[2px] md:tracking-[2.5px]
                      uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-5
                      bg-[#7dd3f0]/10 backdrop-blur-sm
                      animate-[fadeUp_.5s_ease_.05s_both]
                    "
                  >
                    {/* Titik Pulse yang lebih nyala */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7dd3f0] shadow-[0_0_8px_#7dd3f0] animate-pulse" />
                    {s.badge}
                  </div>

                  {/* Title */}
                  <h1
                    className="
                    text-[30px] sm:text-[36px] md:text-[50px] lg:text-[56px]
                    font-black text-white leading-[1.06] tracking-tight
                    mb-3 md:mb-4
                    animate-[fadeUp_.55s_ease_.15s_both]
                  "
                  >
                    {s.title.map((line, li) => (
                      <span key={li} className="block">
                        {li === s.accentLine ? (
                          <span className="text-primary-light">{line}</span>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </h1>

                  {/* Sub */}
                  <p
                    className="
                    text-[13px] md:text-[15px] text-white/65 leading-relaxed
                    mb-5 md:mb-8 max-w-sm md:max-w-lg
                    animate-[fadeUp_.55s_ease_.25s_both]
                  "
                  >
                    {s.sub}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2.5 md:gap-3 items-center animate-[fadeUp_.55s_ease_.35s_both]">
                    {/* Tombol Utama */}
                    <Link
                      to={s.cta.href}
                      className="px-5 md:px-7 py-2.5 md:py-3.5 bg-transparent text-white text-[13px] md:text-sm font-bold border border-white/30 rounded-xl transition-all hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 flex items-center gap-1.5"
                    >
                      {s.cta.label}
                    </Link>

                    {/* Tombol Secondary - Sekarang lebih sinkron */}
                    <Link
                      to={s.ctaSecondary.href}
                      className="px-5 md:px-7 py-2.5 md:py-3.5 bg-transparent text-white text-[13px] md:text-sm font-bold border border-white/30 rounded-xl transition-all hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 flex items-center gap-1.5"
                    >
                      {s.ctaSecondary.label}
                    </Link>
                  </div>
                </div>

                {/* Stats */}
                <StatBar stats={s.stats} animKey={animKey} />
              </div>

              {/* Spacer bawah di mobile agar tidak ketutup ticker+dots */}
              <div className="h-24 md:hidden" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => goTo((cur - 1 + SLIDES.length) % SLIDES.length)}
          className="
            absolute z-20 top-[40%] md:top-1/2 -translate-y-1/2 left-2 md:left-5
            w-8 h-8 md:w-11 md:h-11 rounded-full
            bg-white/10 border border-white/20 text-white
            flex items-center justify-center
            transition-all duration-300
            hover:bg-[#7dd3f0]/20 hover:border-[#7dd3f0] hover:text-[#7dd3f0]
            hover:shadow-[0_0_15px_rgba(125,211,240,0.3)]
            backdrop-blur-sm
          "
        >
          <svg
            width="14"
            height="14"
            className="md:w-[18px] md:h-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => goTo((cur + 1) % SLIDES.length)}
          className="
            absolute z-20 top-[40%] md:top-1/2 -translate-y-1/2 right-2 md:right-5
            w-8 h-8 md:w-11 md:h-11 rounded-full
            bg-white/10 border border-white/20 text-white
            flex items-center justify-center
            transition-all duration-300
            hover:bg-[#7dd3f0]/20 hover:border-[#7dd3f0] hover:text-[#7dd3f0]
            hover:shadow-[0_0_15px_rgba(125,211,240,0.3)]
            backdrop-blur-sm
          "
        >
          {" "}
          <svg
            width="14"
            height="14"
            className="md:w-[18px] md:h-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Bottom controls */}
        <div className="absolute bottom-0 inset-x-0 z-20">
          {/* Ticker */}
          <div
            className="bg-black/40 border-t border-[#7dd3f0]/30
            py-2 md:py-2.5 overflow-hidden whitespace-nowrap
            backdrop-blur-md flex items-center"
          >
            <span
              className="
                flex-shrink-0 inline-flex items-center gap-1 md:gap-1.5
                bg-emerald-50 text-emerald-600 border border-emerald-100
                text-[9px] md:text-[10px] font-black tracking-[1.5px] uppercase
                px-2.5 md:px-3.5 py-1 mx-2.5 md:mx-4 rounded-full
              "
            >
              <span className="relative flex h-2 w-2">
                {/* Efek Ping (Animasi Berdenyut) */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <svg
                width="9"
                height="9"
                className="md:w-[11px] md:h-[11px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Live
            </span>
            <div className="overflow-hidden flex-1 min-w-0">
              <div
                style={{
                  display: "inline-flex",
                  animation: "tickerMove 30s linear infinite",
                  whiteSpace: "nowrap",
                }}
              >
                {[...TICKER, ...TICKER].map((item, i) => (
                  <span
                    key={i}
                    className="
                    inline-flex items-center gap-1.5 md:gap-2
                    text-[11px] md:text-[13px] text-white/80 font-medium
                    px-4 md:px-8
                  "
                  >
                    {item}
                    <span className="text-primary-light opacity-70 text-xs md:text-sm">
                      ◆
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 py-2 md:py-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`
                  h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer
                  ${
                    i === cur
                      ? "w-6 md:w-7 bg-primary-light"
                      : "w-1.5 bg-white/30"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 inset-x-0 h-0.5 bg-primary-light z-30"
          style={{ width: `${progress}%`, transition: "none" }}
        />
      </section>
    </>
  );
}
