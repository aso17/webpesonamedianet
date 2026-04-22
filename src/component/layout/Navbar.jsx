import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../../constants/NavigationItem";
import { MenuIcon, CloseIcon } from "../common/Icons";
import { DesktopNavItem, MobileNavItem } from "./NavItems";
import logoPesonanet from "../../assets/logo.png";

const whatsappNumber = "6287825122645";
const message = encodeURIComponent(
  "Halo Admin Pesonanet, saya ingin ingin Berlangganan layanan internet."
);

const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest("#main-navbar")) setActiveMenu(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleNavMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${
            scrolled
              ? "bg-white shadow-lg py-2"
              : "bg-white/95 backdrop-blur-md py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="main-navbar" className="flex items-center h-16">
            {/* LOGO DESKTOP */}
            <a
              href="/"
              className="flex items-center shrink-0 mr-auto outline-none"
            >
              <img
                src={logoPesonanet} // Menggunakan variabel import
                alt="Logo Pesona Medianet"
                loading="lazy" // Lazy load aktif
                decoding="async"
                className={`transition-all duration-300 object-contain ${
                  scrolled ? "h-10" : "h-14"
                }`}
                style={{ mixBlendMode: "multiply" }}
              />
            </a>

            {/* NAV DESKTOP */}
            <nav
              className="hidden lg:flex items-center gap-1 mr-8"
              onMouseLeave={handleNavMouseLeave}
              onMouseEnter={handleNavMouseEnter}
            >
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  activeMenu={activeMenu}
                  setActiveMenu={(val) => {
                    if (closeTimer.current) clearTimeout(closeTimer.current);
                    setActiveMenu(val);
                  }}
                />
              ))}
            </nav>

            {/* ACTION AREA */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={waUrl}
                className="hidden lg:inline-flex items-center justify-center
                  px-6 py-2.5 rounded-full text-sm font-bold text-white
                  transition-all duration-300 hover:-translate-y-0.5
                  active:scale-95 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #0054A6 0%, #00AEEF 100%)",
                }}
              >
                Daftar
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {mobileOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[120]
          shadow-2xl transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-20 border-b border-slate-50">
            {/* LOGO MOBILE - Juga gunakan variabel import */}
            <img
              src={logoPesonanet}
              alt="Logo"
              className="h-8 object-contain"
              style={{ mixBlendMode: "multiply" }}
              loading="lazy"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-slate-900"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </nav>

          <div className="p-6 border-t border-slate-50 bg-slate-50/30">
            <a
              href="/pelanggan/daftar"
              className="block w-full text-center py-3.5 rounded-full
                text-white font-bold mb-6 shadow-md transition-transform active:scale-95"
              style={{ background: "#0054A6" }}
            >
              Daftar Sekarang
            </a>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Dikelola Oleh:
              </p>
              <p className="text-xs font-black text-slate-600">
                PT. PESONA MEDIANET NUSANTARA
              </p>
              <p className="text-[10px] text-slate-400 mt-2">
                © 2026 All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className={scrolled ? "h-20" : "h-24"} />
    </>
  );
}
