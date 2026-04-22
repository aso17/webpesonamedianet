import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
// ── Animation variants ────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Breadcrumb ────────────────────────────────────────────────────────────────
function Breadcrumb({ dark = true }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const clr = dark ? "rgba(255,255,255,.35)" : "#94a3b8";
  const clrHover = dark ? "#00AEEF" : "#0054A6";
  const clrCur = dark ? "rgba(255,255,255,.85)" : "#0054A6";
  const clrSep = dark ? "rgba(255,255,255,.15)" : "#cbd5e1";

  return (
    <motion.nav
      variants={item}
      className="flex items-center flex-wrap gap-1.5 text-[9px] font-bold
        tracking-[2px] uppercase mb-5"
      style={{ color: clr }}
    >
      <Link
        to="/"
        style={{ color: clr, textDecoration: "none" }}
        onMouseEnter={(e) => (e.target.style.color = clrHover)}
        onMouseLeave={(e) => (e.target.style.color = clr)}
      >
        Home
      </Link>
      {paths.map((name, i) => {
        const to = `/${paths.slice(0, i + 1).join("/")}`;
        const isLast = i === paths.length - 1;
        return (
          <React.Fragment key={name}>
            <span style={{ color: clrSep }}>/</span>
            {isLast ? (
              <span style={{ color: clrCur, fontWeight: 900 }}>
                {name.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={to}
                style={{ color: clr, textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = clrHover)}
                onMouseLeave={(e) => (e.target.style.color = clr)}
              >
                {name.replace(/-/g, " ")}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </motion.nav>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT 1 — Flowing Mesh Lines + Stats
// Cocok untuk: Tentang Kami, Visi Misi, Sejarah, Nilai Perusahaan
// ══════════════════════════════════════════════════════════════════════════════
function V1SplitStats({ title, subtitle, badge, stats }) {
  return (
    <section
      className="relative w-full overflow-hidden pt-36 pb-12 md:pt-44 md:pb-16"
      style={{
        background:
          "linear-gradient(135deg,#001f4d 0%,#003580 45%,#005ab5 100%)",
      }}
    >
      {/* ── Flowing Mesh SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Flowing curves */}
        <path
          d="M900,0 C700,80 500,20 300,100 S100,200 0,150"
          stroke="rgba(0,174,239,.12)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "dashDraw 3s ease forwards" }}
        />
        <path
          d="M900,50 C750,120 550,60 350,140 S150,240 0,200"
          stroke="rgba(0,174,239,.07)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "dashDraw 3s ease .3s forwards" }}
        />
        <path
          d="M900,100 C800,160 600,90 400,170 S200,270 0,250"
          stroke="rgba(0,174,239,.05)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "dashDraw 3s ease .6s forwards" }}
        />
        {/* Diagonal lines right */}
        <line
          x1="680"
          y1="0"
          x2="900"
          y2="200"
          stroke="rgba(0,174,239,.15)"
          strokeWidth="1"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{ animation: "dashDraw 2.5s ease .2s forwards" }}
        />
        <line
          x1="720"
          y1="0"
          x2="900"
          y2="160"
          stroke="rgba(0,174,239,.1)"
          strokeWidth="1"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{ animation: "dashDraw 2.5s ease .5s forwards" }}
        />
        <line
          x1="760"
          y1="0"
          x2="900"
          y2="120"
          stroke="rgba(0,174,239,.07)"
          strokeWidth="1"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{ animation: "dashDraw 2.5s ease .8s forwards" }}
        />
        {/* Horizontal faint */}
        <line
          x1="0"
          y1="60"
          x2="900"
          y2="60"
          stroke="rgba(255,255,255,.025)"
          strokeWidth=".5"
          fill="none"
        />
        <line
          x1="0"
          y1="140"
          x2="900"
          y2="140"
          stroke="rgba(255,255,255,.02)"
          strokeWidth=".5"
          fill="none"
        />
        {/* Dot cluster top-right */}
        <circle cx="820" cy="28" r="3" fill="rgba(0,174,239,.45)" />
        <circle cx="840" cy="28" r="1.5" fill="rgba(0,174,239,.25)" />
        <circle cx="858" cy="28" r="1" fill="rgba(0,174,239,.15)" />
        <circle cx="820" cy="48" r="1.5" fill="rgba(0,174,239,.2)" />
        <circle cx="840" cy="48" r="3" fill="rgba(0,174,239,.35)" />
        <circle cx="820" cy="68" r="1" fill="rgba(0,174,239,.12)" />
      </svg>

      {/* Radial glows */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle,rgba(0,174,239,.18) 0%,transparent 70%)",
          top: -80,
          right: -60,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle,rgba(0,84,166,.25) 0%,transparent 70%)",
          bottom: -40,
          left: -20,
        }}
      />

      <style>{`
        @keyframes dashDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          {/* Left */}
          <div className="flex-1 min-w-0">
            <Breadcrumb dark />

            {badge && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-1.5 mb-4"
                style={{
                  border: "1px solid rgba(0,174,239,.32)",
                  color: "#7dd3f0",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: "rgba(0,174,239,.08)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#00AEEF" }}
                />
                {badge}
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="font-black text-white leading-[1.02] mb-4"
              style={{
                fontSize: "clamp(34px,4vw,54px)",
                letterSpacing: "-1.5px",
              }}
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={item}
                className="leading-relaxed max-w-lg"
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,.55)",
                  lineHeight: 1.7,
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Accent line */}
            <motion.div
              variants={item}
              className="mt-5 h-[3px] w-24 rounded-full"
              style={{
                background:
                  "linear-gradient(to right,#00AEEF,rgba(0,174,239,.1))",
              }}
            />
          </div>

          {/* Stats */}
          {stats?.length > 0 && (
            <motion.div
              variants={item}
              className="flex-shrink-0 flex rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="px-6 py-5 text-center"
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(255,255,255,.08)" : "none",
                  }}
                >
                  <div
                    className="font-black text-white leading-none"
                    style={{ fontSize: 26, letterSpacing: "-1px" }}
                  >
                    {s.num}
                    <span style={{ color: "#00AEEF", fontSize: 16 }}>
                      {s.suffix}
                    </span>
                  </div>
                  <div
                    className="font-semibold mt-1.5"
                    style={{
                      fontSize: 8,
                      color: "rgba(255,255,255,.35)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT 2 — Hexagon + Diamond Divider (White Clean)
// Cocok untuk: Layanan, Berita Media, Karir
// ══════════════════════════════════════════════════════════════════════════════
function V2CenteredClean({ title, subtitle, badge, tags }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-white pt-36 pb-14 md:pt-44 md:pb-20 text-center"
      style={{ border: "1px solid rgba(0,84,166,.07)" }}
    >
      {/* Top gradient bar */}
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{
          background: "linear-gradient(to right,#003366,#0054A6,#00AEEF)",
        }}
      />

      {/* Corner TL bracket */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 L90,0 L90,4 L4,4 L4,90 L0,90 Z"
          fill="rgba(0,84,166,.05)"
        />
        <path
          d="M0,0 L45,0 L45,2 L2,2 L2,45 L0,45 Z"
          fill="rgba(0,84,166,.09)"
        />
        <circle cx="45" cy="45" r="3" fill="rgba(0,174,239,.3)" />
        <circle cx="22" cy="22" r="2" fill="rgba(0,174,239,.18)" />
      </svg>

      {/* Corner BR bracket */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        width="170"
        height="170"
        viewBox="0 0 170 170"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M170,170 L80,170 L80,166 L166,166 L166,80 L170,80 Z"
          fill="rgba(0,84,166,.04)"
        />
        <path
          d="M170,170 L115,170 L115,168 L168,168 L168,115 L170,115 Z"
          fill="rgba(0,84,166,.07)"
        />
      </svg>

      {/* Hexagon rings top-right */}
      <svg
        className="absolute pointer-events-none"
        style={{ right: -20, top: -30, width: 220, height: 220, opacity: 0.06 }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <polygon
          points="100,10 185,55 185,145 100,190 15,145 15,55"
          stroke="#0054A6"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="100,30 165,67 165,133 100,170 35,133 35,67"
          stroke="#0054A6"
          strokeWidth="1"
          fill="none"
        />
        <polygon
          points="100,50 145,77 145,123 100,150 55,123 55,77"
          stroke="#0054A6"
          strokeWidth=".5"
          fill="none"
        />
      </svg>

      {/* Radial glow top center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 180,
          background:
            "radial-gradient(ellipse,rgba(0,84,166,.06),transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <Breadcrumb dark={false} />

          {badge && (
            <motion.div
              variants={item}
              className="mb-3"
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#0054A6",
                opacity: 0.75,
              }}
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="font-black text-[#0a1628] leading-[1.04]"
            style={{
              fontSize: "clamp(30px,4vw,52px)",
              letterSpacing: "-1.5px",
            }}
          >
            {title}
          </motion.h1>

          {/* Diamond divider */}
          <motion.div
            variants={item}
            className="flex justify-center items-center gap-2 my-5"
          >
            <div
              style={{ height: 1, width: 40, background: "rgba(0,174,239,.3)" }}
            />
            <div
              style={{
                width: 7,
                height: 7,
                background: "#00AEEF",
                transform: "rotate(45deg)",
                borderRadius: 1,
              }}
            />
            <div
              style={{ height: 1, width: 40, background: "rgba(0,174,239,.3)" }}
            />
          </motion.div>

          {subtitle && (
            <motion.p
              variants={item}
              className="leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}
            >
              {subtitle}
            </motion.p>
          )}

          {tags?.length > 0 && (
            <motion.div
              variants={item}
              className="flex justify-center flex-wrap gap-2 mt-6"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: "4px 14px",
                    borderRadius: 20,
                    fontSize: 10,
                    fontWeight: 600,
                    background: "#EEF5FF",
                    color: "#0054A6",
                    border: "1px solid rgba(0,84,166,.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT 3 — Angular Neon Cuts
// Cocok untuk: Dukungan, Q&A, MRTG, Looking Glass, Tools teknis
// ══════════════════════════════════════════════════════════════════════════════
function V3DarkPanel({ title, titleAccent, subtitle, badge, icon: Icon }) {
  return (
    <section
      className="relative w-full overflow-hidden pt-36 pb-0 md:pt-44"
      style={{
        background:
          "linear-gradient(135deg,#000d26 0%,#001a4d 40%,#002b6b 100%)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 inset-x-0 h-[3px]"
        style={{
          background: "linear-gradient(to right,#003366,#0054A6,#00AEEF)",
        }}
      />

      {/* Angular cut SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 280"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Angular polygon fill right */}
        <polygon
          points="900,0 580,0 750,280 900,280"
          fill="rgba(0,174,239,.04)"
        />
        {/* Main cut line — neon glow */}
        <line
          x1="580"
          y1="0"
          x2="750"
          y2="280"
          stroke="#00AEEF"
          strokeWidth="1.5"
          opacity=".28"
        />
        {/* Secondary cut lines */}
        <line
          x1="610"
          y1="0"
          x2="780"
          y2="280"
          stroke="#00AEEF"
          strokeWidth="1"
          opacity=".12"
        />
        <line
          x1="640"
          y1="0"
          x2="810"
          y2="280"
          stroke="#00AEEF"
          strokeWidth="1"
          opacity=".07"
        />
        {/* Horizontal accent lines left */}
        <line
          x1="0"
          y1="55"
          x2="500"
          y2="55"
          stroke="#00AEEF"
          strokeWidth=".5"
          opacity=".07"
        />
        <line
          x1="0"
          y1="110"
          x2="450"
          y2="110"
          stroke="#00AEEF"
          strokeWidth=".5"
          opacity=".04"
        />
        {/* Corner brackets */}
        <path
          d="M860,10 L900,10 L900,50"
          stroke="#00AEEF"
          strokeWidth="1.5"
          fill="none"
          opacity=".35"
        />
        <path
          d="M860,270 L900,270 L900,230"
          stroke="#00AEEF"
          strokeWidth="1.5"
          fill="none"
          opacity=".35"
        />
        {/* Dot accent near cut */}
        <circle cx="590" cy="15" r="3" fill="#00AEEF" opacity=".4" />
        <circle cx="607" cy="15" r="2" fill="#00AEEF" opacity=".25" />
        <circle cx="621" cy="15" r="1.5" fill="#00AEEF" opacity=".15" />
        {/* 3x3 dot grid top-right */}
        <circle cx="800" cy="80" r="2" fill="rgba(0,174,239,.25)" />
        <circle cx="820" cy="80" r="2" fill="rgba(0,174,239,.25)" />
        <circle cx="840" cy="80" r="2" fill="rgba(0,174,239,.25)" />
        <circle cx="800" cy="100" r="2" fill="rgba(0,174,239,.18)" />
        <circle cx="820" cy="100" r="2" fill="rgba(0,174,239,.18)" />
        <circle cx="840" cy="100" r="2" fill="rgba(0,174,239,.18)" />
        <circle cx="800" cy="120" r="2" fill="rgba(0,174,239,.12)" />
        <circle cx="820" cy="120" r="2" fill="rgba(0,174,239,.12)" />
        <circle cx="840" cy="120" r="2" fill="rgba(0,174,239,.12)" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-end gap-0">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 pb-14 md:pb-20"
          >
            <Breadcrumb dark />

            {badge && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-1.5 mb-4"
                style={{
                  border: "1px solid rgba(0,174,239,.25)",
                  color: "#7dd3f0",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: 4,
                  background: "rgba(0,174,239,.06)",
                }}
              >
                {badge}
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="font-black text-white leading-[1.04] mb-4"
              style={{
                fontSize: "clamp(28px,3.5vw,46px)",
                letterSpacing: "-1px",
              }}
            >
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg,#00AEEF,#7dd3f0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {titleAccent}
                  </span>
                </>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={item}
                className="leading-relaxed max-w-lg"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.65,
                }}
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              variants={item}
              className="mt-5 h-[2px] w-20 rounded-full"
              style={{
                background: "linear-gradient(to right,#00AEEF,transparent)",
              }}
            />
          </motion.div>

          {/* Right icon panel */}
          {Icon && (
            <div
              className="hidden lg:flex items-end w-[200px] flex-shrink-0 pb-16 self-end pl-8"
              style={{ borderLeft: "1px solid rgba(0,174,239,.12)" }}
            >
              <div
                className="opacity-[0.18]"
                style={{ animation: "floatY 5s ease-in-out infinite" }}
              >
                <Icon className="w-28 h-28 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT 4 — Blueprint Grid + Corner Brackets + Glass Card
// Cocok untuk: Pelanggan, Daftar, Informasi Pembayaran, Legalitas
// ══════════════════════════════════════════════════════════════════════════════
function V4GlassCard({ title, titleAccent, subtitle, badge, meta }) {
  return (
    <section
      className="relative w-full overflow-hidden pt-36 pb-12 md:pt-44 md:pb-16"
      style={{
        background:
          "linear-gradient(135deg,#001233 0%,#002060 45%,#003580 100%)",
      }}
    >
      {/* ... (SVG Blueprint tetap sama) ... */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="max-w-2xl relative"
            style={{
              background: "rgba(255,255,255,.03)", // Sedikit lebih transparan agar blur lebih terasa
              // PERBAIKAN BORDER: Gunakan border putih yang lebih tebal sedikit
              // dan tambahkan Shadow Box untuk efek "Kedalaman"
              border: "1px solid rgba(255,255,255,.15)",
              borderRadius: 20,
              padding: "32px 40px",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)", // Shadow luar & inner glow
            }}
          >
            {/* 4 CORNER BRACKETS: Kita pertegas Opacity dan Stroke-nya */}
            {/* Top-left */}
            <svg
              className="absolute -top-[2px] -left-[2px] pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M0,14 L0,0 L14,0" stroke="#00AEEF" strokeWidth="2.5" />
            </svg>
            {/* Top-right */}
            <svg
              className="absolute -top-[2px] -right-[2px] pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M10,0 L24,0 L24,14" stroke="#00AEEF" strokeWidth="2.5" />
            </svg>
            {/* Bottom-left */}
            <svg
              className="absolute -bottom-[2px] -left-[2px] pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M0,10 L0,24 L14,24" stroke="#00AEEF" strokeWidth="2.5" />
            </svg>
            {/* Bottom-right */}
            <svg
              className="absolute -bottom-[2px] -right-[2px] pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10,24 L24,24 L24,10"
                stroke="#00AEEF"
                strokeWidth="2.5"
              />
            </svg>

            {/* Garis Aksen Atas yang lebih Menyala */}
            <div
              className="h-[3px] rounded-full mb-8"
              style={{
                width: "60px",
                background: "linear-gradient(to right, #00AEEF, transparent)",
              }}
            />

            <Breadcrumb dark />

            {badge && (
              <motion.div
                variants={item}
                className="mb-3"
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  textShadow: "0 0 10px rgba(0,174,239,0.3)", // Glow pada teks badge
                }}
              >
                {badge}
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="font-black text-white leading-[1.04] mb-5"
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                letterSpacing: "-2px",
              }}
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span
                    style={{
                      color: "#00AEEF",
                      background: "linear-gradient(to right, #00AEEF, #7dd3f0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {titleAccent}
                  </span>
                </>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={item}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,.65)", // Putih sedikit lebih terang agar mudah dibaca
                  lineHeight: 1.8,
                  maxWidth: "90%",
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Meta Tags dengan Background Badge kecil agar lebih kontras */}
            {meta?.length > 0 && (
              <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
                {meta.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 rounded-md"
                    style={{
                      fontSize: 10,
                      color: "#fff",
                      fontWeight: 600,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      className="flex-shrink-0 rounded-full animate-pulse"
                      style={{
                        width: 6,
                        height: 6,
                        background: "#00AEEF",
                        boxShadow: "0 0 8px #00AEEF",
                      }}
                    />
                    {m}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function V5MapLocator({ title, subtitle, badge, stats }) {
  return (
    <section
      className="relative w-full overflow-hidden pt-36 pb-14 md:pt-44 md:pb-24"
      style={{
        background:
          "linear-gradient(135deg,#001f4d 0%,#003580 45%,#005ab5 100%)",
      }}
    >
      {/* 1. GLOBE DECO (Gaya Banner Home - Modified) */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Lingkaran Luar */}
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />

          {/* Garis Bujur (Meridians) */}
          <ellipse
            cx="100"
            cy="100"
            rx="50"
            ry="85"
            stroke="white"
            strokeWidth="0.3"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="20"
            ry="85"
            stroke="white"
            strokeWidth="0.3"
          />

          {/* Garis Lintang (Parallels) */}
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="40"
            stroke="white"
            strokeWidth="0.3"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="15"
            stroke="white"
            strokeWidth="0.3"
          />

          {/* Garis Tengah Axis */}
          <line
            x1="15"
            y1="100"
            x2="185"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1="100"
            y1="15"
            x2="100"
            y2="185"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.5"
          />

          {/* TITIK LOKASI BERKEDIP (Blink Animation) */}
          {/* Layer Glow */}
          <motion.circle
            cx="125"
            cy="88"
            r="6"
            fill="#00AEEF"
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          {/* Layer Titik Inti */}
          <motion.circle
            cx="125"
            cy="88"
            r="2.5"
            fill="#00AEEF"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* 2. NAVIGATION GRID (Kiri Bawah) */}
      <svg
        className="absolute bottom-0 left-0 pointer-events-none opacity-[0.05]"
        width="400"
        height="400"
        viewBox="0 0 200 200"
      >
        <path
          d="M0,200 L60,140 L200,140"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="60" cy="140" r="2" fill="white" />
        <text x="70" y="135" fontSize="6" fill="white" className="font-mono">
          LOC: CURUG_TGR
        </text>
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: Content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <Breadcrumb dark={true} />

            {badge && (
              <motion.div
                variants={item}
                className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#00AEEF] text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-sm"
              >
                <MapPin size={12} /> {badge}
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="font-black text-white leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "-2px",
              }}
            >
              {title}
            </motion.h1>

            <motion.div
              variants={item}
              className="w-20 h-1.5 bg-[#00AEEF] rounded-full mb-8 shadow-[0_0_15px_rgba(0,174,239,0.5)]"
            />

            {subtitle && (
              <motion.p
                variants={item}
                className="text-white/60 max-w-xl leading-relaxed"
                style={{ fontSize: 16 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* RIGHT SIDE: Stats */}
          {stats?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-end"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="relative group p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.08] transition-all"
                >
                  <div className="text-[32px] font-black text-white leading-none mb-2">
                    {s.num}
                    <span className="text-[#00AEEF]">{s.suffix}</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 group-hover:text-white transition-colors">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
// ══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ══════════════════════════════════════════════════════════════════════════════
export default function PageHeader({
  title,
  titleAccent,
  subtitle,
  badge,
  tags,
  stats,
  meta,
  icon,
  variant = "split",
}) {
  switch (variant) {
    case "centered":
      return (
        <V2CenteredClean
          title={title}
          subtitle={subtitle}
          badge={badge}
          tags={tags}
        />
      );
    case "dark":
      return (
        <V3DarkPanel
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
          badge={badge}
          icon={icon}
        />
      );
    case "glass":
      return (
        <V4GlassCard
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
          badge={badge}
          meta={meta}
        />
      );
    case "location":
      return (
        <V5MapLocator
          title={title}
          subtitle={subtitle}
          badge={badge}
          tags={tags}
        />
      );
    default:
      return (
        <V1SplitStats
          title={title}
          subtitle={subtitle}
          badge={badge}
          stats={stats}
        />
      );
  }
}
