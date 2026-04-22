import { NAV_ITEMS } from "../../constants/NavigationItem";
// 1. Import GIF WA dari assets
import waIconGif from "../../assets/wa-icon.gif";

export default function Footer() {
  const whatsappNumber = "6287825122645";
  const message = encodeURIComponent(
    "Halo Pesonanet, saya ingin bertanya tentang layanan internet."
  );
  const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <footer className="bg-slate-900 text-white mt-auto relative">
      {/* Tombol WA Melayang */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] group flex items-center gap-3"
      >
        <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Chat dengan Kami
        </span>

        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] p-0 shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden border-4 border-white">
          {/* 2. Gunakan variabel import, tambahkan lazy load & async decoding */}
          <img
            src={waIconGif}
            alt="WhatsApp Support"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="absolute -z-10 inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
      </a>

      {/* --- Bagian Atas: Links & Info --- */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Kolom Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg w-fit">
            <span className="font-bold text-xl text-[#0054A6]">
              PESONA<span className="text-[#00AEEF]">NET</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Make your future connected. Solusi internet cepat, stabil, dan
            terpercaya untuk masa depan digital Anda.
          </p>
        </div>

        {/* Kolom Layanan */}
        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-blue-500 pb-2 w-fit">
            Layanan Kami
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {NAV_ITEMS.find((item) => item.label === "Layanan")?.submenu.map(
              (sub) => (
                <li key={sub.label}>
                  <a
                    href={sub.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {sub.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Kolom Perusahaan */}
        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-blue-500 pb-2 w-fit">
            Perusahaan
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {NAV_ITEMS.find((item) => item.label === "Perusahaan")?.submenu.map(
              (sub) => (
                <li key={sub.label}>
                  <a
                    href={sub.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {sub.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Kolom Kontak */}
        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-blue-500 pb-2 w-fit">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#00AEEF]">📍</span>
              <span>
                KP. PEUSAR RT.005/001, Desa/Kelurahan Binong, Kec. Curug, Kab.
                Tangerang, Provinsi Banten
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#00AEEF]">📞</span>
              <span>(021) 397-183-19</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#00AEEF]">✉️</span>
              <span>admin@pesonamedia.net</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center">
          <p>© 2026 PT Pesona Medianet Nusantara. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
