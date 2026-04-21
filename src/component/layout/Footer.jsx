import { NAV_ITEMS } from "../../constants/NavigationItem";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      {/* Bagian Atas: Links & Info */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Kolom 1: Branding */}
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

        {/* Kolom 2: Layanan (Diambil dari constants) */}
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

        {/* Kolom 3: Perusahaan */}
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

        {/* Kolom 4: Kontak */}
        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-blue-500 pb-2 w-fit">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>
                KP. PEUSAR RT.005/001, Desa/Kelurahan Binong, Kec. Curug, Kab.
                Tangerang, Provinsi Banten
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>(021) 1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@pesonanet.id</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="border-t border-slate-800 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center">
          <p>© 2026 PT Pesona Medianet. All Rights Reserved.</p>
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
