import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "../common/Icons";

export function DesktopNavItem({ item, activeMenu, setActiveMenu }) {
  const ref = useRef(null);
  const open = activeMenu === item.label;

  const handleOpen = () => setActiveMenu(item.label);
  const handleToggle = () => setActiveMenu(open ? null : item.label);

  if (!item.submenu) {
    return (
      <Link
        to={item.href}
        onMouseEnter={() => setActiveMenu(null)}
        className="relative group px-3.5 py-2.5 text-sm font-bold
          text-slate-700 hover:text-[#00AEEF] rounded-lg 
          hover:bg-[#7dd3f0]/10 transition-all whitespace-nowrap flex items-center"
      >
        {item.label}
        <span
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1
          rounded-full bg-[#00AEEF] scale-0 group-hover:scale-100
          transition-transform duration-200"
        />
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleOpen}>
      <button
        onClick={handleToggle}
        className={`relative flex items-center gap-1.5 px-3.5 py-2.5 text-sm
          font-bold rounded-lg transition-all whitespace-nowrap group
          ${
            open
              ? "text-[#00AEEF] bg-[#7dd3f0]/15"
              : "text-slate-700 hover:text-[#00AEEF] hover:bg-[#7dd3f0]/10"
          }`}
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-40 group-hover:opacity-90
            transition-all duration-200 ${
              open ? "rotate-180 opacity-90 text-[#00AEEF]" : ""
            }`}
        />
        <span
          className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1
            rounded-full bg-[#00AEEF] transition-transform duration-200
            ${open ? "scale-100" : "scale-0 group-hover:scale-100"}`}
        />
      </button>

      {/* DROPDOWN - Pakai warna yang seragam */}
      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64
          bg-white rounded-2xl border border-[#7dd3f0]/20 z-50 overflow-hidden
          shadow-[0_12px_40px_rgba(0,54,102,0.13)]
          transition-all duration-200 origin-top
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }`}
      >
        <div className="px-4 pt-4 pb-2 border-b border-slate-50 bg-slate-50/50">
          <span className="text-[10px] font-black tracking-[1.5px] uppercase text-[#00AEEF]/70">
            {item.label}
          </span>
        </div>

        <div className="p-1.5 bg-white">
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-slate-700 hover:text-[#00AEEF] hover:bg-[#7dd3f0]/10
                transition-all duration-150 group/link"
            >
              <div
                className="w-9 h-9 rounded-lg bg-slate-50 group-hover/link:bg-[#7dd3f0]/20
                flex items-center justify-center flex-shrink-0 transition-colors text-[#00AEEF]"
              >
                {sub.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold leading-tight">
                  {sub.label}
                </span>
                {sub.desc && (
                  <span className="text-[11px] text-slate-400 group-hover/link:text-[#00AEEF]/70 leading-tight mt-0.5">
                    {sub.desc}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => (item.submenu ? setOpen((v) => !v) : null)}
        className={`flex items-center justify-between w-full px-4 py-3.5
          text-[15px] font-bold rounded-xl transition-all
          ${
            open
              ? "text-[#00AEEF] bg-[#7dd3f0]/10"
              : "text-slate-700 hover:text-[#00AEEF] hover:bg-[#7dd3f0]/5"
          }`}
      >
        {item.submenu ? (
          <>
            {item.label}
            <ChevronDown
              className={`w-4 h-4 transition-all ${open ? "rotate-180" : ""}`}
            />
          </>
        ) : (
          <Link to={item.href} onClick={onClose} className="w-full text-left">
            {item.label}
          </Link>
        )}
      </button>

      {open && item.submenu && (
        <div className="ml-6 mt-1 mb-2 pl-3 border-l-2 border-[#7dd3f0]/20 space-y-0.5">
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-3 text-sm font-semibold
                text-slate-500 hover:text-[#00AEEF] hover:bg-[#7dd3f0]/10
                rounded-lg transition-all"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]/30" />
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
