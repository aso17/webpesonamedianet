import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, bgImage }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const defaultBg =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074";

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    // Background manual Biru Gelap
    <section className="relative w-full overflow-hidden pt-40 pb-20 md:pt-52 md:pb-32 bg-[#001f4d]">
      {/* BACKGROUND & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={bgImage || defaultBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay manual: Biru Gelap 70% + Gradient ke Kanan */}
        <div className="absolute inset-0 bg-[#001f4d]/70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001f4d,transparent)] opacity-80" />
      </div>

      {/* Light Glow Accent - Manual Biru Muda */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-start text-left">
          {/* BREADCRUMB */}
          <motion.nav
            variants={itemVariants}
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 mb-8 uppercase"
          >
            <Link
              to="/"
              className="hover:text-[#00AEEF] transition-colors duration-300"
            >
              Home
            </Link>

            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return (
                <React.Fragment key={name}>
                  <span className="text-white/20">/</span>
                  {isLast ? (
                    <span className="text-white font-black uppercase">
                      {name.replace("-", " ")}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="hover:text-[#00AEEF] transition-colors duration-300"
                    >
                      {name.replace("-", " ")}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </motion.nav>

          {/* TITLE */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] max-w-4xl drop-shadow-2xl"
          >
            {title}
          </motion.h1>

          {/* ACCENT LINE - Manual Biru Muda & Shadow */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-2 bg-[#00AEEF] mt-10 mb-8 rounded-full shadow-[0_0_20px_rgba(0,174,239,0.5)]"
          />

          {/* SUBTITLE */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-white/70 max-w-2xl leading-relaxed font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
