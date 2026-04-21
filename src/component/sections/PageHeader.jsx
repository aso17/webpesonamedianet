import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

// ── Decorative Shapes (Bentuk Geometris Abstrak) ─────────────────────────────
// Bentuk 1: Poligon miring di kanan atas
const GeometricShape1 = ({ className }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      // Bentuk trapesium miring kustom
      clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
    }}
  />
);

// Bentuk 2: Segitiga miring/Wedge di kiri bawah
const GeometricShape2 = ({ className }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      // Bentuk segitiga siku miring
      clipPath: "polygon(0 15%, 100% 100%, 0 100%)",
    }}
  />
);

// ── Breadcrumb ────────────────────────────────────────────────────────────────
function Breadcrumb({ dark = false }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  const base = dark ? "rgba(255,255,255,.35)" : "#94a3b8";
  const hover = dark ? "#00AEEF" : "#0054A6";
  const cur = dark ? "rgba(255,255,255,.85)" : "#0054A6";
  const sep = dark ? "rgba(255,255,255,.15)" : "#cbd5e1";

  return (
    <motion.nav
      variants={item}
      className="flex items-center flex-wrap gap-1.5 text-[10px] font-bold tracking-[2px] uppercase mb-5"
      style={{ color: base }}
    >
      <Link
        to="/"
        style={{ color: base }}
        className="transition-colors duration-200"
        onMouseEnter={(e) => (e.target.style.color = hover)}
        onMouseLeave={(e) => (e.target.style.color = base)}
      >
        Home
      </Link>
      {paths.map((name, i) => {
        const to = `/${paths.slice(0, i + 1).join("/")}`;
        const isLast = i === paths.length - 1;
        return (
          <React.Fragment key={name}>
            <span style={{ color: sep }}>/</span>
            {isLast ? (
              <span
                style={{ color: cur, fontWeight: 900 }}
                className="capitalize"
              >
                {name.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={to}
                style={{ color: base }}
                className="transition-colors duration-200 capitalize"
                onMouseEnter={(e) => (e.target.style.color = hover)}
                onMouseLeave={(e) => (e.target.style.color = base)}
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
// VARIANT 1 — Split with Stats (Default - Pake Bentuk Geometris Terbuka)
// ══════════════════════════════════════════════════════════════════════════════
function V1SplitStats({ title, subtitle, badge, stats }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#001f4d] via-[#003d8f] to-[#0054A6] pt-36 pb-12 md:pt-44 md:pb-16">
      {/* --- GEOMETRIC SHAPES --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bentuk Miring Kanan Atas (Border Only) */}
        <GeometricShape1 className="w-[600px] h-[400px] -top-20 -right-32 border-2 border-[#00AEEF]/20" />
        {/* Bentuk Miring Kanan Atas (Fill Lembut) */}
        <GeometricShape1 className="w-[400px] h-[300px] top-10 right-0 bg-[#00AEEF]/5" />

        {/* Bentuk Kiri Bawah (Border Only) */}
        <GeometricShape2 className="w-[500px] h-[300px] -bottom-10 -left-20 border border-[#00AEEF]/10" />
        {/* Glow Halus di Kiri Bawah (Kotak Blur) */}
        <div className="absolute w-[300px] h-[300px] -bottom-40 -left-20 bg-[#00AEEF]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="flex-1 min-w-0">
            <Breadcrumb dark />
            {badge && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-1.5 border border-[#00AEEF]/35 text-[#7dd3f0] text-[9px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-4 bg-[#00AEEF]/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                {badge}
              </motion.div>
            )}
            <motion.h1
              variants={item}
              className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-white leading-[1.02] tracking-[-2px] mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                variants={item}
                className="text-[14px] md:text-[15px] text-white/60 leading-relaxed max-w-lg"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              variants={item}
              className="mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00AEEF]/20"
            />
          </div>

          {stats && stats.length > 0 && (
            <motion.div
              variants={item}
              className="flex-shrink-0 flex bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 text-center relative ${
                    i > 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  <div className="text-[28px] font-black text-white tracking-tight leading-none">
                    {s.num}
                    <span className="text-[#00AEEF] text-[18px]">
                      {s.suffix}
                    </span>
                  </div>
                  <div className="text-[9px] text-white/40 tracking-[2px] uppercase mt-1.5 font-semibold">
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
// VARIANT 2 — Centered Clean (Pake Bentuk Geometris Samar di Putih)
// ══════════════════════════════════════════════════════════════════════════════
function V2CenteredClean({ title, subtitle, badge, tags }) {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-36 pb-14 md:pt-44 md:pb-20 text-center">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#001f4d] via-[#0054A6] to-[#00AEEF]" />

      {/* --- GEOMETRIC SHAPES (Soft on White) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bentuk Kiri Atas (Fill Sangat Samar) */}
        <GeometricShape1 className="w-[400px] h-[300px] -top-10 -left-10 bg-[#EEF5FF] rotate-180" />
        {/* Bentuk Kanan Bawah (Border Samar) */}
        <GeometricShape2 className="w-[500px] h-[400px] -bottom-20 -right-20 border border-slate-100 rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <Breadcrumb dark={false} />
          {badge && (
            <motion.div
              variants={item}
              className="inline-block text-[10px] font-bold tracking-[3px] uppercase text-[#0054A6] mb-4 opacity-80"
            >
              {badge}
            </motion.div>
          )}
          <motion.h1
            variants={item}
            className="text-[34px] sm:text-[48px] lg:text-[58px] font-black text-[#0a1628] tracking-[-2px] leading-[1.04] mb-0"
          >
            {title}
          </motion.h1>
          <motion.div variants={item} className="flex justify-center my-5">
            <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent" />
          </motion.div>
          {subtitle && (
            <motion.p
              variants={item}
              className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          {tags && tags.length > 0 && (
            <motion.div
              variants={item}
              className="flex justify-center flex-wrap gap-2 mt-6"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-[#EEF5FF] text-[#0054A6] border border-[#0054A6]/10"
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
// VARIANT 3 — Dark Side Panel (Geometris Tajam & Tegas)
// ══════════════════════════════════════════════════════════════════════════════
function V3DarkPanel({ title, titleAccent, subtitle, badge, icon: Icon }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#001233] via-[#002060] to-[#003080] pt-36 pb-0 md:pt-44">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#001f4d] via-[#0054A6] to-[#00AEEF]" />

      {/* --- GEOMETRIC SHAPES (Sharp on Dark) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Garis Miring Diagonal Panjang */}
        <div className="absolute top-0 right-0 w-[1px] h-[200%] bg-gradient-to-b from-[#00AEEF]/20 to-transparent rotate-[35deg] origin-top-right" />
        {/* Bentuk Segitiga Tajam di Kanan (Border) */}
        <GeometricShape2 className="w-[600px] h-[500px] -bottom-20 -right-20 border-2 border-[#00AEEF]/15 rotate-90" />
      </div>

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
                className="inline-flex items-center gap-1.5 border border-[#00AEEF]/30 text-[#7dd3f0] text-[9px] font-bold tracking-[1.5px] uppercase px-3 py-1 rounded-full mb-4 bg-[#00AEEF]/8"
              >
                {badge}
              </motion.div>
            )}
            <motion.h1
              variants={item}
              className="text-[34px] sm:text-[46px] lg:text-[54px] font-black text-white leading-[1.04] tracking-[-1.5px] mb-4"
            >
              {title}{" "}
              {titleAccent && (
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
              )}
            </motion.h1>
            {subtitle && (
              <motion.p
                variants={item}
                className="text-[13px] md:text-[14px] text-white/55 leading-relaxed max-w-lg"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              variants={item}
              className="mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-[#00AEEF] to-transparent"
            />
          </motion.div>
          {Icon && (
            <div className="hidden lg:flex items-end w-[200px] flex-shrink-0 border-l border-[#00AEEF]/10 pl-8 pb-12 self-end relative z-10">
              <div className="opacity-20 relative">
                <Icon className="w-28 h-28 text-white" />
                {/* Bentuk Geometris Kecil di belakang Ikon */}
                <GeometricShape1 className="w-[150px] h-[150px] -top-10 -left-10 bg-[#00AEEF]/10 -z-10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT 4 — Glass Card (Geometris Membingkai Card)
// ══════════════════════════════════════════════════════════════════════════════
function V4GlassCard({ title, titleAccent, subtitle, badge, meta }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#001840] via-[#003080] to-[#005ab5] pt-36 pb-12 md:pt-44 md:pb-16">
      {/* --- GEOMETRIC SHAPES (Framing Card) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bentuk Segitiga Besar di Kanan Atas (Border) */}
        <GeometricShape1 className="w-[500px] h-[400px] -top-10 -right-10 border-4 border-[#00AEEF]/15" />
        {/* Garis-garis Diagonal Miring */}
        <div className="absolute top-20 right-40 w-40 h-[1px] bg-[#00AEEF]/20 rotate-45" />
        <div className="absolute top-28 right-48 w-60 h-[1px] bg-[#00AEEF]/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9 backdrop-blur-md relative overflow-hidden"
          >
            {/* --- Dekorasi Geometris Internal di dalam Card --- */}
            <GeometricShape2 className="w-[200px] h-[150px] -bottom-5 -right-5 bg-[#00AEEF]/5 -z-10" />

            <div className="h-[2px] rounded-full mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00AEEF]/10" />
            <Breadcrumb dark />
            {badge && (
              <motion.div
                variants={item}
                className="text-[9px] font-bold tracking-[2.5px] uppercase text-[#00AEEF] opacity-75 mb-2.5"
              >
                {badge}
              </motion.div>
            )}
            <motion.h1
              variants={item}
              className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white leading-[1.04] tracking-[-1.5px] mb-4"
            >
              {title}{" "}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-[#00AEEF]">{titleAccent}</span>
                </>
              )}
            </motion.h1>
            {subtitle && (
              <motion.p
                variants={item}
                className="text-[13px] text-white/60 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
            {meta && meta.length > 0 && (
              <motion.div variants={item} className="flex flex-wrap gap-4 mt-5">
                {meta.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-[11px] text-white/45 font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] flex-shrink-0" />
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
